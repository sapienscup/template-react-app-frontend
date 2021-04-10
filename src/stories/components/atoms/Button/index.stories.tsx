import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Button } from 'components/atoms/Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  color: "default"
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  color: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  color: "primary",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  color: "primary",
  label: "Button",
};

export const LargeText = Template.bind({});
LargeText.args = {
  size: 'small',
  color: "primary",
  label: "A large text inside the button",
};
