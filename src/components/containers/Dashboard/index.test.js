import React from 'react';
import { shallow } from 'enzyme';
import 'libs/SetupEnzymeHelper.js';
import { Dashboard as DashboardSubject } from './index';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

function DummyDashboardSubject() {
  return (
    <div>
      <DashboardSubject />
    </div>
  );
}

describe('Dashboard', () => {
  it('renders Dashboard', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<DummyDashboardSubject />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual([]);
  });
});
