import { fromJS } from 'immutable';

import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_UNAUTHORISED,

  SEND_PASSWORD_RESET_REQUEST,
  SEND_PASSWORD_RESET_SUCCESS,
  SEND_PASSWORD_RESET_FAILURE,
} from '../constants';

export const authInitialState = fromJS({
  isLoggingIn: false, // Busy
  isSendingPasswordReset: false,
  isLoggedIn: false,
  userInfo: null,
  accessToken: null,
  idToken: null,
  errorMessage: null,
});


export default function authReducer(state, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return authInitialState
        .set('isLoggingIn', true);

    case LOGIN_SUCCESS:
      return state
        .set('isLoggedIn', true)
        .set('isLoggingIn', false)
        .set('accessToken', action.accessToken)
        .set('idToken', action.idToken)
        .set('userInfo', action.userInfo)
        .set('errorMessage', null);

    case LOGIN_FAILURE:
      return state
        .set('isLoggingIn', false)
        .set('errorMessage', action.errorMessage);

    case LOGOUT:
      return authInitialState;

    case LOGOUT_UNAUTHORISED:
      return authInitialState
      .set('errorMessage', 'Unauthorized or Expired');

    case SEND_PASSWORD_RESET_REQUEST:
      return state
        .set('sendingPasswordReset', true);

    case SEND_PASSWORD_RESET_SUCCESS:
      return state
        .set('sendingPasswordReset', false);

    case SEND_PASSWORD_RESET_FAILURE:
      return state
        .set('errorMessage', action.errorMessage);
    default:
      return state;
  }
}
