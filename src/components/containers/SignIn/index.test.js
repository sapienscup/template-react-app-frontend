import React, { Component } from 'react';
import { shallow } from 'enzyme';
import 'libs/SetupEnzymeHelper.js';
import { SignIn as SignInSubject } from './index';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

class DummySignInComponent extends Component {
  render() {
    return <SignInSubject />;
  }
}

describe('SignIn', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<DummySignInComponent />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
  expect(result.props.children).toEqual([]);
});
