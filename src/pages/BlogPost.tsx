import { useParams } from "react-router-dom";
import { Share2, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// Mock data - in a real app, this would come from an API
const posts = {
  "getting-started-web-development": {
    title: "Getting Started with Web Development",
    content: `
      <p>Web development is an exciting journey that opens up countless opportunities in the digital world. Whether you're looking to build websites, web applications, or even mobile apps, understanding the fundamentals of web development is crucial.</p>
      
      <h2>The Basics</h2>
      <p>To get started with web development, you'll need to learn three core technologies:</p>
      <ul>
        <li>HTML for structure</li>
        <li>CSS for styling</li>
        <li>JavaScript for interactivity</li>
      </ul>

      <h2>Next Steps</h2>
      <p>Once you've mastered the basics, you can move on to more advanced topics like:</p>
      <ul>
        <li>Frontend frameworks (React, Vue, Angular)</li>
        <li>Backend development</li>
        <li>Database management</li>
      </ul>
    `,
    category: "Development",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  // Add more posts here
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts[slug as keyof typeof posts];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  if (!post) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Button asChild>
          <a href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </Button>
      </div>
    );
  }

  return (
    <article className="container py-12 max-w-4xl">
      <Button variant="ghost" asChild className="mb-8">
        <a href="/">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </a>
      </Button>

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />

      <div className="flex items-center justify-between mb-6">
        <Badge variant="secondary" className="font-medium">
          {post.category}
        </Badge>
        <div className="flex gap-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            {post.readingTime}
          </div>
          <Button variant="ghost" size="icon" onClick={handleShare}>
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <h1 className="font-merriweather text-4xl font-bold mb-6">{post.title}</h1>

      <div
        className="prose prose-custom max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}