import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { CryptoTerm } from "@/data/cryptoTerms";
import { useNavigate } from "react-router-dom";

interface TermCardProps {
  term: CryptoTerm;
}

const TermCard = ({ term }: TermCardProps) => {
  const navigate = useNavigate();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-muted';
    }
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-purple hover:-translate-y-1 group cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              {term.term}
            </CardTitle>
            <CardDescription className="mt-2 line-clamp-2">
              {term.definition}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="bg-muted">{term.category}</Badge>
          <Badge 
            variant="outline" 
            className={cn("text-xs", getDifficultyColor(term.difficulty))}
          >
            {term.difficulty}
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {term.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {term.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{term.tags.length - 3} more
            </Badge>
          )}
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:bg-primary group-hover:text-white transition-all"
          onClick={() => navigate(`/term/${term.id}`)}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TermCard;