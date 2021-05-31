import React from 'react';
import { shallow } from 'enzyme';
import 'libs/SetupEnzymeHelper.js';
import { NotFound as NotFoundSubject } from './index';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

function DummyNotFoundSubject() {
  return (
    <div>
      <NotFoundSubject />
    </div>
  );
}

describe('NotFound', () => {
  it('renders NotFound', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<DummyNotFoundSubject />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual([]);
  });
});
