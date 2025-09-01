import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Search, Star, TrendingUp } from "lucide-react";
import { cryptoTerms, categories } from "@/data/cryptoTerms";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const featuredTerms = cryptoTerms.slice(0, 6);
  const totalTerms = cryptoTerms.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-8 w-8 text-primary-glow mr-2" />
            <span className="text-primary-glow font-medium">Crypto Dictionary</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master the
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Crypto Language
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive guide to cryptocurrency and blockchain terminology. 
            Understand {totalTerms}+ essential terms used in the crypto industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => navigate('/glossary')}
            >
              Explore Glossary
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => navigate('/glossary')}
            >
              <Search className="mr-2 h-5 w-5" />
              Search Terms
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">{totalTerms}+</h3>
              <p className="text-muted-foreground">Crypto Terms Defined</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">{categories.length - 1}</h3>
              <p className="text-muted-foreground">Categories Covered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">3</h3>
              <p className="text-muted-foreground">Difficulty Levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Terms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Terms</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start with these essential cryptocurrency terms to build your foundation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredTerms.map((term) => (
              <Card 
                key={term.id} 
                className="transition-all duration-300 hover:shadow-purple hover:-translate-y-1 group cursor-pointer"
                onClick={() => navigate(`/term/${term.id}`)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    {term.term}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {term.definition}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-muted">{term.category}</Badge>
                    <Badge variant="outline" className="text-xs">
                      {term.difficulty}
                    </Badge>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/glossary')}
            >
              View All {totalTerms} Terms
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Browse by Category</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore terms organized by different areas of the crypto ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(cat => cat !== 'All').map((category) => (
              <Card 
                key={category}
                className="transition-all duration-300 hover:shadow-purple hover:-translate-y-1 cursor-pointer group"
                onClick={() => navigate('/glossary')}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {category}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cryptoTerms.filter(term => term.category === category).length} terms
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="bg-primary/5 border-t border-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Master Crypto Terminology?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands who have expanded their crypto knowledge with our comprehensive glossary.
          </p>
          <Button 
            variant="premium" 
            size="lg"
            onClick={() => navigate('/glossary')}
          >
            Start Learning Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="text-sm text-muted-foreground mt-8">
            <p>© 2024 CryptoGlossary. Your guide to crypto terminology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;