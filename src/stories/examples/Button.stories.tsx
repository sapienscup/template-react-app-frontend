import React from 'react';
import { Story } from '@storybook/react';

import { ExampleButton, ExampleButtonProps } from './Button';

export default {
  title: 'Examples/Atoms/Button',
  component: ExampleButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<ExampleButtonProps> = (args) => <ExampleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Example Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Example Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Example Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Example Button',
};
