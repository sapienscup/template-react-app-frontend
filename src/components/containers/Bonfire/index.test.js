// import React from 'react';
// import { shallow } from 'enzyme';
// import 'libs/SetupEnzymeHelper.js';
// import { Bonfire as BonfireSubject } from './index';
// import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

// function DummyBonfireSubject() {
//   return (
//     <div>
//       <BonfireSubject />
//     </div>
//   );
// }

// describe('Bonfire', () => {
//   it('renders Bonfire', () => {
//     const renderer = new ShallowRenderer();
//     renderer.render(<DummyBonfireSubject />);
//     const result = renderer.getRenderOutput();
//     expect(result.type).toBe('div');
//     expect(result.props.children).toEqual([]);
//   });
// });

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Bonfire as BonfireSubject } from './index';

// NOTE: you do NOT have to do this in every test.
// Learn more about Jest's __mocks__ directory:
// https://jestjs.io/docs/en/manual-mocks
jest.mock('react-transition-group', () => {
  return {
    CSSTransition: jest.fn(({ children, in: show }) =>
      show ? children : null
    ),
  };
});
test('you can mock things with jest.mock', () => {
  render(<BonfireSubject>hello world</BonfireSubject>);
  const toggleButton = screen.getByText(/hello world/i);
  const context = expect.any(Object);
  const children = expect.any(Object);
  expect(screen.getByText(/hello world/i)).not.toBeNull();
  expect(screen.queryByText(/hello world/i)).toBeNull();
});
