import React from 'react';
import { shallow } from 'enzyme';
import "libs/SetupEnzymeHelper.js"
import App from './App';
import SimpleRouteSwitcher from './components/containers/SimpleRouteSwitcher';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<SimpleRouteSwitcher />)).toEqual(true);
});
