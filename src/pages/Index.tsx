import { useState, useEffect } from "react";
import { Search, BookOpen, TrendingUp, Users, Globe, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cryptoTerms, categories, difficulties } from "@/data/cryptoTerms";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTerms, setFilteredTerms] = useState(cryptoTerms);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);

  useEffect(() => {
    let filtered = cryptoTerms;
    
    // Filter by search term
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (term) =>
          term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(term => selectedCategories.includes(term.category));
    }
    
    // Filter by difficulties
    if (selectedDifficulties.length > 0) {
      filtered = filtered.filter(term => term.difficulty && selectedDifficulties.includes(term.difficulty));
    }
    
    setFilteredTerms(filtered);
  }, [searchTerm, selectedCategories, selectedDifficulties]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleDifficultyToggle = (difficulty: string) => {
    setSelectedDifficulties(prev => 
      prev.includes(difficulty) 
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDifficulties([]);
  };

  const totalTerms = cryptoTerms.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header with centered title */}
      <header className="text-center py-16 px-4 border-b border-border/10">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">web3pedia</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Your comprehensive guide to cryptocurrency terminology</p>
        
        {/* Search Bar with Filter */}
        <div className="max-w-2xl mx-auto relative">{/* matches description width */}
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 z-10" />
          <Input
            type="text"
            placeholder="Search crypto terms"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 pr-12 h-14 text-lg border border-border/20 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 focus:ring-2 focus:ring-primary/50 rounded-xl"
          />
          
          {/* Filter Icon inside search bar */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-muted-foreground hover:text-foreground hover:bg-transparent"
              >
                <Filter className="h-5 w-5" />
                {(selectedCategories.length > 0 || selectedDifficulties.length > 0) && (
                  <div className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full"></div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-background border border-border/20 shadow-lg z-50">
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              {categories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryToggle(category)}
                  className="hover:bg-muted/50"
                >
                  {category}
                </DropdownMenuCheckboxItem>
              ))}
              
              <DropdownMenuSeparator />
              
              <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
              {difficulties.map((difficulty) => (
                <DropdownMenuCheckboxItem
                  key={difficulty}
                  checked={selectedDifficulties.includes(difficulty)}
                  onCheckedChange={() => handleDifficultyToggle(difficulty)}
                  className="hover:bg-muted/50"
                >
                  {difficulty}
                </DropdownMenuCheckboxItem>
              ))}
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem onClick={clearFilters} className="text-destructive hover:bg-destructive/10">
                Clear All Filters
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Terms List */}
      <main className="container mx-auto px-4 py-12">
        <Accordion type="multiple" className="max-w-4xl mx-auto space-y-4">
          {filteredTerms.map((term, index) => (
            <AccordionItem
              key={term.id}
              value={term.id}
              className="border-none"
            >
              <Card
                className="hover:shadow-lg transition-all duration-300 border border-border/20 bg-card/30 backdrop-blur-sm hover:bg-card/50 rounded-xl"
                style={{
                  animationDelay: `${index * 0.02}s`,
                }}
              >
                <AccordionTrigger className="hover:no-underline p-0">
                  <CardHeader className="pb-3 w-full">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg text-foreground font-semibold text-left">{term.term}</CardTitle>
                      <div className="flex gap-2 ml-4">
                        <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {term.category}
                        </Badge>
                        {term.difficulty && (
                          <Badge 
                            variant={
                              term.difficulty === 'Beginner' ? 'default' : 
                              term.difficulty === 'Intermediate' ? 'secondary' : 
                              'destructive'
                            } 
                            className="text-xs"
                          >
                            {term.difficulty}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed text-left">
                      {term.definition}
                    </p>
                  </CardHeader>
                </AccordionTrigger>
                
                <AccordionContent className="pb-0">
                  <CardContent className="pt-0 space-y-6">
                    {/* Detailed Description */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Detailed Description
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {term.category === 'Fundamentals' && term.term === 'Bitcoin (BTC)' && 
                          "Bitcoin operates on a peer-to-peer network without the need for intermediaries like banks. It uses proof-of-work consensus mechanism where miners compete to solve complex mathematical puzzles. The total supply is capped at 21 million coins, making it deflationary by design. Bitcoin has gained adoption as both a medium of exchange and a store of value, often referred to as 'digital gold'."
                        }
                        {term.category === 'Fundamentals' && term.term === 'Blockchain' && 
                          "Each block contains a cryptographic hash of the previous block, timestamp, and transaction data, creating an immutable chain. The decentralized nature means no single entity controls the network, making it resistant to censorship and fraud. Blockchain technology extends beyond cryptocurrencies to supply chain management, voting systems, and digital identity verification. The transparency and immutability of blockchain records provide unprecedented levels of trust in digital transactions."
                        }
                        {term.category === 'Technology' && term.term === 'Smart Contract' && 
                          "Smart contracts eliminate the need for intermediaries by automatically executing when predetermined conditions are met. They run on blockchain networks like Ethereum, ensuring transparency and immutability of contract terms. These self-executing contracts can handle complex business logic, from simple payments to sophisticated financial instruments. Smart contracts have enabled the entire DeFi ecosystem, allowing for automated lending, trading, and yield farming."
                        }
                        {!((term.category === 'Fundamentals' && (term.term === 'Bitcoin (BTC)' || term.term === 'Blockchain')) || 
                           (term.category === 'Technology' && term.term === 'Smart Contract')) && 
                          `${term.definition} This concept plays a vital role in the broader cryptocurrency ecosystem and understanding its mechanics helps investors and users make more informed decisions. The practical applications of this technology continue to evolve as the industry matures and finds new use cases.`
                        }
                      </p>
                    </div>

                    {/* Use Cases */}
                    {term.examples && term.examples.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          Examples & Use Cases
                        </h4>
                        <ul className="space-y-2">
                          {term.examples.map((example, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1.5 text-xs">•</span>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Related Terms/Tags */}
                    {term.tags && term.tags.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Globe className="h-4 w-4 text-primary" />
                          Related Terms
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {term.tags.map((tag) => (
                            <Badge 
                              key={tag} 
                              variant="outline" 
                              className="text-xs px-3 py-1.5 bg-muted/30 text-muted-foreground border-muted hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors cursor-pointer"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Additional Context */}
                    <div className="pt-2 border-t border-border/10">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          Difficulty: {term.difficulty || 'Not specified'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          Category: {term.category}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>

        {filteredTerms.length === 0 && searchTerm && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-foreground mb-2">No terms found</h3>
            <p className="text-muted-foreground">
              Try searching with different keywords.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};
export default Index;