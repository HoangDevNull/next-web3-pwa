import { MainLayout } from 'layout';
import type { PageComponent } from 'next';

export const HomePage: PageComponent = () => {
  return <>Home page</>;
};

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
