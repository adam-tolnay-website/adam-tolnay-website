import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="elegant-heading font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground elegant-text">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="elegant-heading font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground elegant-text">
              <li>
                <Link href="/features" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="elegant-heading font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground elegant-text">
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="elegant-heading font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground elegant-text">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground elegant-text">
            © 2025 Adam Tolnay. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Twitter</span>
              {/* Add your social media icons here */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
