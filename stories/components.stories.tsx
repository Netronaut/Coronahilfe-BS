import React from 'react';
import { Padding } from '../.storybook/decorators';
import { Badge } from '../components';

export default {
  title: 'components',
  decorators: [storyFn => <Padding>{storyFn()}</Padding>],
};

export const badge = () => <Badge />;
