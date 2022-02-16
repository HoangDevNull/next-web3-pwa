import React, { FC } from 'react';
import { Wallet } from '@/ui/Wallet';
import { useEagerConnect } from '@/hooks';
import { Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { StyledAppbar, StyledLink } from './styled';
import { routes } from '@/types/routes';
import { useRouter } from 'next/router';
import { toggleSignInModal, toggleSignUpModal } from '@/store/ducks/auth/slice';
import { useAppDispatch } from 'hooks/useRedux';
import { useUser } from '@/api/auth';
import { Hide } from '@/ui/Hide';

const Navbar: FC = () => {
  const { data: user } = useUser();
  const router = useRouter();
  const triedToEagerConnect = useEagerConnect();
  const dispatch = useAppDispatch();

  const openLoginModal = () => {
    dispatch(toggleSignInModal());
  };
  const openSignUpModal = () => {
    dispatch(toggleSignUpModal());
  };

  return (
    <>
      <StyledAppbar position="static">
        <Toolbar>
          <Link href="/" passHref>
            <Box component="a" justifySelf="flex-start">
              <Typography variant="h3">LOGO</Typography>
            </Box>
          </Link>

          <Stack justifySelf="center" spacing={4} direction="row">
            <Link href={routes.home} passHref>
              <StyledLink active={router.pathname === routes.home}>HOME</StyledLink>
            </Link>
            <Link href={routes.about} passHref>
              <StyledLink active={router.pathname === routes.about}>ABOUT</StyledLink>
            </Link>
            <Link href={routes.support} passHref>
              <StyledLink active={router.pathname === routes.support}>SUPPORT</StyledLink>
            </Link>
          </Stack>

          <Stack spacing={2} direction="row" justifySelf="flex-end">
            <Wallet triedToEagerConnect={triedToEagerConnect} />
            <Hide if={!!user}>
              <Button
                color="primary"
                variant="outlined"
                sx={{ height: 40, whiteSpace: 'nowrap' }}
                onClick={openLoginModal}
              >
                Sign In
              </Button>
              <Button
                color="primary"
                variant="contained"
                sx={{ height: 40, whiteSpace: 'nowrap' }}
                onClick={openSignUpModal}
              >
                Register
              </Button>
            </Hide>
          </Stack>
        </Toolbar>
      </StyledAppbar>
    </>
  );
};

export default Navbar;
