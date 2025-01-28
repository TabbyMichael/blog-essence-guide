import { useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const generatePosts = () => {
  const categories = ["Development", "Technology", "Productivity", "Design", "Business"];
  const posts = [];
  
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
  
  for (let i = 1; i <= 100; i++) {
    const titleIndex = (i - 1) % blogTitles.length;
    const title = i <= blogTitles.length ? blogTitles[i - 1] : `${blogTitles[titleIndex]} - Part ${Math.ceil(i / blogTitles.length)}`;
    
    posts.push({
      title,
      excerpt: `Discover insights and practical tips about ${title.toLowerCase()}. This comprehensive guide will help you understand the key concepts and best practices.`,
      category: categories[Math.floor(Math.random() * categories.length)],
      readingTime: `${Math.floor(Math.random() * 10 + 3)} min read`,
      image: `https://picsum.photos/seed/${i}/800/600`,
      slug: `blog-post-${i}`,
    });
  }
  
  return posts;
};

const posts = generatePosts();
const categories = ["Development", "Technology", "Productivity", "Design", "Business"];
const POSTS_PER_PAGE = 15;

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = activeCategory === "all"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

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
        {paginatedPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNumber = currentPage <= 3
              ? i + 1
              : currentPage >= totalPages - 2
                ? totalPages - 4 + i
                : currentPage - 2 + i;
            
            if (pageNumber <= totalPages) {
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPage(pageNumber)}
                    isActive={currentPage === pageNumber}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            }
            return null;
          })}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
