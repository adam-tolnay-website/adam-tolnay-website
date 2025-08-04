"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import Image from "next/image";

interface SubjectCard {
  title: string;
  description: string;
  image: string;
}

interface SubjectsSectionProps {
  isVisible?: boolean;
}

const SubjectsSection = ({ isVisible = true }: SubjectsSectionProps) => {
  const [localVisible, setLocalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLocalVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const cards: SubjectCard[] = [
    {
      title: "Programming Fundamentals",
      description:
        "Master the core concepts of programming with hands-on practice and real-world examples.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "One-on-One Sessions",
      description:
        "Personalized tutoring sessions tailored to your learning pace and specific goals.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Fast-Track Learning",
      description:
        "Accelerated learning paths designed to get you coding confidently in record time.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Goal-Oriented Approach",
      description:
        "Structured curriculum focused on achieving your specific programming objectives.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Certification Prep",
      description:
        "Comprehensive preparation for industry-recognized programming certifications.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Interactive Learning",
      description:
        "Engaging video tutorials and interactive coding exercises for better retention.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
  ];

  const shouldAnimate = isVisible && localVisible;

  return (
    <section
      className={`px-4 py-20 transition-all duration-700 delay-700 ${
        shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      aria-label="Programming subjects and teaching methods"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Subjects I Teach
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            expedita?
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
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={card.image}
                    alt={`${card.title} illustration`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-102 rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
  );
};

export default SubjectsSection;
