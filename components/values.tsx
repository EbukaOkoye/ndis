import { Heart, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Person-Centred Support",
    description:
      "Support tailored to each participant’s unique needs, goals, and strengths.",
  },
  {
    icon: Users,
    title: "Partnership-Driven Support",
    description:
      "We believe the best outcomes come from working together with participants, families, and support networks.",
  },
  {
    icon: Zap,
    title: "Flexible support",
    description:
      "Support that adapts as needs, goals, and circumstances change over time.",
  },
  {
    icon: Heart,
    title: "Adaptive Care",
    description:
      "Services designed to adjust as participants grow, change, and work toward new goals.",
  },
];

export function Values() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
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
  );
}
