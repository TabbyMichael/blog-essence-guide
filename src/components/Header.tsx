import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold">
            BlogSpace
          </Link>
        </nav>
      </div>
    </header>
  );
}