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
                About Adam
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            {/* Bio Text */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I am a lifelong educator committed to passing on the personalized
                mentoring that I was fortunate enough to receive throughout the
                entire arc of my own academic, intellectual and life journey.
              </p>

              <p className="text-lg">
                Alongside many of my esteemed peers, I spent the first half of my life
                aspiring to and completing courses of study at some of the world’s
                most selective institutions: <b>Harvard College A.B. Magna Cum Laude,
                </b> the <b>London School of Economics M.Sc., Harvard University A.M.,
                Georgetown University PhD. ABD, Stanford University Reuters Digital
                Visions Fellowship</b>. At each and every step of my formal education I
                was blessed to have been mentored by persons such as the late Prof.
                Ezra Vogel, Prof. Dominic Lieven, Prof. Michael Puett, and Prof.
                Chiho Sawada, who each took a genuine interest in my personal
                intellectual development.
              </p>
            </div>

            {/* Stats or Highlights */}
            {/* <div className="grid grid-cols-2 gap-6 pt-6">
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
            </div> */}
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
                src="https://images.unsplash.com/photo-1619852182277-79aa23f82c8e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    Accepting New Students (Insert picture of Adam with students)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">

          {/* Image */}
          <div
            className={`hidden lg:block relative transition-all duration-700 ease-out delay-300 ${
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
                src="https://images.unsplash.com/photo-1619852182277-79aa23f82c8e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    Insert picture of Adam working with [X organization]
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >

            {/* Bio Text */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                In 1992 I launched my first educational non-profit, Learning
                Enterprises, an organization that mobilized Harvard undergraduates to
                spend summers teaching English in villages in Eastern Europe while
                host families. I ran Learning Enterprises for 11 years before passing
                it on to colleagues who replicated our model and expended it 14 other
                countries including China, Thailand, Mexico, Ethiopia and Mauritius.
                Later I launched similar stand-alone NGOs that brought teachers to
                rural India and to the islands of Papua New Guinea. The decade and a
                half spent running people-to-people global educational organizations
                distilled in me my life’s mission: to connect students to teachers
                who are about them beyond the four walls of the classroom and the
                structures of the formal school system.
              </p>

              <p className="text-lg">
                Over the course of the past 15 years I lived and worked in Asia, serving
                as the Director of Counseling for Byron Education, a division of
                Dulwich College International in Shanghai, as the Head of the
                American Degree Transfer Program at Sunway University in Kuala
                Lumpur, and as the Ivy League Mentor for Special A Education in
                Beijing. I had the great good fortune to be able to work on-on-one
                and some of the brightest and most motivated students on the planet
                and serve as guides to them as they reached for the stars. My
                students have been admitted to, and many have by now have completed,
                courses of study at many of the most prestigious institutions of
                higher learning on the planet. By working with amazing students
                one-on-one I came to see that many high school students lack a mentor
                who is committed to the development of their own unique intellects.
              </p>
            </div>

          </div>
                    {/* Image */}
          <div
            className={`block lg:hidden relative transition-all duration-700 ease-out delay-300 ${
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
                src="https://images.unsplash.com/photo-1619852182277-79aa23f82c8e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    Insert picture of Adam working with [X organization]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Now, at the spritely age of 55, I seek to pay back my esteemed mentors by
              offering my experience to high school students who seek not only to
              gain admission to some of the most prestigious universities around
              the world but who also aspire to think, understand, feel, articulate,
              discern and express.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
