import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Navbar from 'components/atoms/Navbar'

export interface BonfireProps {
}

const Bonfire = () => {
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
}

Bonfire.propTypes = {
};

Bonfire.defaultProps = {
};

export default Bonfire;
