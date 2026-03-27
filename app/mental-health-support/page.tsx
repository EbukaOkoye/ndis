import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const programs = [
  {
    title: 'Peer-Led Support Groups',
    description: 'Connect with others, reduce isolation, and build confidence in a supportive community environment.',
  },
  {
    title: 'Creative Wellbeing Activities',
    description: 'Art, music, movement, and creative expression to support emotional wellbeing and self-discovery.',
  },
  {
    title: 'Social Connection Programs',
    description: 'Community activities and outings that build belonging and meaningful connections.',
  },
  {
    title: 'Skill Building Workshops',
    description: 'Practical workshops on coping strategies, mindfulness, and life skills for recovery.',
  },
  {
    title: 'Counselling Services',
    description: 'Professional counselling focused on emotional wellbeing and understanding mental health experiences.',
  },
  {
    title: 'Recovery Coaching',
    description: 'One-on-one support to build confidence and work towards your personal goals.',
  },
];

const values = [
  'Trauma-informed approach',
  'Recovery-focused support',
  'Lived experience leadership',
  'Flexible delivery options',
  'Community-based services',
  'Inclusive and welcoming',
];

export const metadata = {
  title: 'Mental Health Support | Skylight',
  description: 'Explore peer-led programs and activities that build confidence, reduce isolation, and strengthen wellbeing.',
};

export default function MentalHealthPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link href="/" className="text-primary hover:text-primary/80 inline-flex items-center gap-2 mb-6">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Mental Health Support
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
            Peer-led programs and community-based support that help you build confidence, reduce isolation, and strengthen your wellbeing.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Our Programs & Activities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {programs.map((program, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">{program.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary rounded-lg p-8 sm:p-12 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary rounded-lg p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to join our community?</h2>
            <p className="text-foreground/80 mb-6 text-lg">Get in touch to learn about current programs and how we can support your mental health journey.</p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
