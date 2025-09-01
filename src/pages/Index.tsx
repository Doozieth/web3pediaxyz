import { useState, useEffect } from "react";
import { Search, BookOpen, TrendingUp, Users, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cryptoTerms } from "@/data/cryptoTerms";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTerms, setFilteredTerms] = useState(cryptoTerms);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredTerms(cryptoTerms);
    } else {
      const filtered = cryptoTerms.filter(
        (term) =>
          term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredTerms(filtered);
    }
  }, [searchTerm]);

  const totalTerms = cryptoTerms.length;
  const categories = [...new Set(cryptoTerms.map(term => term.category))];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with centered title */}
      <header className="text-center py-16 px-4 border-b border-border/10">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">web3pedia</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Your comprehensive guide to cryptocurrency terminology</p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 z-10" />
          <Input
            type="text"
            placeholder="Search crypto terms"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-14 text-lg border border-border/20 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 focus:ring-2 focus:ring-primary/50 rounded-xl"
          />
        </div>
      </header>

      {/* Terms List */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredTerms.map((term, index) => (
            <Card
              key={term.id}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer border border-border/20 bg-card/30 backdrop-blur-sm hover:bg-card/50 rounded-xl"
              style={{
                animationDelay: `${index * 0.02}s`,
              }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground font-semibold">{term.term}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {term.definition}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

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