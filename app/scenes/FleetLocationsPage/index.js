import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FleetLocationsPage extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        Fleet Locations
        {children}
      </div>
    );
  }
}

export default FleetLocationsPage;
