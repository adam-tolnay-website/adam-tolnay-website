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
      title: "Science Fiction & Fantasy Writing",
      description:
        "Master the core concepts of storytelling, world-building, and character development.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Greek Classics",
      description:
        "Explore the rich literature and philosophy of ancient Greece.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "College Application Prep",
      description:
        "Comprehensive support for college applications, including essay writing and interview preparation.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "AP Lang & AP Lit",
      description:
        "Structured curriculum focused on achieving your specific literary analysis and composition goals.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Writing Competitions",
      description:
        "Comprehensive preparation for writing competitions at various levels.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "General English Tutoring",
      description:
        "Personalized lessons focusing on reading, writing, and communication skills.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&crop=entropy&auto=format",
    },
  ];

  // Detailed descriptions for modal content
  const detailedSubjects: DetailedSubject[] = [
    {
      title: "Science Fiction & Fantasy Writing",
      description: `Dive deep into the imaginative worlds of science fiction and fantasy writing. This comprehensive course covers:

• **World-Building Mastery**: Learn to create immersive, believable fictional worlds with consistent rules, cultures, and histories. From designing magic systems to crafting futuristic technologies, we'll explore how to build universes that captivate readers.

• **Character Development**: Master the art of creating compelling protagonists and antagonists. We'll work on character arcs, motivations, and dialogue that brings your fictional beings to life.

• **Plot Structure & Pacing**: Understand the unique storytelling challenges of speculative fiction. Learn how to balance exposition with action, manage complex plots, and maintain reader engagement across multiple storylines.

• **Genre Conventions**: Explore the rich traditions and evolving trends in sci-fi and fantasy. From classic tropes to modern subversions, understand what readers expect and how to surprise them.

• **Publishing Pathways**: Navigate the modern publishing landscape, from traditional publishers to self-publishing platforms, with specific focus on the sci-fi and fantasy markets.

Perfect for aspiring authors ready to craft the next great speculative fiction masterpiece.`,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Greek Classics",
      description: `Journey through the foundational texts of Western literature and philosophy with our comprehensive Greek Classics program:

• **Epic Poetry Mastery**: Analyze Homer's Iliad and Odyssey, exploring themes of heroism, fate, and the human condition. Learn to appreciate the oral tradition and epic conventions that shaped literature for millennia.

• **Tragic Drama**: Study the works of Aeschylus, Sophocles, and Euripides. Understand the structure of Greek tragedy, the concept of catharsis, and how these ancient works still resonate with modern audiences.

• **Philosophical Foundations**: Explore Plato's dialogues and Aristotle's works, understanding how these thinkers laid the groundwork for Western philosophy, ethics, and political theory.

• **Historical Context**: Gain deep insights into ancient Greek society, politics, and culture to better understand the literature within its historical framework.

• **Literary Analysis Skills**: Develop advanced analytical skills through close reading, textual analysis, and comparative studies that will enhance your understanding of all literature.

• **Modern Relevance**: Connect ancient themes and ideas to contemporary issues, demonstrating the timeless relevance of these classical works.

This course provides essential knowledge for any serious student of literature, philosophy, or history.`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "College Application Prep",
      description: `Navigate the complex college application process with confidence through our comprehensive preparation program:

• **Personal Statement Mastery**: Craft compelling personal essays that showcase your unique voice, experiences, and aspirations. Learn storytelling techniques that make admissions officers remember you.

• **Supplemental Essay Excellence**: Master the art of tailoring responses to specific school prompts. We'll work on "Why this school?" essays, diversity statements, and creative responses that demonstrate fit and interest.

• **Application Strategy**: Develop a strategic approach to college selection, understanding reach, match, and safety schools. Learn to research programs effectively and make informed decisions.

• **Interview Preparation**: Build confidence through mock interviews, learning to articulate your goals, handle difficult questions, and make strong impressions on admissions representatives.

• **Scholarship Applications**: Identify and apply for merit-based and need-based scholarships. Learn to write compelling scholarship essays and present strong applications.

• **Timeline Management**: Master the complex timelines of early decision, early action, and regular admission cycles. Stay organized with deadlines, requirements, and follow-up tasks.

• **Letters of Recommendation**: Learn how to cultivate relationships with teachers and mentors who can write strong recommendation letters on your behalf.

Transform the stressful application process into a strategic advantage for your college journey.`,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "AP Lang & AP Lit",
      description: `Excel in Advanced Placement English courses with our targeted preparation program designed for both AP Language and Composition and AP Literature and Composition:

**AP Language & Composition:**
• **Rhetorical Analysis Mastery**: Learn to identify and analyze rhetorical strategies, appeals, and devices in complex texts. Develop skills to write sophisticated analysis essays.

• **Argument Construction**: Master the art of crafting compelling arguments with strong evidence, logical reasoning, and effective counterargument acknowledgment.

• **Synthesis Skills**: Practice combining multiple sources to support original arguments, a crucial skill for the synthesis essay portion of the exam.

**AP Literature & Composition:**
• **Literary Analysis Excellence**: Develop advanced skills in analyzing poetry, prose, and drama. Learn to identify literary devices, themes, and their effects on meaning.

• **Close Reading Techniques**: Master the art of careful textual analysis, understanding how authors use language, structure, and style to create meaning.

• **Comparative Analysis**: Learn to compare and contrast works across different time periods, genres, and cultural contexts.

**Exam Preparation:**
• **Timed Writing Practice**: Regular practice with AP-style prompts under timed conditions to build speed and confidence.

• **Multiple Choice Strategies**: Develop effective approaches to the challenging multiple-choice sections of both exams.

Achieve your target score and gain college credit through our proven AP preparation methods.`,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Writing Competitions",
      description: `Maximize your success in writing competitions with our specialized preparation program covering local, national, and international contests:

• **Competition Strategy**: Learn to identify the right competitions for your skill level and interests. Understand different competition formats, from poetry slams to essay contests to creative writing challenges.

• **Genre Specialization**: Receive targeted instruction in various competition categories:
  - Poetry competitions (traditional and slam)
  - Short story contests
  - Essay competitions
  - Flash fiction challenges
  - Scriptwriting contests

• **Prompt Analysis**: Master the art of interpreting competition prompts and requirements. Learn to identify key elements and craft responses that directly address evaluation criteria.

• **Time Management**: Develop strategies for working under pressure, whether in timed competitions or managing longer-term contest deadlines.

• **Revision Techniques**: Learn advanced editing and revision strategies that can transform good writing into award-winning pieces.

• **Submission Excellence**: Understand the technical aspects of competition entry - formatting, word counts, submission guidelines, and professional presentation.

• **Portfolio Development**: Build a strong portfolio of competition-ready pieces across multiple genres and styles.

• **Judge Psychology**: Gain insights into what competition judges look for and how to make your work stand out in crowded fields.

Transform your writing talents into recognition and opportunities through strategic competition participation.`,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "General English Tutoring",
      description: `Build strong foundational skills in English language arts with our comprehensive tutoring program tailored to individual needs:

• **Reading Comprehension**: Develop advanced reading strategies for various text types - literary fiction, non-fiction, poetry, and informational texts. Learn to identify main ideas, make inferences, and analyze author's purpose.

• **Writing Fundamentals**: Master the writing process from brainstorming to final draft. Work on paragraph structure, thesis development, evidence integration, and revision techniques.

• **Grammar & Mechanics**: Strengthen understanding of grammar rules, punctuation, and sentence structure. Learn to self-edit and produce error-free writing.

• **Vocabulary Development**: Expand your vocabulary through contextual learning, etymology study, and strategic word choice in writing.

• **Speaking & Presentation Skills**: Build confidence in oral communication through structured practice in class discussions, presentations, and formal speaking opportunities.

• **Critical Thinking**: Develop analytical skills that enhance both reading comprehension and writing quality. Learn to evaluate arguments, identify bias, and form independent opinions.

• **Study Skills**: Master effective note-taking, test preparation strategies, and time management skills that support academic success across all subjects.

• **Personalized Learning**: Receive instruction adapted to your learning style, pace, and specific goals, whether you're catching up, keeping up, or getting ahead.

• **Assessment Preparation**: Prepare for standardized tests, school exams, and other assessments with targeted practice and strategy instruction.

Build the English skills that support success in all academic areas and beyond.`,
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
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Subjects I Teach
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
              expedita?
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
        <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto">
          {selectedSubject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">
                  {selectedSubject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Modal Image */}
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={selectedSubject.image}
                    alt={`${selectedSubject.title} detailed view`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>

                {/* Modal Description */}
                <DialogDescription className="text-base leading-relaxed whitespace-pre-line">
                  {selectedSubject.description}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubjectsSection;