"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, MoreHorizontal } from "lucide-react";
import { useState, useEffect } from "react";

// Define testimonial type
interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openDialogId, setOpenDialogId] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // First row testimonials
  const testimonials1: Testimonial[] = [
    {
      id: 1,
      name: "Johnny C.",
      role: "Student at UCLA",
      content:
        "To be honest, I would not have done so much without Adam's help. As a great advisor, he is professionally and personally devoted; he listens to the students and really cares about what students are interested in. In other words, he sees the students' interests as his own and he brings out his students' potentials. During high school, I had a lot of chances to meet up with Adam just to talk about life, school and everything. He can be a good friend and also a wonderful guide, especially when I was choosing the schools that could fit me. More importantly, he can offer and teach students how to both plan for the long term and work on immediate goals. I have to say that the things I learned from Adam will benefit me for life-long.",
      rating: 5,
      avatar: "JC",
    },
    {
      id: 2,
      name: "Eva Y. and Wayne P.",
      role: "Parents from Shanghai",
      content:
        "Our daughter Kim surprised us when she asked if she could teach in Africa. We were worried and accompanied her. She taught so well on Rodrigues Island, Mauritius and we were very proud of her. Adam then worked with us and helped Kim discover the best liberal arts university in Canada. As parents who have witnessed first hand the work and the care Adam put into both the summer program and into helping us select universities we would like to express our support for Adam and his work.",
      rating: 5,
      avatar: "MJ",
    },
    {
      id: 3,
      name: "Ameer J.",
      role: "MIT Sloan School",
      content:
        "Adam was not only a tutor but also a coach and mentor to me when I was studying for the GMAT. He helped me to score well on the GMAT when I was floundering with standardized testing. Adam is not only an exceptional tutor but ever since I've known him he has been in the space of enriching academic lives of students through mentoring. ",
      rating: 5,
      avatar: "ER",
    },
  ];

  // Second row testimonials
  const testimonials2: Testimonial[] = [
    {
      id: 6,
      name: "James Thompson",
      role: "DevOps Engineer",
      content:
        "Adam's expertise in cloud technologies and deployment strategies was exactly what I needed. Now I'm confidently managing AWS infrastructure.",
      rating: 5,
      avatar: "JT",
    },
    {
      id: 7,
      name: "Ana Martinez",
      role: "Mobile Developer",
      content:
        "Learning React Native with Adam was fantastic. His hands-on projects and debugging sessions prepared me perfectly for mobile development.",
      rating: 5,
      avatar: "AM",
    },
    {
      id: 8,
      name: "Robert Chen",
      role: "Machine Learning Engineer",
      content:
        "Adam's guidance on ML algorithms and TensorFlow was invaluable. His teaching helped me understand both theory and practical implementation.",
      rating: 5,
      avatar: "RC",
    },
    {
      id: 9,
      name: "Sophie Laurent",
      role: "Product Engineer",
      content:
        "The certification prep sessions were thorough and well-structured. Adam's mock interviews gave me the confidence to ace my technical rounds.",
      rating: 5,
      avatar: "SL",
    },
    {
      id: 10,
      name: "Michael Park",
      role: "Security Engineer",
      content:
        "Adam's cybersecurity and secure coding practices training was top-notch. His real-world experience shows in every lesson.",
      rating: 5,
      avatar: "MP",
    },
  ];

  // Create duplicated arrays for seamless infinite scroll
  const extendedTestimonials1 = [...testimonials1, ...testimonials1];
  // const extendedTestimonials2 = [...testimonials2, ...testimonials2];

  // Helper function to truncate text to approximately 4 lines
  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    const truncated = content.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return truncated.substring(0, lastSpace) + '...';
  };

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    const truncatedContent = truncateContent(testimonial.content);
    const needsExpansion = testimonial.content.length > truncatedContent.length - 3; // -3 for the "..."

    const handleCardClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (needsExpansion) {
        setOpenDialogId(testimonial.id);
      }
    };

    const handleMoreClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setOpenDialogId(testimonial.id);
    };

    return (
      <Card 
        className={`flex-shrink-0 w-80 mx-2 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${needsExpansion ? 'cursor-pointer' : ''}`}
        onClick={handleCardClick}
      >
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
                {testimonial.role}
              </p>
            </div>
          </div>

          <div className="flex mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <div className="relative">
            <p className="text-muted-foreground leading-relaxed text-sm line-clamp-4">
              &ldquo;{truncatedContent}&rdquo;
            </p>
            
            {needsExpansion && (
              <button 
                onClick={handleMoreClick}
                className="absolute bottom-0 right-0 p-1 hover:bg-muted/50 rounded-full transition-colors group"
                aria-label="Read more"
              >
                <MoreHorizontal className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              </button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section
      className={`pb-20 overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      aria-label="Student testimonials"
    >
      <div className="max-w-6xl mt-24 md:mt-4 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center my-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground">
            Loved by Students And Parents
          </h2>
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
          {/* <div>
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
          </div> */}


          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Global Dialog - Outside of scrolling container */}
      {testimonials1.concat(testimonials2).map((testimonial) => (
        <Dialog 
          key={testimonial.id} 
          open={openDialogId === testimonial.id} 
          onOpenChange={(open) => !open && setOpenDialogId(null)}
        >
          <DialogContent className="max-w-2xl w-[95vw] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <DialogTitle className="text-xl font-semibold">
                    {testimonial.name}
                  </DialogTitle>
                  <p className="text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-foreground leading-relaxed text-base border-l-4 border-primary/30 pl-4 italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
            </div>
          </DialogContent>
        </Dialog>
      ))}

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

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
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