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
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">web3pedia</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {totalTerms}+ Terms
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-orb w-32 h-32 top-20 left-10"></div>
          <div className="floating-orb w-24 h-24 top-40 right-20"></div>
          <div className="floating-orb w-40 h-40 bottom-20 left-1/4"></div>
          <div className="floating-orb w-28 h-28 top-60 right-1/3"></div>
          <div className="floating-orb w-36 h-36 bottom-40 right-10"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight tracking-tight">
              web3pedia
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Your comprehensive guide to cryptocurrency terminology
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-2xl glass-effect"></div>
                <div className="relative p-1">
                  <div className="flex items-center">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white/70 z-10" />
                    <Input
                      type="text"
                      placeholder="Search crypto terms..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-16 pr-6 py-8 text-lg bg-transparent border-0 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-2xl font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="glass-effect rounded-2xl p-6 hover-lift">
                  <div className="flex items-center justify-center mb-3">
                    <BookOpen className="h-8 w-8 text-primary-glow mr-3" />
                    <span className="text-4xl font-bold text-white">{totalTerms}+</span>
                  </div>
                  <p className="text-white/80 font-medium">Crypto Terms</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="glass-effect rounded-2xl p-6 hover-lift">
                  <div className="flex items-center justify-center mb-3">
                    <Globe className="h-8 w-8 text-primary-glow mr-3" />
                    <span className="text-4xl font-bold text-white">{categories.length}</span>
                  </div>
                  <p className="text-white/80 font-medium">Categories</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="glass-effect rounded-2xl p-6 hover-lift">
                  <div className="flex items-center justify-center mb-3">
                    <TrendingUp className="h-8 w-8 text-primary-glow mr-3" />
                    <span className="text-4xl font-bold text-white">2024</span>
                  </div>
                  <p className="text-white/80 font-medium">Updated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {searchTerm && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Search Results
              </h2>
              <p className="text-muted-foreground">
                Found {filteredTerms.length} terms for "{searchTerm}"
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTerms.map((term) => (
              <Card key={term.id} className="group cursor-pointer hover-lift hover-glow bg-gradient-card border-0 rounded-2xl overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth font-semibold">
                      {term.term}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs ml-3 glass-effect border-primary/30 text-primary">
                      {term.category}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-3 text-base leading-relaxed">
                    {term.definition}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {term.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary border-0 rounded-full">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {term.difficulty && (
                    <Badge variant={
                      term.difficulty === 'Beginner' ? 'default' : 
                      term.difficulty === 'Intermediate' ? 'secondary' : 
                      'outline'
                    } className="text-xs rounded-full font-medium">
                      {term.difficulty}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTerms.length === 0 && searchTerm && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-foreground mb-2">No terms found</h3>
              <p className="text-muted-foreground">
                Try searching with different keywords or browse all terms below.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      {!searchTerm && (
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Browse by Category</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore crypto terms organized by different areas of the ecosystem
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => {
                const categoryCount = cryptoTerms.filter(term => term.category === category).length;
                return (
                  <Card key={category} className="group cursor-pointer hover-lift bg-gradient-card border-0 rounded-2xl overflow-hidden">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-smooth mb-2">
                        {category}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {categoryCount} terms
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/10 via-primary-accent/5 to-primary/10 border-t border-primary/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Stay Updated</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The crypto space evolves rapidly. Bookmark web3pedia to stay current with the latest terminology and trends.
            </p>
            <div className="glass-effect rounded-2xl p-8 mb-8 max-w-md mx-auto">
              <div className="text-6xl font-bold text-primary mb-2">{totalTerms}+</div>
              <div className="text-primary font-semibold">Terms & Growing</div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            <p>© 2024 web3pedia. Your guide to crypto terminology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;