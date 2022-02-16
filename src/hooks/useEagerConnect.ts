import { useEffect, useState } from 'react';
import { injected } from '@/lib/connectors';
import { useWallet } from './useWallet';

export function useEagerConnect() {
  const { connect, active } = useWallet();

  const [tried, setTried] = useState(false);

  useEffect(() => {
    injected.isAuthorized().then(async (isAuthorized) => {
      if (isAuthorized) {
        await connect('injected');
        setTried(true);
      } else {
        setTried(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}
