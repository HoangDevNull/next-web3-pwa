import { isAuthenticated } from '@/lib/isAuthenticated';
import { LandingPage } from 'modules/landing-page';
import { GetServerSidePropsContext } from 'next';

export default LandingPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  if (!isAuthenticated(ctx)) {
    return {
      redirect: {
        permanent: false,
        destination: '/?form=login',
      },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
  };
};
