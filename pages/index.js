import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl">
          Welcome to
          <a href="https://nextjs.org"> Next.js!</a>
        </h1>

        <p className="text-xl">
          Get started by editing
          <code>pages/index.js</code>
        </p>

        <div className="flex flex-wrap">
          <a href="https://nextjs.org/docs" className="w-1/2 p-4 border">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="w-1/2 p-4 border"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="w-1/2 p-4 border"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with ZEIT Now.
            </p>
          </a>
          <Link href="/test">
            <div className="w-1/2 p-4 border cursor-pointer">
              <h3>TEST &rarr;</h3>
              <p>
                Go to test page
              </p>
            </div>
          </Link>
        </div>
      </main>

      <footer className="absolute bottom-0">
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </footer>
    </div>
  );
}
