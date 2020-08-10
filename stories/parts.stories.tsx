import React from 'react';
import { Logo, Badge, Navigation, Step } from '../components';
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

export const StepsStory = () => (
  <>
    <Step num={1}>Melden Sie sich bei uns unter 0531 1805 9703.</Step>
    <Step num={2}>
      Ein Einkaufshelfer wird Ihnen zugeteilt und meldet sich.
    </Step>
  </>
);

StepsStory.story = {
  name: 'Steps',
};
