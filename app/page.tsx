"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/Hero";
import SubjectsSection from "@/components/Subjects";
import TestimonialsSection from "@/components/Testinomials";
import Bio from "@/components/Bio";
import CallToAction from "@/components/CallToAction";
import { smoothScrollToId } from "@/lib/scroll-utils";
import { siteConfig } from "@/lib/config/site";
import FAQ from "@/components/FAQ";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="min-h-screen px-4">
      <div id="home">
        <HeroSection 
          title="Adam Tolnay"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ctaText="Book a Lesson Today"
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

      <div id="faq">
        <FAQ />
      </div>

      <CallToAction />
      {/* <PricingSection /> */}
    </div>
  );
}