export const crashReporter = (/* store: any */) => (next: any) => (action: any) => {
  try {
    return next(action);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Caught an exception!', err);
    /* Raven.captureException(err, {
            extra: {
                action,
                state: store.getState(),
            },
        });
        throw err; */
  }
  return undefined;
};
