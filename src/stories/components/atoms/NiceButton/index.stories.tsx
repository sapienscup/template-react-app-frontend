import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { NiceButton, NiceButtonProps } from 'components/atoms/NiceButton';

export default {
  title: 'Components/Atoms/NiceButton',
  component: NiceButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<NiceButtonProps> = (args) => <NiceButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
