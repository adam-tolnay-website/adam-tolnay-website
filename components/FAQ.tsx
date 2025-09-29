import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { siteConfig } from '@/lib/config/site';
import Link from 'next/link';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How are your courses and mentoring sessions conducted?",
      answer: "All courses and mentoring sessions take place on Zoom. We usually meet weekly, and most sessions last an hour or an hour and a half. I am ready to meet as frequently as necessary to meet deadlines. In the heat of the college application season, a student and I met 8 times during the course of a weekend, during which he revised his personal statement 12 times! The hard work paid off, and the student was admitted to and matriculated at the Wharton School of Business at the University of Pennsylvania.",
    },
    {
      question: "What's your teaching approach?",
      answer: "I usually work one-on-one with all students to maximize time, guidance, and care. At the outset of each journey, a student and I discuss and together decide on the goals, subject matter, depth, pacing, and deliverables of the course. My goal is to ensure that each student learns to think more deeply, learns to write more effectively, and grows in wisdom.",
    },
    {
      question: "How much do lessons cost?",
      answer: "My courses and mentoring sessions are bespoke, tailored to the student’s specific needs and goals. I am happy to discuss rates during an in-depth consultation. I offer value packages and take on a select number of students on a sliding scale basis.",
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "Lessons and mentoring sessions can be canceled or rescheduled, provided that the student or parent gives me more than 24 hours' notice.",
    }
  ];

  return (
    <section className="pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 elegant-heading">
            Frequently Asked Questions
          </h2>
          {/* <p className="text-xl text-muted-foreground">
            Everything you need to know about my tutoring services
          </p> */}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-inset"
                aria-expanded={openItems.includes(index)}
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openItems.includes(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <div className="border-t border-border/50 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - removed */}
        {/* <div className="text-center mt-12 p-8 bg-muted/30 rounded-2xl">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-4">
            Feel free to reach out and I&apos;ll be happy to help!
          </p>
          <Button variant="outline" className="font-medium" asChild>
            <Link target="_blank" rel="noopener noreferrer" aria-label="Email" href={siteConfig.links.email}>
                Email me directly →
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}