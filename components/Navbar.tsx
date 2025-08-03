"use client";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { useContext, useState } from "react";
import { DiscIcon, Mail, Menu } from "lucide-react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-foreground/10"
      role="navigation"
    >
      <div className="flex max-w-7xl mx-auto h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link className="flex items-center gap-2 text-lg" href="/">
            <p className="font-bold">Hackpost</p>
            <p className="">Guide</p>
          </Link>
          <div className="hidden lg:flex">
            {siteConfig.navItems.map((item) => (
              <div key={item.href}>
                <Button variant="ghost" asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-right">
          <div className="flex items-center justify-between mr-6">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={siteConfig.links.discord}
                aria-label="Discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscIcon className="text-default-500 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={siteConfig.links.github}
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="text-default-500 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="hidden lg:flex">
            <Button color="primary" className="text-sm font-normal" asChild>
              <Link href="/">Login / Sign Up</Link>
            </Button>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button className="lg:hidden" size="icon" variant="outline">
                <Menu className="text-default-500 h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link className="mr-6 hidden lg:flex" href="/">
                <span className="sr-only">Hackpost Guide</span>
              </Link>
              <div className="grid gap-2 py-6">
                <div key={`${item}-${index}`}>
                  {index === siteConfig.navMenuItems.length - 1 ? (
                    <Button
                      onClick={() => setIsMenuOpen(false)}
                      variant="default"
                      className="mt-2"
                      size="lg"
                      asChild
                    >
                      <Link href="/enter">
                        <p className="text-background">Login / Sign Up</p>
                      </Link>
                    </Button>
                  ) : (
                    <Link
                      color={"foreground"}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <p>{item.label}</p>
                    </Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
