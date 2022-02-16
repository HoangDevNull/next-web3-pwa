import { Contract } from '@ethersproject/contracts';
import { useEthers } from '@usedapp/core';
import { useMemo } from 'react';


// Temporary not using this
export function useContract<T extends Contract = Contract>(address: string, ABI: any): T | null {
  const { library, account, chainId } = useEthers();

  return useMemo(() => {
    if (!address || !ABI || !library || !chainId || !account) {
      return null;
    }

    try {
      return new Contract(address, ABI, library.getSigner(account));
    } catch (error) {
      console.error('Failed To Get Contract', error);

      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, ABI, library, account]) as T;
}
