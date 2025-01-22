import { useParams } from "react-router-dom";
import { Share2, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// Generate the same blog posts data as in Index.tsx
const generatePosts = () => {
  const categories = ["Development", "Technology", "Productivity", "Design", "Business"];
  const blogTitles = [
    "The Future of Artificial Intelligence in 2024",
    "10 Essential Web Development Tools Every Developer Should Know",
    "Understanding React Hooks: A Comprehensive Guide",
    "Building Scalable Applications with Microservices",
    "The Complete Guide to UI/UX Design Principles",
    "Mastering TypeScript: Advanced Tips and Tricks",
    "Cloud Computing: AWS vs Azure vs Google Cloud",
    "The Rise of No-Code Development Platforms",
    "Cybersecurity Best Practices for Developers",
    "Machine Learning Fundamentals Explained",
    "DevOps Pipeline Optimization Strategies",
    "Mobile App Development Trends in 2024",
    "Blockchain Technology: Beyond Cryptocurrency",
    "Software Architecture Patterns Explained",
    "The Impact of 5G on Web Applications",
    "Progressive Web Apps: A Complete Guide",
    "Data Science for Beginners: Getting Started",
    "Modern CSS Techniques and Best Practices",
    "API Design and Development Guidelines",
    "Testing Strategies for Modern Applications"
  ];

  const posts: Record<string, any> = {};
  
  for (let i = 1; i <= 100; i++) {
    const titleIndex = (i - 1) % blogTitles.length;
    const title = i <= blogTitles.length ? blogTitles[i - 1] : `${blogTitles[titleIndex]} - Part ${Math.ceil(i / blogTitles.length)}`;
    
    posts[`blog-post-${i}`] = {
      title,
      content: `
        <h1>${title}</h1>
        
        <p>Welcome to our comprehensive guide on ${title.toLowerCase()}. In this article, we'll explore the key concepts, best practices, and practical applications that will help you master this topic.</p>
        
        <h2>Introduction</h2>
        <p>In today's rapidly evolving technological landscape, understanding ${title.toLowerCase()} is more important than ever. Whether you're a beginner or an experienced professional, this guide will provide valuable insights and practical knowledge.</p>
        
        <h2>Key Concepts</h2>
        <p>Let's dive into the fundamental concepts that form the backbone of ${title.toLowerCase()}. We'll break down complex ideas into digestible pieces and provide real-world examples to illustrate each point.</p>
        
        <h2>Best Practices</h2>
        <p>Following industry best practices is crucial for success in this field. We'll cover the most important guidelines and standards that professionals use in their daily work.</p>
        
        <h2>Practical Applications</h2>
        <p>Theory is important, but practical application is where real learning happens. We'll explore various use cases and scenarios where these concepts can be applied effectively.</p>
        
        <h2>Future Trends</h2>
        <p>The field is constantly evolving, and staying ahead of trends is crucial. We'll discuss emerging technologies and methodologies that are shaping the future of ${title.toLowerCase()}.</p>
        
        <h2>Conclusion</h2>
        <p>Understanding ${title.toLowerCase()} is essential in today's digital world. By following the principles and practices outlined in this guide, you'll be well-equipped to tackle challenges and create innovative solutions.</p>
      `,
      category: categories[Math.floor(Math.random() * categories.length)],
      readingTime: `${Math.floor(Math.random() * 10 + 3)} min read`,
      image: `https://picsum.photos/seed/${i}/800/600`,
    };
  }
  
  return posts;
};

const posts = generatePosts();

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
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}