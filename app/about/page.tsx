import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { coreValues } from "@/utils/dummyData";

export const metadata = {
  title: "About Australian NDIS | NDIS",
  description:
    "Learn about Australian NDIS, our mission, values, and commitment to delivering lived experience-informed mental health support.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link
              href="/"
              className="text-primary hover:text-primary/80 inline-flex items-center gap-2 mb-6"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Home
            </Link>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About Skylight
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
            A not-for-profit organisation dedicated to delivering lived
            experience-informed NDIS and community mental health support across
            South Australia.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Our Mission
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-12">
            To help you achieve your NDIS goals and live a healthy, independent
            life. We value a person-centred approach, ensuring that support is
            tailored to each individual's needs
          </p>

          <h2 className="text-3xl font-bold text-foreground mb-8">
            Our Vision
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            To be anorganisation set apart from others in our commitment to
            providing the best possible support so that every participant can
            live their best, most independent, meaningful and fulfilling life
          </p>
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Logo</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Shows the process ofstep by step growth, which is the key to
            achieving your goals
          </p>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16 p-8 sm:p-12 bg-secondary rounded-lg">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-lg p-8 border border-border"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-3xl font-bold text-foreground mb-2">
            Australian NDIS Leadership
          </h2>
          <p className="text-lg text-foreground/80 mb-12">
            The Skylight leadership team brings together lived experience,
            professional expertise, and a shared commitment to seeing mental
            health differently.
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-8">
            Board Members
          </h3>
          <p className="text-foreground/80 mb-12">
            Guided by our Board, Skylight continues to evolve as a trusted,
            community-based organisation supporting South Australians living
            with mental health challenges, their families, and carers.
          </p> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h4 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-foreground/80 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div> */}

          {/* <h3 className="text-2xl font-bold text-foreground mb-8">
            Management Team
          </h3>
          <p className="text-foreground/80 mb-12">
            Our leadership team is dedicated to ensuring Skylight delivers
            high-quality, trauma-informed, and recovery-focused mental health
            support.
          </p> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {managementTeam.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h4 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-foreground/80 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </section>
      <Footer />
    </main>
  );
}
