import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from 'lib/constants';
import { getCookies, removeCookies, TOKEN_KEY, USER_KEY } from '@/lib/cookies';
import { capitalizeFirstLetter } from 'lib/utils';
import toast from 'react-hot-toast';

export const request = axios.create({
  baseURL: API_URL,
});

const handleError = (err: AxiosError) => {
  const data = err?.response?.data;

  // Logout
  if (data?.meta?.code === 403) {
    removeCookies(TOKEN_KEY);
    removeCookies(USER_KEY);
  }

  const message = data?.meta?.message;
  if (!!message && err.config.method?.toUpperCase() !== 'GET') {
    toast.error(capitalizeFirstLetter(typeof message === 'string' ? message : message[0]));
  }
  return Promise.reject(data);
};

const handleSuccess = (res: AxiosResponse) => {
  return res.data;
};

request.interceptors.response.use(handleSuccess, handleError);

request.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = getCookies(TOKEN_KEY);

    if (token) {
      config = {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);
