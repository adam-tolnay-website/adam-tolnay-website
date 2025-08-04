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
      question: "How are the tutoring sessions conducted?",
      answer: "Response 1",
    },
    {
      question: "What's your teaching approach?",
      answer: "Response 2",
    },
    {
      question: "How long are the sessions and how often should we meet?",
      answer: "Response 3",
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "Response 4",
    },
    {
      question: "How do I schedule and pay for sessions?",
      answer: "Response 5",
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "Response 6",
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
          <p className="text-xl text-muted-foreground">
            Everything you need to know about my tutoring services
          </p>
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
                Contact me directly →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}