import React, { Fragment } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function CenteredGrid() {
  const classes = useStyles();
  const indicatorColumnSpacing = 3;
  const chartColumnSpacing = 12;

  return (
    <Fragment>
      <Grid container spacing={5}>
        <Grid wrap="nowrap" item xs={indicatorColumnSpacing}>
          <Paper className={classes.paper}>
            <Typography>
              Indicator 1
            </Typography>
          </Paper>
        </Grid>
        <Grid wrap="nowrap" item xs={indicatorColumnSpacing}>
        <Paper className={classes.paper}>
            <Typography>
              Indicator 2
            </Typography>
          </Paper>
        </Grid>
        <Grid wrap="nowrap" item xs={indicatorColumnSpacing}>
        <Paper className={classes.paper}>
            <Typography>
              Indicator 3
            </Typography>
          </Paper>
        </Grid>
        <Grid wrap="nowrap" item xs={indicatorColumnSpacing}>
        <Paper className={classes.paper}>
            <Typography>
              Indicator 4
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={chartColumnSpacing}>
          <Paper className={classes.paper} style={{height: '50vh'}}>
            <Typography>
              Graph
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={chartColumnSpacing}>
          <Paper className={classes.paper} style={{height: '50vh'}}>
            <Typography>
              Graph
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={chartColumnSpacing}>
          <Paper className={classes.paper} style={{height: '50vh'}}>
            <Typography>
              Graph
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
