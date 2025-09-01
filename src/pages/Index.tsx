import { useState, useEffect } from "react";
import { Search, BookOpen, TrendingUp, Users, Globe, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
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
        <div className="max-w-2xl mx-auto relative">
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