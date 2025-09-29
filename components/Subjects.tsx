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
        `I train and coach students to achieve maximum scores on the following exams: SSAT, SAT, ACT, GRE, GMAT, AP English Language and Composition, AP English Literature and Composition, AP World History: Modern, AP European History, AP United States History, AP Comparative Government and Politics, AP United States Government and Politics, AP Human Geography.`, 
    image:
        "/images/courses/test_prep_2.jpg",
    },
    {
      title: "University Application Counseling",
      description:
        `Over the course of the past fifteen years, I have helped students gain admission to Stanford, Princeton, Brown, Cornell, Dartmouth, MIT, the University of Pennsylvania, Georgetown, the University of California at Berkeley, the University of Texas at Austin, Oxford, the London School of Economics, and many other fine institutions. I support students and parents in every aspect of the college admissions application process, from advising first-year high school students on course selection to helping sophomores and juniors start their own nonprofit organizations to guiding seniors as they express their inner selves in truthful, heartfelt, and memorable personal statements.
`,
      image:
        "/images/courses/ivy_league_prep.jpg",
    },
    {
      title: "Non-Fiction Writing",
      description:
        `Writing goals vary. My students have submitted essays for the John Locke Essay Contest, the New York Times Writing Contest, opinion and editorial pieces, and summer school applications. They wrote speeches and presentations that they later delivered to live audiences, and crafted works of various lengths and genres submitted as part of curricular projects.`, 
    image:
        "/images/courses/nonfiction_2.jpg",
    },
    {
      title: "Reading and Writing History",
      description:
        "Over the years my students and I have read and discussed: the Age of Jackson, the history of the Transcontinental Railroad, the Industrialization of Japan and the creation of the Japanese Colonial Empire, Stalinism, and more. My most advanced student, a 15-year-old, is at present completing his masterful 100+ page book on the Battles of the Napoleonic Wars.",
      image:
        "/images/courses/history_2.jpg",
    },
    {
      title: "Reading and Writing Fiction",
      description:
        "Young readers and writers of fiction fall into two categories. The first are endowed with a wellspring of irrepressible imagination and have a visceral need to bring these stories/dreams/inner voices/inspired musing to life. With such writers, my contribution is to encourage them to let their words bubble forth, to serve as their first reader, to guide and sometimes gently critique, but above all else, to witness and champion their creative endeavors.",
      image:
        "/images/courses/fiction_4.jpg",
    },
    {
      title: "Reading Greek and Roman Epics and Plays",
      description:
        "Two years ago, two precocious students and I embarked on a special reading course. We met each Tuesday, and each week we read a chapter of the Iliad, the magisterial first Greek epic poem. I guided the students on a journey of discovery: of the text, of the age of Greek heroes, and of themselves. The course proved to be so much fun that we decided to continue reading other epics, namely the Odyssey and the Aeneid. ",
      image:
        "/images/courses/greek_3.jpg",
    },
  ];

  // Detailed descriptions for modal content
  const detailedSubjects: DetailedSubject[] = [
    {
      title: "Test Preparation",
      description: `I train and coach students to achieve maximum scores on the following standardized exams:
        - SSAT
        - SAT
        - ACT
        - GRE
        - GMAT

        I also prepare students for the following Advanced Placement (AP) courses:
        AP English Language and Composition, AP English Literature and Composition, AP World History: Modern, AP European History, AP United States History, AP Comparative Government and Politics, AP United States Government and Politics, AP Human Geography, AP Art History.

        In contrast to other approaches that rely on rote learning and memorization, I teach my students how to gain control of their own minds, tackle questions as puzzles, and apply the most effective native mental processes to each question—at speed.`,
      image: "/images/courses/test_prep.jpg",
    },
    {
      title: "University Application Counseling",
      description: `Over the course of the past fifteen years, I have helped students gain admission to Stanford, Princeton, Brown, Cornell, Dartmouth, MIT, the University of Pennsylvania, Georgetown, the University of California at Berkeley, the University of Texas at Austin, Oxford, the London School of Economics, and many other fine institutions. 

      I support students and parents in every aspect of the college admissions application process, from advising first-year high school students on course selection to helping sophomores and juniors start their own nonprofit organizations to guiding seniors as they express their inner selves in truthful, heartfelt, and memorable personal statements. 

      As a former transfer student, I feel a special obligation to assist others who are driven to embark on the long process of transferring between undergraduate institutions. I am proud to have assisted students in transferring to Stanford University and to the University of North Carolina at Chapel Hill.`, 
      image: "/images/courses/ivy_league_prep.jpg",
    },
    { 
      title: "Non-Fiction Writing",
      description: `Writing goals vary. I help students to achieve their goals regardless of their familiarity with the writing process.

      My students have submitted essays to the John Locke Essay Contest, the New York Times Writing Contest, Op-Ed pieces, and summer school applications. They wrote speeches and presentations that they later delivered to live audiences, and crafted works of various lengths and genres submitted as part of curricular projects. 

      I see the writing process as the management of five distinct steps and teach my students to see writing as an active process: active thinking, active research, active distillation, active flow of words, and active revision. My approach is not to review a student's work but to actively engage the student in conversation, in simultaneous writing, and revision.`,
      image: "/images/courses/nonfiction_1.jpg",
    },
    {
      title: "Reading and Writing History",
      description: `I have loved history since I was an adolescent. Fortunately, a select few young people today also have a penchant for reading, discussing, and writing history.

        Over the years my students and I have read and discussed: the history of the Roman Empire with a focus on the life of Augustus Cesar, the Revolutionary War and the Constitutional Convention, the Age of Jackson, the history of the Transcontinental Railroad, the Industrialization of Japan and the creation of the Japanese Colonial Empire, World War I on the Western and Eastern Front, Stalinism, and the building and destruction of the Berlin Wall.

        Each of my courses is bespoke and tailored specifically to a student's specific interests. The student and I work in tandem: we choose a topic and era to explore, select the books we will read, and set the pace and goals of the course. Most often, we read college-level books and meet weekly to review chapters.

        Some of my students also choose to write papers and books. My most advanced student, a 15-year-old, is at present completing his masterful 100+ page book on the Battles of the Napoleonic Wars.`,
      image: "/images/courses/history_3.jpg",
    },
    {
      title: "Reading and Writing Fiction",
      description: `Young readers and writers of fiction fall into two categories.

      The first are endowed with a wellspring of irrepressible imagination and have a visceral need to bring these stories/dreams/inner voices/inspired musing to life. With such writers, my contribution is to encourage them to let their words bubble forth, to serve as their first reader, to guide and sometimes gently critique, but above all else, to witness and champion their creative endeavors. We meet regularly, and together we guide the overflowing imaginative text through critical sluices into lakes of beauty where we prepare it for publication.

      The second type of writer loves literature and appreciates the craft of weaving words into tapestries of meaning. My goal is to expose such writers to works of literature that we read together, dissect them for content, structure, phrasing, and melody, and thereby ignite the students' desire and will to write their own narrative.`,
      image: "/images/courses/fiction_3.jpg",
    },
    {
      title: "Reading Greek and Roman Epics and Plays",
      description: `Two years ago, two precocious students and I embarked on a special reading course. We met each Tuesday, and each week we read a chapter of the Iliad, the magisterial first Greek epic poem. I guided the students on a journey of discovery: of the text, of the age of Greek heroes, and of themselves.

      The course proved to be so much fun that we decided to continue reading other epics, namely the Odyssey and the Aeneid. We will next read classic Greek Plays such as Oedipus Rex, the Oresteia, and Medea.

      My goal is to guide students on a journey of understanding what it meant to live life fully in the Ancient World and what it means to live a life fully in the present era. It is a journey of close reading, reflection, interpretation, and deep discussion. I am looking for students who would like to join us.`,
      image: "/images/courses/greek_4.jpg",
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
              Courses I Lead
            </h2>
            <div className="w-30 md:w-50 h-1.5 bg-primary rounded-full mx-auto mb-10"></div>
            <p className="text-xl text-muted-foreground max-w-6xl mx-auto text-center ">
              Each course below is a one-on-one intellectual journey. During the journey, I not only pass on content knowledge but guide students to broaden their comprehension, deepen their insights, and learn how to articulate their newfound understanding.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick(card.title)}
                className="group relative border-2 border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-102 hover:shadow-2xl bg-card/50 backdrop-blur-sm cursor-pointer transform-gpu h-[560px] flex flex-col gap-0"
              >
                <CardHeader className="space-y-4 pb-4 flex-shrink-0">
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

                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 min-h-[56px] flex items-center">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 relative flex-1 overflow-hidden">
                  <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 line-clamp-[10] pr-2">
                    {card.description}
                  </CardDescription>
                  
                  {/* Fade out gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-card via-card/90 to-transparent pointer-events-none" />
                  
                  {/* Read more indicator */}
                  <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2 text-primary font-medium">
                    <span>Read more</span>
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
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