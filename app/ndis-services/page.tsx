import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const ndisServices = [
  'NDIS Support Workers',
  'Psychosocial Recovery Coaching',
  'Support Coordination',
  'Plan Management',
  'Group Programs',
  'Community Participation Support',
];

const benefits = [
  'Individualised support tailored to your needs',
  'Team members with lived experience',
  'Flexible service delivery',
  'Focus on recovery and goals',
  'Community connection opportunities',
  'Trauma-informed approach',
];

export const metadata = {
  title: 'NDIS Mental Health Services | Skylight',
  description: 'Explore our comprehensive NDIS mental health services including support workers, coaching, and plan management across South Australia.',
};

export default function NDISPage() {
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
            NDIS Mental Health Services
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
            Comprehensive, individualised NDIS support designed to help you achieve your goals and build confidence in your recovery journey.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Our NDIS Offerings</h2>
              <ul className="space-y-4">
                {ndisServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border h-fit">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Why Choose Skylight?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary to-background rounded-lg p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to get started?</h2>
            <p className="text-foreground/80 mb-6 text-lg">Our team is ready to understand your needs and find the right support for you.</p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#contact">Request NDIS Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
