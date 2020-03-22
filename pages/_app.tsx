import '../style.css';

type AppProps = {
  Component: React.ComponentType;
  pageProps: object;
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
