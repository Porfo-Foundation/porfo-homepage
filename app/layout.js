"use client";
import { Montserrat } from 'next/font/google'
import './globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '../config'

const font = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      
      <title>Porfo - You digital assets investment assistant!</title>
        <meta
          name="description"
          content="Your smart wallet and investment assistant, powered by cutting-edge AI. As an intent-based chat assistant, Porfo simplifies wallet management, provides trade recommendations, and offers detailed insights into wallets, tokens, and transactions. Experience a new level of cryptocurrency management with our AI-driven search engine that reveals key social indicators about projects."
        />
        <meta property="og:title" content="Porfo - Smart Assistant for Your Investment !" />
        <meta property="og:url" content="https://www.porfo.app/" />
        <meta
          property="og:description"
          content="Your smart wallet and investment assistant, powered by cutting-edge AI. As an intent-based chat assistant, Porfo simplifies wallet management, provides trade recommendations, and offers detailed insights into wallets, tokens, and transactions. Experience a new level of cryptocurrency management with our AI-driven search engine that reveals key social indicators about projects."
        />
        <meta property="og:image" content={"/favicon.png"} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="210" />
        <meta property="og:type" content="website" />
        <meta property="image" content={"/favicon.png"} />
        <meta property="twitter:card" content="Your smart wallet assistant" />
        <meta property="twitter:url" content="https://www.porfo.app/" />
        <meta property="twitter:title" content="Porfo - You digital assets investment assistant!" />
        <meta
          property="twitter:description"
          content="Porfo stands out with as powerful guidance engine, driven by state-of-the-art intent based artificial intelligence. Acting as your personal cryptocurrency assistant, it provides detailed information on wallets, tokens, blockchain addresses, and transactions, while also revealing social indicators about projects."
        />
        <meta property="twitter:image" content={"/favicon.png"} />
      
      <body className={`${font.className} no-scrollbar bg-black`}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}> 
            {children} 
          </QueryClientProvider> 
        </WagmiProvider>
      </body>
    </html>
  )
}
