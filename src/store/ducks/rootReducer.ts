import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth/slice';
import wallet from './wallet/slice';
import system from './system/slice';

const createRootReducer = () => {
  return combineReducers({
    auth,
    wallet,
    system,
  });
};

export default createRootReducer;
