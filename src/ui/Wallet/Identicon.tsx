// Identicon.tsx
import { useEffect, useRef } from 'react';
import { useWallet } from 'hooks/useWallet';
import Jazzicon from '@metamask/jazzicon';
import { Box } from '@mui/material';

export default function Identicon() {
  const ref = useRef<HTMLDivElement>(null);
  const { account } = useWallet();

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = '';
      ref.current.appendChild(Jazzicon(20, parseInt(account.slice(2, 10), 16)));
    }
  }, [account]);

  return <Box sx={{ pt: 0.8 }} ref={ref} />;
}
