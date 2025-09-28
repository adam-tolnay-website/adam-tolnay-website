import { siteConfig } from "@/lib/config/site";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20 py-8 bg-gray-50 dark:bg-gray-900/20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground elegant-text font-medium">
          © 2025 Adam Tolnay. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            href={siteConfig.links.email}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
            target="_blank"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
            aria-label="LinkedIn"
            target="_blank"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
