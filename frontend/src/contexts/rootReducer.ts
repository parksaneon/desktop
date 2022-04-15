import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';

import auth from './auth';

// root
const reducer = combineReducers({ auth });

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['auth'],
};

<<<<<<< HEAD
export type Reducer = ReturnType<typeof reducer>;
export type RootState = ReturnType<typeof reducer>;
=======
>>>>>>> f299495b386a34a4a9b1f920a47e0e7346098c3a
export default persistReducer(persistConfig, reducer);
export type RootState = ReturnType<typeof reducer>;
