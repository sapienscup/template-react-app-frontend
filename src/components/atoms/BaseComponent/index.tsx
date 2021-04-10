import React, { Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

export default function BaseComponent(props: any) {
  const { children } = props;

  return (
    <Fragment>
      <IconButton>
        <InfoIcon fontSize="small">
        </InfoIcon>
      </IconButton>
      {children}
    </Fragment>
  );
}
