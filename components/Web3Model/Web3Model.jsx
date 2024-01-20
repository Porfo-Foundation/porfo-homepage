
"use client";
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, bsc, polygon } from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'

// 1. Get projectId
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '';

// 2. Create wagmiConfig
const { chains, publicClient } = configureChains(
  [mainnet, bsc, polygon],
  [publicProvider()]
)

const metadata = {
  name: 'Porfo',
  description: 'Porfo',
  url: 'https://www.porfo.app',
  icons: ['https://www.porfo.app/favicon.ico']
}

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: projectId
      },  
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient
})


export default function Web3Modal({children}) {
  return (
    <WagmiConfig config={wagmiConfig}>
        {children}
    </WagmiConfig>
  )
}