import { useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Generate 100 blog posts
const generatePosts = () => {
  const categories = ["Development", "Technology", "Productivity", "Design", "Business"];
  const posts = [];
  
  for (let i = 1; i <= 100; i++) {
    posts.push({
      title: `Blog Post ${i}`,
      excerpt: `This is a brief description of blog post ${i}. Click to read more about this interesting topic.`,
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
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
      </main>

      <Footer />
    </div>
  );
}