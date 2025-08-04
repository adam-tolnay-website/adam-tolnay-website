import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
      answer: "Sessions are conducted online via video call with screen sharing. This allows for real-time code review, interactive programming exercises, and personalized guidance. I also provide recorded sessions and additional resources for your reference."
    },
    {
      question: "What's your teaching approach?",
      answer: "I believe in hands-on learning with real-world projects. Each session is tailored to your skill level and goals. We'll work through practical examples, build actual applications, and focus on understanding concepts rather than just memorizing syntax."
    },
    {
      question: "How long are the sessions and how often should we meet?",
      answer: "Standard sessions are 60 minutes, but I also offer 90-minute sessions for more intensive topics. Most students benefit from 1-2 sessions per week, but the frequency can be adjusted based on your schedule and learning pace."
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "Perfect! I love working with beginners. We'll start with the fundamentals and build up your skills progressively. I'll make sure you understand each concept before moving on to more advanced topics."
    },
    {
      question: "How do I schedule and pay for sessions?",
      answer: "You can book sessions through my online calendar system. I accept various payment methods including credit cards and PayPal. Payment is typically due before each session or you can purchase session packages at a discount."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "I understand that schedules change. You can cancel or reschedule sessions up to 24 hours in advance without penalty. For shorter notice, we can usually work something out depending on the circumstances."
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
          <Button variant="outline" className="font-medium">
            Contact me directly →
          </Button>
        </div>
      </div>
    </section>
  );
}