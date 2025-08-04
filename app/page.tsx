import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen px-4">
      {/* Hero Section */}
      <section className="flex items-center py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground border-secondary/30 rounded-full"
            >
              ✨ Professional Tutor
            </Badge>

            {/* Main heading */}
            <h1 className="text-5xl lg:text-7xl elegant-heading font-bold tracking-tight leading-tight text-foreground">
              Adam Tolnay
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl elegant-text text-muted-foreground leading-relaxed max-w-lg">
              Elegant web solutions crafted with precision and care. Bringing your digital vision to life through modern design and cutting-edge technology.
            </p>

            {/* CTA Button */}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit px-10 py-4 text-xl elegant-text font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 h-auto"
            >
              Book a Lesson Today
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            {/* Main image placeholder */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="Team collaboration and digital innovation"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Optional overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Your existing card content */}
        </div>
      </section>
    </div>
  );
}
