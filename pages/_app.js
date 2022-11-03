import '../styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bryan's Portfolio</title>
        <meta name='description' content={`Bryan's awesome portfolio`} />
        <link rel='icon' href='/favicon.ico' />
        <script src='https://kit.fontawesome.com/1161eb7072.js' crossOrigin='anonymous'></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
