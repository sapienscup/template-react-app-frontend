import React, { Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';

export default function BaseComponent(props: any) {
  const { children } = props;

  return (
    <Fragment>
      <IconButton>
        <Icon fontSize="small">
          info
        </Icon>
      </IconButton>
      {children}
    </Fragment>
  );
}
