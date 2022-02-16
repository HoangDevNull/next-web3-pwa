import { injected, walletconnect, walletlink } from '@/lib/connectors';

import { useEthers } from '@usedapp/core';

import { useMemo } from 'react';
import { supportChainIds } from '@/lib/config';

export const useWallet = () => {
  const { activate, activateBrowserWallet, connector, error, chainId, ...props } = useEthers();

  const connect = async (type: 'injected' | 'walletconnect' | 'walletlink') => {
    try {
      if (type === 'injected') {
        return activate(injected);
      }

      if (type === 'walletconnect') {
        return await activate(walletconnect);
      }

      if (type === 'walletlink') {
        return await activate(walletlink);
      }
    } catch (err) {
      throw err;
    }
  };

  const customError = useMemo(() => {
    if (chainId && !supportChainIds.includes(chainId as any)) {
      return {
        message: 'UnsupportedChainIdError',
      };
    }
    return error;
  }, [chainId, error]);

  return { ...props, error: customError, connector, chainId, connect };
};
