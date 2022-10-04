import '../styles/globals.scss';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import '../assets/slider';

import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
