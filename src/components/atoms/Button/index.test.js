import React from 'react';
import { shallow } from 'enzyme';
import "libs/SetupEnzymeHelper.js"
import { Button as ButtonSubject } from './index';

describe('Button', () => {
  it('renders children when passed in', () => {
    const args = {
      label: "test1"
    }

    const wrapper = shallow(<ButtonSubject {...args}></ButtonSubject>);
    expect(wrapper.contains('test1')).toBe(true);
  });

  it('renders children when passed in', () => {
    const args = {
      label: "test1a"
    }

    const wrapper = shallow(<ButtonSubject {...args}></ButtonSubject>);
    expect(wrapper.contains('test2')).toBe(false);
  });
});
