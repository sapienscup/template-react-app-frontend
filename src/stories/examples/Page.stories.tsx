import React from 'react';
import { Story } from '@storybook/react';

import { ExamplePage, ExamplePageProps } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Examples/Molecules/Page',
  component: ExamplePage,
};

const Template: Story<ExamplePageProps> = (args) => <ExamplePage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
