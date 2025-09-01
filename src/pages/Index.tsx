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
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            web3pedia
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Your comprehensive guide to cryptocurrency terminology
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search crypto terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 transition-all"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 text-primary-glow mr-2" />
                <span className="text-3xl font-bold text-white">{totalTerms}+</span>
              </div>
              <p className="text-white/80">Crypto Terms</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="h-6 w-6 text-primary-glow mr-2" />
                <span className="text-3xl font-bold text-white">{categories.length}</span>
              </div>
              <p className="text-white/80">Categories</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-primary-glow mr-2" />
                <span className="text-3xl font-bold text-white">2024</span>
              </div>
              <p className="text-white/80">Updated</p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((term) => (
              <Card key={term.id} className="transition-all duration-300 hover:shadow-purple hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {term.term}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs ml-2">
                      {term.category}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-3">
                    {term.definition}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {term.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-muted">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {term.difficulty && (
                    <Badge variant={
                      term.difficulty === 'Beginner' ? 'default' : 
                      term.difficulty === 'Intermediate' ? 'secondary' : 
                      'outline'
                    } className="text-xs">
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore crypto terms organized by different areas of the ecosystem
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category) => {
                const categoryCount = cryptoTerms.filter(term => term.category === category).length;
                return (
                  <Card key={category} className="transition-all duration-300 hover:shadow-purple hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold group-hover:text-primary transition-colors mb-1">
                        {category}
                      </h3>
                      <p className="text-sm text-muted-foreground">
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
      <footer className="bg-primary/5 border-t border-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            The crypto space evolves rapidly. Bookmark web3pedia to stay current with the latest terminology.
          </p>
          <div className="text-sm text-muted-foreground">
            <p>© 2024 web3pedia. Your guide to crypto terminology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;