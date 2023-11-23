import "../styles/globals.css";
import { Syne } from "@next/font/google";

import NavBar from "./NavBar";
import Header from "./Header";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne"
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${syne.variable} font-sans`}>
      <NavBar />
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
