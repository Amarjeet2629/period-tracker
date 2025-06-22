import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const cacheBuster = `?v=${new Date().getTime()}`;
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href={`/manifest.json${cacheBuster}`} />
        <link rel="apple-touch-icon" href="/icons/icon512_rounded.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
