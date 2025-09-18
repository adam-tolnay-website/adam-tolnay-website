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
      question: "How are your mentoring sessions conducted?",
      answer: "I work on Zoom and adapt to each student's schedule. Most of my sessions are weekly and last one hour, but I am ready to meet as frequently as necessary to meet deadlines. In the heat of the college application season, a student and I met every few hours for two days straight. The student revised his personal statement 22 times and was rewarded for it. He was admitted to and matriculated at the Wharton School of Business at the University of Pennsylvania.",
    },
    {
      question: "What's Your Teaching Approach?",
      answer: "Except for my Reading the Greek and Roman Epics course, I work one-on-one with all my students. This means that, at the outset of each journey, a student and I discuss and together decide on the goals, subject matter, depth, pacing, and deliverables of the course. My goal is to make sure that each student learns how to think more deeply, learns how to write more effectively and grows in wisdom.",
    },
    {
      question: "How much do lessons cost?",
      answer: "My courses and journeys are fully customized based on the student’s specific needs and goals. I am happy to discuss rates during an in-depth consultation and offer a select number of sliding scale spots each year.",
    },
    {
      question: "How do I schedule and pay for sessions?",
      answer: "The student and I schedule our sessions one month or even one semester ahead. I ask the parents to pre-pay for the first ten sessions, and I am, of course, happy to refund any unused time.",
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "I am happy to cancel or re-schedule sessions free of charge if I am given more than 24 hours notice.",
    }
  ];

  return (
    <section className="py-20 px-4">
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

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-muted/30 rounded-2xl">
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
        </div>
      </div>
    </section>
  );
}