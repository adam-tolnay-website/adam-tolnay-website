import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export default function BioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Section Title */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground elegant-heading">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            {/* Bio Text - Intro */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I was born into a Hungarian-speaking community in rural Romania and grew up in New York City. As an immigrant, albeit at a young age, I understood that education was my only ladder to possible success. As such, I spent the first third of my life completing courses of study and fellowships at <b>Harvard College (Magna Cum Laude)</b>, <b>the London School of Economics</b>, <b>Georgetown University</b>, and <b>Stanford University</b>.
              </p>

              <p className="text-lg">
                At every step of my development, I was fortunate to have been mentored by intellectually robust and personally generous educators such as Prof. Ezra Vogel, Prof. Dominic Lieven, and Prof. Clifford Nass. Each took a genuine interest in my personal and intellectual development and also opened my eyes to new ways of seeing the world.
              </p>
            </div>

            {/* Read More Button */}
            <Button
              variant="default"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 font-medium group"
            >
              <span>Continue reading biography</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Stats or Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Students Taught
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">80+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Students Individually Mentored
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-700 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Background decoration - hidden on mobile, smaller on tablet */}
              <div className="hidden sm:block absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
              
              {/* Main image container with responsive heights */}
              <div className="relative">
                <Image
                    src="/images/3_revised.jpg"
                    alt="Ivy League Mentor Adam Tolnay"
                    width={800}
                    height={700}
                    className="w-[300px] h-[400px] sm:w-[400px] sm:h-[450px] lg:w-full md:h-[700px] object-cover rounded-2xl shadow-2xl mx-auto"
                    priority
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 400px, 50vw"
                />
            </div>

              {/* Floating badge - adjusted position and size for mobile */}
              {/* <div className="hidden lg:block">
                <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-card/95 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Accepting New Students
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Biography Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-left">Adam Tolnay — Full Biography</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 mt-6">
            {/* First Section with Image */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-md">
                  I was born into a Hungarian-speaking community in rural Romania and grew up in New York City. As an immigrant, albeit at a young age, I understood that education was my only ladder to possible success. As such, I spent the first third of my life completing courses of study and fellowships at Harvard College (Magna Cum Laude), the London School of Economics, Georgetown University, and Stanford University.
                </p>

                <p className="text-md">
                  At every step of my development, I was fortunate to have been mentored by intellectually robust and personally generous educators such as Prof. Ezra Vogel, Prof. Dominic Lieven, and Prof. Clifford Nass. Each took a genuine interest in my personal and intellectual development and also opened my eyes to new ways of seeing the world.
                </p>
                <p className="text-md">
                  During my second year in college, I launched Learning Enterprises, a non-profit organization that mobilized Harvard undergraduates to teach English in villages in Eastern Europe. The Learning Enterprises program is memorialized in fictionalized autobiographical form by Elif Batuman in her Pulitzer Prize finalist book, The Idiot. I ran Learning Enterprises for 11 years before passing it on to colleagues who replicated our model and extended it to 14 other countries, including China, Thailand, Mexico, Ethiopia, and Mauritius. Later, I launched similar non-profit organizations that imported volunteer teachers to villages in India and to island communities in Papua New Guinea. 
                </p>
                <p className="text-md">
                  The decade and a half spent running people-to-people global educational organizations distilled my life’s mission: to connect students to teachers who care about them beyond the four walls of the classroom and for periods longer than a semester.
                </p>
              </div>
              
              <div className="relative h-[400px] lg:h-full min-h-[300px]">
                <Image
                  src="/images/3_revised.jpg"
                  alt="Adam Tolnay"
                  fill
                  className="object-contain lg:object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Second Section */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-md">
                Over the past 15 years, I lived and worked as the Director of Counseling for Dulwich College International in Shanghai, as the Head of the American Degree Transfer Program at Sunway University in Kuala Lumpur, and as the Ivy League Mentor for Special A Education in Beijing. I worked one-on-one with some of the brightest and most motivated students on the planet as they reached for the stars and landed at fine institutions such as Stanford, MIT, UPenn, Dartmouth, Cornell, and Georgetown. I came to understand that most high school students lack mentors committed to their personal and intellectual development.
              </p>

              <p className="text-md text-left">
                Now, at the spritely age of 55, I seek to emulate my esteemed mentors. I do so by mentoring students who also aspire to learn how to think, understand, feel, articulate, discern, and express themselves.
              </p>

              <p className="text-md text-left">
                My profession, teaching, allows me to be somewhat peripatetic. Each year, I spend a few months in rural New Mexico, reconnect with my ancestral past in Transylvania, and try to soak up sunshine in Southeast Asia. These days, I am drawn to exploring the Arctic and am transitioning to listening to audiobooks to save my eyes for the magnificence of the Northern Lights. 
              </p>
            </div>

            {/* Stats in Modal */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Students Taught
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">80+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Students Individually Mentored
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}