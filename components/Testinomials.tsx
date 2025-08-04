"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

// Define testimonial type
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // First row testimonials
  const testimonials1: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      content:
        "Adam's teaching style is incredible. He made complex algorithms feel simple and intuitive. Landed my dream job at Google thanks to his guidance!",
      rating: 5,
      avatar: "SC",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Full Stack Developer",
      company: "Meta",
      content:
        "The one-on-one sessions were game-changing. Adam adapted to my learning pace perfectly and helped me transition from complete beginner to confident developer.",
      rating: 5,
      avatar: "MJ",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Frontend Developer",
      company: "Airbnb",
      content:
        "Best investment I've made in my career. Adam's practical approach and real-world examples made learning React and JavaScript so much easier.",
      rating: 5,
      avatar: "ER",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Backend Developer",
      company: "Netflix",
      content:
        "Adam helped me master Python and system design. His structured approach and patience made all the difference in my technical interviews.",
      rating: 5,
      avatar: "DK",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Data Scientist",
      company: "Tesla",
      content:
        "Exceptional tutor! Adam's deep knowledge and ability to explain complex concepts simply helped me pivot into data science successfully.",
      rating: 5,
      avatar: "LW",
    },
  ];

  // Second row testimonials
  const testimonials2: Testimonial[] = [
    {
      id: 6,
      name: "James Thompson",
      role: "DevOps Engineer",
      company: "Amazon",
      content:
        "Adam's expertise in cloud technologies and deployment strategies was exactly what I needed. Now I'm confidently managing AWS infrastructure.",
      rating: 5,
      avatar: "JT",
    },
    {
      id: 7,
      name: "Ana Martinez",
      role: "Mobile Developer",
      company: "Spotify",
      content:
        "Learning React Native with Adam was fantastic. His hands-on projects and debugging sessions prepared me perfectly for mobile development.",
      rating: 5,
      avatar: "AM",
    },
    {
      id: 8,
      name: "Robert Chen",
      role: "Machine Learning Engineer",
      company: "OpenAI",
      content:
        "Adam's guidance on ML algorithms and TensorFlow was invaluable. His teaching helped me understand both theory and practical implementation.",
      rating: 5,
      avatar: "RC",
    },
    {
      id: 9,
      name: "Sophie Laurent",
      role: "Product Engineer",
      company: "Stripe",
      content:
        "The certification prep sessions were thorough and well-structured. Adam's mock interviews gave me the confidence to ace my technical rounds.",
      rating: 5,
      avatar: "SL",
    },
    {
      id: 10,
      name: "Michael Park",
      role: "Security Engineer",
      company: "Cloudflare",
      content:
        "Adam's cybersecurity and secure coding practices training was top-notch. His real-world experience shows in every lesson.",
      rating: 5,
      avatar: "MP",
    },
  ];

  // Create duplicated arrays for seamless infinite scroll
  const extendedTestimonials1 = [...testimonials1, ...testimonials1];
  const extendedTestimonials2 = [...testimonials2, ...testimonials2];

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <Card className="flex-shrink-0 w-80 mx-2 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      <CardContent className="py-2 px-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold mr-4">
            {testimonial.avatar}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">
              {testimonial.name}
            </h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>

        <div className="flex mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </CardContent>
    </Card>
  );

  return (
    <section
      className={`pb-20 overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      aria-label="Student testimonials"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center my-8">
          {/* <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground border-secondary/30 rounded-full mb-4"
          >
            ⭐ Student Success Stories
          </Badge> */}
          <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground">
            Loved by Students And Parents
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from students who&apos;ve achieved their programming goals
          </p> */}
        </div>

        {/* Testimonials Container with proper overflow handling */}
        <div className="relative -mx-4 overflow-hidden">
          {/* First Row - Moving Right */}
          <div className="mb-4">
            <div
              className="flex testimonial-scroll-right hover:pause-animation"
              style={{
                animation: "scrollRight 40s linear infinite",
                width: "fit-content",
              }}
            >
              {extendedTestimonials1.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* Second Row - Moving Left */}
          <div>
            <div
              className="flex testimonial-scroll-left hover:pause-animation"
              style={{
                animation: "scrollLeft 40s linear infinite",
                width: "fit-content",
              }}
            >
              {extendedTestimonials2.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* Gradient Overlays for smooth edges - now properly positioned */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join these success stories?
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Start Your Journey Today
          </button>
        </div> */}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-scroll-right:hover,
        .testimonial-scroll-left:hover {
          animation-play-state: paused !important;
        }

        .pause-animation {
          animation-play-state: paused !important;
        }

        /* Prefers-reduced-motion support for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .testimonial-scroll-right,
          .testimonial-scroll-left {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
