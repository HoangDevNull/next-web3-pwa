import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface IAuthenticateStore {
  openSignIn: boolean;
  openSignUp: boolean;
  openForgotPassword: boolean;
}

const initialState: IAuthenticateStore = {
  openSignIn: false,
  openSignUp: false,
  openForgotPassword: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleSignInModal: (state) => {
      return {
        ...state,
        openSignIn: !state.openSignIn,
      };
    },
    toggleSignUpModal: (state) => {
      return {
        ...state,
        openSignUp: !state.openSignUp,
      };
    },
    toggleForgotPasswordModal: (state) => {
      return {
        ...state,
        openForgotPassword: !state.openForgotPassword,
      };
    },
  },
});

export const { toggleSignInModal, toggleSignUpModal, toggleForgotPasswordModal } = authSlice.actions;

export const getOpenSignInModal = (state: RootState) => state.auth.openSignIn;
export const getOpenSignUpModal = (state: RootState) => state.auth.openSignUp;
export const getOpenForgotPasswordModal = (state: RootState) => state.auth.openForgotPassword;

export default authSlice.reducer;
