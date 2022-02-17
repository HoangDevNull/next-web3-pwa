import { walletconnect, walletlink } from '@/lib/connectors';

import { toast } from 'react-hot-toast';
import { useEthers } from '@usedapp/core';

const handleError = (error: Error) => {
  console.log({ error });
  if (error.name === 'NoEthereumProviderError') {
    toast.error(
      'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
    );
  } else if (error.name === 'UserRejectedRequestError') {
    toast.error('Please authorize this website to access your Ethereum account.');
  } else if ((error as any).code === -32002) {
    toast.error('Already processing ethereum request Accounts. Please accept the request.');
  } else if ((error as any).code === 4001) {
    toast.error('User denied account authorization.');
  } else if (error.message) {
    toast.error(error.message);
  } else {
    toast.error('An unknown error occurred. Check the console for more details.');
  }
};

export const useWallet = () => {
  const { activate, activateBrowserWallet, connector, ...props } = useEthers();

  const connect = async (type: 'injected' | 'walletconnect' | 'walletlink') => {
    try {
      if (type === 'injected') {
        return activateBrowserWallet((error) => handleError(error));
      }

      if (type === 'walletconnect') {
        localStorage.removeItem('walletconnect');
        return await activate(walletconnect, (error) => handleError(error));
      }

      if (type === 'walletlink') {
        return await activate(walletlink, (error) => handleError(error));
      }
    } catch (err) {
      console.log('Connect wallet err', err);
    }
  };

  const deactivate = (forceReload = false) => {
    localStorage.removeItem('walletconnect');
    props.deactivate();
    if (forceReload) window.location.reload();
  };

  return { ...props, deactivate, connector, connect };
};
