import React from 'react';
import PropTypes from 'prop-types';
import { Button as MaterialButton, Icon } from '@material-ui/core';

export const Button = ({ label = 'No label yet...', icon = "help", ...defaultProps }) => {

  // buttonClickEventStateHolder
  const setbuttonClickEventStateHolder = React.useState<HTMLButtonElement | null>(null)[1];

  const clickEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setbuttonClickEventStateHolder(event.currentTarget);
  };

  return <MaterialButton onClick={clickEventHandler} {...defaultProps} endIcon={<Icon>{icon}</Icon>}>{label}</MaterialButton>;
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  icon: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: 'palelightblue',
  size: 'medium',
  onClick: () => null,
  color: 'default',
  icon: "help",
  label: 'No label yet...'
};
