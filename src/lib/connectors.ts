import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { INFURA_ID } from './constants';

export const injected = new InjectedConnector({
  // supportedChainIds: [NETWORK_CHAIN_IDS.polygon, NETWORK_CHAIN_IDS.mainnet, NETWORK_CHAIN_IDS.bsc],
});

export const walletconnect = new WalletConnectConnector({
  infuraId: INFURA_ID,
  // supportedChainIds: [NETWORK_CHAIN_IDS.polygon, NETWORK_CHAIN_IDS.mainnet, NETWORK_CHAIN_IDS.bsc],
  rpc: { 1: `https://mainnet.infura.io/v3/${INFURA_ID}` },
  qrcode: true,
});

export const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${INFURA_ID}`,
  appName: 'Lauchpad',
  // supportedChainIds: [NETWORK_CHAIN_IDS.polygon, NETWORK_CHAIN_IDS.mainnet, NETWORK_CHAIN_IDS.bsc],
});
