import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './Typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'PROJECT ACCESS COMPONENTS/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}></Typography>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Some Text',
  component: 'h1',
  variant: 'body1',
  align: 'left',
  color: 'primary',
  gutterBottom: false,
};
