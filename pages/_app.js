import '../styles/globals.css';
import { Syne } from '@next/font/google';
import { appWithTranslation } from 'next-i18next';
import ScrollToTopButton from '../components/ScrollToTopButton';

import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

function App({ Component, pageProps }) {
  return (
    <div className={`${syne.variable} font-sans`}>
      <ScrollToTopButton />
      <NavBar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default appWithTranslation(App);
