import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-slate-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-slate-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/features" className="hover:text-slate-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-slate-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-slate-900">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/blog" className="hover:text-slate-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-slate-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-slate-900">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/privacy" className="hover:text-slate-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-slate-900">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-600">
            © 2025 Your Company. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-slate-400 hover:text-slate-600">
              <span className="sr-only">Twitter</span>
              {/* Add your social media icons here */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
