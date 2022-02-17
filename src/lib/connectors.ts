import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { BSC_RPC, ETH_RPC, INFURA_ID, POLYGON_RPC } from './constants';
import { supportChains } from './config';

export const injected = new InjectedConnector({});

export const walletconnect = new WalletConnectConnector({
  infuraId: INFURA_ID,
  rpc: {
    [supportChains.polygon.chainId]: POLYGON_RPC,
    [supportChains.bsc.chainId]: BSC_RPC,
    [supportChains.eth.chainId]: ETH_RPC,
  },
  qrcode: true,
});

export const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${INFURA_ID}`,
  appName: 'Lauchpad',
});
