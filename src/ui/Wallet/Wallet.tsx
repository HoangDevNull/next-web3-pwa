import { FC } from 'react';
import { toggleAccountModal, toggleWalletModal } from '@/store/ducks/wallet/slice';
import { Button, Paper, Typography } from '@mui/material';
import { useAppDispatch } from 'hooks/useRedux';
import Identicon from './Identicon';
import { shortenAddress, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { CURRENCY } from '@/lib/config';
import { useWallet } from 'hooks/useWallet';
import ButtonWrongNetwork from './ButtonWrongNetwork';

type Props = {
  triedToEagerConnect: boolean;
};

const Wallet: FC<Props> = ({ triedToEagerConnect }) => {
  const dispatch = useAppDispatch();
  const { chainId, account, error } = useWallet();
  const etherBalance = useEtherBalance(account);

  const openWalletModal = () => {
    dispatch(toggleWalletModal());
  };

  const openAccountModal = () => {
    dispatch(toggleAccountModal());
  };

  if (!triedToEagerConnect) {
    return null;
  }

  if (String(error?.message) === 'UnsupportedChainIdError') {
    return <ButtonWrongNetwork />;
  }

  if (typeof account !== 'string' || !chainId) {
    return (
      <Button variant="outlined" sx={{ maxHeight: 40 }} onClick={openWalletModal}>
        Connect wallet
      </Button>
    );
  }

  return (
    <Button onClick={openAccountModal} sx={{ maxHeight: 40 }} variant="outlined" endIcon={<Identicon />}>
      <Typography sx={{ fontSize: 12, mr: 1 }} variant="subtitle1">
        {Number(formatEther(etherBalance || 0)).toFixed(2)}&nbsp;
        {CURRENCY[chainId] || ''}
      </Typography>

      <Paper
        sx={{
          fontSize: 12,
          px: 1,
          bgcolor: 'primary.main',
          color: '#fff',
          borderRadius: 99,
        }}
      >
        {shortenAddress(account)}
      </Paper>
    </Button>
  );
};

export default Wallet;
