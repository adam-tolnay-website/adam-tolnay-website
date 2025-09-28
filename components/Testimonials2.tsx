"use client";

import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  image?: string;
}

export interface TestimonialsSectionProps {
  title?: string;
  description?: string;
  items?: TestimonialItem[];
}

// Default testimonials data with stock images
const defaultTestimonials: TestimonialItem[] = [
  {
    id: "johnny-c",
    name: "Johnny C.",
    role: "Student at UCLA",
    content: "To be honest, I would not have done so much without Adam's help. As a great advisor, he is professionally and personally devoted; he listens to the students and really cares about what students are interested in.",
    rating: 5,
    avatar: "JC",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
  },
  {
    id: "eva-wayne",
    name: "Eva Y. and Wayne P.",
    role: "Parents from Shanghai",
    content: "Our daughter Kim surprised us when she asked if she could teach in Africa. Adam worked with us and helped Kim discover the best liberal arts university in Canada.",
    rating: 5,
    avatar: "EW",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
  },
  {
    id: "ameer-j",
    name: "Ameer J.",
    role: "MIT Sloan School",
    content: "Adam was not only a tutor but also a coach and mentor to me when I was studying for the GMAT. He helped me to score well on the GMAT when I was floundering with standardized testing.",
    rating: 5,
    avatar: "AJ",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=600&fit=crop"
  },
  {
    id: "sarah-k",
    name: "Sarah K.",
    role: "Stanford Graduate",
    content: "The guidance I received was transformative. Adam's approach to college counseling goes beyond just applications - he helps you discover your true potential and craft your unique story.",
    rating: 5,
    avatar: "SK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop"
  },
  {
    id: "michael-l",
    name: "Michael L.",
    role: "Parent from New York",
    content: "We couldn't be happier with the results. Our son got into his dream school with Adam's help. The personalized attention and strategic planning made all the difference.",
    rating: 5,
    avatar: "ML",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop"
  },
];

const TestimonialsSection = ({
  title = "Student Success Stories",
  description = "Hear from students and parents about their transformative experiences. These testimonials showcase the real impact of dedicated mentorship and personalized guidance.",
  items = defaultTestimonials,
}: TestimonialsSectionProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`size-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <section className="py-32 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-lg text-muted-foreground">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <div className="group rounded-xl cursor-pointer">
                    {/* Background Image */}
                    <Image
                      src={item.image || ""}
                      alt={item.name}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                    
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6">
                      <Quote className="size-8 text-white/20 fill-white/10" />
                    </div>
                    
                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      {/* Avatar and Name */}
                      <div className="flex items-center gap-3 mb-3">
                        {item.avatar && (
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-semibold border border-white/30">
                            {item.avatar}
                          </div>
                        )}
                        <div>
                          <div className="text-lg font-semibold">
                            {item.name}
                          </div>
                          <div className="text-sm opacity-90">
                            {item.role}
                          </div>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-3">
                        {renderStars(item.rating)}
                      </div>
                      
                      {/* Testimonial Content */}
                      <div className="line-clamp-3 text-sm leading-relaxed opacity-95">
                        &quot;{item.content}&quot;
                      </div>
                      
                      {/* Read More Link */}
                      <div className="flex items-center text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read full story
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Dot Navigation */}
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-primary w-8" 
                  : "bg-primary/20 hover:bg-primary/40"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
// export type { TestimonialItem };