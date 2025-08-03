import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xl font-bold">
          Your Logo
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
          About
        </Link>
        <Link href="/services" className="text-sm font-medium hover:text-blue-600 transition-colors">
          Services
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
          Contact
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost">Sign In</Button>
        <Button>Get Started</Button>
      </div>
    </nav>
  );
}