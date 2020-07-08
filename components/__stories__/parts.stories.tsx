import React from 'react';
import { Logo } from '../Logo';
import { Badge } from '../Badge';

export default {
  component: Logo,
  title: 'Design System',
};

export const LogoStory = () => <Logo />;

LogoStory.story = {
  name: 'Logo',
};

export const BadgeStory = () => <Badge />;

BadgeStory.story = {
  name: 'Badge',
};
