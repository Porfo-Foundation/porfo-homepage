import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { coinbaseWallet, injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    metaMask(),
    coinbaseWallet({ projectId }),
    walletConnect({ projectId }),
    injected(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})