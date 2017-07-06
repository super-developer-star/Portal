import { call, put, takeLatest, take, select } from 'redux-saga/effects';
import Auth0API from 'services/authentication/auth0API';
import { LOCATION_CHANGE, replace } from 'react-router-redux';
import qs from 'qs';

import {
  getStoredAuthState,
  removeStoredAuthState,
  setStoredAuthState,
} from 'services/data/storedAuthState';
import { getAuth0Credentials } from 'services/config/configService';

import {
  LOGIN_WITH_USERNAME_PASSWORD,
  LOGIN_SUCCESS,
  LOGOUT,
  SEND_PASSWORD_RESET_REQUEST,
} from '../constants';

import {
  loginBegin,
  loginSuccess,
  loginFailure,
  sendPasswordResetSuccess,
  sendPasswordResetFailure,
} from '../actions/authActions';

import { getIsLoggedIn } from '../selectors';

const auth0Creds = getAuth0Credentials();
const auth0API = new Auth0API(auth0Creds.domain, auth0Creds.clientId);

export default function* authWatcher() {
  yield takeLatest(LOGIN_WITH_USERNAME_PASSWORD, loginWithUsernamePasswordSaga);
  yield takeLatest(LOGIN_SUCCESS, loginSuccessSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(SEND_PASSWORD_RESET_REQUEST, sendPasswordResetSaga);

  // NOTE: Requires bug fix in `reatc-router@4.0.7`. If your app hangs here you
  // may have an old copy in node_modules.
  const routeAction = yield take(LOCATION_CHANGE);

  // Check the url for auth data and perform login.
  yield call(handleAuthURLCallback, routeAction.payload);

  // Did we end up logging in via the hash?
  const isLoggedIn = yield select(getIsLoggedIn);

  // Restore saved auth state using login action to provide consistent behaviour
  // so other sagas can rely on the login action to bootstrap other actions or sagas.
  const authState = getStoredAuthState();
  if (authState && !isLoggedIn) {
    yield put(loginSuccess(authState.accessToken, authState.idToken, authState.profile));
  }
}

// This is used for passwordless login or any login that uses the callback/redirect url method.
function* handleAuthURLCallback(routeInfo) {
  const urlParams = qs.parse(routeInfo.hash.substring(1));

  if (urlParams.access_token && urlParams.id_token) {
    yield call(loginWithToken, urlParams.access_token, urlParams.id_token);
    yield put(replace({
      pathname: routeInfo.pathname,
      search: routeInfo.search,
    })); // Remove auth info from route.
  }
}

function* loginWithUsernamePasswordSaga({ username, password }) {
  yield put(loginBegin()); // Updates UI

  try {
    const tokenInfo = yield call(getTokenFromAPI, username, password);
    yield call(loginWithToken, tokenInfo.access_token, tokenInfo.id_token);
  } catch (error) {
    if (error.type && error.type === 'invalid_user_password') {
      yield put(loginFailure('The email or password was invalid.'));
      return;
    }

    yield put(loginFailure(error.toString()));
  }
}

function* loginSuccessSaga({ accessToken, idToken, userInfo }) {
  setStoredAuthState(accessToken, idToken, userInfo);
}

function* logoutSaga() {
  removeStoredAuthState();
}

function* sendPasswordResetSaga({ emailAddress }) {
  try {
    yield call([auth0API, auth0API.sendPasswordReset], emailAddress);
    yield put(sendPasswordResetSuccess());
  } catch (error) {
    yield put(sendPasswordResetFailure(error.toString()));
  }
}

function* loginWithToken(accessToken, idToken) {
  yield put(loginBegin()); // Updates UI

  try {
    const userInfo = yield call(getUserInfoFromAPI, accessToken);
    const validStatus = yield call(validateProfile, userInfo);

    if (validStatus.valid) {
      yield put(loginSuccess(accessToken, idToken, userInfo));
    } else {
      yield put(loginFailure(validStatus.reason));
    }
  } catch (error) {
    if (error.type && error.description) {
      yield put(loginFailure(error.description));
      return;
    }

    yield put(loginFailure(error.toString()));
  }
}

function* getTokenFromAPI(username, password) {
  const loginAPIResult = yield call([auth0API, auth0API.getToken], username, password);

  if (!loginAPIResult) {
    throw new Error('Auth0 API returned unexpected result.');
  }

  return loginAPIResult;
}

function* getUserInfoFromAPI(accessToken) {
  const userAPIResult = yield call([auth0API, auth0API.getUserInfo], accessToken);

  if (!userAPIResult) {
    throw new Error('Auth0 API returned unexpected result.');
  }

  return userAPIResult;
}

function validateProfile(profile) {
  const info = (reason) => ({
    valid: (!reason),
    reason,
  });

  // No airstream section, user can not use Airstream Portal.
  if (!profile.airstream) {
    return info('This is not an Airstream account.');
  }

  // Must have roles and at least one.
  if (profile.airstream.global
    && profile.airstream.global.roles
    && Array.isArray(profile.airstream.global.roles)
    && profile.airstream.global.roles.length) {
    return info();
  }

  return info();
}
