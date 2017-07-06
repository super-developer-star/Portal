import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'scenes/App/actions/authActions';
import * as appSelectors from 'scenes/App/selectors';
import { Spinner, WindowShroud } from 'components/GeneralUI';
import { InlineLogoPNG } from 'components/AirstreamLogo';
import preventDefault from 'services/general/preventDefault';
import cx from 'classnames';
import styles from './auth-lock.styl';
import backgroundImage from './login-background.jpg';

// NOTE: BusyMessage is declared up here because of stupid babel bugs.
const BusyMessage = ({ children, spinner }) => (
  <WindowShroud backgroundImage={backgroundImage} centerContent>
    <div>
      {spinner && (
        <div className={styles.busyMessageInner}>
          <div className={styles.spinnerContainer}><Spinner dark /></div>
        </div>
      )}
      { children && <div className={styles.busyMessageText}>{children}</div> }
    </div>
  </WindowShroud>
);
BusyMessage.propTypes = {
  children: PropTypes.any,
  spinner: PropTypes.bool,
};
BusyMessage.defaultProps = {
  spinner: false,
};

class AuthLock extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showForm: 'login',
      formInput: {
        login: {},
        reset: {},
      },
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.setShowForm = this.setShowForm.bind(this);
  }

  setShowForm(formName) {
    this.setState({
      showForm: formName,
      formInput: { // Reset form input when changing form display.
        login: {},
        reset: {},
      },
    });
  }

  handleInputChange(formName, key, value) {
    const newState = Object.assign({}, this.state);
    newState.formInput[formName][key] = value;
    this.setState(newState);
  }

  handleLogin() {
    const formInput = this.state.formInput.login;
    this.props.login(formInput.email, formInput.password);
  }

  handleReset() {
    const { sendPasswordReset } = this.props;
    const formInput = this.state.formInput.reset;

    sendPasswordReset(formInput.email);
    this.setShowForm('login');
  }

  renderForm() {
    const { showForm } = this.state;
    let inputHandler = null;

    if (showForm === 'login') {
      inputHandler = this.handleInputChange.bind(this, 'login');
      return (<LoginForm
        onInput={inputHandler}
        onSubmit={this.handleLogin}
        onForgotPasswordClicked={() => this.setShowForm('reset')}
      />);
    } else if (showForm === 'reset') {
      inputHandler = this.handleInputChange.bind(this, 'reset');
      return <PasswordResetForm onInput={inputHandler} onSubmit={this.handleReset} onCancel={() => this.setShowForm('login')} />;
    }

    return null;
  }

  render() {
    const { isLoggedIn, isLoggingIn, isSendingPasswordReset, logout, error } = this.props;

    if (isLoggedIn) {
      return <BusyMessage>Logged In (<a onClick={preventDefault(logout)} className={styles.link} href="/">Logout</a>)</BusyMessage>;
    }

    if (isSendingPasswordReset) {
      return <BusyMessage spinner>Sending password reset email...</BusyMessage>;
    }

    if (isLoggingIn) {
      return <BusyMessage spinner>Logging in...</BusyMessage>;
    }

    return (
      <WindowShroud backgroundImage={backgroundImage}>
        <Panel>
          <LogoHeader />
          { error && <FlashMessage>{error}</FlashMessage>}
          { this.renderForm() }
          <CopyrightSection />
        </Panel>
      </WindowShroud>
    );
  }
}
AuthLock.propTypes = {
  isLoggedIn: PropTypes.bool,
  isLoggingIn: PropTypes.bool,
  isSendingPasswordReset: PropTypes.bool,
  error: PropTypes.string,

  login: PropTypes.func,
  logout: PropTypes.func,
  sendPasswordReset: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isLoggedIn: appSelectors.getIsLoggedIn(state),
  isLoggingIn: appSelectors.getIsLoggingIn(state),
  isSendingPasswordReset: appSelectors.getIsSendingPasswordReset(state),
  error: appSelectors.getAuthError(state),
});

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(authActions.loginWithUsernamePasword, dispatch),
  logout: bindActionCreators(authActions.logout, dispatch),
  sendPasswordReset: bindActionCreators(authActions.sendPasswordReset, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLock);

const Panel = ({ children }) => (<div className={styles.panel}>{children}</div>);
Panel.propTypes = {
  children: PropTypes.any, // TODO: Change to react elements.
};

const LogoHeader = () => (
  <div className={styles.logoHeaderSection}>
    <InlineLogoPNG className={styles.logo} />
    <div className={styles.title}>Access your dashboard</div>
  </div>
);

const LoginForm = ({ onSubmit, onInput, onForgotPasswordClicked }) => {
  const handleInputChange = (event) => onInput(event.target.name, event.target.value);

  return (
    <form onSubmit={preventDefault(onSubmit)}>
      <div className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" onChange={handleInputChange} />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" onChange={handleInputChange} />
        </div>
      </div>

      <div className={styles.formControls}>
        <div className={styles.forgotPasswordSection}>
          <a className={styles.link} href="/" onClick={preventDefault(onForgotPasswordClicked)}>Don&apos;t remember your password?</a>
        </div>

        <PillButton>Login</PillButton>
        <div className={styles.createAccountMessage}>Please contact <a href="mailto:sales@buddy.com">{'<email>'}@airstream.com</a> to create an account.</div>
      </div>
    </form>
  );
};
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  onInput: PropTypes.func,
  onForgotPasswordClicked: PropTypes.func,
};

const PasswordResetForm = ({ onSubmit, onInput, onCancel }) => {
  const handleInputChange = (event) => onInput(event.target.name, event.target.value);

  return (
    <form onSubmit={preventDefault(onSubmit)}>
      <div className={styles.formMessage}>
        Please enter your email address. We will send you an email to reset your password.
      </div>
      <div className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" onChange={handleInputChange} />
        </div>
      </div>

      <div className={styles.formControls}>
        <PillButton>Send Email</PillButton>
        <a href="/" className={cx(styles.link, styles.backLink)} onClick={preventDefault(onCancel)}>Back to Login</a>
      </div>
    </form>
  );
};
PasswordResetForm.propTypes = {
  onSubmit: PropTypes.func,
  onInput: PropTypes.func,
  onCancel: PropTypes.func,
};

const CopyrightSection = () => (
  <div className={styles.copyrightSection}>
    ©2017 Airstream, Inc.
    <br />
    A subsidiary of Thor Industries, Inc. All Rights Reserved.
  </div>
);

const PillButton = ({ children, onClick }) => (
  <button onClick={onClick} className={styles.pillButton}>{children}</button>
);
PillButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

const FlashMessage = ({ children }) => (
  <div className={styles.flashMessage}>{children}</div>
);
FlashMessage.propTypes = {
  children: PropTypes.string,
};
