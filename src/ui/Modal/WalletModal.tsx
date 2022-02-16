import React, { FC } from 'react';
import { DialogContent, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getWalletModal, toggleWalletModal } from '@/store/ducks/wallet/slice';
import { ConnectButton } from './styled';
import { Dialog, DialogTitle } from '@/ui/Dialog';
import { useWallet } from '@/hooks';
import toast from 'react-hot-toast';

const WalletModal: FC = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(getWalletModal);
  const { connect } = useWallet();

  const handleClose = () => {
    dispatch(toggleWalletModal());
  };

  const handleConnect = async (key: 'injected' | 'walletconnect' | 'walletlink') => {
    try {
      await connect(key);
      handleClose();
    } catch (error: any) {
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
        console.error(error.toString());
        toast.error('An unknown error occurred. Check the console for more details.');
      }
    }
  };

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClose}>
      <DialogTitle onClose={handleClose}>Connect a wallet</DialogTitle>

      <DialogContent>
        <Stack direction="column" spacing={1}>
          <ConnectButton onClick={() => handleConnect('injected')}>
            MetaMask <img src="/images/wallet/metamask.png" alt="metamask" />
          </ConnectButton>
          <ConnectButton onClick={() => handleConnect('walletconnect')}>
            Wallet connect <img src="/images/wallet/walletConnect.svg" alt="walletconnect" />
          </ConnectButton>
          <ConnectButton onClick={() => handleConnect('walletlink')}>
            Coinbase Wallet <img src="/images/wallet/coinbaseWalletIcon.svg" alt="Coinbase" />
          </ConnectButton>
          <ConnectButton onClick={() => handleConnect('injected')}>
            Trust Wallet <img src="/images/wallet/trustwallet.svg" alt="trustwallet" />
          </ConnectButton>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;
