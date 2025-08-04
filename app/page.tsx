"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, use } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      title: "Programming Fundamentals",
      description: "Master the core concepts of programming with hands-on practice and real-world examples.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "One-on-One Sessions",
      description: "Personalized tutoring sessions tailored to your learning pace and specific goals.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "Fast-Track Learning",
      description: "Accelerated learning paths designed to get you coding confidently in record time.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "Goal-Oriented Approach",
      description: "Structured curriculum focused on achieving your specific programming objectives.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "Certification Prep",
      description: "Comprehensive preparation for industry-recognized programming certifications.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "Interactive Learning",
      description: "Engaging video tutorials and interactive coding exercises for better retention.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&crop=entropy&auto=format"
    }
  ];

  return (
    <div className="min-h-screen px-4">
      {/* Hero Section */}
      <section className="flex items-center py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className={`space-y-8 transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            {/* Badge */}
            <Badge
              variant="secondary"
              className={`px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground border-secondary/30 rounded-full transition-all duration-700 delay-100 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              ✨ Professional Tutor
            </Badge>

            {/* Main heading */}
            <h1 className={`text-5xl lg:text-7xl elegant-heading font-bold tracking-tight leading-tight text-foreground transition-all duration-700 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              Adam Tolnay
            </h1>

            {/* Subtitle */}
            <p className={`text-xl lg:text-2xl elegant-text text-muted-foreground leading-relaxed max-w-lg transition-all duration-700 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptas delectus adipisci alias obcaecati a aliquam vero sed! Adipisci, quam.
            </p>

            {/* CTA Button - Fixed responsive padding */}
            <Button
              className={`bg-primary hover:bg-primary/90 text-primary-foreground w-fit px-6 sm:px-10 py-4 text-lg sm:text-xl elegant-text font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 h-auto transform hover:scale-105 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
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
          <div className={`relative transition-all duration-700 delay-500 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}>
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
      <section className={`px-4 py-20 transition-all duration-700 delay-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Subjects I Teach
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programming education tailored to your success
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card 
                key={index}
                className="group relative border-2 border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-102 hover:shadow-2xl bg-card/50 backdrop-blur-sm cursor-pointer transform-gpu"
              >
                <CardHeader className="space-y-4 pb-4">
                  {/* Card Image with padding inside */}
                  <div className="relative h-48 overflow-hidden rounded-lg">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102 rounded-lg"
                    />
                  </div>

                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {card.description}
                  </CardDescription>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}