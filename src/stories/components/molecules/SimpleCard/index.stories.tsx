import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { SimpleCard, SimpleCardProps } from 'components/atoms/SimpleCard';

export default {
  title: 'Components/Molecules/SimpleCard',
  component: SimpleCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<SimpleCardProps> = (args) => <SimpleCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
