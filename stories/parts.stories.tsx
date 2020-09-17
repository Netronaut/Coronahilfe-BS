import React from 'react';
import { Logo, Badge, Navigation, Step, Process, SectionBreak } from '../components';
import { Padding } from '../.storybook/decorators';

export default {
  component: Logo,
  title: 'Design System',
};

export const LogoStory = (): React.ReactNode => <Logo />;

LogoStory.story = {
  name: 'Logo',
};

export const BadgeStory = (): React.ReactNode => <Badge />;

BadgeStory.story = {
  name: 'Badge',
};

export const NavigationStory = (): React.ReactNode => (
  <Padding>
    <Navigation />
  </Padding>
);

NavigationStory.story = {
  name: 'Navigation',
};

export const StepsStory = (): React.ReactNode => (
  <>
    <Step num={1}>Melden Sie sich bei uns unter 0531 1805 9703.</Step>
    <Step num={2}>Ein Einkaufshelfer wird Ihnen zugeteilt und meldet sich.</Step>
  </>
);

StepsStory.story = {
  name: 'Steps',
};

export const ProcessStory = (): React.ReactNode => (
  <Padding top="4rem">
    <Process />
  </Padding>
);

ProcessStory.story = {
  name: 'Process',
};

export const SectionBreakStory = (): React.ReactNode => <SectionBreak />;

SectionBreakStory.story = {
  name: 'SectionBreak',
};
