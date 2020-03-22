import { useState } from 'react';
import { TinaCMS, TinaProvider } from 'tinacms';

type TinaAppProps = {
  Component: React.ReactNode;
  pageProps: object;
};

const TinaApp: React.FC<TinaAppProps> = ({ Component, pageProps }) => {
  const [cms] = useState(new TinaCMS());
  return (
    <TinaProvider cms={cms}>
      <Component {...pageProps} />
    </TinaProvider>
  );
};

export default TinaApp;
