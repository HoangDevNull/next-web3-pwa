import React, { FC } from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { keyframes } from '@mui/system';
import { ImageCoin } from './styled';
import Link from 'next/link';
import { routes } from '@/types/routes';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';

const move = keyframes`
	0% {
    filter: drop-shadow(2px 36px 20px rgba(0, 0, 0, 0.4));
		transform: translatey(0px);
	}
	50% {
    filter: drop-shadow(12px 18px 16px rgba(0, 0, 0, 0.4));
		transform: translatey(-20px);
	}
	100% {
    filter: drop-shadow(2px 36px 20px rgba(0, 0, 0, 0.4));
		transform: translatey(0px);
	}
`;

const Banner: FC = () => {
  const { t } = useTypeSafeTranslation();

  return (
    <Container sx={{ position: 'relative', minHeight: '60vh', pt: 12 }} maxWidth="lg">
      <Box mb={6}>
        <Typography
          variant="h1"
          align="center"
          fontWeight="900"
          sx={{ fontSize: 62, textShadow: '0.5px 1px #fa3494', mb: 4 }}
        >
          safest launchpad. multi-chain
          <Box sx={{ textShadow: 'none' }} component="span" color="#FF007A">
            .
          </Box>
        </Typography>

        <Typography sx={{ mb: 2 }} align="center" fontSize="22px" fontWeight="bold">
          Launching hand-picked high-quality projects on the Blockchain.
        </Typography>

        <Typography align="center" fontSize="18px" fontWeight="bold">
          Stake Launchpad tokens to get early-access to promising projects.
        </Typography>
      </Box>
      <Stack
        flexWrap="wrap"
        spacing={4}
        alignItems="center"
        justifyContent="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Button
          sx={{ textTransform: 'uppercase' }}
          size="large"
          endIcon={<KeyboardArrowRightIcon />}
          variant="contained"
        >
          {t('common.buy')} LAUNCHPAD
        </Button>
        <Link href={routes.stake} passHref>
          <Button size="large" endIcon={<RocketLaunchIcon />} variant="outlined">
            STAKE LAUNCHPAD
          </Button>
        </Link>
      </Stack>

      <ImageCoin
        sx={{
          left: { sm: '-8%', lg: '-16%', xl: '-20%' },
          top: { sm: '-15%', lg: '0%' },
          animation: `${move} 3s infinite 0s ease-in-out`,
          width: { xs: 250, lg: 350 },
        }}
        src="/images/home/coin1.png"
        alt="coin1"
      />

      <ImageCoin
        sx={{
          left: '-5%',
          bottom: '-10%',
          animation: `${move} 4s infinite .5s ease-in-out`,
        }}
        src="/images/home/coin2.png"
        alt="coin2"
      />

      <ImageCoin
        sx={{
          right: '-10%',
          top: '-5%',
          animation: `${move} 5s infinite 0s ease-in-out`,
        }}
        src="/images/home/coin3.png"
        alt="coin3"
      />

      <ImageCoin
        sx={{
          right: { sm: 0, lg: '-5%' },
          bottom: { sm: -80 },
          animation: `${move} 3.4s infinite 0s ease-in-out`,
          width: { xs: 159, lg: 189 },
        }}
        src="/images/home/coin4.png"
        alt="coin4"
      />

      <ImageCoin
        sx={{
          right: { xs: 0, lg: '-10%' },
          bottom: 0,
          animation: `${move} 3s infinite 0s ease-in-out`,
          width: { xs: 200, lg: 241 },
        }}
        src="/images/home/coin5.png"
        alt="coin5"
      />
    </Container>
  );
};

export default Banner;
