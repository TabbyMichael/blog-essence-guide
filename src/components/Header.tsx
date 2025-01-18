import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AuthForms } from "./AuthForms";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-2xl font-merriweather font-bold text-primary">
            BlogSpace
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserCircle className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Account</SheetTitle>
                <SheetDescription>
                  Sign in to access your account or create a new one.
                </SheetDescription>
              </SheetHeader>
              <AuthForms />
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}