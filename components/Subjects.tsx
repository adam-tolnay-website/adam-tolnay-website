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
        `Over the course of the past fifteen years, I have helped students gain admission to Princeton, Stanford, Brown, Cornell, Dartmouth, MIT, the University of Pennsylvania, Georgetown, the University of California at Berkeley, the University of Texas at Austin, Oxford and many other fine institutions. `,
      image:
        "/images/courses/ivy_league_prep.jpg",
    },
    {
      title: "Non-Fiction Writing",
      description:
        `Writing goals vary. My students have submitted essays for the John Locke Essay Contest, the New York Times Writing Contest, opinion and editorial pieces, and summer school applications. They have also written speeches and presentations that were delivered in front of wide audiences, and crafted works of various lengths and genres submitted as part of curricular projects.`, 
    image:
        "/images/courses/nonfiction_2.jpg",
    },
    {
      title: "Reading and Writing History",
      description:
        "Over the years my students and I have read and discussed: the history of the Roman Empire with a focus on the life of Augustus Cesar, the Revolutionary War and the Constitutional Convention, the Age of Jackson, the history of the Transcontinental Railroad, the Industrialization of Japan and the creation of the Japanese Colonial Empire, World War I on the Western and Eastern Front, Stalinism, and the building and destruction of the Berlin Wall.",
      image:
        "/images/courses/history_2.jpg",
    },
    {
      title: "Reading and Writing Fiction",
      description:
        "My goal is to expose writers to works of literature that we read together, dissect them for content, structure, phrasing and melody and thereby ignite the student’s desire and will to write their own narrative. We meet regularly, and together we guide the overflowing imaginative text through critical sluices into lakes of beauty where the prose is readied for publication.",
      image:
        "/images/courses/fiction_4.jpg",
    },
    {
      title: "Reading Greek and Roman Epics and Plays",
      description:
        "Two years ago, two precocious students and I embarked on a special reading course. Week after week we met to discuss Homer’s Iliad, which we read with our attention centered not on plot or character development but on phrasing and meaning. In the process, we learned to listen to the wisdom and the fun of these texts—and learned to love the classics.",
      image:
        "/images/courses/greek_3.jpg",
    },
  ];

  // Detailed descriptions for modal content
  const detailedSubjects: DetailedSubject[] = [
    {
      title: "Test Preparation",
      description: `I train and coach students to achieve maximum scores on the following exams: SSAT, SAT, ACT, GRE, GMAT, AP English Language and Composition, AP English Literature and Composition, AP World History: Modern, AP European History, AP United States History, AP Comparative Government and Politics, AP United States Government and Politics, AP Human Geography.

      I work one-on-one and help each student unlock his or her native intelligence and find their own preferred way to answer each question. In contrast to other approaches, my students do not relearn all of high school mathematics or master abstruse rules of English grammar. Rather, they gain control of their own minds, tackle each question as a puzzle, and apply the most comfortable and effective mental patterns to each question—at speed.`,
      image: "/images/courses/test_prep.jpg",
    },
    {
      title: "University Application Counseling",
      description: `Over the course of the past fifteen years, I have helped students gain admission to Princeton, Stanford, Brown, Cornell, Dartmouth, MIT, the University of Pennsylvania, Georgetown, the University of California at Berkeley, the University of Texas at Austin, Oxford and many other fine institutions. 

      I support students and parents in every aspect of the college admissions application process, from advising first year high school students on course selection to helping sophomores and juniors start their own nonprofit organizations, to guiding seniors as they express their inner selves in truthful, heartfelt and memorable personal statements.

      As a former transfer student, I feel a special obligation to assist students who are driven to embark on the long and torturous process of transferring between undergraduate institutions. Over the course of the past few years, I am proud to have assisted students to transfer to Stanford University and to the University of North Carolina at Chapel Hill.`, image: "/images/courses/ivy_league_prep.jpg",
    },
    { 
      title: "Non-Fiction Writing",
      description: `Writing goals vary. My students have submitted essays for the John Locke Essay Contest, the New York Times Writing Contest, opinion and editorial pieces, and summer school applications. They have also written speeches and presentations that were delivered in front of wide audiences, and crafted works of various lengths and genres submitted as part of curricular projects.

      I see the writing process as the management of five distinct steps and teach my students to see writing as an active process: active thinking, active research, active distillation, active flow of words, and active revision. My approach is not simply to review a student's latest draft but to actively engage the student and the text in conversation and via simultaneous writing and revision. `,
      image: "/images/courses/nonfiction_1.jpg",
    },
    {
      title: "Reading and Writing History",
      description: `I have loved history since I was an adolescent. Fortunately, a select few young people today also have a penchant for reading, discussing and writing history. Over the years my students and I have read and discussed: the history of the Roman Empire with a focus on the life of Augustus Cesar, the Revolutionary War and the Constitutional Convention, the Age of Jackson, the history of the Transcontinental Railroad, the Industrialization of Japan and the creation of the Japanese Colonial Empire, World War I on the Western and Eastern Front, Stalinism, and the building and destruction of the Berlin Wall.

      Each of my courses is bespoke and tailored specifically to a student’s specific interest. We pick the topic and era to explore together, pick the books we will read together and set the pace and goal of the course together. Most often we read college-level books and meet weekly to review chapters, often as long as 50 pages. 
      
      Some of my students also choose to write papers and books. My most advanced student, a 15-year-old, is at present completing his masterful 100+ page book on the Battles of the Napoleonic Wars.`,
      image: "/images/courses/history_3.jpg",
    },
    {
      title: "Reading and Writing Fiction",
      description: `Young readers and writers of fiction fall into two essential categories. 

      The first are endowed with a wellspring of irrepressible imagination and have a visceral need to bring these stories/dreams/inner voices/inspired musing to life. With such writers, my contribution is to encourage them to let their words bubble forth, to serve as their first reader, to gently guide and sometimes gently critique, but above all else, to witness and champion their creative endeavors. We meet regularly, and together we guide the overflowing imaginative text through critical sluices into lakes of beauty where the prose is readied for publication.

      The second type of young writer has a soul that is inspired by a love of literature, psychology and an appreciation of the craft of stitching words together into a tapestry of meaning. My goal is to expose such writers to works of literature that we read together, dissect them for content, structure, phrasing and melody and thereby ignite the student’s desire and will to write their own narrative.`,
      image: "/images/courses/fiction_3.jpg",
    },
    {
      title: "Reading Greek and Roman Epics and Plays",
      description: `Two years ago, two precocious students and I embarked on a special reading course. Each Thursday we met to read a chapter of Homer's Iliad, the world's first epic poem. We read with our attention on phrasing and meaning. I guided the young men on a journey of discovery: of the text, of the age of Greek heroes, and of themselves.

      The course proved to be so much fun that we decided to continue to read the next epic poem: Homer’s Odyssey. Here I am guiding my excellent students on a journey of understanding of what it means to be a full human being.  

      Next will next read classic Greek Plays such as Oedipus Rex, the Oresteia and Medea. We will also tackle the greatest Roman epic, Virgil's Aeneid. 

      I am actively looking for students who would like to join us and open their minds, hearts and souls to timeless epic poetry in the company of the very brightest students.`,
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
              Courses and Journeys I Lead
            </h2>
            <div className="w-30 md:w-120 h-1.5 bg-primary rounded-full mx-auto mb-10"></div>
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