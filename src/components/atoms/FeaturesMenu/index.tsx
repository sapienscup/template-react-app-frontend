import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }),
);

export default function FeaturesMenu() {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.root} style={{ height: '50vh', width: '50vw' }}>
        <Grid container spacing={5}>
          <Grid>
            <MenuList id="menu-list-grow">
              <MenuItem>
                <Link to="/main">Main</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/account">My account</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/logout">Logout</Link>
              </MenuItem>
            </MenuList>
          </Grid>

          <Grid>
            <MenuList id="menu-list-grow">
              <MenuItem>
                <Link to="/admin/dashboard/sales">Sales performance</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/admin/dashboard/orders">Orders development</Link>
              </MenuItem>
            </MenuList>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
}
