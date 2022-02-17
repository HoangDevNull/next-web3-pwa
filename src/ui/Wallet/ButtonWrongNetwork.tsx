import React from 'react';
import { supportChains } from '@/lib/config';
import { requestSwitchNetwork } from '@/lib/switchNetwork';
import { Avatar, Box, Button, Popover, Typography } from '@mui/material';
import { useWallet } from 'hooks/useWallet';
import { StyledButtonGroup } from 'layout/MainLayout/styled';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';

const ButtonWrongNetwork = () => {
  const { connector } = useWallet();

  const changeNetwork = async (chainId: number) => {
    await requestSwitchNetwork(chainId, connector);
  };

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <Button sx={{ maxHeight: 40 }} variant="contained" color="error" {...bindTrigger(popupState)}>
            Wrong network
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            PaperProps={{
              variant: 'outlined',
              elevation: 0,
              sx: { mt: 1.5 },
            }}
          >
            <Box sx={{ minWidth: 170 }}>
              <Typography sx={{ px: 3, pt: 1, fontWeight: 'bold' }}>Select network</Typography>
              <StyledButtonGroup orientation="vertical" color="secondary" variant="text">
                <Button
                  onClick={() => changeNetwork(supportChains.eth.chainId)}
                  startIcon={<Avatar sx={{ width: 24, height: 24 }} src="/images/wallet/eth-logo.svg" />}
                >
                  Ethereum
                </Button>
                <Button
                  onClick={() => changeNetwork(supportChains.bsc.chainId)}
                  startIcon={<Avatar sx={{ width: 24, height: 24 }} src="/images/wallet/bsc-logo.svg" />}
                >
                  Binance
                </Button>
                <Button
                  onClick={() => changeNetwork(supportChains.polygon.chainId)}
                  startIcon={<Avatar sx={{ width: 24, height: 24 }} src="/images/wallet/polygon.png" />}
                >
                  Polygon
                </Button>
              </StyledButtonGroup>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default ButtonWrongNetwork;
