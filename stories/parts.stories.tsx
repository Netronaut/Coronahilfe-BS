import React from 'react';
import { Logo, Badge, Navigation } from '../components';
import { Padding } from '../.storybook/decorators';

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

export const NavigationStory = () => (
  <Padding>
    <Navigation />
  </Padding>
);

NavigationStory.story = {
  name: 'Navigation',
};
