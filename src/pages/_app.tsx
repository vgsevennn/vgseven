import Script from "next/script";
import type { AppProps } from "next/app";

import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
