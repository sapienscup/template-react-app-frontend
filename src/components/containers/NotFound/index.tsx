import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import SimpleContainer from 'components/atoms/SimpleContainer'
import Navbar from 'components/atoms/Navbar'

export interface NotFoundProps {
}

const NotFound = () => {
  return (
    <Fragment>
      <Navbar />
      <SimpleContainer>
        Page not found
      </SimpleContainer>
    </Fragment>
  );
}

NotFound.propTypes = {
};

NotFound.defaultProps = {
};

export default NotFound;
