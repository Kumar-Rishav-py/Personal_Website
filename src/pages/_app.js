import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'; // Example import for global styles

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Kumar Rishav</title>
        <link rel="icon" href="/Dqq.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
