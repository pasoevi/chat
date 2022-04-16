import {
  Action, combineReducers, configureStore, getDefaultMiddleware, ThunkAction,
} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { loggerMiddleware } from './middleware/loggerMiddleware';

import { systemReducer } from './system/reducers';
import { chatReducer } from './chat/reducers';
import { loadState, saveState } from '../localStorage/localStorage';

export const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
});

export type AppState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
AppState,
unknown,
Action<string>>;

const persistedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [loggerMiddleware, thunkMiddleware, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
