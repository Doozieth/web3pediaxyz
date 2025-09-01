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
    id: 'arbitrage',
    term: 'Arbitrage',
    definition: 'The practice of buying and selling identical assets in different markets to profit from price differences.',
    category: 'Trading',
    difficulty: 'Intermediate',
    tags: ['trading', 'profit', 'price difference']
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
    tags: ['liquidity', 'loss', 'volatility']
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
    tags: ['price difference', 'execution', 'market']
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
  'Social',
  'Marketing',
  'Psychology',
  'Compliance',
  'Fundraising',
  'Research'
];

export const difficulties = ['Beginner', 'Intermediate', 'Advanced'];