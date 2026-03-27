import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'NDIS Mental Health Support',
    description: 'Individualised support including NDIS support workers, psychosocial recovery coaching, support coordination, and plan management.',
    link: '#',
  },
  {
    title: 'Mental Health Support',
    description: 'Peer-led programs and activities that reduce isolation, build confidence, and strengthen wellbeing.',
    link: '#',
  },
  {
    title: 'Carer Support Services',
    description: 'Support, information, and connection for family members and carers.',
    link: '#',
  },
  {
    title: 'Groups and Wellbeing Activities',
    description: 'Creative, social, and therapeutic groups delivered in welcoming community spaces.',
    link: '#',
  },
  {
    title: 'Distress Brief Support',
    description: 'Short-term, compassionate mental health support during times of distress in northern Adelaide.',
    link: '#',
  },
  {
    title: 'Counselling and Therapy',
    description: 'Professional support focused on emotional wellbeing, coping strategies, and understanding mental health experiences.',
    link: '#',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How We Can Support You</h2>
          <p className="text-lg text-foreground/80">We offer a wide range of mental health services designed to support people at different stages of their recovery journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.link}
              className="group bg-card rounded-lg p-6 border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">{service.description}</p>
              <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-semibold">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
