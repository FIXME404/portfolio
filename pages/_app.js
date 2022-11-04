import '../styles/globals.scss';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bryan's Portfolio</title>
        <meta name='description' content={`Bryan's awesome portfolio`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script src='https://kit.fontawesome.com/1161eb7072.js' crossOrigin='anonymous' strategy='lazyOnload'></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
