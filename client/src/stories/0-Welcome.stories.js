import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

export function ToStorybook() {
  return <Welcome showApp={linkTo('Button')} />;
}

ToStorybook.story = {
  name: 'to Storybook',
};
