"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CheckCircle,
  Users,
  Lightbulb,
  Heart,
  Zap,
  BookOpen,
} from "lucide-react";

const mainServices = [
  {
    icon: Users,
    title: "NDIS Support Workers",
    description:
      "Individualised one-on-one support tailored to your goals and needs. Our support workers help with daily living skills, community connection, and building confidence.",
    features: [
      "Goal-focused support",
      "Flexible scheduling",
      "Community access support",
      "Skill development",
    ],
    link: "/ndis-services",
  },
  {
    icon: Lightbulb,
    title: "Psychosocial Recovery Coaching",
    description:
      "Expert guidance on your recovery journey. Recovery Coaches work with you to develop strategies, build resilience, and achieve your personal goals.",
    features: [
      "1-on-1 coaching sessions",
      "Goal setting & planning",
      "Coping strategies",
      "Ongoing support",
    ],
    link: "/ndis-services",
  },
  {
    icon: BookOpen,
    title: "NDIS Plan Management",
    description:
      "Take the stress out of managing your NDIS plan. We handle the administration so you can focus on your recovery and achieving your goals.",
    features: [
      "Budget management",
      "Invoice processing",
      "Plan reporting",
      "Provider support",
    ],
    link: "/ndis-services",
  },
  {
    icon: Heart,
    title: "Mental Health Support",
    description:
      "Peer-led programs and activities designed to reduce isolation, build confidence, and strengthen your wellbeing in a supportive community environment.",
    features: [
      "Group programs",
      "Therapeutic activities",
      "Community connection",
      "Peer support",
    ],
    link: "/mental-health-support",
  },
  {
    icon: Zap,
    title: "Counselling & Therapy",
    description:
      "Professional counselling focused on emotional wellbeing, coping strategies, and understanding mental health experiences with qualified therapists.",
    features: [
      "Individual counselling",
      "Coping strategies",
      "Emotional support",
      "Professional guidance",
    ],
    link: "/mental-health-support",
  },
  {
    icon: Users,
    title: "Carer Support Services",
    description:
      "Support, information, and connection for family members and carers. We understand the important role carers play and are here to support you.",
    features: [
      "Carer programs",
      "Information & resources",
      "Respite options",
      "Community connection",
    ],
    link: "/contact-us",
  },
];

const serviceCards = [
  {
    title: "Groups & Wellbeing Activities",
    description:
      "Creative, social, and therapeutic groups delivered in welcoming community spaces. Connect with others, develop new skills, and build confidence.",
    tags: ["Community-based", "Social connection", "Skill building"],
  },
  {
    title: "Distress Brief Support",
    description:
      "Short-term, compassionate mental health support during times of distress. Immediate access to help when you need it most.",
    tags: ["Crisis support", "Immediate access", "Short-term"],
  },
  {
    title: "Support Coordination",
    description:
      "Help navigating your NDIS plan and connecting with services. We coordinate supports to ensure everything works together for you.",
    tags: ["NDIS navigation", "Coordination", "Planning"],
  },
];

export default function HowWeHelp() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            How We Can Support You
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8 text-center!">
            We offer a wide range of mental health services designed to support
            people at different stages of their recovery journey. Whether you're
            seeking individualised support, community connection, or
            professional guidance, Australian NDIS has options for you.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
          >
            <Link href="/contact-us">Explore Services</Link>
          </Button>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-sm border border-border p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Additional Services & Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {serviceCards.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-sm border border-border p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/80 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Our Approach to Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Lived Experience Informed
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Our team includes people with lived experience of mental
                  health challenges. This means we truly understand what you're
                  going through and can offer meaningful, practical support that
                  makes a real difference.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Trauma-Informed Practice
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  We use trauma-informed approaches in everything we do. We
                  understand the impact of trauma and create safe, respectful
                  environments where healing can occur.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Recovery-Focused
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  We believe in recovery. Our support is focused on building
                  your strengths, achieving your goals, and creating a
                  meaningful life on your terms.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Person-Centered Support
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Every person is unique. We tailor our support to your
                  individual needs, goals, and preferences. Your voice guides
                  everything we do.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Flexible & Accessible
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Life changes, and so do your support needs. We offer flexible
                  support options that adapt as your circumstances, goals, and
                  needs evolve.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Community Connection
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  We believe in the power of community. Our support helps you
                  build meaningful connections and find belonging in your
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure Where to Start */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              If you're unsure which service is right for you, you're not alone.
              Our team will take time to understand your situation and help you
              find the support that fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
              >
                <Link href="/contact-us">Enquire Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
