import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import BlurLinearIcon from '@material-ui/icons/BlurLinear';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
  }),
);

export default function SimplePopover(props: any) {
  const { ...defaultProps } = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const accessor = (isOpen: boolean) => {
    const icon = isOpen ? <BlurLinearIcon /> : <BlurCircularIcon />;
    return <IconButton onClick={handleClick} className={classes.menuButton} color="inherit" aria-label="top-navbar-main-menu">{icon}</IconButton>;
  }

  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      {accessor(open)}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        {defaultProps.items}
      </Popover>
    </div>
  );
}
