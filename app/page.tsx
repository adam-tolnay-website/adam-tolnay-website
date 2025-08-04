"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/Hero";
import SubjectsSection from "@/components/Subjects";
import TestimonialsSection from "@/components/Testinomials";
import Bio from "@/components/Bio";
import CallToAction from "@/components/CallToAction";

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
    
    // Example: scroll to contact section
    // const contactSection = document.getElementById('contact');
    // contactSection?.scrollIntoView({ behavior: 'smooth' });
    
    // Example: open external booking link
    // window.open('https://calendly.com/your-booking-link', '_blank');
  };

  return (
    <div className="min-h-screen px-4">
      {/* Hero Section */}
      <HeroSection 
        title="Adam Tolnay"
        subtitle="Transform your programming journey with personalized tutoring and expert guidance. From fundamentals to advanced concepts, I'll help you achieve your coding goals."
        ctaText="Book a Lesson Today"
        onCtaClick={handleBookingClick}
      />

      <TestimonialsSection />

      <SubjectsSection isVisible={isVisible} />

      <Bio />
      <CallToAction />
      {/* <PricingSection /> */}
    </div>
  );
}