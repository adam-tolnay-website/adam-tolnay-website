import { useState, useEffect } from "react";
import Image from "next/image";

export default function BioSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
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
                About Adam
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            {/* Bio Text */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dicta quibusdam odit laudantium distinctio sequi mollitia quam
                alias nam nihil nisi, libero voluptas velit tempore.
              </p>

              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                mollitia adipisci atque minus delectus accusantium minima
                praesentium. Odit vero officiis labore! Vitae in tenetur
                delectus?
              </p>

              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate iure exercitationem architecto aliquam ipsum animi?
              </p>
            </div>

            {/* Stats or Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Students Taught
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">8+</div>
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
              {/* Background decoration */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
              {/* Main image */}
              <Image
                src="https://res.cloudinary.com/dqdasxxho/image/upload/v1754333956/Haloway_hero_image_1_gzcqwm.png"
                alt="Adam Tolnay - Professional Tutor"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">
                    Accepting New Students
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
