import { TinaCMS, TinaProvider } from 'tinacms';
import { GitClient, GitMediaStore } from '@tinacms/git-client';

const cms = new TinaCMS();
const client = new GitClient('http://localhost:3000/___tina');
cms.registerApi('git', client);

cms.media.store = new GitMediaStore(client);

type TinaAppProps = {
  Component: React.ComponentType;
  pageProps: object;
};

const TinaApp: React.FC<TinaAppProps> = ({ Component, pageProps }) => (
  <TinaProvider cms={cms}>
    <Component {...pageProps} />
  </TinaProvider>
);

export default TinaApp;
