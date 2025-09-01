import { Search, Menu, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold text-foreground">CryptoGuide</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search resources..." 
              className="pl-10 bg-muted/50 border-primary/20 focus:border-primary"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Learning</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tools</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Exchanges</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">News</a>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;