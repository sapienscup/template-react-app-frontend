import React, { Fragment } from 'react';
// import PropTypes, { func } from 'prop-types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SimpleContainer from 'components/atoms/SimpleContainer'
import TextField from '@material-ui/core/TextField';
import { Button } from 'components/atoms/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export interface SignInProps {
}

const SignIn = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <SimpleContainer>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            required
            id="signin-email-standard"
            label="Email"
            helperText="Your email goes here"
            variant="outlined"
          />
          <TextField
            required
            id="signin-password-standard"
            label="Password"
            helperText="Your password goes here"
            variant="outlined"
            type="password"
          />
          <Button label="Sign In" variant="outlined" color="primary" icon="send"></Button>
        </form>
      </SimpleContainer>
    </Fragment>
  );
}

SignIn.propTypes = {
};

SignIn.defaultProps = {
};

export default SignIn;
