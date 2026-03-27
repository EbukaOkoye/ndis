import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Overview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            At Australian NDIS, we are committed to ensuring that people living
            with disability have choice, control and the opportunity to live
            independent lives.
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-balance">
            As a trusted NDIS provider, we deliver support work, recovery
            coaching, group programs and plan management designed to meet your
            individual needs and goals.
          </p>
        </div>

        <div className="bg-card rounded-lg p-8 sm:p-12 border border-border mb-12">
          <p className="text-foreground/90 leading-relaxed mb-6">
            We apply aperson-centred approach to help you and your family
            navigate the NDIS and achieve your goals. Our experienced and
            dedicated staff work closely with you to ensure your needs are met,
            encouraging independence and connecting you with the right services.
            We prioritise individual goals to empower you to make informed
            decisions and access the supports you need to participate in
            activities that provide positive and meaningful outcomes.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            We support participants across Adelaide, the Limestone Coast, Murray
            Bridge, and regional South Australia. Start your journey with a
            provider that sees mental health differently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="#services"
            className="group flex items-center justify-between p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all"
          >
            <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              Explore NDIS Services
            </span>
            <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            href="#services"
            className="group flex items-center justify-between p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all"
          >
            <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              Explore Mental Health Support
            </span>
            <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </div>
    </section>
  );
}
