import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeContext } from 'styled-components';
import { theme } from '../components/theme';
import { GlobalStyle } from '../components'

addDecorator(storyFn => (
  <>
    <GlobalStyle />
    <ThemeContext.Provider value={theme}>{storyFn()}</ThemeContext.Provider>
  </>
));
