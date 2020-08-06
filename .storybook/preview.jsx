import React from 'react'
import { addDecorator } from '@storybook/react';
import { styles } from '../components/styles';

addDecorator(storyFn => (
  <>
    {storyFn()}
    <style jsx global>{styles}</style>
  </>
));
