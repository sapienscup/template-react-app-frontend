import React from 'react';
import { Story } from '@storybook/react';

import { ExampleHeader, ExampleHeaderProps } from './Header';

export default {
  title: 'Examples/Molecules/Header',
  component: ExampleHeader,
};

const Template: Story<ExampleHeaderProps> = (args) => <ExampleHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
