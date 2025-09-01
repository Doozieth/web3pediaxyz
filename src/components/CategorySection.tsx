import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import ResourceCard from "./ResourceCard";

interface Resource {
  title: string;
  description: string;
  category: string;
  rating: number;
  tags: string[];
  url: string;
  featured?: boolean;
}

interface CategorySectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  resources: Resource[];
}

const CategorySection = ({ title, description, icon: Icon, resources }: CategorySectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Icon className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All {title}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;