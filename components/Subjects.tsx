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
      title: "University Application Counseling",
      description:
        `Over the course of the past fifteen years I have helped students gain admission to: Princeton, Stanford, Brown, Cornell, Dartmouth, MIT, the University of Pennsylvania, Georgetown, the University of California at Berkeley, the University of Texas at Austin, Oxford and many other fine institutions. `,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Non-Fiction Writing",
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
      title: "Reading the Greek and Roman Epics",
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
      description: `Each year I assist students to achieve maximum scores on the following exams: SSAT, SAT, ACT, GRE, GMAT, AP English Language and Composition, AP English Literature and Composition, AP World History: Modern, AP European History, AP United States History, AP Comparative Government and Politics, UP United States Government and Politics, AP Human Geography.

        My approach to standardized tests is to work with each and every student one-on-one. Each student is able to access his or her native intelligence and find their own way to answer each question. In contrast to other approaches, my students do not relearn all of high school mathematics or master abstruse rules of English grammar, but rather gain control of their own minds, face each question as a puzzle and apply the most comfortable and effective mental patterns to each question—at speed.`,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "University Application Counseling",
      description: `Over the course of the past fifteen years I have helped students gain admission to: Princeton, Stanford, Brown, Cornell, Dartmouth, MIT, the University of Pennsylvania, Georgetown, the University of California at Berkeley, the University of Texas at Austin, Oxford and many other fine institutions. 

My work involves supporting every aspect of the college admissions application process from advising high school freshmen on course selection to helping sophomores and juniors start their own nonprofit organizations to guiding seniors’ minds and hearts as they express their inner selves in truthful, heartfelt and memorable personal statements.

As a transfer student myself, I feel a special obligation to assist students who are driven to embark on the long and torturous process of transferring between undergraduate institutions. Over the course of the past few years I am proud to have assisted students to transfer to Stanford University and the University of North Carolina at Chapel Hill.`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    { 
      title: "Non-Fiction Writing",
      description: `
I see the writing process as the management of five distinct steps: thinking, distillation of what one wishes to say, structuring, putting words in paper, and rewriting.

Writing goals vary. At the outset of any writing endeavor a student and I spend some time to clarify and understand the goal, the parameters, and the question as asked. My students have written: essays for writing competitions such as the John Locke Essay Contest and the New York Times writing contest, opinion and editorial pieces, essays for summer school applications, speeches and presentations that were debuted in front of wide audiences, and works of various lengths and genres submitted as parts of curricular projects.

I approach writing as an active process: active thinking, active research, active distillation, active flow of words, and active revision. Through regular meetings in which we discuss the text, ideas and processes, the student acquires the skills to complete any writing task on their own.`,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Reading and Writing History",
      description: `Every semester or two I have had the great good fortune to have been introduced to a student who has a penchant for reading, discussing and writing history. Over the years my students and I have read and discussed: the history of the Roman Empire with a focus on the life of Augustus Cesar, the Revolutionary War and the Constitutional Convention, the Age of Jackson, the history of the Transcontinental Railroad, the Industrialization of Japan and the creation of the Japanese Colonial Empire, World War I on the Western and Eastern Front, Stalinism, and the building and destruction of the Berlin Wall.

Each course is bespoke and tailored specifically to the student’s interest. We pick the books together and set the pace and goal of the course together, in dialogue. Most often we read college-level books and meet weekly to review chapters as long as 50 pages. Some of my students also choose to write papers and books on history. My most advanced student, a 15 year old, is at present completing his masterful 100+ page book on the Battles of the Napoleonic Wars.`,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Reading and Writing Fiction",
      description: `In my career I have learned that young readers and writers of fiction fall into two essential categories. 

The first are endowed with a wellspring of irrepressible imagination and have a visceral need to bring these stories/dreams/inner voices/inspired musing to life. With such writers my contribution is to encourage them to let their words bubble forth, to serve as their first reader, to gently guide and sometimes gently critique, but above all else to witness and champion their creative endeavors. With such writers we develop a rhythm: we meet regularly, review the text, and together we guide the overflowing imaginative text through critical sluices into lakes of beauty where the best of the writing settles into forms that can then be readied for publication.

The second type of young writer had a soul that is inspired by a love of literature, psychology and appreciation of the craft of stitching words together into a tapestry of meaning. With such young people my goal is to expose the student to works of literature that we read together, dissect them for content, structure, phrasing and melody and thereby ignite the student’s senses to will themselves to embark on their own narrative.
`,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Reading the Greek and Roman Epics",
      description: `Two years ago, two of my students, a high school freshman in Hong Kong and a college freshman at the University of California at Berkeley, and I embarked on a special reading course. Week after week we met to discuss Homer’s Iliad, which we read with our attention centered not on plot or character development but on phrasing and meaning. 

The course was so much fun and so successful that we continued to read Homer’s Iliad. Upon completion of the Iliad I hope to embark on close reading of Virgil’s Aeneid. 

I am looking for students who would like to open their minds, hearts and souls and engage with timeless epic poetry in the company of some of the very brightest young people on the planet.
`,
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
            <div className="w-30 md:w-120 h-1.5 bg-primary rounded-full mx-auto mb-10"></div>
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