/* eslint-disable no-constant-condition */
import { take } from 'redux-saga/effects';

import authWatcher from './sagas/authSagas';

import { LOGIN_SUCCESS } from './constants';

function* bootstrapSaga() {
  // The loop is required for when the user logs out and in again.
  while (true) {
    yield take(LOGIN_SUCCESS); // Wait for app to be ready. Fired even when restoring auth state.
    // Do initial stuff here.
  }
}


// These are currently loaded globally in the `rootSaga.js` and not async injected.
export default [

  // These need to be last. Order matters because if an action is fired before
  // a watcher/take is issued, it won't be caught.
  bootstrapSaga, // 1
  authWatcher, // 2
];
