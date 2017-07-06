import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './general-ui.styl';

export function Spinner({ centered, dark }) {
  const classNames = cx({
    [styles.spinner]: true,
    [styles.centered]: centered,
    [styles.dark]: dark,
  });

  return (<div className={classNames}></div>);
}
Spinner.propTypes = {
  centered: PropTypes.bool,
  dark: PropTypes.bool,
};
Spinner.defaultProps = {
  centered: false,
  dark: false,
};

export function WindowShroud({ children, backgroundImage, centerContent }) {
  const styleOverrides = {
    backgroundImage: backgroundImage ? `url("${backgroundImage}")` : null,
  };

  const classNames = cx({
    [styles.shroud]: true,
    [styles.centerContent]: centerContent,
  });

  return (<div className={classNames} style={styleOverrides}>{ children }</div>);
}
WindowShroud.propTypes = {
  children: PropTypes.any,
  backgroundImage: PropTypes.string,
  centerContent: PropTypes.bool,
};
WindowShroud.defaultProps = {
  centerContent: false,
};

export function BusyScreen() {
  return (
    <WindowShroud>
      <Spinner />
    </WindowShroud>
  );
}
