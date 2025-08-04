import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Heading */}
        <h2 className="text-4xl lg:text-6xl font-bold text-foreground elegant-heading">
          Interested?
        </h2>

        {/* Button */}
        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Book A Free Trial Lesson
        </Button>
      </div>
    </section>
  );
}