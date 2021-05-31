import React, { Fragment } from 'react';
import SignIn from 'components/containers/SignIn';
import Bonfire from 'components/containers/Bonfire';
import NotFound from 'components/containers/NotFound';
import Dashboard from 'components/containers/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export interface SimpleRouteSwitcherProps {
}

const SimpleRouteSwitcher = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/main">
            <Bonfire />
          </Route>
          <Route path="/admin/dashboard/sales">
            <Dashboard />
          </Route>
          <Route path="/admin/dashboard/orders">
            <Dashboard />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

SimpleRouteSwitcher.propTypes = {};

SimpleRouteSwitcher.defaultProps = {};

export default SimpleRouteSwitcher;
