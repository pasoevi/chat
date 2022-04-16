import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

export const loggerMiddleware: temporaryAny = (
  api: MiddlewareAPI<temporaryAny>,
) => (next: Dispatch<temporaryAny>) => <A extends Action>(action: A) => {
  // eslint-disable-next-line no-console
  console.log('dispatching', action);
  // eslint-disable-next-line no-console
  console.log('next state', api.getState());
  return next(action);
};
