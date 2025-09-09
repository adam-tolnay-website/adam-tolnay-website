import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="pt-32 pb-60 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Heading */}
        <h2 className="text-4xl lg:text-6xl font-bold text-foreground elegant-heading">
          Your Journey to Mastery Starts Here
        </h2>

        {/* Button */}
        <Button
          size={"lg"}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Book A Free Trial Lesson
          <Rocket className="ml-2 w-6 h-6" />
        </Button>
      </div>
    </section>
  );
}
