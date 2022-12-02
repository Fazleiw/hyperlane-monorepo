import debug from 'debug';
import { ethers } from 'ethers';

import { Mailbox, MultisigIsm, Ownable } from '@hyperlane-xyz/core';
import type { types } from '@hyperlane-xyz/utils';

import { chainMetadata } from '../../consts/chainMetadata';
import { HyperlaneCore } from '../../core/HyperlaneCore';
import { CoreContracts, coreFactories } from '../../core/contracts';
import { ChainNameToDomainId } from '../../domains';
import { ChainConnection } from '../../providers/ChainConnection';
import { MultiProvider } from '../../providers/MultiProvider';
import { BeaconProxyAddresses, ProxiedContract } from '../../proxy';
import { ChainMap, ChainName } from '../../types';
import { objMap, promiseObjAll } from '../../utils/objects';
import { HyperlaneDeployer } from '../HyperlaneDeployer';

import { CoreConfig } from './types';

export class HyperlaneCoreDeployer<
  Chain extends ChainName,
> extends HyperlaneDeployer<
  Chain,
  CoreConfig,
  CoreContracts,
  typeof coreFactories
> {
  startingBlockNumbers: ChainMap<Chain, number | undefined>;

  constructor(
    multiProvider: MultiProvider<Chain>,
    configMap: ChainMap<Chain, CoreConfig>,
    factoriesOverride = coreFactories,
  ) {
    super(multiProvider, configMap, factoriesOverride, {
      logger: debug('hyperlane:CoreDeployer'),
    });
    this.startingBlockNumbers = objMap(configMap, () => undefined);
  }

  async deployMailbox<LocalChain extends Chain>(
    chain: LocalChain,
    defaultIsmAddress: types.Address,
    ubcAddress: types.Address,
  ): Promise<ProxiedContract<Mailbox, BeaconProxyAddresses>> {
    const domain = chainMetadata[chain].id;

    const mailbox = await this.deployProxiedContract(
      chain,
      'mailbox',
      [domain],
      ubcAddress,
      [defaultIsmAddress],
    );
    return mailbox;
  }

  async configureMultisigIsm<LocalChain extends Chain>(
    chain: LocalChain,
    multisigIsm: MultisigIsm,
  ): Promise<MultisigIsm> {
    const configChains = Object.keys(this.configMap) as Chain[];
    const chainConnection = this.multiProvider.getChainConnection(chain);
    const remotes = this.multiProvider
      .intersect(configChains, false)
      .multiProvider.remoteChains(chain);
    await super.runIfOwner(chain, multisigIsm, async () => {
      // TODO: Remove extraneous validators
      for (const remote of remotes) {
        const multisigIsmConfig = this.configMap[remote].multisigIsm;
        const domain = ChainNameToDomainId[remote];
        await Promise.all(
          multisigIsmConfig.validators.map(async (validator) => {
            const isValidator = await multisigIsm.isEnrolled(domain, validator);
            if (!isValidator) {
              this.logger(
                `Enrolling ${validator} as ${remote} validator on ${chain}`,
              );
              await chainConnection.handleTx(
                multisigIsm.enrollValidator(
                  domain,
                  validator,
                  chainConnection.overrides,
                ),
              );
            }
          }),
        );
        const threshold = await multisigIsm.threshold(domain);
        if (!threshold.eq(multisigIsmConfig.threshold)) {
          this.logger(
            `Setting ${remote} threshold to ${multisigIsmConfig.threshold} on ${chain}`,
          );
          await chainConnection.handleTx(
            multisigIsm.setThreshold(
              domain,
              multisigIsmConfig.threshold,
              chainConnection.overrides,
            ),
          );
        }
      }
    });

    return multisigIsm;
  }

  async deployContracts<LocalChain extends Chain>(
    chain: LocalChain,
    config: CoreConfig,
  ): Promise<CoreContracts> {
    if (config.remove) {
      // skip deploying to chains configured to be removed
      return undefined as any;
    }

    const dc = this.multiProvider.getChainConnection(chain);
    const provider = dc.provider!;
    const startingBlockNumber = await provider.getBlockNumber();
    this.startingBlockNumbers[chain] = startingBlockNumber;

    const upgradeBeaconController = await this.deployContract(
      chain,
      'upgradeBeaconController',
      [],
    );

    const interchainGasPaymaster = await this.deployProxiedContract(
      chain,
      'interchainGasPaymaster',
      [],
      upgradeBeaconController.address,
      [],
    );

    const multisigIsm = await this.deployContract(chain, 'multisigIsm', []);
    await this.configureMultisigIsm(chain, multisigIsm);

    const mailbox = await this.deployMailbox(
      chain,
      multisigIsm.address,
      upgradeBeaconController.address,
    );

    return {
      upgradeBeaconController,
      interchainGasPaymaster,
      mailbox,
      multisigIsm,
    };
  }

  static async transferOwnership<CoreChains extends ChainName>(
    core: HyperlaneCore<CoreChains>,
    owners: ChainMap<CoreChains, types.Address>,
    multiProvider: MultiProvider<CoreChains>,
  ): Promise<ChainMap<CoreChains, ethers.ContractReceipt[]>> {
    return promiseObjAll(
      objMap(core.contractsMap, async (chain, coreContracts) =>
        HyperlaneCoreDeployer.transferOwnershipOfChain(
          coreContracts,
          owners[chain],
          multiProvider.getChainConnection(chain),
        ),
      ),
    );
  }

  static async transferOwnershipOfChain(
    coreContracts: CoreContracts,
    owner: types.Address,
    chainConnection: ChainConnection,
  ): Promise<ethers.ContractReceipt[]> {
    const ownables: Ownable[] = [
      coreContracts.mailbox.contract,
      coreContracts.multisigIsm,
      coreContracts.upgradeBeaconController,
    ];
    return Promise.all(
      ownables.map((ownable) =>
        chainConnection.handleTx(
          ownable.transferOwnership(owner, chainConnection.overrides),
        ),
      ),
    );
  }
}
