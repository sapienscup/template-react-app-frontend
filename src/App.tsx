import React, { Fragment } from 'react';
import SimpleRouteSwitcher from './components/containers/SimpleRouteSwitcher';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';

function App() {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersLightMode ? 'light' : 'dark',
        },
      }),
    [prefersLightMode],
  );

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <SimpleRouteSwitcher />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
