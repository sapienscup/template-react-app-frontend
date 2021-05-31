import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';

export interface SimpleContainerProps {
}

export default function SimpleContainer(props: any) {
  const { children } = props;

  return (
    <Fragment>
      <Container style={{ marginTop: '50vh', marginBottom: '50vh' }}>
        {children}
      </Container>
    </Fragment>
  );
}

SimpleContainer.propTypes = {
};

SimpleContainer.defaultProps = {
};
