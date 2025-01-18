import { Github, Twitter, Facebook, Instagram, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="border-t bg-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-merriweather font-bold text-lg mb-4">BlogSpace</h3>
            <p className="text-muted-foreground">
              A place to share your thoughts and ideas with the world.
            </p>
          </div>
          <div>
            <h4 className="font-merriweather font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-merriweather font-bold mb-4">Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="/category/technology" className="text-muted-foreground hover:text-primary transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="/category/lifestyle" className="text-muted-foreground hover:text-primary transition-colors">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="/category/business" className="text-muted-foreground hover:text-primary transition-colors">
                  Business
                </a>
              </li>
              <li>
                <a href="/category/culture" className="text-muted-foreground hover:text-primary transition-colors">
                  Culture
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-merriweather font-bold mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:contact@blogspace.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="mt-6">
              <h5 className="font-merriweather font-bold mb-2">Subscribe to our newsletter</h5>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BlogSpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}