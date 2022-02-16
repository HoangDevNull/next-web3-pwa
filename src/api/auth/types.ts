export interface IAuthParams {
  email: string;
  password: string;
  twofa?: string;
}

export interface ILoginResponse {
  email: string;
  token: string;
}
export interface IUser {
  avatarUrl?: string;
  city?: string;
  country?: string;
  createdAt: string;
  data?: string;
  dateOfBirth?: string;
  email: string;
  firstName?: string;
  id: number;
  isActive2fa: number;
  statusKyc?: 'none' | 'pending' | 'approved';
  lastName?: string;
  nationality?: string;
  phone?: string;
  state?: string;
  status: string;
  street1?: string;
  street2?: string;
  updatedAt: '1644161456670';
  username: string;
  wallet?: string;
  zipCode?: string;
}

export interface IMFACode {
  twoFactorAuthenticationSecret: string;
}

export interface IUpdateProfileParams {
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  country: string;
  zipCode: string;
  state: string;
  city: string;
  street1: string;
  street2: string;
}
