import React from 'react';
import PropTypes from 'prop-types';
import styles from './page-layout.styl';

const PageLayout = ({ children, title }) => (
  <div className={styles.page}>
    <h1 className={styles.heading}>{title}</h1>
    {children}
  </div>
);
PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
};
export default PageLayout;
