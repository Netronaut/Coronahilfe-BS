import React from 'react';
import { Logo } from '../Logo';

export default {
  component: Logo,
  title: 'Design System/Logo',
};

export const LogoStory = () => <Logo />;

LogoStory.story = {
  name: 'default',
};
