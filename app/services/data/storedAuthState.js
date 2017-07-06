const ID_TOKEN = 'as_id_token';
const ACCESS_TOKEN = 'as_access_token';
const PROFILE = 'as_profile';

export function setStoredAuthState(accessToken, idToken, profile) {
  localStorage.setItem(ID_TOKEN, idToken);
  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(PROFILE, JSON.stringify(profile));
}

export function removeStoredAuthState() {
  localStorage.removeItem(ID_TOKEN);
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(PROFILE);
}

export function getStoredAuthState() {
  try {
    const idToken = localStorage.getItem(ID_TOKEN);
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const profile = JSON.parse(localStorage.getItem(PROFILE));

    // Checks incase some error happened sometime during previous auth and the
    // auth was set to some bogus values.

    if (idToken === null || typeof idToken === 'undefined' || idToken === 'undefined') {
      return null;
    }

    if (accessToken === null || typeof accessToken === 'undefined' || accessToken === 'undefined') {
      return null;
    }

    if (profile === null || typeof profile === 'undefined' || profile === 'undefined') {
      return null;
    }

    return { idToken, accessToken, profile };
  } catch (err) {
    removeStoredAuthState();

    return null;
  }
}
