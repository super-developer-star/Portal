/*
  # Config Service
*/

import config from 'config/general.json';

export function getAuth0Credentials() {
  if (process.env.AUTH0_CLIENT_ID && process.env.AUTH0_DOMAIN) {
    return {
      clientId: process.env.AUTH0_CLIENT_ID,
      domain: process.env.AUTH0_DOMAIN,
    };
  } else if (config && config.auth0) {
    return {
      clientId: config.auth0.clientId,
      domain: config.auth0.domain,
    };
  }

  console.error('Cannot find clientId and domain for Auth0 authentication.');
  return null;
}
