import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface IWalletStore {
  colorMode: 'light' | 'dark';
}

const initialState: IWalletStore = {
  colorMode: 'light',
};

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    ToggleColorMode: (state) => {
      return {
        ...state,
        colorMode: state.colorMode === 'light' ? 'dark' : 'light',
      };
    },
  },
});

export const { ToggleColorMode } = systemSlice.actions;

export const getColorMode = (state: RootState) => state.system.colorMode;

export default systemSlice.reducer;
