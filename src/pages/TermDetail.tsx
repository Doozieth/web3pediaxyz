import { useParams, useNavigate, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, ExternalLink, Tag, Users } from "lucide-react";
import { cryptoTerms } from "@/data/cryptoTerms";
import { cn } from "@/lib/utils";

const TermDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const term = cryptoTerms.find(t => t.id === id);
  
  if (!term) {
    return (
      <div className="min-h-screen bg-background pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Term Not Found</h1>
          <p className="text-muted-foreground mb-8">The term you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/glossary')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Glossary
          </Button>
        </div>
      </div>
    );
  }

  const relatedTermsData = term.relatedTerms 
    ? cryptoTerms.filter(t => term.relatedTerms?.includes(t.id))
    : [];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/glossary')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Glossary
          </Button>
          
          <div className="flex items-start gap-4 mb-6">
            <BookOpen className="h-8 w-8 text-primary mt-1" />
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {term.term}
              </h1>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-muted text-base px-3 py-1">
                  {term.category}
                </Badge>
                <Badge 
                  variant="outline" 
                  className={cn("text-base px-3 py-1", getDifficultyColor(term.difficulty))}
                >
                  {term.difficulty}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-8">
            {/* Main Definition */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Definition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-foreground">
                  {term.definition}
                </p>
              </CardContent>
            </Card>

            {/* Examples */}
            {term.examples && term.examples.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ExternalLink className="h-5 w-5 mr-2 text-primary" />
                    Examples
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {term.examples.map((example, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-primary" />
                  Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {term.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Terms */}
            {relatedTermsData.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Related Terms
                  </CardTitle>
                  <CardDescription>
                    Explore other terms that are connected to {term.term}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {relatedTermsData.map((relatedTerm) => (
                      <Link
                        key={relatedTerm.id}
                        to={`/term/${relatedTerm.id}`}
                        className="group"
                      >
                        <Card className="transition-all hover:shadow-purple hover:-translate-y-1">
                          <CardContent className="p-4">
                            <h4 className="font-semibold group-hover:text-primary transition-colors">
                              {relatedTerm.term}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {relatedTerm.definition}
                            </p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              {relatedTerm.category}
                            </Badge>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermDetail;