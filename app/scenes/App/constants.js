/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

// Auth
export const LOGIN_WITH_USERNAME_PASSWORD = 'AUTH/LOGIN_WITH_USERNAME_PASSWORD';

export const LOGIN_BEGIN = 'AUTH/LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE';
export const LOGOUT = 'AUTH/LOGOUT';
export const LOGOUT_UNAUTHORISED = 'AUTH/LOGOUT_UNAUTHORISED';
export const SEND_PASSWORD_RESET_REQUEST = 'AUTH/SEND_PASSWORD_RESET_REQUEST';
export const SEND_PASSWORD_RESET_SUCCESS = 'AUTH/SEND_PASSWORD_RESET_SUCCESS';
export const SEND_PASSWORD_RESET_FAILURE = 'AUTH/SEND_PASSWORD_RESET_FAILURE';
