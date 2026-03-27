import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Overview } from '@/components/overview';
import { Values } from '@/components/values';
import { Services } from '@/components/services';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <Values />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
