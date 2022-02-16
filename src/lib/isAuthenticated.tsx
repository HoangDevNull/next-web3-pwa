import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
import { TOKEN_KEY } from './cookies';

export function isAuthenticated(ctx: GetServerSidePropsContext) {
  const cookies = parseCookies(ctx);
  const token = cookies[TOKEN_KEY];
  if (!token) {
    return false;
  }
  return true;
}
