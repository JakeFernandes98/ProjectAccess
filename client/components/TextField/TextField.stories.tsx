// TextField.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextField from './TextField';

export default {
  title: 'PROJECT ACCESS COMPONENTS/TextField',
  component: TextField,
};
const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'TextField',
  variant: 'outlined',
  disabled: false,
  error: false,
  fullWidth: false,
  type: 'text',
  required: false,
  helperText: '',
};

export const Email = Template.bind({});

Email.args = {
  ...Primary.args,
  label: 'Email',
  variant: 'standard',
  type: 'email',
  required: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Primary.args,
  label: 'Error',
  variant: 'standard',
  error: true,
  type: 'password',
  helperText: 'Incorrect entry.',
};

export const Datetime = Template.bind({});
Datetime.args = {
  ...Primary.args,
  label: '',
  type: 'datetime-local',
};
