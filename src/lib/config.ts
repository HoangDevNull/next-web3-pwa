import { BSCTestnet, Config, Mumbai, Rinkeby } from '@usedapp/core';

export const config: Config = {
  networks: [BSCTestnet, Mumbai, Rinkeby],
};

export const CURRENCY = {
  [BSCTestnet.chainId]: 'BSC',
  [Mumbai.chainId]: 'MATIC',
  [Rinkeby.chainId]: 'ETH',
};

export const supportChainIds = [BSCTestnet.chainId, Mumbai.chainId, Rinkeby.chainId];
export const supportChains = {
  bsc: BSCTestnet,
  polygon: Mumbai,
  eth: Rinkeby,
};
