export interface CryptoTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  relatedTerms?: string[];
  examples?: string[];
}

export const cryptoTerms: CryptoTerm[] = [
  {
    id: 'blockchain',
    term: 'Blockchain',
    definition: 'A distributed digital ledger that records transactions across multiple computers in a way that makes it difficult to change, hack, or cheat the system.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['technology', 'ledger', 'distributed'],
    relatedTerms: ['bitcoin', 'cryptocurrency', 'decentralization'],
    examples: ['Bitcoin blockchain', 'Ethereum blockchain']
  },
  {
    id: 'cryptocurrency',
    term: 'Cryptocurrency',
    definition: 'A digital or virtual currency that is secured by cryptography and operates independently of a central bank.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['currency', 'digital', 'cryptography'],
    relatedTerms: ['blockchain', 'bitcoin', 'altcoin'],
    examples: ['Bitcoin (BTC)', 'Ethereum (ETH)', 'Litecoin (LTC)']
  },
  {
    id: 'defi',
    term: 'DeFi (Decentralized Finance)',
    definition: 'Financial services and applications built on blockchain technology that operate without traditional intermediaries like banks.',
    category: 'DeFi',
    difficulty: 'Intermediate',
    tags: ['finance', 'decentralized', 'applications'],
    relatedTerms: ['smart-contracts', 'yield-farming', 'liquidity-pool'],
    examples: ['Uniswap', 'Compound', 'Aave']
  },
  {
    id: 'smart-contracts',
    term: 'Smart Contracts',
    definition: 'Self-executing contracts with the terms of the agreement directly written into code, automatically executing when conditions are met.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['contracts', 'automation', 'ethereum'],
    relatedTerms: ['ethereum', 'defi', 'dapp'],
    examples: ['Automated token swaps', 'Insurance payouts', 'Lending protocols']
  },
  {
    id: 'nft',
    term: 'NFT (Non-Fungible Token)',
    definition: 'A unique digital asset that represents ownership of a specific item, artwork, or content, stored on a blockchain.',
    category: 'NFTs',
    difficulty: 'Beginner',
    tags: ['token', 'unique', 'ownership'],
    relatedTerms: ['ethereum', 'digital-art', 'collectibles'],
    examples: ['Digital artwork', 'Gaming items', 'Music collectibles']
  },
  {
    id: 'wallet',
    term: 'Crypto Wallet',
    definition: 'A digital tool that stores private keys and allows users to send, receive, and manage their cryptocurrencies.',
    category: 'Security',
    difficulty: 'Beginner',
    tags: ['storage', 'keys', 'security'],
    relatedTerms: ['private-key', 'public-key', 'seed-phrase'],
    examples: ['MetaMask', 'Hardware wallets', 'Mobile wallets']
  },
  {
    id: 'mining',
    term: 'Mining',
    definition: 'The process of validating transactions and adding them to the blockchain while earning cryptocurrency rewards.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['validation', 'rewards', 'consensus'],
    relatedTerms: ['proof-of-work', 'miners', 'hash-rate'],
    examples: ['Bitcoin mining', 'GPU mining', 'Mining pools']
  },
  {
    id: 'hodl',
    term: 'HODL',
    definition: 'A strategy of holding onto cryptocurrency investments for the long term, regardless of market volatility. Originally a misspelling of "hold".',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['strategy', 'investing', 'meme'],
    relatedTerms: ['diamond-hands', 'long-term', 'volatility'],
    examples: ['HODLing Bitcoin', 'Long-term investment strategy']
  },
  {
    id: 'yield-farming',
    term: 'Yield Farming',
    definition: 'The practice of lending or staking cryptocurrency to earn rewards, often in the form of additional tokens.',
    category: 'DeFi',
    difficulty: 'Advanced',
    tags: ['farming', 'rewards', 'staking'],
    relatedTerms: ['liquidity-pool', 'apy', 'governance-tokens'],
    examples: ['Compound farming', 'Uniswap LP tokens']
  },
  {
    id: 'gas-fees',
    term: 'Gas Fees',
    definition: 'Transaction fees paid to miners or validators for processing and validating transactions on a blockchain network.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['fees', 'ethereum', 'transactions'],
    relatedTerms: ['ethereum', 'miners', 'network-congestion'],
    examples: ['Ethereum gas fees', 'Priority fees', 'Base fees']
  }
];

export const categories = [
  'All',
  'Fundamentals',
  'Technology', 
  'DeFi',
  'NFTs',
  'Trading',
  'Security'
];

export const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];