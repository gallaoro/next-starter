import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Sample from '../components/Sample';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen p-4">
        <h1 className="text-5xl">
          Welcome to <a href="https://nextjs.org" className="underline">Next.js!</a>
        </h1>

        <p className="text-2xl">
          Get started by editing <code className="bg-gray-200 text-gray-800">pages/index.js</code>
        </p>

        <div className="flex flex-wrap mt-4">
          <a href="https://nextjs.org/docs" className="w-1/2 p-4 border">
            <h3 className="text-2xl mb-2">Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="w-1/2 p-4 border"
          >
            <h3 className="text-2xl mb-2">Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://zeit.co/import?filter=next.js&utm_source=create-next-app"
            className="w-1/2 p-4 border"
          >
            <h3 className="text-2xl mb-2">Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with ZEIT Now.
            </p>
          </a>
          <Link href="/test">
            <div className="w-1/2 p-4 border cursor-pointer">
              <h3 className="text-2xl mb-2">Other page &rarr;</h3>
              <p>
                Go to the test page
              </p>
            </div>
          </Link>
          <Sample />
        </div>
      </main>
    </div>
  );
}
