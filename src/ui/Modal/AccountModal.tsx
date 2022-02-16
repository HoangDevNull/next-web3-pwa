import { Box, Button, DialogContent, Paper, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks';
import React, { FC, useMemo } from 'react';
import { getAccountModal, toggleAccountModal, toggleWalletModal } from '@/store/ducks/wallet/slice';
import { Dialog, DialogTitle } from '@/ui/Dialog';
import { getChainById, shortenIfAddress, useEthers } from '@usedapp/core';
import Identicon from '../Wallet/Identicon';
import ContentCopyOutlined from '@mui/icons-material/ContentCopyOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircleOutlined';
import CheckIcon from '@mui/icons-material/Check';

import { walletconnect, walletlink } from '@/lib/connectors';
import { useCopy } from '@/hooks';

const AccountModal: FC = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(getAccountModal);
  const { account, connector, chainId } = useEthers();
  const [copied, copy] = useCopy();

  const handleClose = () => {
    dispatch(toggleAccountModal());
  };

  const openWalletModal = () => {
    dispatch(toggleWalletModal());
    handleClose();
  };

  const handleCopy = () => {
    copy(account as string);
  };

  const walletType = useMemo(() => {
    if (connector === walletconnect) return 'WalletConnect';
    if (connector === walletlink) return 'Coinbase Wallet';
    return 'Meta mask';
  }, [connector]);

  if (!account || !chainId) return null;
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClose}>
      <DialogTitle onClose={handleClose}>Account</DialogTitle>

      <DialogContent>
        <Paper sx={{ p: 1.5 }} variant="outlined">
          <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <Typography variant="caption">Connect with {walletType}</Typography>
            <Button sx={{ fontSize: 12 }} size="small" startIcon={<ChangeCircleIcon />} onClick={openWalletModal}>
              Change
            </Button>
          </Stack>

          <Stack spacing={1.5} sx={{ mt: 2 }} direction="row">
            <Identicon />
            &nbsp;
            <Typography variant="h3">{shortenIfAddress(account)}</Typography>
          </Stack>

          <Stack spacing={1.5} sx={{ mt: 2 }} direction="row" flexWrap="wrap">
            <Button
              sx={{ fontSize: 14 }}
              size="small"
              variant="text"
              color="info"
              startIcon={copied ? <CheckIcon /> : <ContentCopyOutlined />}
              onClick={handleCopy}
            >
              Copy address
            </Button>
            <Button
              sx={{ fontSize: 14 }}
              size="small"
              variant="text"
              color="info"
              startIcon={<OpenInNewIcon />}
              href={getChainById(chainId)?.getExplorerAddressLink(account) || ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Explorer
            </Button>
          </Stack>
        </Paper>
      </DialogContent>
    </Dialog>
  );
};

export default AccountModal;
