import { useState, useEffect, useRef } from "react";
import { Search, BookOpen, TrendingUp, Users, Globe, Filter, ChevronDown, ArrowUpDown, Moon, Sun, Bookmark, Puzzle, Link, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { allCryptoTerms, categories, difficulties } from "@/data/cryptoTerms";

// Category color mapping - text only with transparent background
const getCategoryColor = (category: string) => {
  const colorMap: Record<string, string> = {
    'Fundamentals': 'text-blue-600 border-transparent hover:border-blue-600',
    'Technology': 'text-purple-600 border-transparent hover:border-purple-600',
    'Trading': 'text-green-600 border-transparent hover:border-green-600',
    'DeFi': 'text-indigo-600 border-transparent hover:border-indigo-600',
    'NFTs': 'text-pink-600 border-transparent hover:border-pink-600',
    'Mining': 'text-orange-600 border-transparent hover:border-orange-600',
    'Security': 'text-red-600 border-transparent hover:border-red-600',
    'Gaming': 'text-violet-600 border-transparent hover:border-violet-600',
    'Social': 'text-rose-600 border-transparent hover:border-rose-600',
    'Digital Assets': 'text-cyan-600 border-transparent hover:border-cyan-600',
    'Finance': 'text-emerald-600 border-transparent hover:border-emerald-600',
    'Governance': 'text-amber-600 border-transparent hover:border-amber-600',
    'Blockchain': 'text-slate-600 border-transparent hover:border-slate-600'
  };
  return colorMap[category] || 'text-gray-600 border-transparent hover:border-gray-600';
};

// Get background color for dots/indicators
const getCategoryBgColor = (category: string) => {
  const colorMap: Record<string, string> = {
    'Fundamentals': 'bg-blue-500',
    'Technology': 'bg-purple-500',
    'Trading': 'bg-green-500',
    'DeFi': 'bg-indigo-500',
    'NFTs': 'bg-pink-500',
    'Mining': 'bg-orange-500',
    'Security': 'bg-red-500',
    'Gaming': 'bg-violet-500',
    'Social': 'bg-rose-500',
    'Digital Assets': 'bg-cyan-500',
    'Finance': 'bg-emerald-500',
    'Governance': 'bg-amber-500',
    'Blockchain': 'bg-slate-500'
  };
  return colorMap[category] || 'bg-gray-500';
};

// Get text color only for dropdowns
const getCategoryTextColor = (category: string) => {
  const colorMap: Record<string, string> = {
    'Fundamentals': 'text-blue-600',
    'Technology': 'text-purple-600',
    'Trading': 'text-green-600',
    'DeFi': 'text-indigo-600',
    'NFTs': 'text-pink-600',
    'Mining': 'text-orange-600',
    'Security': 'text-red-600',
    'Gaming': 'text-violet-600',
    'Social': 'text-rose-600',
    'Digital Assets': 'text-cyan-600',
    'Finance': 'text-emerald-600',
    'Governance': 'text-amber-600',
    'Blockchain': 'text-slate-600'
  };
  return colorMap[category] || 'text-gray-600';
};
// Get border color for category outlines
const getCategoryBorderColor = (category: string) => {
  const colorMap: Record<string, string> = {
    'Fundamentals': 'border-blue-600',
    'Technology': 'border-purple-600',
    'Trading': 'border-green-600',
    'DeFi': 'border-indigo-600',
    'NFTs': 'border-pink-600',
    'Mining': 'border-orange-600',
    'Security': 'border-red-600',
    'Gaming': 'border-violet-600',
    'Social': 'border-rose-600',
    'Digital Assets': 'border-cyan-600',
    'Finance': 'border-emerald-600',
    'Governance': 'border-amber-600',
    'Blockchain': 'border-slate-600'
  };
  return colorMap[category] || 'border-gray-600';
};

const Index = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  // Initialize with all terms immediately
  const [allTerms] = useState(() => allCryptoTerms);
  const [filteredTerms, setFilteredTerms] = useState(allCryptoTerms);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("default");
  const [isSearchBarSticky, setIsSearchBarSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bookmarkedTerms, setBookmarkedTerms] = useState<string[]>([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [copiedTerms, setCopiedTerms] = useState<string[]>([]);
  const headerRef = useRef<HTMLElement>(null);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('web3pedia-bookmarks');
    if (savedBookmarks) {
      setBookmarkedTerms(JSON.parse(savedBookmarks));
    }
  }, []);

  // Save bookmarks to localStorage whenever bookmarkedTerms changes
  useEffect(() => {
    localStorage.setItem('web3pedia-bookmarks', JSON.stringify(bookmarkedTerms));
  }, [bookmarkedTerms]);

  const toggleBookmark = (termId: string) => {
    setBookmarkedTerms(prev => 
      prev.includes(termId) 
        ? prev.filter(id => id !== termId)
        : [...prev, termId]
    );
  };

  // Immediate search filter function - direct data access
  const performSearch = (searchValue: string) => {
    console.log("🔍 Performing search for:", searchValue);
    console.log("📊 Total available terms:", allTerms.length);
    
    if (!searchValue.trim()) {
      console.log("🔄 Empty search, showing all terms");
      setFilteredTerms(allTerms);
      return;
    }
    
    const searchLower = searchValue.toLowerCase().trim();
    const results = allTerms.filter(term => {
      const matchesTerm = term.term.toLowerCase().includes(searchLower);
      const matchesDefinition = term.definition.toLowerCase().includes(searchLower);
      const matchesTags = term.tags && term.tags.some(tag => tag.toLowerCase().includes(searchLower));
      
      return matchesTerm || matchesDefinition || matchesTags;
    });
    
    console.log("✨ Search results:", results.length, "terms found");
    if (results.length > 0) {
      console.log("📝 First few results:", results.slice(0, 3).map(t => t.term));
    }
    
    setFilteredTerms(results);
  };
  
  // Handle search input changes
  const handleSearchChange = (value: string) => {
    console.log("🎯 Search input received:", value);
    setSearchTerm(value);
    performSearch(value);
  };
  
  // Apply other filters to already filtered results
  useEffect(() => {
    let filtered = [...filteredTerms];
    
    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(term => selectedCategories.includes(term.category));
    }
    
    // Difficulty filter
    if (selectedDifficulties.length > 0) {
      filtered = filtered.filter(term => term.difficulty && selectedDifficulties.includes(term.difficulty));
    }
    
    // Tags filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(term => 
        term.tags && selectedTags.some(selectedTag => 
          term.tags.some(tag => tag.toLowerCase().includes(selectedTag.toLowerCase()))
        )
      );
    }
    
    // Sorting
    if (sortBy !== "default") {
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'a-z':
            return a.term.localeCompare(b.term);
          case 'z-a':
            return b.term.localeCompare(a.term);
          case 'difficulty-asc':
            const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
            return (difficultyOrder[a.difficulty as keyof typeof difficultyOrder] || 0) - 
                   (difficultyOrder[b.difficulty as keyof typeof difficultyOrder] || 0);
          case 'difficulty-desc':
            const difficultyOrderDesc = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
            return (difficultyOrderDesc[b.difficulty as keyof typeof difficultyOrderDesc] || 0) - 
                   (difficultyOrderDesc[a.difficulty as keyof typeof difficultyOrderDesc] || 0);
          case 'category':
            return a.category.localeCompare(b.category);
          default:
            return 0;
        }
      });
    }
    
    // Only update if we're not searching (preserve search results)
    if (!searchTerm.trim()) {
      setFilteredTerms(filtered);
    }
  }, [selectedCategories, selectedDifficulties, selectedTags, sortBy]);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerBottom = headerRef.current.offsetTop + headerRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const isSticky = scrollY > headerBottom;
        
        // Calculate scroll progress from 0 to 1 based on header height
        const progress = Math.min(scrollY / headerBottom, 1);
        
        setIsSearchBarSticky(isSticky);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDifficulties([]);
    setSelectedTags([]);
  };

  const copyToClipboard = async (text: string, termId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTerms(prev => [...prev, termId]);
      toast({
        title: "Copied to clipboard",
        description: "The detailed description has been copied.",
      });
      
      // Remove the termId from copiedTerms after 2 seconds
      setTimeout(() => {
        setCopiedTerms(prev => prev.filter(id => id !== termId));
      }, 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Unable to copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  const totalTerms = allCryptoTerms.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header with centered title */}
      <header ref={headerRef} className="relative text-center pt-16 pb-5 px-4 border-b border-border/10">
        {/* Top right controls */}
        <div className="absolute top-4 right-4 flex gap-1">
          <DropdownMenu open={showBookmarks} onOpenChange={setShowBookmarks}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 w-10 p-0 text-muted-foreground hover:text-foreground bg-transparent border-0 shadow-none hover:bg-transparent relative"
                aria-label="View bookmarks"
              >
                <Bookmark className="h-5 w-5" />
                {bookmarkedTerms.length > 0 && (
                  <div className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full text-xs text-primary-foreground flex items-center justify-center">
                    {bookmarkedTerms.length}
                  </div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-background border border-border/20 shadow-lg z-50">
              <DropdownMenuLabel>Bookmarked Terms</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {bookmarkedTerms.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground">
                  <p className="text-sm">No bookmarks yet</p>
                  <p className="text-xs mt-1">Click the bookmark icon on any term to save it</p>
                </div>
              ) : (
                <>
                  {bookmarkedTerms.slice(0, 5).map((termId) => {
                    const term = allCryptoTerms.find(t => t.id === termId);
                    return term ? (
                      <DropdownMenuItem
                        key={termId}
                        className="flex-col items-start p-3 space-y-1 hover:bg-muted/50"
                        onClick={() => {
                          setShowBookmarks(false);
                          const element = document.querySelector(`[value="${termId}"]`);
                          element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                      >
                        <div className="font-medium text-sm">{term.term}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">
                          {term.definition}
                        </div>
                      </DropdownMenuItem>
                    ) : null;
                  })}
                  {bookmarkedTerms.length > 5 && (
                    <DropdownMenuSeparator />
                  )}
                  {bookmarkedTerms.length > 5 && (
                    <div className="p-2 text-center text-xs text-muted-foreground">
                      +{bookmarkedTerms.length - 5} more bookmarks
                    </div>
                  )}
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-10 w-10 p-0 text-muted-foreground hover:text-foreground bg-transparent border-0 shadow-none hover:bg-transparent"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          <span className="font-black">web3</span><span className="font-semibold">pedia</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-1 max-w-2xl mx-auto">Your comprehensive guide to cryptocurrency terminology</p>
      </header>

      {/* Sticky Search Bar */}
      <div className={`transition-all duration-500 ease-in-out ${isSearchBarSticky ? 'fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/20' : 'relative'}`}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            {/* Home Button - slides out from behind search bar to the left */}
            <div className="relative overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground font-semibold whitespace-nowrap transition-all duration-100 hover:scale-105 bg-transparent border-0 shadow-none hover:bg-transparent"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                  transform: `translateX(${(1 - scrollProgress) * 200}px)`,
                  clipPath: `inset(0 ${100 - (scrollProgress * 100)}% 0 0)`,
                  opacity: scrollProgress > 0.1 ? 1 : 0,
                  pointerEvents: scrollProgress > 0.8 ? 'auto' : 'none'
                }}
              >
                web3pedia
              </Button>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 z-10" />
                <Input
                  type="text"
                  placeholder="Search crypto terms"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className={`pl-12 h-12 text-lg border border-border/20 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 focus:ring-2 focus:ring-primary/50 rounded-xl w-full ${isSearchBarSticky ? 'pr-4' : 'pr-12'}`}
                />
                 
                {/* Sort and Filter Icons inside search bar - animate out when sticky */}
                <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1 transition-all duration-500 ${isSearchBarSticky ? 'opacity-0 translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0'}`}>
                  {/* Sort Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground hover:bg-transparent"
                      >
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 bg-background border border-border/20 shadow-lg z-50">
                      <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                      <DropdownMenuItem 
                        onClick={() => setSortBy("default")}
                        className={sortBy === "default" ? "bg-muted/50" : ""}
                      >
                        Default
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => setSortBy("a-z")}
                        className={sortBy === "a-z" ? "bg-muted/50" : ""}
                      >
                        A-Z
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => setSortBy("z-a")}
                        className={sortBy === "z-a" ? "bg-muted/50" : ""}
                      >
                        Z-A
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => setSortBy("difficulty-asc")}
                        className={sortBy === "difficulty-asc" ? "bg-muted/50" : ""}
                      >
                        Beginner → Advanced
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => setSortBy("difficulty-desc")}
                        className={sortBy === "difficulty-desc" ? "bg-muted/50" : ""}
                      >
                        Advanced → Beginner
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => setSortBy("category")}
                        className={sortBy === "category" ? "bg-muted/50" : ""}
                      >
                        Category
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Filter Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground hover:bg-transparent"
                      >
                        <Filter className="h-5 w-5" />
                        {(selectedCategories.length > 0 || selectedDifficulties.length > 0 || selectedTags.length > 0) && (
                          <div className={`absolute -top-1 -right-1 h-3 w-3 rounded-full ${selectedCategories.length > 0 ? getCategoryBgColor(selectedCategories[0]) : 'bg-primary'}`}></div>
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
                          <span 
                            className={`px-2 py-1 rounded-full transition-all border border-transparent ${selectedCategories.includes(category) ? getCategoryTextColor(category) + ' ' + getCategoryBorderColor(category) : 'text-foreground'}`}
                            onMouseEnter={(e) => {
                              e.currentTarget.className = `px-2 py-1 rounded-full transition-all border ${getCategoryTextColor(category)} ${getCategoryBorderColor(category)}`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.className = `px-2 py-1 rounded-full transition-all border border-transparent ${selectedCategories.includes(category) ? getCategoryTextColor(category) + ' ' + getCategoryBorderColor(category) : 'text-foreground'}`;
                            }}
                          >
                            {category}
                          </span>
                        </DropdownMenuCheckboxItem>
                      ))}
                      
                      <DropdownMenuSeparator />
                      
                      <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
                      {difficulties.map((difficulty) => (
                        <DropdownMenuCheckboxItem
                          key={difficulty}
                          checked={selectedDifficulties.includes(difficulty)}
                          onCheckedChange={() => handleDifficultyToggle(difficulty)}
                          className="hover:bg-muted/50 group"
                        >
                          <span className={`px-2 py-1 rounded-full transition-all border border-transparent group-hover:border-primary group-hover:text-primary ${selectedDifficulties.includes(difficulty) ? 'text-primary border-primary' : 'text-foreground'}`}>
                            {difficulty}
                          </span>
                        </DropdownMenuCheckboxItem>
                      ))}
                      
                      <DropdownMenuSeparator />
                      
                      <DropdownMenuItem onClick={clearFilters} className="text-destructive hover:bg-destructive/10">
                        Clear All Filters
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
            
            {/* External Sort and Filter Controls - appear when sticky */}
            <div className={`flex gap-2 transition-all duration-500 ${isSearchBarSticky ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              {/* Sort Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-10 w-10 p-0 text-muted-foreground hover:text-foreground border-border/20"
                  >
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-background border border-border/20 shadow-lg z-50">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuItem 
                    onClick={() => setSortBy("default")}
                    className={sortBy === "default" ? "bg-muted/50" : ""}
                  >
                    Default
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setSortBy("a-z")}
                    className={sortBy === "a-z" ? "bg-muted/50" : ""}
                  >
                    A-Z
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setSortBy("z-a")}
                    className={sortBy === "z-a" ? "bg-muted/50" : ""}
                  >
                    Z-A
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setSortBy("difficulty-asc")}
                    className={sortBy === "difficulty-asc" ? "bg-muted/50" : ""}
                  >
                    Beginner → Advanced
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setSortBy("difficulty-desc")}
                    className={sortBy === "difficulty-desc" ? "bg-muted/50" : ""}
                  >
                    Advanced → Beginner
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setSortBy("category")}
                    className={sortBy === "category" ? "bg-muted/50" : ""}
                  >
                    Category
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Filter Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-10 w-10 p-0 text-muted-foreground hover:text-foreground border-border/20 relative"
                  >
                    <Filter className="h-4 w-4" />
                    {(selectedCategories.length > 0 || selectedDifficulties.length > 0 || selectedTags.length > 0) && (
                      <div className={`absolute -top-1 -right-1 h-3 w-3 rounded-full ${selectedCategories.length > 0 ? getCategoryBgColor(selectedCategories[0]) : 'bg-primary'}`}></div>
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
                      <span 
                        className={`px-2 py-1 rounded-full transition-all border border-transparent ${selectedCategories.includes(category) ? getCategoryTextColor(category) + ' ' + getCategoryBorderColor(category) : 'text-foreground'}`}
                        onMouseEnter={(e) => {
                          e.currentTarget.className = `px-2 py-1 rounded-full transition-all border ${getCategoryTextColor(category)} ${getCategoryBorderColor(category)}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.className = `px-2 py-1 rounded-full transition-all border border-transparent ${selectedCategories.includes(category) ? getCategoryTextColor(category) + ' ' + getCategoryBorderColor(category) : 'text-foreground'}`;
                        }}
                      >
                        {category}
                      </span>
                    </DropdownMenuCheckboxItem>
                  ))}
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
                  {difficulties.map((difficulty) => (
                    <DropdownMenuCheckboxItem
                      key={difficulty}
                      checked={selectedDifficulties.includes(difficulty)}
                      onCheckedChange={() => handleDifficultyToggle(difficulty)}
                      className="hover:bg-muted/50 group"
                    >
                      <span className={`px-2 py-1 rounded-full transition-all border border-transparent group-hover:border-primary group-hover:text-primary ${selectedDifficulties.includes(difficulty) ? 'text-primary border-primary' : 'text-foreground'}`}>
                        {difficulty}
                      </span>
                    </DropdownMenuCheckboxItem>
                  ))}
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem onClick={clearFilters} className="text-destructive hover:bg-destructive/10">
                    Clear All Filters
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Terms List */}
      <main className={`container mx-auto px-4 transition-all duration-700 ease-out ${isSearchBarSticky ? 'pt-20' : 'pt-12'}`}>
        <Accordion 
          type="multiple" 
          className="max-w-4xl mx-auto space-y-4"
          value={expandedItems}
          onValueChange={setExpandedItems}
        >
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
                <AccordionTrigger className="hover:no-underline p-0 [&>svg]:hidden">
                  <CardHeader className="pb-3 w-full">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg text-foreground font-semibold text-left">{term.term}</CardTitle>
                      <div className="flex items-center gap-3 ml-4">
                        <div className="flex gap-2">
                          <Badge 
                            variant="outline" 
                            className={`text-xs cursor-pointer transition-all hover:scale-105 bg-transparent ${getCategoryColor(term.category)}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCategoryToggle(term.category);
                            }}
                          >
                            {term.category}
                          </Badge>
                          {term.difficulty && (
                            <Badge
                              variant="outline"
                              className="text-xs px-2 py-1 bg-transparent border-transparent text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer h-6 flex items-center"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDifficultyToggle(term.difficulty!);
                              }}
                            >
                              <div className="flex items-center gap-0.5">
                                {term.difficulty === 'Beginner' && (
                                  <>
                                    <div className="w-2 h-3 bg-primary rounded-full"></div>
                                    <div className="w-2 h-3 bg-primary/20 rounded-full"></div>
                                    <div className="w-2 h-3 bg-primary/20 rounded-full"></div>
                                  </>
                                )}
                                {term.difficulty === 'Intermediate' && (
                                  <>
                                    <div className="w-2 h-3 bg-primary rounded-full"></div>
                                    <div className="w-2 h-3 bg-primary rounded-full"></div>
                                    <div className="w-2 h-3 bg-primary/20 rounded-full"></div>
                                  </>
                                )}
                                {term.difficulty === 'Advanced' && (
                                  <>
                                    <div className="w-2 h-3 bg-primary rounded-full"></div>
                                    <div className="w-2 h-3 bg-primary rounded-full"></div>
                                    <div className="w-2 h-3 bg-primary rounded-full"></div>
                                  </>
                                )}
                              </div>
                            </Badge>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(term.id);
                          }}
                          className="h-6 w-6 p-0 text-muted-foreground hover:text-primary bg-transparent border-0 shadow-none hover:bg-transparent"
                          aria-label="Bookmark this term"
                        >
                          <Bookmark className={`h-4 w-4 ${bookmarkedTerms.includes(term.id) ? 'fill-current text-primary' : ''}`} />
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed text-left cursor-text select-text mb-3">
                      {term.definition}
                    </p>
                    {/* Tags in main preview - only show when NOT expanded */}
                    {!expandedItems.includes(term.id) && term.tags && term.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {term.tags.slice(0, 4).map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            className="text-xs px-2 py-0.5 bg-transparent border-transparent text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTagToggle(tag);
                            }}
                          >
                            {tag}
                          </Badge>
                        ))}
                        {term.tags.length > 4 && (
                          <Badge 
                            variant="outline" 
                            className="text-xs px-2 py-0.5 bg-transparent border-transparent text-muted-foreground"
                          >
                            +{term.tags.length - 4}
                          </Badge>
                        )}
                      </div>
                    )}
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
                      <div className="relative">
                         <p className="text-sm text-muted-foreground leading-relaxed cursor-text select-text pr-10">
                         {(() => {
                          const getDetailedDescription = (term: any) => {
                            switch (term.id) {
                              case 'bitcoin':
                                return "Bitcoin works without banks or governments controlling it. Miners use powerful computers to secure the network and earn rewards. Only 21 million bitcoins will ever exist, which many people believe makes it valuable over time. Today, people use Bitcoin both for payments and as an investment like digital gold.";
                              case 'blockchain':
                                return "Think of blockchain like a digital ledger that everyone can see but no one can cheat. Each page (block) is connected to the previous one, making it impossible to change old records. This technology goes beyond money - it can track products, secure votes, and verify identities. The best part is that no single company or person controls it.";
                              case 'smart-contract':
                                return "Smart contracts are like vending machines - put in the right conditions, get the expected result, no human needed. They live on blockchains like Ethereum and can't be changed once created. These automated agreements power most modern crypto applications, from lending money to trading tokens. They've made it possible to recreate traditional banking services in a decentralized way.";
                              case 'ethereum':
                                return "Ethereum is like a global computer that anyone can use to run applications. Unlike Bitcoin which mainly handles payments, Ethereum can run complex programs called smart contracts. This flexibility has made it the foundation for most DeFi apps, NFT marketplaces, and crypto games. Think of it as the App Store for decentralized applications.";
                              case 'defi':
                                return "DeFi recreates traditional banking services using blockchain technology instead of banks. You can lend money, borrow funds, trade assets, and earn interest - all without filling out paperwork or getting approval from a bank. Smart contracts handle everything automatically, making financial services available 24/7 to anyone with an internet connection.";
                              case 'nft':
                                return "NFTs are like digital certificates of ownership for unique items. Just like you might own an original painting, an NFT proves you own a specific digital artwork, game item, or collectible. The blockchain keeps a permanent record of who owns what, making it impossible to fake or duplicate ownership.";
                              case 'mining':
                                return "Mining is like a global lottery where computers compete to solve math puzzles. The winner gets to add new transactions to the blockchain and earns cryptocurrency as a reward. This process keeps the network secure because cheating would require more computing power than the rest of the network combined.";
                              case 'wallet':
                                return "A crypto wallet is like a digital bank account, but you control it completely. It stores your private keys (like passwords) that let you send and receive cryptocurrency. Unlike bank accounts, wallets don't hold your actual coins - they just give you access to your money that lives on the blockchain.";
                              case 'gas':
                                return "Gas is like paying for postage when sending a letter, but for blockchain transactions. When the network is busy, gas prices go up because space in blocks is limited. You can pay higher gas to get your transaction processed faster, or wait longer with lower gas fees.";
                              case 'hodl':
                                return "HODL started as a typo but became a philosophy. Instead of trying to time the market by buying and selling, HODLers buy cryptocurrency and hold it for years. The idea is that crypto will be worth much more in the future, so short-term price swings don't matter.";
                              case 'staking':
                                return "Staking is like earning interest at a bank, but instead of lending money to the bank, you're helping secure a blockchain network. You lock up your cryptocurrency for a period of time, and in return, you earn rewards. It's a way to make passive income while supporting the network.";
                              case 'dao':
                                return "A DAO is like a company where everyone who owns tokens gets to vote on decisions. There's no CEO or board of directors - instead, the community decides how to spend money, what features to build, and how the organization should operate. All the rules are written in smart contracts.";
                              case 'layer2':
                                return "Layer 2 solutions are like express lanes on a highway. When the main blockchain gets congested and expensive, Layer 2 networks process transactions faster and cheaper. They periodically update the main blockchain with batches of transactions, combining the speed of centralized systems with blockchain security.";
                              case 'yield-farming':
                                return "Yield farming is like being a banker in the DeFi world. You lend your cryptocurrency to others through smart contracts and earn interest plus bonus tokens. Farmers often move their money between different protocols to chase the highest returns, though this comes with risks.";
                              case 'fork':
                                return "A fork is like updating the rules of a game that everyone is playing. Sometimes updates are optional (soft fork), and sometimes they create a completely new version (hard fork). When communities disagree about changes, a hard fork can split the blockchain into two separate networks.";
                              case 'consensus':
                                return "Consensus is how thousands of computers around the world agree on what transactions are valid without having a central authority. Different blockchains use different methods - some use mining (proof of work), others use staking (proof of stake). The goal is always to prevent cheating while keeping the network decentralized.";
                              case 'dapp':
                                return "DApps are applications that run on blockchain networks instead of company servers. This means no single company can shut them down or change the rules. Popular DApps include decentralized exchanges, lending platforms, and games where you truly own your in-game items.";
                              case 'liquidity':
                                return "Liquidity is how easily you can buy or sell something without affecting its price. High liquidity means lots of people are trading, so you can quickly buy or sell at fair prices. Low liquidity means fewer traders, so large orders might move the price significantly.";
                              case 'market-cap':
                                return "Market cap tells you the total value of all coins in circulation. It's calculated by multiplying the price per coin by the number of coins that exist. A higher market cap usually indicates a more established and stable cryptocurrency, though it doesn't guarantee future performance.";
                              case 'private-key':
                                return "Your private key is like the master password to your cryptocurrency. Anyone who has it can spend your money, so it must be kept absolutely secret. Most people never see their private keys directly - wallet software manages them behind the scenes. Losing your private key means losing your cryptocurrency forever.";
                              case 'public-key':
                                return "Your public key is like your account number that you can safely share with others. It's mathematically connected to your private key but revealing it doesn't compromise your security. People use your public key to send you cryptocurrency or verify that you authorized a transaction.";
                              case 'seed-phrase':
                                return "A seed phrase is a human-readable backup of your private keys, usually 12 or 24 words. If your wallet breaks or gets lost, you can restore all your cryptocurrency using these words. It's crucial to write them down and store them securely offline - never take a photo or store them digitally.";
                              case 'fomo':
                                return "FOMO drives people to make investment decisions based on emotion rather than research. When cryptocurrency prices are rising rapidly, the fear of missing out can cause people to buy at the peak. This often leads to losses when prices inevitably correct downward.";
                              case 'fud':
                                return "FUD is negative information spread to make people panic and sell their cryptocurrency. Sometimes FUD is based on real concerns, but often it's exaggerated or misleading. Learning to distinguish between legitimate criticism and FUD is an important skill in crypto investing.";
                              case 'whale':
                                return "Whales are individuals or entities that own massive amounts of cryptocurrency. When they buy or sell, it can significantly impact prices because of the large volumes involved. Many traders watch whale movements to try to predict market direction, though whales don't always move markets intentionally.";
                              case 'altcoin':
                                return "Any cryptocurrency that isn't Bitcoin is considered an altcoin. This includes major cryptocurrencies like Ethereum, as well as thousands of smaller projects. Each altcoin typically offers different features or improvements over Bitcoin, such as faster transactions or smart contract capabilities.";
                              case 'stablecoin':
                                return "Stablecoins are designed to maintain a steady value, usually pegged to the US dollar. They provide a way to hold value in the crypto ecosystem without the volatility of other cryptocurrencies. Traders often use stablecoins as a safe haven during market downturns or as a stepping stone between different investments.";
                              case 'address':
                                return "A cryptocurrency address is like a bank account number that others can use to send you money. Each address is unique and derived from your public key. You can have many addresses for privacy reasons, and all transactions to these addresses are permanently recorded on the blockchain.";
                              default:
                                return `This concept represents an important piece of the cryptocurrency ecosystem. It involves specific technical or economic mechanisms that help digital currencies function properly. Understanding how this works gives you insight into the broader crypto landscape and can help you make more informed decisions when participating in the space.`;
                            }
                          };
                           return getDetailedDescription(term);
                         })()}
                         </p>
                         <Button
                           variant="ghost"
                           size="sm"
                           onClick={() => {
                             const detailedText = (() => {
                               const getDetailedDescription = (term: any) => {
                                 switch (term.id) {
                                   case 'bitcoin':
                                     return "Bitcoin works without banks or governments controlling it. Miners use powerful computers to secure the network and earn rewards. Only 21 million bitcoins will ever exist, which many people believe makes it valuable over time. Today, people use Bitcoin both for payments and as an investment like digital gold.";
                                   case 'blockchain':
                                     return "Think of blockchain like a digital ledger that everyone can see but no one can cheat. Each page (block) is connected to the previous one, making it impossible to change old records. This technology goes beyond money - it can track products, secure votes, and verify identities. The best part is that no single company or person controls it.";
                                   case 'smart-contract':
                                     return "Smart contracts are like vending machines - put in the right conditions, get the expected result, no human needed. They live on blockchains like Ethereum and can't be changed once created. These automated agreements power most modern crypto applications, from lending money to trading tokens. They've made it possible to recreate traditional banking services in a decentralized way.";
                                   case 'ethereum':
                                     return "Ethereum is like a global computer that anyone can use to run applications. Unlike Bitcoin which mainly handles payments, Ethereum can run complex programs called smart contracts. This flexibility has made it the foundation for most DeFi apps, NFT marketplaces, and crypto games. Think of it as the App Store for decentralized applications.";
                                   case 'defi':
                                     return "DeFi recreates traditional banking services using blockchain technology instead of banks. You can lend money, borrow funds, trade assets, and earn interest - all without filling out paperwork or getting approval from a bank. Smart contracts handle everything automatically, making financial services available 24/7 to anyone with an internet connection.";
                                   case 'nft':
                                     return "NFTs are like digital certificates of ownership for unique items. Just like you might own an original painting, an NFT proves you own a specific digital artwork, game item, or collectible. The blockchain keeps a permanent record of who owns what, making it impossible to fake or duplicate ownership.";
                                   case 'mining':
                                     return "Mining is like a global lottery where computers compete to solve math puzzles. The winner gets to add new transactions to the blockchain and earns cryptocurrency as a reward. This process keeps the network secure because cheating would require more computing power than the rest of the network combined.";
                                   case 'wallet':
                                     return "A crypto wallet is like a digital bank account, but you control it completely. It stores your private keys (like passwords) that let you send and receive cryptocurrency. Unlike bank accounts, wallets don't hold your actual coins - they just give you access to your money that lives on the blockchain.";
                                   case 'gas':
                                     return "Gas is like paying for postage when sending a letter, but for blockchain transactions. When the network is busy, gas prices go up because space in blocks is limited. You can pay higher gas to get your transaction processed faster, or wait longer with lower gas fees.";
                                   case 'hodl':
                                     return "HODL started as a typo but became a philosophy. Instead of trying to time the market by buying and selling, HODLers buy cryptocurrency and hold it for years. The idea is that crypto will be worth much more in the future, so short-term price swings don't matter.";
                                   case 'staking':
                                     return "Staking is like earning interest at a bank, but instead of lending money to the bank, you're helping secure a blockchain network. You lock up your cryptocurrency for a period of time, and in return, you earn rewards. It's a way to make passive income while supporting the network.";
                                   case 'dao':
                                     return "A DAO is like a company where everyone who owns tokens gets to vote on decisions. There's no CEO or board of directors - instead, the community decides how to spend money, what features to build, and how the organization should operate. All the rules are written in smart contracts.";
                                   case 'layer2':
                                     return "Layer 2 solutions are like express lanes on a highway. When the main blockchain gets congested and expensive, Layer 2 networks process transactions faster and cheaper. They periodically update the main blockchain with batches of transactions, combining the speed of centralized systems with blockchain security.";
                                   case 'yield-farming':
                                     return "Yield farming is like being a banker in the DeFi world. You lend your cryptocurrency to others through smart contracts and earn interest plus bonus tokens. Farmers often move their money between different protocols to chase the highest returns, though this comes with risks.";
                                   case 'fork':
                                     return "A fork is like updating the rules of a game that everyone is playing. Sometimes updates are optional (soft fork), and sometimes they create a completely new version (hard fork). When communities disagree about changes, a hard fork can split the blockchain into two separate networks.";
                                   case 'consensus':
                                     return "Consensus is how thousands of computers around the world agree on what transactions are valid without having a central authority. Different blockchains use different methods - some use mining (proof of work), others use staking (proof of stake). The goal is always to prevent cheating while keeping the network decentralized.";
                                   case 'dapp':
                                     return "DApps are applications that run on blockchain networks instead of company servers. This means no single company can shut them down or change the rules. Popular DApps include decentralized exchanges, lending platforms, and games where you truly own your in-game items.";
                                   case 'liquidity':
                                     return "Liquidity is how easily you can buy or sell something without affecting its price. High liquidity means lots of people are trading, so you can quickly buy or sell at fair prices. Low liquidity means fewer traders, so large orders might move the price significantly.";
                                   case 'market-cap':
                                     return "Market cap tells you the total value of all coins in circulation. It's calculated by multiplying the price per coin by the number of coins that exist. A higher market cap usually indicates a more established and stable cryptocurrency, though it doesn't guarantee future performance.";
                                   case 'private-key':
                                     return "Your private key is like the master password to your cryptocurrency. Anyone who has it can spend your money, so it must be kept absolutely secret. Most people never see their private keys directly - wallet software manages them behind the scenes. Losing your private key means losing your cryptocurrency forever.";
                                   case 'public-key':
                                     return "Your public key is like your account number that you can safely share with others. It's mathematically connected to your private key but revealing it doesn't compromise your security. People use your public key to send you cryptocurrency or verify that you authorized a transaction.";
                                   case 'seed-phrase':
                                     return "A seed phrase is a human-readable backup of your private keys, usually 12 or 24 words. If your wallet breaks or gets lost, you can restore all your cryptocurrency using these words. It's crucial to write them down and store them securely offline - never take a photo or store them digitally.";
                                   case 'fomo':
                                     return "FOMO drives people to make investment decisions based on emotion rather than research. When cryptocurrency prices are rising rapidly, the fear of missing out can cause people to buy at the peak. This often leads to losses when prices inevitably correct downward.";
                                   case 'fud':
                                     return "FUD is negative information spread to make people panic and sell their cryptocurrency. Sometimes FUD is based on real concerns, but often it's exaggerated or misleading. Learning to distinguish between legitimate criticism and FUD is an important skill in crypto investing.";
                                   case 'whale':
                                     return "Whales are individuals or entities that own massive amounts of cryptocurrency. When they buy or sell, it can significantly impact prices because of the large volumes involved. Many traders watch whale movements to try to predict market direction, though whales don't always move markets intentionally.";
                                   case 'altcoin':
                                     return "Any cryptocurrency that isn't Bitcoin is considered an altcoin. This includes major cryptocurrencies like Ethereum, as well as thousands of smaller projects. Each altcoin typically offers different features or improvements over Bitcoin, such as faster transactions or smart contract capabilities.";
                                   case 'stablecoin':
                                     return "Stablecoins are designed to maintain a steady value, usually pegged to the US dollar. They provide a way to hold value in the crypto ecosystem without the volatility of other cryptocurrencies. Traders often use stablecoins as a safe haven during market downturns or as a stepping stone between different investments.";
                                   case 'address':
                                     return "A cryptocurrency address is like a bank account number that others can use to send you money. Each address is unique and derived from your public key. You can have many addresses for privacy reasons, and all transactions to these addresses are permanently recorded on the blockchain.";
                                   default:
                                     return `This concept represents an important piece of the cryptocurrency ecosystem. It involves specific technical or economic mechanisms that help digital currencies function properly. Understanding how this works gives you insight into the broader crypto landscape and can help you make more informed decisions when participating in the space.`;
                                 }
                               };
                               return getDetailedDescription(term);
                             })();
                             copyToClipboard(detailedText, term.id);
                           }}
                           className="absolute top-0 right-0 h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                           aria-label="Copy detailed description"
                         >
                           {copiedTerms.includes(term.id) ? (
                             <Check className="h-4 w-4 text-green-500" />
                           ) : (
                             <Copy className="h-4 w-4" />
                           )}
                         </Button>
                       </div>
                     </div>

                    {/* Use Cases */}
                    {term.examples && term.examples.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Puzzle className="h-4 w-4 text-primary" />
                          Examples & Use Cases
                        </h4>
                        <ul className="space-y-2">
                          {term.examples.map((example, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5 text-xs leading-none">•</span>
                              <span className="leading-relaxed">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Related Terms/Tags */}
                    {term.tags && term.tags.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Link className="h-4 w-4 text-primary" />
                          Related Terms
                        </h4>
                        <div className="flex flex-wrap gap-2">
                           {term.tags.map((tag) => (
                             <Badge 
                               key={tag} 
                               variant="outline" 
                               className="text-xs px-3 py-1.5 bg-transparent border-transparent text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
                               onClick={(e) => {
                                 e.stopPropagation();
                                 handleTagToggle(tag);
                               }}
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