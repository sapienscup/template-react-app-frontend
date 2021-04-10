import React from 'react';
import { shallow } from 'enzyme';
import "libs/SetupEnzymeHelper.js"
import Navbar from 'components/atoms/Navbar';
import App from './App';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Navbar />)).toEqual(true);
});
