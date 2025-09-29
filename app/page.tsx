"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/Hero";
import SubjectsSection from "@/components/Subjects";
import Bio from "@/components/Bio";
import CallToAction from "@/components/CallToAction";
import { smoothScrollToId } from "@/lib/scroll-utils";
import { siteConfig } from "@/lib/config/site";
import FAQ from "@/components/FAQ";
import Degrees from "@/components/Degrees";
import TestimonialsSection from "@/components/Testinomials";

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
          // subtitle="I am a Harvard-educated mentor who offers personalized instruction and seasoned, caring guidance to aspiring students. My mission is to empower each student to find their passion while developing valuable intellectual skills."
          ctaText="Reach out to me directly"
        />
      </div>

      <div id="subjects">
        <SubjectsSection isVisible={isVisible} />
      </div>

      {/* Show only on mobile */}
      <div id="degrees" className="block md:hidden">
        <Degrees />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* Show only on desktop */}
      <div id="degrees" className="hidden md:block">
        <Degrees />
      </div>

      <div id="bio">
        <Bio />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <CallToAction />
    </div>
  );
}