import {
  LOGIN_WITH_USERNAME_PASSWORD,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_UNAUTHORISED,

  SEND_PASSWORD_RESET_REQUEST,
  SEND_PASSWORD_RESET_SUCCESS,
  SEND_PASSWORD_RESET_FAILURE,
} from '../constants';

export function loginWithUsernamePasword(username, password) {
  return {
    type: LOGIN_WITH_USERNAME_PASSWORD,
    username,
    password,
  };
}

// Used for updating UI
export function loginBegin() {
  return {
    type: LOGIN_BEGIN,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function logoutUnauthorised() {
  return {
    type: LOGOUT_UNAUTHORISED,
  };
}

export function loginSuccess(accessToken, idToken, userInfo) {
  return {
    type: LOGIN_SUCCESS,
    accessToken,
    idToken,
    userInfo,
  };
}

export function loginFailure(errorMessage) {
  return {
    type: LOGIN_FAILURE,
    errorMessage,
  };
}

export function sendPasswordReset(emailAddress) {
  return {
    type: SEND_PASSWORD_RESET_REQUEST,
    emailAddress,
  };
}

export function sendPasswordResetSuccess() {
  return {
    type: SEND_PASSWORD_RESET_SUCCESS,
  };
}

export function sendPasswordResetFailure(errorMessage) {
  return {
    type: SEND_PASSWORD_RESET_FAILURE,
    errorMessage,
  };
}
