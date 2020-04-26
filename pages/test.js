import React from 'react';
import Head from 'next/head';

import Sample from '../components/Sample';

export default function Test() {
  return (
    <div className="container">
      <Head>
        <title>Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Test page
        </h1>
        <Sample />
      </main>
    </div>
  );
}
