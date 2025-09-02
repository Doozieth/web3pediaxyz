export interface CryptoTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  examples?: string[];
}

export const cryptoTerms: CryptoTerm[] = [
  // Fundamentals (A-B)
  {
    id: 'address',
    term: 'Address',
    definition: 'A unique string of characters that designates the location of a particular wallet on the blockchain. Often a hashed version of a public key.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['wallet', 'blockchain', 'location'],
    examples: ['Bitcoin address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'Ethereum address: 0x742d35Cc6634C0532925a3b8D5c50E0a2B9e29f']
  },
  {
    id: 'airdrop',
    term: 'Airdrop',
    definition: 'The distribution of digital assets to the public, either by virtue of holding a certain other token or simply by virtue of being an active wallet address on a particular blockchain.',
    category: 'Marketing',
    difficulty: 'Beginner',
    tags: ['distribution', 'free tokens', 'promotion'],
    examples: ['Uniswap UNI token airdrop', 'ENS token airdrop to .eth domain holders']
  },
  {
    id: 'algorithm',
    term: 'Algorithm',
    definition: 'A sequence of unambiguous instructions used for the purpose of solving a problem. In crypto, often refers to consensus mechanisms or trading strategies.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['instructions', 'problem solving', 'consensus'],
    examples: ['SHA-256 hashing algorithm', 'Proof of Work algorithm']
  },
  {
    id: 'altcoin',
    term: 'Altcoin',
    definition: 'Any cryptocurrency other than Bitcoin. The term is derived from "alternative coin" and encompasses thousands of different digital currencies.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['alternative', 'bitcoin', 'cryptocurrency'],
    examples: ['Ethereum (ETH)', 'Litecoin (LTC)', 'Cardano (ADA)']
  },
  {
    id: 'ath',
    term: 'All-Time High (ATH)',
    definition: 'The highest point in price, market capitalization, or other metric that a cryptocurrency has reached in its history.',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['price', 'record', 'milestone'],
    examples: ['Bitcoin ATH of ~$69,000 in November 2021']
  },
  {
    id: 'atl',
    term: 'All-Time Low (ATL)',
    definition: 'The lowest point in price, market capitalization, or other metric that a cryptocurrency has reached in its history.',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['price', 'record', 'bottom'],
    examples: ['Bitcoin ATL of $0.0008 in 2010']
  },
  {
    id: 'api',
    term: 'Application Programming Interface (API)',
    definition: 'A set of protocols and tools that allows different software applications to communicate with each other.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['programming', 'interface', 'communication'],
    examples: ['CoinGecko API for price data', 'Exchange trading APIs']
  },
  {
    id: 'arbitrage',
    term: 'Arbitrage',
    definition: 'The practice of taking advantage of price differences of the same asset across different markets or exchanges.',
    category: 'Trading',
    difficulty: 'Intermediate',
    tags: ['trading', 'price difference', 'profit'],
    examples: ['Buying ETH at $2,000 on Binance and selling at $2,005 on Coinbase for $5 profit per ETH', 'Triangular arbitrage: USDT→BTC→ETH→USDT earning 0.1% on $100k capital', 'Cross-chain arbitrage moving 50 ETH between Ethereum and Polygon for price differences']
  },
  {
    id: 'asic',
    term: 'ASIC (Application-Specific Integrated Circuit)',
    definition: 'Specialized hardware designed specifically for mining cryptocurrencies, much more efficient than general-purpose computers.',
    category: 'Mining',
    difficulty: 'Advanced',
    tags: ['hardware', 'mining', 'specialized'],
    examples: ['Antminer S19', 'Whatsminer M30S']
  },
  {
    id: 'atomic-swap',
    term: 'Atomic Swap',
    definition: 'A peer-to-peer exchange of cryptocurrencies from different blockchains without going through a centralized intermediary.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['swap', 'cross-chain', 'decentralized'],
    examples: ['Bitcoin to Litecoin atomic swap', 'Ethereum to Bitcoin atomic swap']
  },
  {
    id: 'blockchain',
    term: 'Blockchain',
    definition: 'A distributed digital ledger that records transactions across multiple computers in a way that makes it difficult to change, hack, or cheat the system.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['ledger', 'distributed', 'immutable'],
    examples: ['Bitcoin blockchain', 'Ethereum blockchain', 'Binance Smart Chain']
  },
  {
    id: 'bitcoin',
    term: 'Bitcoin (BTC)',
    definition: 'The first and most well-known cryptocurrency, created by the pseudonymous Satoshi Nakamoto in 2009.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['cryptocurrency', 'digital gold', 'satoshi'],
    examples: ['Peer-to-peer electronic cash system', 'Store of value']
  },
  {
    id: 'block',
    term: 'Block',
    definition: 'A collection of transactions that are bundled together and added to the blockchain. Each block contains a cryptographic hash of the previous block.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['transactions', 'hash', 'chain'],
    examples: ['Bitcoin blocks contain ~3000 transactions', 'Ethereum blocks contain ~150 transactions']
  },
  {
    id: 'block-height',
    term: 'Block Height',
    definition: 'The number of blocks in the blockchain between any given block and the first block in the blockchain.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['blocks', 'number', 'sequence'],
    examples: ['Bitcoin block height 700,000', 'Current Ethereum block height']
  },
  {
    id: 'block-reward',
    term: 'Block Reward',
    definition: 'The cryptocurrency awarded to miners for successfully mining a block and adding it to the blockchain.',
    category: 'Mining',
    difficulty: 'Beginner',
    tags: ['mining', 'reward', 'incentive'],
    examples: ['Bitcoin block reward: 6.25 BTC (as of 2023)', 'Ethereum block reward before PoS: 2 ETH']
  },
  {
    id: 'block-time',
    term: 'Block Time',
    definition: 'The average time it takes for a new block to be created and added to the blockchain.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['time', 'mining', 'speed'],
    examples: ['Bitcoin: ~10 minutes', 'Ethereum: ~13 seconds', 'Litecoin: ~2.5 minutes']
  },
  {
    id: 'bull-market',
    term: 'Bull Market',
    definition: 'A market condition characterized by rising prices and optimistic sentiment. Named after how a bull attacks by thrusting upward.',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['market', 'rising prices', 'optimism'],
    examples: ['2017 crypto bull run', '2020-2021 crypto bull market']
  },
  {
    id: 'bear-market',
    term: 'Bear Market',
    definition: 'A market condition characterized by falling prices and pessimistic sentiment. Named after how a bear attacks by swiping downward.',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['market', 'falling prices', 'pessimism'],
    examples: ['2018 crypto bear market', '2022 crypto winter']
  },
  {
    id: 'btfd',
    term: 'Buy The F***ing Dip (BTFD)',
    definition: 'A popular crypto slang encouraging investors to purchase cryptocurrencies when their prices have dropped significantly.',
    category: 'Culture',
    difficulty: 'Beginner',
    tags: ['slang', 'buying', 'dip'],
    examples: ['BTFD when Bitcoin drops 20%', 'Community memes about buying dips']
  },
  {
    id: 'centralized-exchange',
    term: 'Centralized Exchange (CEX)',
    definition: 'A cryptocurrency exchange that is operated by a centralized company or organization, holding custody of users\' funds.',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['exchange', 'centralized', 'custody'],
    examples: ['Coinbase', 'Binance', 'Kraken', 'FTX (defunct)']
  },
  {
    id: 'cold-wallet',
    term: 'Cold Wallet',
    definition: 'A cryptocurrency wallet that is not connected to the internet, providing enhanced security for long-term storage.',
    category: 'Security',
    difficulty: 'Beginner',
    tags: ['wallet', 'offline', 'security'],
    examples: ['Hardware wallets like Ledger', 'Paper wallets', 'Air-gapped computers']
  },
  {
    id: 'consensus',
    term: 'Consensus',
    definition: 'The process by which nodes in a blockchain network agree on the validity of transactions and the state of the ledger.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['agreement', 'validation', 'network'],
    examples: ['Proof of Work consensus', 'Proof of Stake consensus', 'Byzantine Fault Tolerance']
  },
  {
    id: 'cryptocurrency',
    term: 'Cryptocurrency',
    definition: 'A digital or virtual currency that uses cryptography for security and operates independently of a central bank.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['digital currency', 'cryptography', 'decentralized'],
    examples: ['Bitcoin', 'Ethereum', 'Litecoin', 'Dogecoin']
  },
  {
    id: 'cryptography',
    term: 'Cryptography',
    definition: 'The practice and study of techniques for secure communication in the presence of third parties, fundamental to blockchain technology.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['security', 'encryption', 'mathematics'],
    examples: ['SHA-256 hashing', 'Elliptic curve cryptography', 'Digital signatures']
  },
  {
    id: 'dao',
    term: 'Decentralized Autonomous Organization (DAO)',
    definition: 'An organization that operates through smart contracts on a blockchain, with governance decisions made by token holders.',
    category: 'DeFi',
    difficulty: 'Advanced',
    tags: ['governance', 'decentralized', 'organization'],
    examples: ['MakerDAO', 'Compound Governance', 'Uniswap Governance']
  },
  {
    id: 'dapp',
    term: 'Decentralized Application (dApp)',
    definition: 'An application that runs on a decentralized network, typically a blockchain, rather than a single computer.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['application', 'decentralized', 'blockchain'],
    examples: ['Uniswap', 'OpenSea', 'Compound', 'Aave']
  },
  {
    id: 'defi',
    term: 'Decentralized Finance (DeFi)',
    definition: 'Financial services and applications built on blockchain technology that operate without traditional intermediaries like banks.',
    category: 'DeFi',
    difficulty: 'Intermediate',
    tags: ['finance', 'decentralized', 'blockchain'],
    examples: ['Lending protocols', 'Decentralized exchanges', 'Yield farming']
  },
  {
    id: 'decentralization',
    term: 'Decentralization',
    definition: 'The distribution of control and decision-making across a network rather than having it concentrated in a single authority.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['distribution', 'control', 'network'],
    examples: ['Bitcoin\'s distributed network', 'Ethereum\'s validator network']
  },
  {
    id: 'diamond-hands',
    term: 'Diamond Hands',
    definition: 'Crypto slang for holding onto investments despite market volatility, showing strong conviction and patience.',
    category: 'Culture',
    difficulty: 'Beginner',
    tags: ['holding', 'conviction', 'slang'],
    examples: ['Holding Bitcoin through bear markets', 'Diamond hands emoji 💎🙌']
  },
  {
    id: 'difficulty',
    term: 'Difficulty',
    definition: 'A measure of how hard it is to find a new block compared to the easiest it can ever be, adjusting to maintain consistent block times.',
    category: 'Mining',
    difficulty: 'Intermediate',
    tags: ['mining', 'adjustment', 'network'],
    examples: ['Bitcoin difficulty adjustment every 2016 blocks', 'Higher difficulty = more computational power needed']
  },
  {
    id: 'dyor',
    term: 'Do Your Own Research (DYOR)',
    definition: 'A common crypto acronym reminding investors to conduct their own research before making investment decisions.',
    category: 'Culture',
    difficulty: 'Beginner',
    tags: ['research', 'advice', 'due diligence'],
    examples: ['DYOR before investing in new tokens', 'Community reminder to research projects']
  },
  {
    id: 'double-spending',
    term: 'Double Spending',
    definition: 'The risk that a digital currency can be spent twice, which blockchain technology prevents through consensus mechanisms.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['spending', 'fraud', 'prevention'],
    examples: ['Prevented by blockchain confirmation', '51% attacks could enable double spending']
  },
  {
    id: 'ethereum',
    term: 'Ethereum (ETH)',
    definition: 'A decentralized platform that runs smart contracts and serves as the foundation for many DeFi applications and NFTs.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['platform', 'smart contracts', 'dapps'],
    examples: ['Smart contract platform', 'DeFi ecosystem foundation', 'NFT marketplace backbone']
  },
  {
    id: 'erc20',
    term: 'ERC-20',
    definition: 'A technical standard for fungible tokens on the Ethereum blockchain, defining a common list of rules for tokens to follow.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['standard', 'tokens', 'ethereum'],
    examples: ['USDC', 'LINK', 'UNI', 'Most Ethereum-based tokens']
  },
  {
    id: 'erc721',
    term: 'ERC-721',
    definition: 'A technical standard for non-fungible tokens (NFTs) on the Ethereum blockchain, allowing for unique, non-interchangeable tokens.',
    category: 'NFTs',
    difficulty: 'Intermediate',
    tags: ['NFT', 'standard', 'unique'],
    examples: ['CryptoPunks', 'Bored Ape Yacht Club', 'Art NFTs']
  },
  {
    id: 'exchange',
    term: 'Exchange',
    definition: 'A platform where cryptocurrencies can be bought, sold, or traded for other cryptocurrencies or traditional currencies.',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['trading', 'platform', 'marketplace'],
    examples: ['Coinbase', 'Binance', 'Uniswap', 'Kraken']
  },
  {
    id: 'fiat',
    term: 'Fiat Currency',
    definition: 'Government-issued currency that is not backed by a physical commodity like gold or silver, such as the US Dollar or Euro.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['government', 'currency', 'traditional'],
    examples: ['US Dollar (USD)', 'Euro (EUR)', 'Japanese Yen (JPY)']
  },
  {
    id: 'fomo',
    term: 'Fear of Missing Out (FOMO)',
    definition: 'The anxiety that an exciting or interesting event may currently be happening elsewhere, often leading to impulsive investment decisions.',
    category: 'Psychology',
    difficulty: 'Beginner',
    tags: ['emotion', 'trading', 'psychology'],
    examples: ['Buying during price spikes', 'Joining trending investments without research']
  },
  {
    id: 'fud',
    term: 'Fear, Uncertainty, and Doubt (FUD)',
    definition: 'Negative sentiment spread to influence perception of a particular cryptocurrency or the market in general.',
    category: 'Psychology',
    difficulty: 'Beginner',
    tags: ['sentiment', 'negative', 'influence'],
    examples: ['Regulatory concerns', 'Negative news coverage', 'Market manipulation']
  },
  {
    id: 'fork',
    term: 'Fork',
    definition: 'A change to the protocol rules of a blockchain. Can be soft (backward compatible) or hard (not backward compatible).',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['protocol', 'upgrade', 'change'],
    examples: ['Bitcoin Cash hard fork', 'Ethereum London hard fork', 'SegWit soft fork']
  },
  {
    id: 'gas',
    term: 'Gas',
    definition: 'The fee required to conduct a transaction or execute a contract on the Ethereum blockchain.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['fee', 'ethereum', 'transaction'],
    examples: ['Simple ETH transfer: 21,000 gas × 20 gwei = $2.50 fee', 'Uniswap token swap: 150,000 gas × 50 gwei = $18 fee', 'NFT minting during high congestion: 200,000 gas × 100 gwei = $60 fee']
  },
  {
    id: 'genesis-block',
    term: 'Genesis Block',
    definition: 'The first block in a blockchain, also known as Block 0 or Block 1, which serves as the foundation for the entire chain.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['first block', 'foundation', 'origin'],
    examples: ['Bitcoin Genesis Block mined by Satoshi', 'Contains special message about financial crisis']
  },
  {
    id: 'gwei',
    term: 'Gwei',
    definition: 'A denomination of Ethereum, equal to 0.000000001 ETH (10^-9 ETH), commonly used to measure gas prices.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['ethereum', 'denomination', 'gas'],
    examples: ['Gas price of 20 Gwei', '1 ETH = 1 billion Gwei']
  },
  {
    id: 'halving',
    term: 'Halving',
    definition: 'An event where the reward for mining new blocks is halved, occurring approximately every four years in Bitcoin.',
    category: 'Mining',
    difficulty: 'Intermediate',
    tags: ['mining', 'reward', 'reduction'],
    examples: ['Bitcoin halving in 2020', 'Next Bitcoin halving in 2024', 'Litecoin halving events']
  },
  {
    id: 'hash',
    term: 'Hash',
    definition: 'A function that converts input data of any size into a fixed-size string of characters, crucial for blockchain security.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['function', 'cryptography', 'security'],
    examples: ['SHA-256 hash function', 'Block hashes', 'Transaction hashes']
  },
  {
    id: 'hash-rate',
    term: 'Hash Rate',
    definition: 'The measure of computational power being used to mine and process transactions on a proof-of-work blockchain.',
    category: 'Mining',
    difficulty: 'Intermediate',
    tags: ['mining', 'power', 'computation'],
    examples: ['Bitcoin network hash rate', 'Mining pool hash rate', 'Individual miner hash rate']
  },
  {
    id: 'hodl',
    term: 'HODL',
    definition: 'Originally a misspelling of "hold," now a backronym for "Hold On for Dear Life" - a strategy of holding cryptocurrency long-term.',
    category: 'Culture',
    difficulty: 'Beginner',
    tags: ['holding', 'strategy', 'meme'],
    examples: ['HODLing Bitcoin through volatility', 'HODL vs trading strategies']
  },
  {
    id: 'hot-wallet',
    term: 'Hot Wallet',
    definition: 'A cryptocurrency wallet that is connected to the internet, providing convenient access but potentially less security.',
    category: 'Security',
    difficulty: 'Beginner',
    tags: ['wallet', 'online', 'convenience'],
    examples: ['Mobile wallet apps', 'Exchange wallets', 'Desktop wallet software']
  },
  {
    id: 'immutable',
    term: 'Immutable',
    definition: 'Unable to be changed or modified. In blockchain context, refers to the permanent nature of recorded transactions.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['permanent', 'unchangeable', 'security'],
    examples: ['Bitcoin transaction immutability', 'Smart contract immutability']
  },
  {
    id: 'kyc',
    term: 'Know Your Customer (KYC)',
    definition: 'The process of verifying the identity of clients, required by many cryptocurrency exchanges and financial services.',
    category: 'Compliance',
    difficulty: 'Beginner',
    tags: ['identity', 'verification', 'compliance'],
    examples: ['Exchange account verification', 'ID document submission', 'Address verification']
  },
  {
    id: 'layer1',
    term: 'Layer 1 (L1)',
    definition: 'The main blockchain network where transactions are finally settled, such as Bitcoin or Ethereum mainnet.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['blockchain', 'main network', 'settlement'],
    examples: ['Bitcoin', 'Ethereum', 'Cardano', 'Solana']
  },
  {
    id: 'layer2',
    term: 'Layer 2 (L2)',
    definition: 'Scaling solutions built on top of a main blockchain to increase transaction speed and reduce costs.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['scaling', 'fast transactions', 'low cost'],
    examples: ['Lightning Network (Bitcoin)', 'Polygon (Ethereum)', 'Arbitrum', 'Optimism']
  },
  {
    id: 'liquidity',
    term: 'Liquidity',
    definition: 'The ease with which an asset can be bought or sold without affecting its price significantly.',
    category: 'Trading',
    difficulty: 'Intermediate',
    tags: ['trading', 'volume', 'market'],
    examples: ['BTC/USDT pair with $500M daily volume allowing instant $100k trades', 'Small altcoin with $50k daily volume where $10k order moves price 5%', 'DEX pool with $2M TVL providing smooth swaps under $20k']
  },
  {
    id: 'market-cap',
    term: 'Market Capitalization',
    definition: 'The total value of a cryptocurrency, calculated by multiplying the current price by the total circulating supply.',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['valuation', 'price', 'supply'],
    examples: ['Bitcoin: $40k price × 19.5M supply = $780B market cap', 'Ethereum: $2,500 price × 120M supply = $300B market cap', 'New token: $0.10 price × 1B supply = $100M market cap ranks #200']
  },
  {
    id: 'mempool',
    term: 'Mempool',
    definition: 'The waiting area for unconfirmed transactions before they are included in a block on the blockchain.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['transactions', 'waiting', 'unconfirmed'],
    examples: ['Bitcoin mempool congestion', 'Ethereum mempool during high gas fees']
  },
  {
    id: 'mining',
    term: 'Mining',
    definition: 'The process of validating transactions and adding them to the blockchain while earning cryptocurrency rewards.',
    category: 'Mining',
    difficulty: 'Beginner',
    tags: ['validation', 'rewards', 'consensus'],
    examples: ['Bitcoin mining', 'GPU mining', 'Mining pools', 'Cloud mining']
  },
  {
    id: 'moon',
    term: 'Moon/Mooning',
    definition: 'Crypto slang referring to a significant price increase, with "to the moon" expressing hope for massive gains.',
    category: 'Culture',
    difficulty: 'Beginner',
    tags: ['price increase', 'slang', 'gains'],
    examples: ['Bitcoin to the moon', 'When moon?', '🚀🌙 emoji usage']
  },
  {
    id: 'nft',
    term: 'Non-Fungible Token (NFT)',
    definition: 'A unique digital asset that represents ownership of a specific item, artwork, or content, stored on a blockchain.',
    category: 'NFTs',
    difficulty: 'Beginner',
    tags: ['unique', 'ownership', 'digital art'],
    examples: ['Digital artwork', 'Gaming items', 'Music collectibles', 'Profile pictures']
  },
  {
    id: 'node',
    term: 'Node',
    definition: 'A computer that participates in the blockchain network by maintaining a copy of the blockchain and validating transactions.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['network', 'validation', 'decentralization'],
    examples: ['Bitcoin full nodes', 'Ethereum validator nodes', 'Lightning Network nodes']
  },
  {
    id: 'paper-hands',
    term: 'Paper Hands',
    definition: 'Crypto slang for someone who sells their investments quickly, especially during market downturns, opposite of diamond hands.',
    category: 'Culture',
    difficulty: 'Beginner',
    tags: ['selling', 'weak conviction', 'slang'],
    examples: ['Selling during dips', 'Weak hands selling pressure', '📄🙌 emoji usage']
  },
  {
    id: 'peer-to-peer',
    term: 'Peer-to-Peer (P2P)',
    definition: 'A decentralized network model where participants interact directly with each other without intermediaries.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['direct interaction', 'decentralized', 'no intermediary'],
    examples: ['Bitcoin P2P transactions', 'P2P trading platforms', 'P2P lending']
  },
  {
    id: 'private-key',
    term: 'Private Key',
    definition: 'A secret cryptographic key that allows the owner to access and control their cryptocurrency. Must be kept secure.',
    category: 'Security',
    difficulty: 'Intermediate',
    tags: ['secret', 'access', 'control'],
    examples: ['64-character hexadecimal string', 'Used to sign transactions', 'Hardware wallet protection']
  },
  {
    id: 'proof-of-stake',
    term: 'Proof of Stake (PoS)',
    definition: 'A consensus mechanism where validators are chosen to create new blocks based on their stake in the network.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['consensus', 'staking', 'energy efficient'],
    examples: ['Ethereum 2.0', 'Cardano', 'Polkadot', 'Cosmos']
  },
  {
    id: 'proof-of-work',
    term: 'Proof of Work (PoW)',
    definition: 'A consensus mechanism where miners compete to solve computational puzzles to validate transactions and create new blocks.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['consensus', 'mining', 'computational'],
    examples: ['Bitcoin', 'Litecoin', 'Ethereum (before merge)', 'Dogecoin']
  },
  {
    id: 'public-key',
    term: 'Public Key',
    definition: 'A cryptographic key that can be shared publicly and is used to receive cryptocurrency or verify digital signatures.',
    category: 'Security',
    difficulty: 'Intermediate',
    tags: ['public', 'receiving', 'verification'],
    examples: ['Derived from private key', 'Used to generate addresses', 'Visible on blockchain']
  },
  {
    id: 'pump',
    term: 'Pump',
    definition: 'A rapid increase in the price of a cryptocurrency, often followed by a "dump" where the price falls quickly.',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['price increase', 'rapid', 'volatility'],
    examples: ['Pump and dump schemes', 'Market manipulation', 'Coordinated buying']
  },
  {
    id: 'rugpull',
    term: 'Rug Pull',
    definition: 'A type of scam where developers abandon a project and take investors\' funds, often after building initial hype.',
    category: 'Security',
    difficulty: 'Intermediate',
    tags: ['scam', 'fraud', 'abandonment'],
    examples: ['DeFi protocol rug pulls', 'Token creator draining liquidity', 'Exit scams']
  },
  {
    id: 'satoshi',
    term: 'Satoshi',
    definition: 'The smallest unit of Bitcoin, equal to 0.00000001 BTC, named after Bitcoin\'s creator Satoshi Nakamoto.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['unit', 'bitcoin', 'small amount'],
    examples: ['1 BTC = 100,000,000 satoshis', 'Lightning Network microtransactions in sats']
  },
  {
    id: 'seed-phrase',
    term: 'Seed Phrase',
    definition: 'A sequence of words (typically 12 or 24) that can be used to recover a cryptocurrency wallet. Must be kept secure.',
    category: 'Security',
    difficulty: 'Beginner',
    tags: ['recovery', 'backup', 'security'],
    examples: ['12-word seed phrase', '24-word seed phrase', 'BIP-39 standard']
  },
  {
    id: 'sharding',
    term: 'Sharding',
    definition: 'A scaling technique that divides a blockchain network into smaller, parallel chains called shards to improve throughput.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['scaling', 'parallel', 'throughput'],
    examples: ['Ethereum 2.0 sharding', 'Near Protocol sharding', 'Database sharding concept']
  },
  {
    id: 'smart-contract',
    term: 'Smart Contract',
    definition: 'Self-executing contracts with terms directly written into code, automatically executing when conditions are met.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['automation', 'code', 'execution'],
    examples: ['Ethereum smart contracts', 'DeFi protocols', 'NFT minting contracts']
  },
  {
    id: 'stablecoin',
    term: 'Stablecoin',
    definition: 'A cryptocurrency designed to maintain a stable value, typically pegged to a fiat currency like the US Dollar.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['stable value', 'pegged', 'low volatility'],
    examples: ['USDC', 'USDT (Tether)', 'DAI', 'BUSD']
  },
  {
    id: 'staking',
    term: 'Staking',
    definition: 'The process of participating in a proof-of-stake network by holding and "staking" tokens to help secure the network.',
    category: 'DeFi',
    difficulty: 'Intermediate',
    tags: ['rewards', 'network security', 'passive income'],
    examples: ['Depositing 32 ETH to become an Ethereum validator earning ~4% annually', 'Staking 100 ADA on Cardano through a pool for 5% rewards', 'Locking 50 DOT for 28 days on Polkadot earning 12% APY']
  },
  {
    id: 'tokenomics',
    term: 'Tokenomics',
    definition: 'The economic model and design of a cryptocurrency token, including supply, distribution, and utility mechanisms.',
    category: 'Fundamentals',
    difficulty: 'Advanced',
    tags: ['economics', 'supply', 'utility'],
    examples: ['Bitcoin\'s deflationary model', 'Ethereum\'s burn mechanism', 'Project token allocation']
  },
  {
    id: 'transaction-fee',
    term: 'Transaction Fee',
    definition: 'The fee paid to miners or validators for processing and confirming a transaction on the blockchain.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['fee', 'processing', 'miners'],
    examples: ['Bitcoin transaction fees', 'Ethereum gas fees', 'Network congestion impact']
  },
  {
    id: 'wallet',
    term: 'Wallet',
    definition: 'A digital tool that stores private keys and allows users to send, receive, and manage their cryptocurrencies.',
    category: 'Security',
    difficulty: 'Beginner',
    tags: ['storage', 'management', 'keys'],
    examples: ['MetaMask', 'Hardware wallets', 'Mobile wallet apps', 'Paper wallets']
  },
  {
    id: 'whale',
    term: 'Whale',
    definition: 'An individual or entity that holds a large amount of cryptocurrency, capable of influencing market prices through their trades.',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['large holder', 'market influence', 'big investor'],
    examples: ['Wallet holding 10,000+ BTC ($400M+ at $40k price) moving coins causes market alerts', 'Ethereum whale transferring 50,000 ETH ($100M) between exchanges', 'Single transaction of 1M USDC moving altcoin price 15% due to low liquidity']
  },
  {
    id: 'whitepaper',
    term: 'Whitepaper',
    definition: 'A technical document that explains the purpose, technology, and methodology of a cryptocurrency or blockchain project.',
    category: 'Research',
    difficulty: 'Intermediate',
    tags: ['documentation', 'technical', 'project'],
    examples: ['Bitcoin whitepaper by Satoshi', 'Ethereum whitepaper', 'Project research documents']
  },
  {
    id: 'yield-farming',
    term: 'Yield Farming',
    definition: 'The practice of lending or staking cryptocurrency to earn rewards, often in the form of additional tokens.',
    category: 'DeFi',
    difficulty: 'Advanced',
    tags: ['lending', 'rewards', 'DeFi'],
    examples: ['Providing $10,000 USDC to Compound lending pool earning 3% APY plus COMP tokens', 'Adding $5,000 ETH/USDC to Uniswap V3 earning 0.3% fees + LP rewards', 'Farming CAKE tokens by staking BNB-BUSD LP tokens on PancakeSwap']
  },
  
  // Additional Terms for 1000+ collection
  {
    id: 'zero-knowledge-proof',
    term: 'Zero-Knowledge Proof',
    definition: 'A cryptographic method that allows one party to prove to another that they know a specific piece of information without revealing the information itself.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['cryptography', 'privacy', 'verification']
  },
  {
    id: 'zk-rollup',
    term: 'ZK-Rollup',
    definition: 'A layer 2 scaling solution that bundles hundreds of transfers off-chain and generates a cryptographic proof.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['scaling', 'layer2', 'rollup']
  },
  {
    id: 'automated-market-maker',
    term: 'Automated Market Maker (AMM)',
    definition: 'A decentralized exchange protocol that relies on algorithmic trading to provide liquidity for traders.',
    category: 'DeFi',
    difficulty: 'Intermediate',
    tags: ['DEX', 'liquidity', 'algorithm']
  },
  {
    id: 'block-explorer',
    term: 'Block Explorer',
    definition: 'A web application that allows users to search and navigate blockchain data including transactions, addresses, and blocks.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['blockchain', 'search', 'data']
  },
  {
    id: 'cold-storage',
    term: 'Cold Storage',
    definition: 'A method of storing cryptocurrency offline to protect it from cyber attacks and unauthorized access.',
    category: 'Security',
    difficulty: 'Beginner',
    tags: ['storage', 'security', 'offline']
  },
  {
    id: 'consensus-mechanism',
    term: 'Consensus Mechanism',
    definition: 'A protocol used to achieve agreement among distributed network nodes about the validity of transactions.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['consensus', 'network', 'validation']
  },
  {
    id: 'cross-chain',
    term: 'Cross-Chain',
    definition: 'Technology that enables the transfer of assets and data between different blockchain networks.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['interoperability', 'bridges', 'networks']
  },
  {
    id: 'dao-governance',
    term: 'DAO Governance',
    definition: 'The process by which DAO members propose, debate, and vote on decisions affecting the organization.',
    category: 'DeFi',
    difficulty: 'Intermediate',
    tags: ['governance', 'voting', 'decentralized']
  },
  {
    id: 'diamond-hands',
    term: 'Diamond Hands',
    definition: 'A term describing investors who hold onto their cryptocurrency investments despite market volatility.',
    category: 'Culture',
    difficulty: 'Beginner',
    tags: ['holding', 'patience', 'diamond']
  },
  {
    id: 'eip',
    term: 'EIP (Ethereum Improvement Proposal)',
    definition: 'A design document providing information to the Ethereum community or describing new features for Ethereum.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['ethereum', 'improvement', 'proposal']
  },
  {
    id: 'flash-loan',
    term: 'Flash Loan',
    definition: 'An uncollateralized loan that must be borrowed and repaid within the same transaction block.',
    category: 'DeFi',
    difficulty: 'Advanced',
    tags: ['lending', 'instant', 'uncollateralized']
  },
  {
    id: 'gas-limit',
    term: 'Gas Limit',
    definition: 'The maximum amount of gas units a user is willing to spend on a transaction.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['ethereum', 'transaction', 'limit']
  },
  {
    id: 'hash-rate',
    term: 'Hash Rate',
    definition: 'The speed at which a computer can complete an operation in the Bitcoin blockchain.',
    category: 'Mining',
    difficulty: 'Intermediate',
    tags: ['mining', 'speed', 'computation']
  },
  {
    id: 'immutable',
    term: 'Immutable',
    definition: 'A characteristic of blockchain data that cannot be changed or altered once recorded.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['unchangeable', 'permanent', 'blockchain']
  },
  {
    id: 'impermanent-loss',
    term: 'Impermanent Loss',
    definition: 'The temporary loss of funds experienced by liquidity providers due to volatility in a trading pair.',
    category: 'DeFi',
    difficulty: 'Advanced',
    tags: ['liquidity', 'loss', 'volatility'],
    examples: ['Providing $10k ETH/USDC LP when ETH=$2000, losing $500 when ETH rises to $2500 vs just holding ETH', 'Stable pair USDC/DAI with minimal impermanent loss earning 3% fees', 'Volatile pair experiences 15% impermanent loss during 50% price swing']
  },
  {
    id: 'layer-1',
    term: 'Layer 1',
    definition: 'The base blockchain architecture that validates and finalizes transactions.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['blockchain', 'base layer', 'architecture']
  },
  {
    id: 'layer-2',
    term: 'Layer 2',
    definition: 'Secondary frameworks built on top of existing blockchains to improve scalability and reduce costs.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['scaling', 'secondary', 'framework']
  },
  {
    id: 'lightning-network',
    term: 'Lightning Network',
    definition: 'A layer 2 payment protocol designed to enable fast and cheap Bitcoin transactions.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['bitcoin', 'payment', 'fast']
  },
  {
    id: 'liquidity-pool',
    term: 'Liquidity Pool',
    definition: 'A collection of funds locked in a smart contract to facilitate decentralized trading and lending.',
    category: 'DeFi',
    difficulty: 'Intermediate',
    tags: ['funds', 'trading', 'smart contract']
  },
  {
    id: 'mainnet',
    term: 'Mainnet',
    definition: 'The primary network where actual cryptocurrency transactions take place and have real economic value.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['network', 'production', 'live']
  },
  {
    id: 'merkle-tree',
    term: 'Merkle Tree',
    definition: 'A tree structure of cryptographic hashes used to efficiently verify large data structures.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['data structure', 'verification', 'hashes']
  },
  {
    id: 'multi-signature',
    term: 'Multi-Signature (Multisig)',
    definition: 'A digital signature scheme that requires multiple private keys to authorize a transaction.',
    category: 'Security',
    difficulty: 'Intermediate',
    tags: ['security', 'multiple keys', 'authorization']
  },
  {
    id: 'node',
    term: 'Node',
    definition: 'A computer that participates in the blockchain network by maintaining a copy of the distributed ledger.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['computer', 'network', 'ledger']
  },
  {
    id: 'oracle',
    term: 'Oracle',
    definition: 'A service that provides real-world data to blockchain smart contracts.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['data', 'smart contracts', 'external']
  },
  {
    id: 'paper-hands',
    term: 'Paper Hands',
    definition: 'A term describing investors who sell their cryptocurrency quickly when prices become volatile.',
    category: 'Culture',
    difficulty: 'Beginner',
    tags: ['selling', 'volatility', 'weak']
  },
  {
    id: 'peer-to-peer',
    term: 'Peer-to-Peer (P2P)',
    definition: 'A decentralized interaction between parties in a distributed network without intermediaries.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['decentralized', 'direct', 'network']
  },
  {
    id: 'proof-of-history',
    term: 'Proof of History',
    definition: 'A consensus algorithm that creates a historical record proving events occurred at specific moments in time.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['consensus', 'time', 'history']
  },
  {
    id: 'public-key',
    term: 'Public Key',
    definition: 'A cryptographic key that can be shared openly and is used to verify digital signatures.',
    category: 'Security',
    difficulty: 'Intermediate',
    tags: ['cryptography', 'verification', 'public']
  },
  {
    id: 'private-key',
    term: 'Private Key',
    definition: 'A secret cryptographic key that must be kept confidential and is used to sign transactions.',
    category: 'Security',
    difficulty: 'Intermediate',
    tags: ['cryptography', 'secret', 'signing']
  },
  {
    id: 'pump-and-dump',
    term: 'Pump and Dump',
    definition: 'A fraudulent scheme involving artificially inflating asset prices before selling at the peak.',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['fraud', 'manipulation', 'scheme']
  },
  {
    id: 'rug-pull',
    term: 'Rug Pull',
    definition: 'A malicious exit scam where developers abandon a project and steal investors\' funds.',
    category: 'Security',
    difficulty: 'Beginner',
    tags: ['scam', 'exit', 'theft']
  },
  {
    id: 'seed-phrase',
    term: 'Seed Phrase',
    definition: 'A series of words used to recover a cryptocurrency wallet and its associated private keys.',
    category: 'Security',
    difficulty: 'Beginner',
    tags: ['recovery', 'backup', 'words']
  },
  {
    id: 'sharding',
    term: 'Sharding',
    definition: 'A scaling technique that splits a blockchain network into smaller, parallel chains called shards.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['scaling', 'parallel', 'splitting']
  },
  {
    id: 'sidechain',
    term: 'Sidechain',
    definition: 'A separate blockchain that runs parallel to the main blockchain and is connected via a two-way bridge.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['parallel', 'bridge', 'separate']
  },
  {
    id: 'slippage',
    term: 'Slippage',
    definition: 'The difference between expected and actual transaction prices due to market movement during execution.',
    category: 'Trading',
    difficulty: 'Intermediate',
    tags: ['price difference', 'execution', 'market'],
    examples: ['Setting 1% slippage tolerance: $1000 ETH order executes at $990-$1010', 'High slippage on small DEX: $5k order moves price 8% on low liquidity pair', 'Front-running causes 3% slippage on $50k Uniswap trade during volatile period']
  },
  {
    id: 'smart-contract',
    term: 'Smart Contract',
    definition: 'Self-executing contracts with terms directly written into code and automatically enforced.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['automated', 'code', 'contract']
  },
  {
    id: 'solidity',
    term: 'Solidity',
    definition: 'A programming language designed for developing smart contracts on the Ethereum blockchain.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['programming', 'ethereum', 'development']
  },
  {
    id: 'stablecoin',
    term: 'Stablecoin',
    definition: 'A cryptocurrency designed to maintain a stable value relative to a reference asset like USD.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    tags: ['stable', 'pegged', 'reference']
  },
  {
    id: 'testnet',
    term: 'Testnet',
    definition: 'A separate blockchain network used for testing and development without real economic value.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['testing', 'development', 'sandbox']
  },
  {
    id: 'tokenomics',
    term: 'Tokenomics',
    definition: 'The economic model and structure surrounding a cryptocurrency token, including supply and distribution.',
    category: 'Fundamentals',
    difficulty: 'Intermediate',
    tags: ['economics', 'supply', 'distribution']
  },
  {
    id: 'total-value-locked',
    term: 'Total Value Locked (TVL)',
    definition: 'The total amount of assets deposited in a DeFi protocol or platform.',
    category: 'DeFi',
    difficulty: 'Intermediate',
    tags: ['deposits', 'protocol', 'metrics']
  },
  {
    id: 'validator',
    term: 'Validator',
    definition: 'A network participant responsible for verifying transactions and maintaining blockchain security.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['verification', 'security', 'participant']
  },
  {
    id: 'vesting',
    term: 'Vesting',
    definition: 'A mechanism that releases tokens to holders gradually over time rather than all at once.',
    category: 'Fundamentals',
    difficulty: 'Intermediate',
    tags: ['gradual release', 'time-locked', 'distribution']
  },
  {
    id: 'web3',
    term: 'Web3',
    definition: 'The next generation of the internet built on blockchain technology, emphasizing decentralization.',
    category: 'Technology',
    difficulty: 'Beginner',
    tags: ['internet', 'decentralized', 'blockchain']
  },
  {
    id: 'wrapped-token',
    term: 'Wrapped Token',
    definition: 'A tokenized version of another cryptocurrency that can be used on different blockchains.',
    category: 'Technology',
     difficulty: 'Intermediate',
    tags: ['tokenized', 'cross-chain', 'representation']
  },
  
  // Social Terms
  {
    id: 'gm',
    term: 'GM (Good Morning)',
    definition: 'A friendly greeting commonly used in crypto Twitter and Discord communities, often accompanied by motivational messages about crypto.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['greeting', 'community', 'twitter'],
    examples: ['GM crypto fam!', 'GM to all HODLers']
  },
  {
    id: 'gn',
    term: 'GN (Good Night)',
    definition: 'A way to say goodbye in crypto communities, often posted before logging off social media for the day.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['goodbye', 'community', 'social'],
    examples: ['GN crypto Twitter', 'GN everyone, see you at the moon']
  },
  {
    id: 'wagmi',
    term: 'WAGMI (We Are Gonna Make It)',
    definition: 'An optimistic expression of confidence that the crypto community will succeed and profit together.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['optimism', 'community', 'success'],
    examples: ['WAGMI together!', 'Diamond hands WAGMI']
  },
  {
    id: 'ngmi',
    term: 'NGMI (Not Gonna Make It)',
    definition: 'Used to express that someone is making poor investment decisions or not understanding crypto properly.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['criticism', 'poor decisions', 'community'],
    examples: ['Selling the bottom? NGMI', 'Paper hands are NGMI']
  },
  {
    id: 'lfg',
    term: 'LFG (Let\'s F***ing Go)',
    definition: 'An expression of excitement and enthusiasm, often used when prices are rising or good news is announced.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['excitement', 'enthusiasm', 'bullish'],
    examples: ['Bitcoin ATH! LFG!', 'New partnership announced, LFG!']
  },
  {
    id: 'alpha',
    term: 'Alpha',
    definition: 'Exclusive or valuable information about crypto projects that could lead to profitable investments.',
    category: 'Social',
    difficulty: 'Intermediate',
    tags: ['information', 'insider knowledge', 'profit'],
    examples: ['Got some alpha on a new DeFi project', 'Sharing alpha with the community']
  },
  {
    id: 'cope',
    term: 'Cope',
    definition: 'When someone refuses to accept losses or bad news about their crypto investments, often making excuses.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['denial', 'psychology', 'losses'],
    examples: ['This is just a dip, not a crash (cope)', 'Copium levels are high']
  },
  {
    id: 'shill',
    term: 'Shill',
    definition: 'Promoting a cryptocurrency project heavily, often for personal gain or because you hold the token.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['promotion', 'marketing', 'bias'],
    examples: ['Stop shilling your bags', 'Influencer shilling new altcoin']
  },
  {
    id: 'ser',
    term: 'Ser',
    definition: 'A playful way to say "sir" in crypto communities, often used when asking questions or making requests.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['respectful', 'community', 'slang'],
    examples: ['Wen moon ser?', 'Please explain ser']
  },
  {
    id: 'few',
    term: 'Few',
    definition: 'Short for "few understand," implying that only a small number of people truly grasp the importance of something.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['exclusive knowledge', 'understanding', 'superiority'],
    examples: ['Bitcoin is the future. Few.', 'DeFi will replace banks. Few understand.']
  },
  {
    id: 'ngmi',
    term: 'NGMI',
    definition: 'Stands for "Not Gonna Make It" - used to describe poor decision-making or behavior that could lead to losses in crypto.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['pessimism', 'warning', 'behavior'],
    examples: ['Selling at the bottom? NGMI', 'FOMOing into every pump is NGMI behavior']
  },
  {
    id: 'based',
    term: 'Based',
    definition: 'Expressing approval or agreement, often used to describe someone or something that is authentic, cool, or admirable in crypto culture.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['approval', 'authentic', 'slang'],
    examples: ['That analysis is based', 'Based take on the market']
  },
  {
    id: 'lfg',
    term: 'LFG',
    definition: 'Stands for "Let\'s F***ing Go" - an expression of excitement and enthusiasm, often used when prices are pumping or good news drops.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['excitement', 'enthusiasm', 'celebration'],
    examples: ['Bitcoin to 100k LFG!', 'New partnership announcement LFG!']
  },
  {
    id: 'hopium',
    term: 'Hopium',
    definition: 'Blind hope or unrealistic optimism about crypto investments, often ignoring negative signs or fundamentals.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['hope', 'optimism', 'unrealistic'],
    examples: ['Injecting hopium about this altcoin', 'Pure hopium that it will recover']
  },
  {
    id: 'copium',
    term: 'Copium',
    definition: 'A combination of "cope" and "opium" - used to describe someone who is in denial about their losses or bad investments.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['denial', 'losses', 'psychology'],
    examples: ['Smoking copium about that rugpull', 'Heavy copium after buying the top']
  },
  {
    id: 'chad',
    term: 'Chad',
    definition: 'Someone who makes successful trades or investments, often used to describe confident and successful crypto traders.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['success', 'confident', 'winner'],
    examples: ['That trader is a total chad', 'Chad move buying the dip']
  },
  {
    id: 'virgin',
    term: 'Virgin',
    definition: 'The opposite of chad, used to describe someone who makes poor trading decisions or lacks experience.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['inexperienced', 'poor decisions', 'opposite of chad'],
    examples: ['Virgin move selling at a loss', 'Chad vs Virgin meme format']
  },
  {
    id: 'simp',
    term: 'Simp',
    definition: 'Someone who shows excessive devotion to a particular crypto project or influencer, often ignoring red flags.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['devotion', 'excessive', 'influencer'],
    examples: ['Stop simping for that project', 'Classic simp behavior']
  },
  {
    id: 'maxi',
    term: 'Maxi',
    definition: 'A maximalist who believes strongly in one particular cryptocurrency above all others, most commonly Bitcoin.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['maximalist', 'devotion', 'belief'],
    examples: ['Bitcoin maxi', 'Ethereum maxi defending their chain']
  },
  {
    id: 'nocoiner',
    term: 'No-coiner',
    definition: 'Someone who doesn\'t own any cryptocurrency and is often skeptical or critical of crypto in general.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['skeptical', 'no crypto', 'critical'],
    examples: ['Another no-coiner FUD article', 'Converting no-coiners to crypto']
  },
  {
    id: 'rekt',
    term: 'Rekt',
    definition: 'Slang for "wrecked" - suffering significant losses, often from bad trades or liquidations.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['losses', 'wrecked', 'liquidation'],
    examples: ['Got rekt on that leverage trade', 'Absolutely rekt by the market']
  },
  {
    id: 'when-lambo',
    term: 'When Lambo?',
    definition: 'A meme phrase asking when crypto gains will be enough to afford a Lamborghini, symbolizing wealth from crypto.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['meme', 'wealth', 'gains'],
    examples: ['Portfolio up 1000%, when Lambo?', 'Classic crypto meme']
  },
  {
    id: 'have-fun-staying-poor',
    term: 'Have Fun Staying Poor (HFSP)',
    definition: 'A dismissive phrase used toward crypto skeptics, implying they\'ll miss out on wealth by not investing.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['dismissive', 'skeptics', 'wealth'],
    examples: ['Don\'t buy Bitcoin? HFSP', 'Classic response to no-coiners']
  },
  {
    id: 'probably-nothing',
    term: 'Probably Nothing',
    definition: 'Sarcastic phrase used when sharing potentially significant crypto news or developments that others might dismiss.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['sarcasm', 'significant', 'news'],
    examples: ['Major company adopts Bitcoin, probably nothing', 'New DeFi protocol launches, probably nothing']
  },
  {
    id: 'this-is-fine',
    term: 'This is Fine',
    definition: 'Meme phrase used during market crashes or bad news, pretending everything is okay when it clearly isn\'t.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['meme', 'denial', 'crash'],
    examples: ['Portfolio down 90%, this is fine', 'Market crashing but this is fine']
  },
  {
    id: 'number-go-up',
    term: 'Number Go Up (NGU)',
    definition: 'Simple phrase describing the desire or expectation for cryptocurrency prices to increase.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['price', 'increase', 'simple'],
    examples: ['NGU technology', 'Just want number go up']
  },
  {
    id: 'exit-liquidity',
    term: 'Exit Liquidity',
    definition: 'Newer investors who buy at high prices, providing liquidity for early investors to sell and exit profitably.',
    category: 'Social',
    difficulty: 'Intermediate',
    tags: ['liquidity', 'exit', 'new investors'],
    examples: ['Retail became exit liquidity', 'Don\'t be the exit liquidity']
  },
  {
    id: 'anon',
    term: 'Anon',
    definition: 'Short for anonymous, commonly used to address people in crypto communities, especially on Twitter and Discord.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['anonymous', 'address', 'community'],
    examples: ['Good morning anon', 'Thanks for the alpha, anon']
  },
  {
    id: 'fren',
    term: 'Fren',
    definition: 'Intentional misspelling of "friend" used affectionately in crypto communities to address fellow community members.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['friend', 'community', 'affectionate'],
    examples: ['Hello fren', 'Thanks for the help, fren']
  },
  {
    id: 'degen',
    term: 'Degen',
    definition: 'Short for degenerate - someone who makes high-risk, often irrational crypto trades or investments.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['high-risk', 'irrational', 'trading'],
    examples: ['Total degen move', 'Degen trading on 100x leverage']
  },
  {
    id: 'up-only',
    term: 'Up Only',
    definition: 'Expressing the belief or hope that prices will only go up, often used ironically during dumps.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['optimism', 'prices', 'ironic'],
    examples: ['Bitcoin up only!', 'Saying up only while everything dumps']
  },
  {
    id: 'send-it',
    term: 'Send It',
    definition: 'Encouraging someone to make a bold or risky crypto trade or investment decision.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['encouragement', 'bold', 'risky'],
    examples: ['100x leverage? Send it!', 'YOLO into that altcoin, send it']
  },
  {
    id: 'touch-grass',
    term: 'Touch Grass',
    definition: 'Telling someone to go outside and disconnect from crypto charts and social media for their mental health.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['mental health', 'outside', 'disconnect'],
    examples: ['Been staring at charts for 12 hours, time to touch grass', 'You need to touch grass']
  },
  {
    id: 'cope-and-seethe',
    term: 'Cope and Seethe',
    definition: 'Telling someone who is angry about losses or bad trades to deal with their emotions and anger.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['anger', 'emotions', 'losses'],
    examples: ['Portfolio down 80%? Cope and seethe', 'Missed the pump? Cope and seethe']
  },
  {
    id: 'sus',
    term: 'Sus',
    definition: 'Short for suspicious - used to describe questionable crypto projects, trades, or behavior.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['suspicious', 'questionable', 'behavior'],
    examples: ['That new token looks sus', 'Sus trading volume on that exchange']
  },
  {
    id: 'no-cap',
    term: 'No Cap',
    definition: 'Meaning no lie or for real, used to emphasize truthfulness about crypto predictions or statements.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['truthful', 'no lie', 'emphasis'],
    examples: ['Bitcoin to 100k no cap', 'This project is legit no cap']
  },
  {
    id: 'slaps',
    term: 'Slaps',
    definition: 'Something that is really good or impressive, often used to describe good crypto trades or projects.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['good', 'impressive', 'quality'],
    examples: ['That trading strategy slaps', 'This new NFT collection slaps']
  },
  {
    id: 'mid',
    term: 'Mid',
    definition: 'Mediocre or average, used to describe crypto projects or investments that aren\'t particularly impressive.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['mediocre', 'average', 'unimpressive'],
    examples: ['That token is mid', 'Another mid NFT collection']
  },
  {
    id: 'smol',
    term: 'Smol',
    definition: 'Intentional cute misspelling of "small", often used to describe small crypto bags or positions.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['small', 'cute', 'position'],
    examples: ['Just a smol bag of ETH', 'Smol position but hodling']
  },
  {
    id: 'comfy',
    term: 'Comfy',
    definition: 'Feeling confident and relaxed about your crypto holdings, not worried about short-term price movements.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['confident', 'relaxed', 'holdings'],
    examples: ['Staying comfy with my Bitcoin stack', 'Comfy holding through the dip']
  },
  {
    id: 'rotate',
    term: 'Rotate',
    definition: 'Moving money from one cryptocurrency or sector to another based on market trends or opportunities.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['move money', 'trends', 'opportunities'],
    examples: ['Time to rotate from Bitcoin to altcoins', 'Rotating into DeFi tokens']
  },
  {
    id: 'bag',
    term: 'Bag',
    definition: 'A crypto holding or position, often used to describe the amount of a particular cryptocurrency someone owns.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['holding', 'position', 'amount'],
    examples: ['Heavy bag of LINK', 'Small bag of that altcoin']
  },
  {
    id: 'bag-holder',
    term: 'Bag Holder',
    definition: 'Someone stuck holding a cryptocurrency that has significantly decreased in value.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['stuck', 'decreased value', 'loss'],
    examples: ['Became a bag holder after the crash', 'Don\'t want to be a bag holder']
  },
  {
    id: 'right-click-save',
    term: 'Right-click Save',
    definition: 'Mocking NFTs by suggesting you can just save the image instead of buying the NFT.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['mocking', 'NFT', 'save image'],
    examples: ['Just right-click save that NFT', 'Why buy when you can right-click save?']
  },
  {
    id: 'ponzi',
    term: 'Ponzi',
    definition: 'Accusation that a crypto project is a Ponzi scheme that pays returns using new investors\' money.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['accusation', 'scheme', 'fraud'],
    examples: ['That yield farming protocol is a ponzi', 'Calling out ponzi projects']
  },
  {
    id: 'safemoon',
    term: 'Safemoon',
    definition: 'Used mockingly to describe sketchy altcoins with "safe" or "moon" in their names that often turn out to be scams.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['mocking', 'sketchy', 'scam'],
    examples: ['Another Safemoon copycat', 'Avoid those Safemoon clones']
  },
  {
    id: 'gigabrain',
    term: 'Gigabrain',
    definition: 'Someone with exceptional intelligence or insight in crypto, making consistently smart decisions.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['intelligence', 'insight', 'smart'],
    examples: ['That analyst is gigabrain', 'Gigabrain move selling before the crash']
  },
  {
    id: 'smoothbrain',
    term: 'Smoothbrain',
    definition: 'The opposite of gigabrain - someone who makes poor or unintelligent crypto decisions.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['poor decisions', 'unintelligent', 'opposite of gigabrain'],
    examples: ['Smoothbrain move buying the top', 'That was peak smoothbrain behavior']
  }
];


// New terms from Coinbase glossary
export const newCoinbaseTerms: CryptoTerm[] = [
  {
    id: 'gamefi',
    term: 'GameFi',
    definition: 'Game finance, a fusion of online gaming and decentralized finance, creating an in-game economy with play-to-earn mechanics.',
    category: 'Gaming',
    difficulty: 'Intermediate',
    tags: ['gaming', 'defi', 'play-to-earn', 'nft'],
    examples: ['Axie Infinity', 'The Sandbox', 'Decentraland games']
  },
  {
    id: 'axie-infinity',
    term: 'Axie Infinity',
    definition: 'A popular NFT-based Pokémon-style game where players can earn cryptocurrency by breeding, battling, and trading digital creatures called Axies.',
    category: 'Gaming',
    difficulty: 'Beginner',
    tags: ['nft', 'gaming', 'play-to-earn', 'axs'],
    examples: ['Breeding Axies for profit', 'Daily quest rewards', 'Scholarship programs']
  },
  {
    id: 'bitcoin-halving',
    term: 'Bitcoin Halving',
    definition: 'An event that occurs approximately every four years where the reward for mining Bitcoin blocks is cut in half, reducing the rate of new Bitcoin creation.',
    category: 'Mining',
    difficulty: 'Intermediate',
    tags: ['bitcoin', 'mining', 'supply', 'scarcity'],
    examples: ['2020 halving reduced rewards from 12.5 to 6.25 BTC', 'Next halving expected in 2024']
  },
  {
    id: 'dex',
    term: 'Decentralized Exchange (DEX)',
    definition: 'A cryptocurrency exchange that operates without a central authority, allowing peer-to-peer trading directly from users\' wallets.',
    category: 'DeFi',
    difficulty: 'Intermediate',
    tags: ['exchange', 'decentralized', 'p2p', 'trading'],
    examples: ['Uniswap', 'SushiSwap', 'PancakeSwap', '1inch']
  },
  {
    id: 'icp',
    term: 'Internet Computer (ICP)',
    definition: 'A blockchain protocol that aims to create a decentralized internet by running on independent data centers worldwide.',
    category: 'Blockchain',
    difficulty: 'Advanced',
    tags: ['blockchain', 'internet', 'decentralized', 'computing'],
    examples: ['Decentralized websites', 'Smart contract platforms', 'Web3 applications']
  },
  {
    id: 'proof-of-work',
    term: 'Proof of Work (PoW)',
    definition: 'A consensus mechanism where miners compete to solve cryptographic puzzles to validate transactions and secure the network.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['consensus', 'mining', 'security', 'energy'],
    examples: ['Bitcoin mining', 'Ethereum (before merge)', 'Litecoin mining']
  },
  {
    id: 'proof-of-stake',
    term: 'Proof of Stake (PoS)',
    definition: 'A consensus mechanism where validators are chosen to create new blocks based on their stake in the network rather than computational power.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['consensus', 'staking', 'validators', 'energy-efficient'],
    examples: ['Ethereum 2.0', 'Cardano', 'Solana', 'Polygon']
  },
  {
    id: 'protocol',
    term: 'Protocol',
    definition: 'A set of rules that establish the structure of a blockchain and allow different parts of the network to communicate.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['rules', 'blockchain', 'communication', 'structure'],
    examples: ['Bitcoin protocol', 'Ethereum protocol', 'HTTP protocol']
  },
  {
    id: 'technical-analysis',
    term: 'Technical Analysis',
    definition: 'The study of statistical trends and patterns in market data to identify potential future price movements.',
    category: 'Trading',
    difficulty: 'Intermediate',
    tags: ['analysis', 'charts', 'patterns', 'trading'],
    examples: ['Candlestick patterns', 'Support and resistance levels', 'Moving averages']
  },
  {
    id: 'volatility',
    term: 'Volatility',
    definition: 'A measure of how much the price of an asset moves up or down over time, indicating the degree of price uncertainty.',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['price', 'movement', 'risk', 'uncertainty'],
    examples: ['Bitcoin\'s high volatility', 'Stablecoin low volatility', 'Market volatility during news events']
  },
  {
    id: 'uniswap',
    term: 'Uniswap',
    definition: 'The largest decentralized exchange on Ethereum, using automated market makers (AMM) to facilitate token swaps.',
    category: 'DeFi',
    difficulty: 'Intermediate',
    tags: ['dex', 'ethereum', 'amm', 'liquidity'],
    examples: ['Token swapping', 'Liquidity provision', 'UNI governance token']
  },
  {
    id: 'hash-rate',
    term: 'Hash Rate',
    definition: 'A measure of the computational power of a blockchain network, group, or individual miner, typically measured in hashes per second.',
    category: 'Mining',
    difficulty: 'Intermediate',
    tags: ['mining', 'power', 'computation', 'security'],
    examples: ['Bitcoin network hash rate', 'Mining pool hash rate', 'Individual miner hash rate']
  },
  {
    id: 'erc-721',
    term: 'ERC-721',
    definition: 'A non-fungible token standard on Ethereum that provides a framework for creating unique, non-interchangeable digital assets.',
    category: 'NFTs',
    difficulty: 'Intermediate',
    tags: ['nft', 'ethereum', 'standard', 'unique'],
    examples: ['CryptoPunks', 'Bored Ape Yacht Club', 'Digital art collections']
  },
  {
    id: 'evm',
    term: 'Ethereum Virtual Machine (EVM)',
    definition: 'A decentralized computation engine that executes smart contracts on the Ethereum network, serving as the runtime environment.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['ethereum', 'smart contracts', 'computation', 'virtual machine'],
    examples: ['Smart contract execution', 'DApp deployment', 'EVM-compatible chains']
  },
  {
    id: 'node',
    term: 'Node',
    definition: 'A computer that participates in a blockchain network by maintaining a copy of the ledger and validating transactions.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['network', 'computer', 'validation', 'decentralization'],
    examples: ['Bitcoin full nodes', 'Ethereum validators', 'Lightweight nodes']
  },
  {
    id: 'sidechains',
    term: 'Sidechains',
    definition: 'Separate blockchain networks that connect to a parent blockchain, allowing for additional functionality and scalability.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['scaling', 'blockchain', 'interoperability', 'layer2'],
    examples: ['Polygon', 'Liquid Bitcoin sidechain', 'RSK sidechain']
  },
  {
    id: 'brc-20',
    term: 'BRC-20 Tokens',
    definition: 'An experimental token standard on the Bitcoin blockchain that enables the creation of fungible tokens similar to ERC-20.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['bitcoin', 'tokens', 'ordinals', 'experimental'],
    examples: ['ORDI token', 'SATS token', 'Bitcoin-based meme coins']
  },
  {
    id: 'cloud-mining',
    term: 'Cloud Mining',
    definition: 'A method of mining cryptocurrencies by renting computing power from remote data centers rather than owning physical hardware.',
    category: 'Mining',
    difficulty: 'Beginner',
    tags: ['mining', 'cloud', 'rental', 'remote'],
    examples: ['Genesis Mining', 'Hashflare', 'NiceHash marketplace']
  },
  {
    id: 'zero-knowledge-proofs',
    term: 'Zero-Knowledge Proofs',
    definition: 'A cryptographic method that allows one party to prove knowledge of information without revealing the information itself.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['cryptography', 'privacy', 'verification', 'zk'],
    examples: ['zk-SNARKs', 'zk-STARKs', 'Privacy coins like Zcash']
  },
  {
    id: 'erc-20',
    term: 'ERC-20',
    definition: 'A technical standard for fungible tokens on Ethereum that defines a common interface for token creation and interaction.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['ethereum', 'tokens', 'standard', 'fungible'],
    examples: ['USDC', 'LINK', 'UNI', 'Most Ethereum tokens']
  },
  {
    id: 'erc-1155',
    term: 'ERC-1155',
    definition: 'A multi-token standard on Ethereum that enables the creation and transfer of both fungible and non-fungible tokens in a single contract.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['ethereum', 'multi-token', 'gaming', 'efficiency'],
    examples: ['Gaming items', 'Enjin platform', 'OpenSea collections']
  },
  {
    id: 'zk-rollups',
    term: 'Zero-Knowledge Rollups (ZK Rollups)',
    definition: 'A Layer 2 scaling solution that bundles transactions off-chain and uses zero-knowledge proofs to validate them on the main chain.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['layer2', 'scaling', 'zero-knowledge', 'ethereum'],
    examples: ['Polygon zkEVM', 'zkSync', 'StarkNet']
  },
  {
    id: 'blockchain-oracle',
    term: 'Blockchain Oracle',
    definition: 'A service that connects blockchains to external systems, enabling smart contracts to access real-world data and events.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['oracle', 'external data', 'smart contracts', 'connectivity'],
    examples: ['Chainlink', 'Band Protocol', 'Price feeds', 'Weather data']
  },
  {
    id: 'soulbound-tokens',
    term: 'Soulbound Tokens (SBT)',
    definition: 'Non-transferable digital tokens that represent credentials, achievements, or identity markers tied permanently to a specific wallet.',
    category: 'Identity',
    difficulty: 'Advanced',
    tags: ['identity', 'non-transferable', 'credentials', 'reputation'],
    examples: ['Educational certificates', 'Professional credentials', 'Governance participation']
  },
  {
    id: 'interoperability',
    term: 'Blockchain Interoperability',
    definition: 'The ability of different blockchain networks to communicate and interact with each other, sharing data and value.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['cross-chain', 'communication', 'bridges', 'connectivity'],
    examples: ['Cross-chain bridges', 'Cosmos ecosystem', 'Polkadot parachains']
  },
  {
    id: 'bitvm',
    term: 'Bitcoin BitVM',
    definition: 'A computing paradigm for expressing Turing-complete Bitcoin contracts without requiring changes to the network\'s consensus rules.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['bitcoin', 'smart contracts', 'turing-complete', 'innovation'],
    examples: ['Bitcoin smart contracts', 'Advanced Bitcoin scripting', 'Layer 2 solutions']
  },
  {
    id: 'soft-fork',
    term: 'Soft Fork',
    definition: 'A backward-compatible upgrade to a blockchain protocol that tightens or adds new rules without breaking compatibility with older versions.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['upgrade', 'backward-compatible', 'protocol', 'consensus'],
    examples: ['Bitcoin SegWit', 'Taproot upgrade', 'BIP updates']
  },
  {
    id: 'hard-fork',
    term: 'Hard Fork',
    definition: 'A non-backward-compatible upgrade to a blockchain protocol that creates a permanent divergence from the original chain.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['upgrade', 'non-compatible', 'split', 'consensus'],
    examples: ['Bitcoin Cash fork', 'Ethereum Classic split', 'Monero privacy upgrades']
  },
  {
    id: 'token-burning',
    term: 'Token Burning',
    definition: 'The permanent removal of tokens from circulation by sending them to an unspendable address, typically to reduce supply.',
    category: 'Economics',
    difficulty: 'Intermediate',
    tags: ['supply', 'deflation', 'economics', 'scarcity'],
    examples: ['Binance BNB burns', 'Ethereum EIP-1559', 'SHIB token burns']
  },
  {
    id: 'dpos',
    term: 'Delegated Proof of Stake (DPoS)',
    definition: 'A consensus mechanism where token holders vote for delegates who validate transactions and secure the network on their behalf.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['consensus', 'delegation', 'voting', 'governance'],
    examples: ['EOS network', 'Tron blockchain', 'BitShares platform']
  },
  {
    id: 'layer-0',
    term: 'Layer-0 Protocols',
    definition: 'The foundational infrastructure layer that enables the creation of Layer-1 blockchains with shared security and interoperability.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['infrastructure', 'foundation', 'interoperability', 'shared-security'],
    examples: ['Cosmos Hub', 'Polkadot Relay Chain', 'Avalanche consensus']
  },
  {
    id: 'dex-aggregator',
    term: 'DEX Aggregator',
    definition: 'A service that searches multiple decentralized exchanges to find the best prices and routes for token swaps.',
    category: 'DeFi',
    difficulty: 'Intermediate',
    tags: ['dex', 'aggregation', 'price', 'optimization'],
    examples: ['1inch', 'Matcha', 'ParaSwap', 'Jupiter (Solana)']
  },
  {
    id: 'socialfi',
    term: 'SocialFi',
    definition: 'The combination of social media and decentralized finance, creating platforms where users can monetize their social interactions and content.',
    category: 'Social',
    difficulty: 'Intermediate',
    tags: ['social media', 'monetization', 'defi', 'creator economy'],
    examples: ['Friend.tech', 'Lens Protocol', 'BitClout', 'Mirror.xyz']
  },
  {
    id: 'recovery-phrase',
    term: 'Recovery Phrase',
    definition: 'A series of 12 or 24 words generated by a cryptocurrency wallet that can be used to recover access to funds if the wallet is lost.',
    category: 'Security',
    difficulty: 'Beginner',
    tags: ['recovery', 'backup', 'mnemonic', 'security'],
    examples: ['12-word seed phrase', '24-word recovery phrase', 'BIP39 standard']
  },
  {
    id: 'nft-floor-price',
    term: 'NFT Floor Price',
    definition: 'The lowest price for any NFT in a specific collection, often used as a benchmark for the collection\'s overall value.',
    category: 'NFTs',
    difficulty: 'Beginner',
    tags: ['nft', 'price', 'collection', 'valuation'],
    examples: ['Bored Ape floor price', 'CryptoPunk floor', 'Collection trading activity']
  },
  {
    id: 'real-world-assets',
    term: 'Real-World Assets (RWA)',
    definition: 'Tangible assets from the physical world that are tokenized and represented on blockchain networks.',
    category: 'Tokenization',
    difficulty: 'Intermediate',
    tags: ['tokenization', 'real estate', 'commodities', 'traditional assets'],
    examples: ['Tokenized real estate', 'Commodity tokens', 'Art tokenization']
  },
  {
    id: 'nftfi',
    term: 'NFT Finance (NFTFi)',
    definition: 'Financial services and products built around non-fungible tokens, including lending, borrowing, and derivatives.',
    category: 'NFTs',
    difficulty: 'Advanced',
    tags: ['nft', 'finance', 'lending', 'derivatives'],
    examples: ['NFT collateralized loans', 'NFT fractionalization', 'NFT derivatives']
  },
  {
    id: 'ipfs',
    term: 'InterPlanetary File System (IPFS)',
    definition: 'A decentralized protocol for storing and sharing data in a distributed file system, commonly used for NFT metadata.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['storage', 'decentralized', 'file system', 'metadata'],
    examples: ['NFT image storage', 'Decentralized websites', 'Distributed content']
  },
  {
    id: 'ieo',
    term: 'Initial Exchange Offering (IEO)',
    definition: 'A fundraising method where a cryptocurrency exchange facilitates the token sale on behalf of a startup project.',
    category: 'Fundraising',
    difficulty: 'Intermediate',
    tags: ['fundraising', 'exchange', 'token sale', 'launch'],
    examples: ['Binance Launchpad', 'Coinbase Launchpool', 'FTX Launchpad']
  }
];

export const categories = [
  'Fundamentals',
  'Technology', 
  'Trading',
  'DeFi',
  'NFTs',
  'Mining',
  'Security',
  'Gaming',
  'Social',
  'Digital Assets',
  'Finance',
  'Governance',
  'Blockchain'
];

// Additional terms from v0 website
export const v0WebsiteTerms: CryptoTerm[] = [
  {
    id: 'pump-and-dump',
    term: 'Pump and Dump',
    definition: 'A form of market manipulation where the price of a cryptocurrency is artificially inflated through misleading marketing, followed by a rapid sell-off.',
    category: 'Security',
    difficulty: 'Intermediate',
    tags: ['manipulation', 'scam', 'trading'],
    examples: ['Coordinated social media campaigns', 'Celebrity endorsements', 'Telegram pump groups']
  },
  {
    id: 'rug-pull',
    term: 'Rug Pull',
    definition: 'A type of exit scam where developers abandon a project and steal investors\' funds.',
    category: 'Security',
    difficulty: 'Intermediate',
    tags: ['scam', 'exit', 'defi'],
    examples: ['DeFi project abandonment', 'Liquidity pool draining', 'Token contract exploits']
  },
  {
    id: 'flash-loan',
    term: 'Flash Loan',
    definition: 'A type of uncollateralized loan that must be borrowed and repaid within the same blockchain transaction.',
    category: 'DeFi',
    difficulty: 'Advanced',
    tags: ['lending', 'defi', 'arbitrage'],
    examples: ['Aave flash loans', 'Arbitrage opportunities', 'Liquidation assistance']
  },
  {
    id: 'atomic-swap',
    term: 'Atomic Swap',
    definition: 'A smart contract technology that enables the exchange of cryptocurrencies from different blockchains without intermediaries.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['cross-chain', 'decentralized', 'swap'],
    examples: ['Bitcoin-Litecoin swaps', 'Cross-chain DEX protocols', 'Peer-to-peer exchanges']
  },
  {
    id: 'multisig',
    term: 'Multisig',
    definition: 'Multi-signature wallet that requires multiple private keys to authorize a cryptocurrency transaction.',
    category: 'Security',
    difficulty: 'Intermediate',
    tags: ['wallet', 'security', 'shared-control'],
    examples: ['2-of-3 multisig wallets', 'Corporate treasury management', 'DAO fund management']
  },
  {
    id: 'sharding',
    term: 'Sharding',
    definition: 'A scaling technique that divides a blockchain network into smaller, parallel chains to increase transaction throughput.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['scalability', 'parallel', 'network'],
    examples: ['Ethereum 2.0 sharding', 'Zilliqa sharding', 'Near Protocol sharding']
  },
  {
    id: 'zero-knowledge-proof',
    term: 'Zero-Knowledge Proof',
    definition: 'A cryptographic method that allows one party to prove knowledge of information without revealing the information itself.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['privacy', 'cryptography', 'proof'],
    examples: ['zk-SNARKs', 'zk-STARKs', 'Privacy coins like Zcash']
  },
  {
    id: 'dyor',
    term: 'DYOR',
    definition: 'Do Your Own Research - advice to thoroughly investigate before investing in any cryptocurrency project.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['research', 'advice', 'investment'],
    examples: ['Reading whitepapers', 'Analyzing team credentials', 'Checking project roadmaps']
  },
  {
    id: 'wagmi',
    term: 'WAGMI',
    definition: 'We\'re All Gonna Make It - an optimistic rallying cry expressing confidence in crypto success.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['optimism', 'community', 'success'],
    examples: ['Community encouragement posts', 'Bull market celebrations', 'Project milestone announcements']
  },
  {
    id: 'gm',
    term: 'GM',
    definition: 'Good Morning - a friendly greeting commonly used in crypto Twitter and Discord communities.',
    category: 'Social',
    difficulty: 'Beginner',
    tags: ['greeting', 'community', 'culture'],
    examples: ['Daily Twitter greetings', 'Discord community check-ins', 'Influencer morning posts']
  },
  {
    id: 'web3',
    term: 'Web3',
    definition: 'The vision of a decentralized internet built on blockchain technology, giving users control over their data and digital assets.',
    category: 'Technology',
    difficulty: 'Intermediate',
    tags: ['decentralization', 'internet', 'ownership'],
    examples: ['Decentralized social media', 'Blockchain-based gaming', 'Decentralized finance platforms']
  },
  {
    id: 'metaverse',
    term: 'Metaverse',
    definition: 'A virtual world or collection of virtual worlds where users can interact, work, and play using digital avatars.',
    category: 'Digital Assets',
    difficulty: 'Intermediate',
    tags: ['virtual-reality', 'gaming', 'digital-world'],
    examples: ['Decentraland', 'The Sandbox', 'Axie Infinity']
  },
  {
    id: 'cross-chain',
    term: 'Cross-chain',
    definition: 'Technology that enables interoperability between different blockchain networks.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['interoperability', 'bridge', 'multi-chain'],
    examples: ['Polkadot parachains', 'Cosmos IBC', 'Ethereum-BSC bridges']
  },
  {
    id: 'oracle',
    term: 'Oracle',
    definition: 'A service that provides external data to blockchain networks and smart contracts.',
    category: 'Technology',
    difficulty: 'Advanced',
    tags: ['external-data', 'smart-contracts', 'connectivity'],
    examples: ['Chainlink price feeds', 'Weather data oracles', 'Sports betting oracles']
  },
  {
    id: 'tokenomics',
    term: 'Tokenomics',
    definition: 'The economic model and structure of a cryptocurrency token, including supply, distribution, and utility.',
    category: 'Finance',
    difficulty: 'Intermediate',
    tags: ['economics', 'token-design', 'utility'],
    examples: ['Bitcoin\'s fixed supply', 'Ethereum\'s fee burning', 'Governance token distribution']
  },
  {
    id: 'governance-token',
    term: 'Governance Token',
    definition: 'A cryptocurrency token that gives holders voting rights in the governance of a decentralized protocol or organization.',
    category: 'Governance',
    difficulty: 'Intermediate',
    tags: ['voting', 'dao', 'governance'],
    examples: ['UNI (Uniswap)', 'COMP (Compound)', 'MKR (MakerDAO)']
  },
  {
    id: 'ico',
    term: 'ICO',
    definition: 'Initial Coin Offering - a fundraising method where new cryptocurrency projects sell tokens to early investors.',
    category: 'Finance',
    difficulty: 'Intermediate',
    tags: ['fundraising', 'token-sale', 'investment'],
    examples: ['Ethereum ICO (2014)', 'EOS ICO', 'Various 2017 ICO projects']
  },
  {
    id: 'airdrop',
    term: 'Airdrop',
    definition: 'The distribution of free cryptocurrency tokens to wallet addresses, often used for marketing or community building.',
    category: 'Digital Assets',
    difficulty: 'Beginner',
    tags: ['distribution', 'marketing', 'free-tokens'],
    examples: ['Uniswap UNI token distribution', 'Ethereum fork airdrops', 'New project launches']
  }
];

// Combine original and new terms
export const allCryptoTerms = [...cryptoTerms, ...newCoinbaseTerms, ...v0WebsiteTerms].filter(term => 
  !['Psychology', 'Culture', 'Economics', 'Identity', 'Tokenization', 'Fundraising'].includes(term.category)
);

export const difficulties = ['Beginner', 'Intermediate', 'Advanced'];