import LandingPage from "@/components/LandingPage";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Porfo - You digital assets investment assistant!</title>
        <meta
          name="description"
          content="Porfo stands out with as powerful search engine, driven by state-of-the-art intent based artificial intelligence. Acting as your personal cryptocurrency assistant, it provides detailed information on wallets, tokens, blockchain addresses, and transactions, while also revealing social indicators about projects."
        />
        <meta property="og:title" content="Porfo - You digital assets investment assistant!" />
        <meta property="og:url" content="https://www.porfo.app/" />
        <meta
          property="og:description"
          content="Porfo stands out with as powerful search engine, driven by state-of-the-art intent based artificial intelligence. Acting as your personal cryptocurrency assistant, it provides detailed information on wallets, tokens, blockchain addresses, and transactions, while also revealing social indicators about projects."
        />
        <meta property="og:image" content={"/logo-full.png"} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="210" />
        <meta property="og:type" content="website" />
        <meta property="image" content={"/logo-full.png"} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.porfo.app/" />
        <meta property="twitter:title" content="Porfo - You digital assets investment assistant!" />
        <meta
          property="twitter:description"
          content="Porfo stands out with as powerful search engine, driven by state-of-the-art intent based artificial intelligence. Acting as your personal cryptocurrency assistant, it provides detailed information on wallets, tokens, blockchain addresses, and transactions, while also revealing social indicators about projects."
        />
        <meta property="twitter:image" content={"/logo-full.png"} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <LandingPage />
    </div>
  );
}
