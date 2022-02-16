import React, { FC } from 'react';
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <Paper component="footer" sx={{ p: 6 }}>
      <Container>
        <Grid container>
          <Grid lg={3} item>
            <Link href="/" passHref>
              <Box component="a" justifySelf="flex-start">
                <Typography variant="h3">LOGO</Typography>
              </Box>
            </Link>
          </Grid>

          <Grid lg={3} item>
            <Typography sx={{ mb: 3 }} variant="h4">
              COMPANY
            </Typography>
            <Stack spacing={2}>
              <Link href="/" passHref>
                <Typography sx={{ textDecoration: 'none' }} color="textPrimary" component="a">
                  Home
                </Typography>
              </Link>
              <Link href="/" passHref>
                <Typography sx={{ textDecoration: 'none' }} color="textPrimary" component="a">
                  Learn
                </Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid lg={3} item>
            <Typography sx={{ mb: 3 }} variant="h4">
              RESOURCES
            </Typography>
            <Stack spacing={2}>
              <Link href="/" passHref>
                <Typography sx={{ textDecoration: 'none' }} color="textPrimary" component="a">
                  Brand Assets
                </Typography>
              </Link>
              <Link href="/" passHref>
                <Typography sx={{ textDecoration: 'none' }} color="textPrimary" component="a">
                  Social Mining Deck
                </Typography>
              </Link>
            </Stack>
          </Grid>

          <Grid lg={3} item>
            <Typography sx={{ mb: 3 }} variant="h4">
              USEFUL LINKS
            </Typography>
            <Stack spacing={2}>
              <Link href="/" passHref>
                <Typography sx={{ textDecoration: 'none' }} color="textPrimary" component="a">
                  Blog
                </Typography>
              </Link>
              <Link href="/" passHref>
                <Typography sx={{ textDecoration: 'none' }} color="textPrimary" component="a">
                  Terms and Conditions
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
