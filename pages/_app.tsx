import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Poppins } from "@next/font/google";
import { Navbar } from '../components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Navbar />
          <Component {...pageProps} />
      </>
  );
}
