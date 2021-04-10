import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export interface SimpleContainerProps {
}

export default function SimpleContainer(props: any) {
  const { children } = props;

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ backgroundColor: '#cfe8fc', marginTop: '15vh' }}>
        {children}
      </Container>
    </Fragment>
  );
}

SimpleContainer.propTypes = {
};

SimpleContainer.defaultProps = {
};
