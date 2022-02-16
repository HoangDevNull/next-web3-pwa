import { Container } from '@mui/material';
import { MainLayout } from 'layout';
import type { PageComponent } from 'next';
import Banner from './components/Banner';

export const LandingPage: PageComponent = () => {
  return (
    <Container sx={{ pb: 12 }}>
      <Banner />
    </Container>
  );
};

LandingPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
