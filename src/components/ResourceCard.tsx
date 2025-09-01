import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  rating: number;
  tags: string[];
  url: string;
  featured?: boolean;
}

const ResourceCard = ({ title, description, category, rating, tags, url, featured = false }: ResourceCardProps) => {
  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-purple hover:-translate-y-1 group",
      featured && "ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-primary/10"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          {featured && (
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="bg-muted">{category}</Badge>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:bg-primary group-hover:text-white transition-all"
          onClick={() => window.open(url, '_blank')}
        >
          Visit Resource
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;