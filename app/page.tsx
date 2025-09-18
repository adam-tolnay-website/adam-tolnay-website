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
import Degrees from "@/components/Degrees";

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
          subtitle="I am a Harvard-educated mentor committed to passing on the content and spirit of the personalized guidance I received during the entire arc of my own academic, intellectual and life journey."
          ctaText="Book a Trial Lesson Today"
        />
      </div>

      <div id="degrees" className="block md:hidden">
        <Degrees />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <div id="degrees" className="hidden md:block">
        <Degrees />
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
    </div>
  );
}