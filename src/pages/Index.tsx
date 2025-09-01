import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import { BookOpen, Wrench, TrendingUp, Newspaper } from "lucide-react";

const Index = () => {
  const learningResources = [
    {
      title: "Binance Academy",
      description: "Comprehensive crypto education platform with courses for all levels",
      category: "Education",
      rating: 4.8,
      tags: ["Beginner-friendly", "Free", "Comprehensive"],
      url: "https://academy.binance.com",
      featured: true
    },
    {
      title: "Coin Bureau",
      description: "In-depth analysis and educational content about cryptocurrency",
      category: "Education",
      rating: 4.7,
      tags: ["Analysis", "YouTube", "Research"],
      url: "https://coinbureau.com",
    },
    {
      title: "Crypto Explained",
      description: "Simple explanations of complex crypto concepts",
      category: "Education", 
      rating: 4.6,
      tags: ["Simple", "Concepts", "Beginner"],
      url: "https://cryptoexplained.com",
    }
  ];

  const toolsResources = [
    {
      title: "MetaMask",
      description: "Most popular cryptocurrency wallet for Ethereum and other networks",
      category: "Wallet",
      rating: 4.5,
      tags: ["Wallet", "Browser Extension", "DeFi"],
      url: "https://metamask.io",
      featured: true
    },
    {
      title: "DeFiPulse",
      description: "Track and analyze decentralized finance protocols",
      category: "Analytics",
      rating: 4.4,
      tags: ["DeFi", "Analytics", "Protocols"],
      url: "https://defipulse.com",
    },
    {
      title: "CoinTracker",
      description: "Portfolio tracking and tax reporting for crypto investments",
      category: "Portfolio",
      rating: 4.3,
      tags: ["Portfolio", "Tax", "Tracking"],
      url: "https://cointracker.io",
    }
  ];

  const exchangeResources = [
    {
      title: "Coinbase",
      description: "User-friendly exchange perfect for beginners to buy crypto",
      category: "Exchange",
      rating: 4.2,
      tags: ["Beginner-friendly", "Regulated", "Fiat"],
      url: "https://coinbase.com",
      featured: true
    },
    {
      title: "Kraken",
      description: "Advanced trading platform with strong security features",
      category: "Exchange",
      rating: 4.4,
      tags: ["Advanced", "Security", "Trading"],
      url: "https://kraken.com",
    },
    {
      title: "Binance",
      description: "World's largest crypto exchange by trading volume",
      category: "Exchange",
      rating: 4.3,
      tags: ["High Volume", "Low Fees", "Global"],
      url: "https://binance.com",
    }
  ];

  const newsResources = [
    {
      title: "CoinDesk",
      description: "Leading source for crypto news and market analysis",
      category: "News",
      rating: 4.6,
      tags: ["News", "Analysis", "Market"],
      url: "https://coindesk.com",
      featured: true
    },
    {
      title: "The Block",
      description: "Institutional-grade crypto news and research",
      category: "News",
      rating: 4.5,
      tags: ["Institutional", "Research", "Professional"],
      url: "https://theblock.co",
    },
    {
      title: "Decrypt",
      description: "Accessible crypto news for mainstream audiences",
      category: "News",
      rating: 4.4,
      tags: ["Accessible", "Mainstream", "Daily"],
      url: "https://decrypt.co",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <CategorySection
        title="Learning Resources"
        description="Start your crypto education with these trusted learning platforms and guides"
        icon={BookOpen}
        resources={learningResources}
      />
      
      <div className="bg-muted/30">
        <CategorySection
          title="Essential Tools"
          description="Wallets, trackers, and tools to manage your crypto journey safely"
          icon={Wrench}
          resources={toolsResources}
        />
      </div>
      
      <CategorySection
        title="Trusted Exchanges"
        description="Secure and reputable platforms to buy, sell, and trade cryptocurrencies"
        icon={TrendingUp}
        resources={exchangeResources}
      />
      
      <div className="bg-muted/30">
        <CategorySection
          title="News & Analysis"
          description="Stay updated with the latest crypto news and market insights"
          icon={Newspaper}
          resources={newsResources}
        />
      </div>
      
      <footer className="bg-primary/5 border-t border-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Crypto Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of beginners who have successfully navigated the crypto space with our curated resources.
          </p>
          <div className="text-sm text-muted-foreground">
            <p>© 2024 CryptoGuide. Curated resources for crypto newcomers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;