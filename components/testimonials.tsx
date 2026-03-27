import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Skylight, the most exceptional company employing the most exceptional people who wants their clients to shine.',
    author: 'Skylight Participant',
    rating: 5,
  },
  {
    quote: 'Very thankful for this service, it was exactly what I needed in a very dark and overwhelming time, building me back to the person I want to be. Counselling Service is so unique to each person and their counsellor. Skylight is professional, but thankfully in a relaxed environment.',
    author: 'Skylight Counselling Participant',
    rating: 4,
  },
  {
    quote: 'I felt incredible after my first meeting. To be heard, understood, accepted and then assisted/ guided/ encouraged, it\'s everything I need',
    author: 'Skylight Support Coordination Participant',
    rating: 5,
  },
  {
    quote: 'I appreciate the support, it is nice to feel you matter',
    author: 'Community Connections Participant',
    rating: 5,
  },
  {
    quote: 'My Worker taught me the skill to cope with every day living to help me stop isolating myself',
    author: 'Skylight NDIS Support Work Participant',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What our Participants Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg p-6 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed italic">"{testimonial.quote}"</p>
              <p className="text-sm text-foreground/70 font-semibold">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
