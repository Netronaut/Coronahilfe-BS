import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/layout';

type AppProps = {
  Component: React.ComponentType;
  pageProps: object;
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
