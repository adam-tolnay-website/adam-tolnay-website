"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/Hero";
import SubjectsSection from "@/components/Subjects";
import TestimonialsSection from "@/components/Testinomials";
import Bio from "@/components/Bio";
import CallToAction from "@/components/CallToAction";
import { smoothScrollToId } from "@/lib/scroll-utils";
import { siteConfig } from "@/lib/config/site";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBookingClick = () => {
    // Implement your booking logic here
    // Could scroll to contact form, open modal, redirect to booking page, etc.
    console.log("Booking clicked - implement your booking logic");
    
    // Example: scroll to contact section using smooth scroll utility
    // smoothScrollToId('contact');
    
    // Example: scroll to bio section as demo
    // smoothScrollToId('bio');
    
    // Example: open external booking link
    window.open(siteConfig.links.book, '_blank');
  };

  return (
    <div className="min-h-screen px-4">
      <div id="home">
        <HeroSection 
          title="Adam Tolnay"
          subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ctaText="Book a Lesson Today"
          onCtaClick={handleBookingClick}
        />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <div id="bio">
        <Bio />
      </div>

      <div id="subjects">
        <SubjectsSection isVisible={isVisible} />
      </div>

      <CallToAction />
      {/* <PricingSection /> */}
    </div>
  );
}