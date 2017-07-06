import axios from 'axios';

export default class Auth0API {
  constructor(domain, clientId) {
    this.clientId = clientId;
    this.domain = `https://${domain}`;
    this.request = axios.create({
      baseURL: this.domain,
      timeout: 3000,
    });
  }

  getToken(username, password) {
    return this.request.post('/oauth/ro', {
      client_id: this.clientId,
      username,
      password,
      connection: 'Username-Password-Authentication',
      grant_type: 'password',
      response_type: 'id_token',
      scope: 'openid email app_metadata',
    })
    .catch((error) => {
      const response = error.response;
      const newError = new Error('Login Failed');

      if (response && response.data && response.data.error) {
        newError.type = response.data.error;
        newError.description = response.data.error;
        throw newError;
      }

      throw error;
    })
    .then((response) => response.data);
  }

  getUserInfo(accessToken) {
    return this.request('/userinfo', {
      params: {
        access_token: accessToken,
      },
    })
    .then((response) => response.data);
  }

  sendPasswordReset(emailAddress) {
    return this.request.post('/dbconnections/change_password', {
      client_id: this.clientId,
      email: emailAddress,
      connection: 'Username-Password-Authentication',
    })
    .catch((error) => {
      const response = error.response;
      const newError = new Error('Sending Email Failed');

      if (response.data && response.data.error) {
        newError.type = response.data.error;
        newError.description = response.data.error;
        throw newError;
      }

      throw error;
    })
    .then((response) => response.data);
  }
}
