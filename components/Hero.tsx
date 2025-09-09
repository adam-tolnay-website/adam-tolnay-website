"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    ctaText?: string;
}

const HeroSection = ({
    title = "Adam Tolnay",
    subtitle = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaText = "Book a Trial Lesson",
}: HeroSectionProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="flex items-center py-20" aria-label="Hero section">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Text content */}
                <div
                    className={`space-y-8 transition-all duration-700 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    {/* Badge */}
                    <Badge
                        variant="secondary"
                        className={`px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground border-secondary/30 rounded-full transition-all duration-700 delay-100 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                        }`}
                    >
                        ✨ Ivy League Mentor
                    </Badge>

                    {/* Main heading */}
                    <h1
                        className={`text-5xl lg:text-7xl elegant-heading font-bold tracking-tight leading-tight text-foreground transition-all duration-700 delay-200 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        {title}
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`text-xl lg:text-2xl elegant-text text-muted-foreground leading-relaxed max-w-lg transition-all duration-700 delay-300 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                        }`}
                    >
                        {subtitle}
                    </p>

                    {/* CTA Button */}
                    <Button
                        size="lg"
                        className={`bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 scale-100 hover:scale-105 md:scale-110 md:hover:scale-115 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                        }`}
                        aria-label={`${ctaText} - Contact Adam for lessons`}
                    >
                        <Link href={siteConfig.links.book} target="_blank">
                            {ctaText}
                        </Link>
                    </Button>
                </div>

                {/* Right side - Image */}
                <div
                    className={`relative transition-all duration-700 delay-500 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                >
                    {/* Main image */}
                    <div className="relative">
                        <Image
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Ivy League Mentor Adam Tolnay"
                            width={800}
                            height={700}
                            className="w-full h-[700px] object-cover rounded-2xl shadow-2xl"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Optional overlay for better contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
