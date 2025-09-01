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
    examples: ['Buying Bitcoin on one exchange and selling on another for profit']
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
    examples: ['Sending ETH costs gas', 'Smart contract interactions require gas', 'Gas prices vary by network congestion']
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
    id: 'ico',
    term: 'Initial Coin Offering (ICO)',
    definition: 'A fundraising method where new projects sell their underlying crypto tokens in exchange for Bitcoin or Ethereum.',
    category: 'Fundraising',
    difficulty: 'Intermediate',
    tags: ['fundraising', 'tokens', 'investment'],
    examples: ['Ethereum ICO in 2014', 'EOS ICO', '2017 ICO boom']
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
    examples: ['High liquidity on major exchanges', 'Low liquidity for small-cap tokens']
  },
  {
    id: 'market-cap',
    term: 'Market Capitalization',
    definition: 'The total value of a cryptocurrency, calculated by multiplying the current price by the total circulating supply.',
    category: 'Trading',
    difficulty: 'Beginner',
    tags: ['valuation', 'price', 'supply'],
    examples: ['Bitcoin market cap', 'Total crypto market cap', 'Project ranking by market cap']
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
    examples: ['Ethereum staking', 'Cardano delegation', 'Polkadot nomination']
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
    examples: ['Bitcoin whales', 'Whale watching tools', 'Whale movement alerts']
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
    examples: ['Compound farming', 'Uniswap LP tokens', 'Liquidity mining programs']
  }
];

export const categories = [
  'Fundamentals',
  'Technology',
  'Trading',
  'DeFi',
  'Mining',
  'Security',
  'NFTs',
  'Culture',
  'Marketing',
  'Psychology',
  'Compliance',
  'Fundraising',
  'Research'
];

export const difficulties = ['Beginner', 'Intermediate', 'Advanced'];