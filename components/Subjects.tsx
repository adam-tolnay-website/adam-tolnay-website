"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface SubjectCard {
  title: string;
  description: string;
  image: string;
}

interface DetailedSubject {
  title: string;
  description: string;
  image: string;
}

interface SubjectsSectionProps {
  isVisible?: boolean;
}

const SubjectsSection = ({ isVisible = true }: SubjectsSectionProps) => {
  const [localVisible, setLocalVisible] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<DetailedSubject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLocalVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const cards: SubjectCard[] = [
    {
      title: "Test Preparation",
      description:
        `I work with students to prepare students for the following exams: SAT,
        ACT, GRE, GMAT, AP English Language and Composition, AP English
        Literature and Composition, AP World History, AP US History, AP
        Philosophy, AP Psychology…`, 
    image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "University Application",
      description:
        `My specialization is Ivy League university applications. I
have helped students gain admission to: Princeton, Brown, Cornell, Dartmouth, MIT, the University of Pennsylvania, Georgetown, the
University of California at Berkeley, Cambridge University and many other fine institutions.`,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Writing Non-Fiction",
      description:
        `I see the writing process as effort-filled yet also hopefully rewarding
of the management of five distinct steps: thinking, distilling what
one wishes to say, structuring, putting words in paper, and
rewriting.`, 
    image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Reading and Writing History",
      description:
        "Structured curriculum focused on achieving your specific literary analysis and composition goals.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Reading and Writing Fiction",
      description:
        "Comprehensive preparation for writing competitions at various levels.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Reading the Epics",
      description:
        "Personalized lessons focusing on reading, writing, and communication skills.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
  ];

  // Detailed descriptions for modal content
  const detailedSubjects: DetailedSubject[] = [
    {
      title: "Test Preparation",
      description: `I work with students to prepare students for the following exams: SAT, ACT, GRE, GMAT, AP English Language and Composition, AP English
      Literature and Composition, AP World History, AP US History, AP Philosophy, AP Psychology…

      My approach to the standardized tests is simple: I work with each and every student to see that on the multiple choice part of any exam the answer is there in black and white. We then work not to relearn all of high school mathematics or master all the rules of English grammar
      but to have the student gain mastery over their own native intelligence to be able to pick the right answer. On the essay portions of these exams the students and delve deep into the grading rubric and together we reverse-engineer a process that is natural for
      the student and upgrade that process to achieve a maximum score.`,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "University Application",
      description: `I work with students and parents to ensure that each and every student is accepted to a number of colleges and universities where they can
achieve their professional and intellectual goals while thriving as people. My specialization is Ivy League university applications. I
have helped students gain admission to: Princeton, Brown, Cornell, Dartmouth, MIT, the University of Pennsylvania, Georgetown, the
University of California at Berkeley, Cambridge University and many other fine institutions.

My work involves supporting every aspect of the college admissions application process from advising on course selection to selecting
between the various universities that the student was admitted to. I believe that the greatest value added is the crafting of truthful,
heartfelt and memorable personal statements.

As a transfer student myself, from Dartmouth College to Harvard College in 1990 I also feel it is my duty to assist students who are willing
to embark on the long and torturous process of transferring between undergraduate institutions. Over the course of the past few years I
am proud to have assisted students to transfer to Stanford University and the University of North Carolina at Chapel Hill.`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Writing Non-Fiction",
      description: `
At the outset of any writing endeavor the student and I understand the goal. My students have written: essays writing competitions such as
the John Locke Essay Contest and the New York Times writing contest, poems and fiction for literary contests, essays for summer school
applications, opinion and editorial pieces, poems, fiction and non-fiction. The largest piece of prose one of my students has
written is 90 page work on the Battles of the Napoleonic Wars.

After the goal is decided on we sketch out a plan for thinking, reading, distilling, structuring and  writing and revision and follow the
natural rhythm of the writing process or the adhere to the requirements set by deadlines.

The essence of the process I adhere to is active reading, active thinking, writing as flow of volume, revision/ rewriting and editing.
My goal is for the student to acquire facility with each of the processes, most especially to prize thinking and to not dispart the
hugely important process of rewriting.`,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Reading and Writing History",
      description: `Fate has been kind to me. Each semester or two I have been introduced to a student who has enjoyed reading, discussing and writing history. Over
the years my students and I have read and discussed: ancient history, especially the history of the Roman Empire with a focus on Augustus
Cesar, the Tetrarchy and Diocletian, Revolutionary War, the Constitutional Convention, the Age of Jackson, the history of the
Transcontinental Railroad, the Industrialization of Japan, the Japanese Colonial Empire, the WWI on the Western and Eastern Front,
Stalinism and the Building and Destruction of the Berlin Wall.

Each course is unique and we tailored the course around the student’s interest. Oftentimes we read college-level books on the period in
question and discussed it weekly. On occasion a student wrote a presentation about a given topic. My most advanced student, a 16 year
old, is completing his 90+ page book on the Battles of the Napoleonic Wars,`,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Reading and Writing Fiction",
      description: `In my career I have met two essential tropes of fiction writers: 1. those who have within them a wellspring of irrepressible imagination
and have a need to bring these stories/dreamsd, inner voices and mysteries to life and 2. Those who love reading and appreciate the
fine craft of words.

Example 1: 
I have had the great pleasure of working with each of the two types of writers. For the first, I see my contribution as being that of a
first reader, gentle guide, even gentler critic, and champion. These students and I have a rhythm: to meet regularly and review the
student’s work where I seek to guide the overflowing imagination through critical sluices into lakes where the best of the writing
settles into a form that can then be readied for publication.

Example 2:
With the second type of writer I see my goal as to expose the student to works of literature that a student can read, dissect into structure
and phrases and can then use as elements to build their own narrative.`,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Reading the Epics",
      description: `Iliad and Odyssey [todo: expand on this]`,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
  ];

  const handleCardClick = (cardTitle: string) => {
    const detailed = detailedSubjects.find(subject => subject.title === cardTitle);
    if (detailed) {
      setSelectedSubject(detailed);
      setIsModalOpen(true);
    }
  };

  const shouldAnimate = isVisible && localVisible;

  return (
    <>
      <section
        className={`px-4 py-20 transition-all duration-700 delay-700 ${
          shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        aria-label="Programming subjects and teaching methods"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className=" mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center ">
              Courses and Journeys I Lead
            </h2>
            <div className="w-120 h-1.5 bg-primary rounded-full mx-auto mb-10"></div>
            <p className="text-xl text-muted-foreground max-w-6xl mx-auto text-center ">
             Each of the headings below represents a course and a one-on-one intellectual journey. Each is an area of academic preparation where I have guided students to broaden their comprehension, deepen their insights, and articulate their understanding with richness and effectiveness.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick(card.title)}
                className="group relative border-2 border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-102 hover:shadow-2xl bg-card/50 backdrop-blur-sm cursor-pointer transform-gpu"
              >
                <CardHeader className="space-y-4 pb-4">
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden rounded-lg">
                    <Image
                      src={card.image}
                      alt={`${card.title} illustration`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-102 rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {card.description}
                  </CardDescription>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto rounded-xl">
          {selectedSubject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4 text-foreground">
                  {selectedSubject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Modal Description */}
                <DialogDescription className="text-base leading-relaxed whitespace-pre-line">
                  {selectedSubject.description}
                </DialogDescription>
                                {/* Modal Image */}
                <div className="relative h-64 w-full overflow-hidden rounded-xl mt-16 mb-24">
                  <Image
                    src={selectedSubject.image}
                    alt={`${selectedSubject.title} detailed view`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubjectsSection;