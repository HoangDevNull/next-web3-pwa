import { getCookies, removeCookies, setCookies, USER_KEY } from '@/lib/cookies';
import { parseJson } from '@/lib/utils';
import { useQuery, UseQueryOptions } from 'react-query';
import { get2FACode } from '.';
import { getUser } from './request';
import { IUser, IMFACode } from './types';

export const useUser = (option?: UseQueryOptions<IUser, Error>) => {
  return useQuery<IUser, Error>('/user/me', getUser, {
    enabled: false,
    initialData: parseJson(getCookies(USER_KEY)) as any,
    onSuccess: (data) => setCookies(USER_KEY, JSON.stringify(data)),
    onError: () => {
      removeCookies(USER_KEY);
    },
    ...option,
  });
};

export const use2FACode = (option?: UseQueryOptions<IMFACode, Error>) => {
  return useQuery<IMFACode, Error>('/user/get-2fa', get2FACode, option);
};
