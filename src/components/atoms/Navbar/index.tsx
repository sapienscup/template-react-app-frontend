import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import SimplePopover from 'components/atoms/SimplePopover'
import FeaturesMenu from 'components/atoms/FeaturesMenu'

const useStyles = makeStyles((theme) => ({
  menuButtonPosition: {
    marginRight: theme.spacing(12)
  },
  toolbarAtCenter: {
    justifyContent: "center"
  },
  navBarColor: {
    backgroundColor: "#664290"
  }
}));

export default function NavBar() {
  const classes = useStyles();
  
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbarAtCenter}>
        <SimplePopover items={<FeaturesMenu/>}>
        </SimplePopover>
      </Toolbar>
    </AppBar>
  );
}
