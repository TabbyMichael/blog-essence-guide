import { Button } from "@/components/ui/button";
import { UserCircle, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AuthForms } from "./AuthForms";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-merriweather font-bold text-primary">
              BlogSpace
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="/trending" className="text-muted-foreground hover:text-primary transition-colors">
                Trending
              </a>
              <a href="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                Categories
              </a>
              <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative w-64">
              <Input
                type="search"
                placeholder="Search posts..."
                className="pr-8"
              />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <UserCircle className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                <SheetHeader className="mb-6">
                  <SheetTitle>Account</SheetTitle>
                  <SheetDescription>
                    Sign in to access your account or create a new one.
                  </SheetDescription>
                </SheetHeader>
                <AuthForms />
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}