'use client';
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"
import { siteConfig } from "@/lib/config/site"
import { useState } from "react"
import { Video, Mail, Menu } from "lucide-react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/25 px-4" role="navigation">
      <div className="flex max-w-6xl mx-auto h-24 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link className="flex items-center text-lg" href="/">
            <p className="text-xl font-semibold">{siteConfig.name}</p>
          </Link>
          <div className="hidden lg:flex">
            {siteConfig.navItems.map((item) => (
              <div key={item.href}>
                <Button
                  variant="ghost"
                  asChild
                >
                  <Link href={item.href} className="text-lg font-normal">
                    {item.label}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center justify-between mr-6">
            <Button
              variant="outline"
              size="default"
              asChild
            >
              <Link
                href={siteConfig.links.email}
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Me
                <Mail className="text-default-500 w-5 h-5" />
              </Link> 
            </Button>
          </div>

          <div className="hidden lg:flex">
            <Button color="primary" className="text-sm font-normal" asChild>
              <Link href="/">
                <Video className="text-default-500 w-5 h-5 mt-0.5" />
                Book a Lesson
              </Link>
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
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-6">
                {siteConfig.navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className="justify-start"
                    onClick={() => setIsMenuOpen(false)}
                    asChild
                  >
                    <Link href={item.href}>
                      {item.label}
                    </Link>
                  </Button>
                ))}
                <Button
                  onClick={() => setIsMenuOpen(false)}
                  variant="default"
                  className="mt-4"
                  asChild
                >
                  <Link href="/">
                    Login / Sign Up
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}