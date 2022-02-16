import { request } from 'api/axios';
import { IUser, IAuthParams, ILoginResponse, IUpdateProfileParams, IMFACode } from './types';

export const checkActive2FARequest = async (params: IAuthParams): Promise<number> => {
  const { data } = await request({
    url: '/user/is-active-2fa',
    method: 'POST',
    data: params,
  });
  return data;
};

export const loginRequest = async (params: IAuthParams): Promise<ILoginResponse> => {
  const { data } = await request({
    url: '/user/login',
    method: 'POST',
    data: params,
  });

  return data;
};

export const registerRequest = async (params: IAuthParams) => {
  return await request({
    url: '/user/register',
    method: 'POST',
    data: params,
  });
};

export const resendActiveEmailRequest = async (params: { email: string }) => {
  return await request({
    url: '/user/resend-mail-active-user',
    method: 'POST',
    data: params,
  });
};

export const sendMailResetPasswordRequest = async (params: { email: string }) => {
  return await request({
    url: '/user/send-mail-reset-password',
    method: 'POST',
    data: params,
  });
};

export const resetPasswordRequest = async (params: { token: string; password: string }) => {
  return await request({
    url: '/user/reset-password',
    method: 'POST',
    data: params,
  });
};

export const logoutRequest = async () => {
  return await request({
    url: '/user/log_out',
    method: 'POST',
  });
};

export const getUser = async (): Promise<IUser> => {
  const { data } = await request({
    url: `/user/me`,
    method: 'GET',
  });
  return data;
};

export const changePasswordRequest = async (params: { oldPassword: string; newPassword: string }): Promise<IUser> => {
  const { data } = await request({
    url: `/user/update-password`,
    method: 'POST',
    data: params,
  });
  return data;
};

export const get2FACode = async (): Promise<IMFACode> => {
  const { data } = await request({
    url: `/user/get-2fa`,
    method: 'POST',
  });
  return data;
};

export const active2FARequest = async (params: { twofa: string }): Promise<any> => {
  const { data } = await request({
    url: `/user/active-2fa`,
    method: 'POST',
    data: params,
  });
  return data;
};

export const disable2FARequest = async (params: { twofa: string }): Promise<any> => {
  const { data } = await request({
    url: `/user/disable-2fa`,
    method: 'POST',
    data: params,
  });
  return data;
};

export const updateProfileRequest = async (params: IUpdateProfileParams): Promise<IUser> => {
  const { data } = await request({
    url: `/user/update-profile`,
    method: 'POST',
    data: params,
  });
  return data;
};
