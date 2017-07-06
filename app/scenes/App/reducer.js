/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import authReducer, { authInitialState } from './reducers/authReducer';

import {
  LOGIN_WITH_USERNAME_PASSWORD,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_UNAUTHORISED,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  auth: authInitialState,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_WITH_USERNAME_PASSWORD:
    case LOGIN_BEGIN:
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
    case LOGOUT:
    case LOGOUT_UNAUTHORISED:
      return state.set('auth', authReducer(state.get('auth'), action));

    default:
      return state;
  }
}

export default appReducer;
