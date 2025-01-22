import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  image: string;
  slug: string;
}

export function BlogCard({ title, excerpt, category, readingTime, image, slug }: BlogCardProps) {
  const navigate = useNavigate();
  
  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when sharing
    navigator.clipboard.writeText(window.location.origin + "/blog/" + slug);
    toast.success("Link copied to clipboard!");
  };

  const handleCardClick = () => {
    navigate(`/blog/${slug}`);
  };

  return (
    <Card 
      className="overflow-hidden group animate-fade-up cursor-pointer hover:shadow-lg transition-all duration-300" 
      onClick={handleCardClick}
    >
      <CardHeader className="p-0">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="font-medium">
            {category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            {readingTime}
          </div>
        </div>
        <h3 className="font-merriweather text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <Button variant="link" asChild className="p-0">
            <a 
              href={`/blog/${slug}`}
              onClick={(e) => e.stopPropagation()} // Prevent double navigation
            >
              Read More
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}