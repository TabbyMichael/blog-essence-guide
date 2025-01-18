import { useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import { CategoryFilter } from "@/components/CategoryFilter";

// Mock data - in a real app, this would come from an API
const posts = [
  {
    title: "Getting Started with Web Development",
    excerpt: "Learn the fundamentals of web development and start your journey as a developer.",
    category: "Development",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    slug: "getting-started-web-development",
  },
  {
    title: "The Future of AI in Technology",
    excerpt: "Explore how artificial intelligence is shaping the future of technology and our daily lives.",
    category: "Technology",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    slug: "future-ai-technology",
  },
  {
    title: "Best Practices for Remote Work",
    excerpt: "Discover effective strategies for staying productive while working remotely.",
    category: "Productivity",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    slug: "remote-work-best-practices",
  },
];

const categories = ["Development", "Technology", "Productivity"];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = activeCategory === "all"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="container py-12">
      <header className="text-center mb-12">
        <h1 className="font-merriweather text-4xl font-bold mb-4">Welcome to Our Blog</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover insights about technology, development, and productivity
        </p>
      </header>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}