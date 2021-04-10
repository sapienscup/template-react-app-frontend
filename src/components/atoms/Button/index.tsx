import React from 'react';
import PropTypes from 'prop-types';
import { Button as MaterialButton } from '@material-ui/core';
import { IconButton as MaterialIconButton } from '@material-ui/core';

export const Button = ({ primary = false, size = 'medium', backgroundColor = 'coral', label = 'No label yet...', ...defaultProps }) => {

  const [buttonClickEventStateHolder, setbuttonClickEventStateHolder] = React.useState<HTMLButtonElement | null>(null);

  const clickEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setbuttonClickEventStateHolder(event.currentTarget);
  };

  if (defaultProps.variant === "fab") {
    return <MaterialIconButton onClick={clickEventHandler} {...defaultProps}>{label}</MaterialIconButton>
  }

  return <MaterialButton onClick={clickEventHandler} {...defaultProps}>{label}</MaterialButton>;
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  label: PropTypes.string,
};

Button.defaultProps = {
  primary: false,
  backgroundColor: 'palelightblue',
  size: 'medium',
  onClick: () => null,
  color: 'default',
  label: 'No label yet...'
};
