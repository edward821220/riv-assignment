import type { AppProps } from "next/app";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
