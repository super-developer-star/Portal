import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OverviewPage extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }

  someMoo() {} // Stops eslint crying.

  render() {
    const { children } = this.props;

    return (
      <div>
        Realtime snapshot.
        {children}
      </div>
    );
  }
}

export default OverviewPage;
