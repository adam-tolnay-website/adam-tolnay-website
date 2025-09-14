import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";
import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="pt-16 md:pt-32 pb-20 md:pb-60 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        {/* Avatar */}
        <div className="flex justify-center mb-0">
            <Image
              src="/images/7.jpg"
              alt="Adam's Avatar"
              width={128}
              height={128}
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg"
            />
            {/* Background Gradient - you can add this in later */}
            {/* <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent"></div> */}
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-6xl font-bold text-foreground elegant-heading py-4">
          Have more questions? I&apos;m happy to talk!
        </h2>
        {/* Button */}
        <Button
          size={"lg"}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          asChild
        >
          <Link href={siteConfig.links.zoom} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            Book a Meeting with Me
            <Rocket className="ml-2 w-6 h-6" />
          </Link>
        </Button>
        <p className="text-md text-center">
          Your first meeting is completely free of charge. I look forward to hearing from you!
        </p>
      </div>
    </section>
  );
}