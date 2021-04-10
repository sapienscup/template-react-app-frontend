import React, { Component, Fragment } from 'react';

// import './App.css';
// import logo from 'logo.svg';

import Navbar from 'components/atoms/Navbar'
import SimpleGrid from './components/atoms/SimpleGrid'
import SimpleContainer from './components/atoms/SimpleContainer'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <SimpleContainer>
          <SimpleGrid />
        </SimpleContainer>
      </Fragment>
    );
  }
}

export default App;
