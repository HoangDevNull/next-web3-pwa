import { BSC_RPC, ETH_RPC, POLYGON_RPC } from './constants';
import { injected, walletconnect, walletlink } from './connectors';
import toast from 'react-hot-toast';
import { AbstractConnector } from '@web3-react/abstract-connector';

const BSC_TESTNET = {
  chainId: '0x61',
  chainName: 'Binance Smart Chain Testnet',
  nativeCurrency: {
    name: 'Binance Coin',
    symbol: 'tBNB',
    decimals: 18,
  },
  rpcUrls: [BSC_RPC],
};

const BSC_MAINNET = {
  chainId: '0x38',
  chainName: 'Binance Smart Chain Mainnet',
  nativeCurrency: {
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: [BSC_RPC],
};

const ETH_TESTNET = {
  chainId: '0x4',
  chainName: 'Rinkeby',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: [ETH_RPC],
};

const ETH_MAINNET = {
  chainId: '0x1',
  chainName: 'Ethereum',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: [ETH_RPC],
};

const POLYGON_TESTNET = {
  chainId: '0x13881', // Hexadecimal version of 80001, prefixed with 0x
  chainName: 'POLYGON Mumbai',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: [POLYGON_RPC],
};

const POLYGON_MAINNET = {
  chainId: '0x89', // Hexadecimal version of 80001, prefixed with 0x
  chainName: 'POLYGON Mumbai',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: [POLYGON_RPC],
};

const NETWORKS = {
  '0x61': BSC_TESTNET,
  '0x38': BSC_MAINNET,
  '0x1': ETH_MAINNET,
  '0x4': ETH_TESTNET,
  '0x13881': POLYGON_TESTNET,
  '0x89': POLYGON_MAINNET,
};

type IAllowedNetwork = '0x38' | '0x61' | '0x1' | '0x4' | '0x89' | '0x13881';

export async function requestSwitchNetwork(chainId: number, connector?: AbstractConnector) {
  const chainIdHex = `0x${chainId.toString(16)}` as IAllowedNetwork;
  // if not using meta mask => Reject the connection
  if (connector == walletconnect || connector == walletlink) {
    toast.error(`Wrong Network - Please connect to ${NETWORKS[chainIdHex].chainName} to claim!`);
    return false;
  }

  const provider = (window as any)?.ethereum;

  if (provider) {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainIdHex }],
      });
      toast.success('Network Changed!');
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [NETWORKS[chainIdHex]],
          });
        } catch (addError) {
          console.log({ addError });
        }
      }
    }
  }
}
