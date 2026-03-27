import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-secondary to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          See Health Differently
        </h1>

        <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          Australian NDIS Services offers support for people who have NDIS
          funding. We provide Recovery Coach services, Support Coordination or
          Specialist Support Coordination, depending on your needs and the type
          of funding you have been allocated.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="#contact">Enquire Today</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">NDIS Service Request</Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-border">
          <div>
            <div className="text-sm font-semibold text-primary uppercase tracking-wide">
              Not for profit organisation
            </div>
            <p className="text-foreground/70 text-sm mt-2">
              Delivering NDIS and Community health services
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-primary uppercase tracking-wide">
              Community based services
            </div>
            <p className="text-foreground/70 text-sm mt-2">
              Across metro and regional South Australia
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-primary uppercase tracking-wide">
              Lived experience informed
            </div>
            <p className="text-foreground/70 text-sm mt-2">
              Trauma-informed and recovery focused
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
