import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Users, Leaf, Target, Heart } from "lucide-react";

const stats = [
  { number: "500+", label: "Participants Supported" },
  { number: "30+", label: "Team Members" },
  { number: "6", label: "Service Regions" },
  { number: "40+", label: "Years of Experience" },
];

const coreValues = [
  {
    icon: Heart,
    title: "Respect",
    description:
      "We honor the dignity and autonomy of every person we work with.",
  },
  {
    icon: Users,
    title: "Connection",
    description:
      "We build meaningful relationships and strengthen community bonds.",
  },
  {
    icon: Leaf,
    title: "Recovery",
    description:
      "We support people on their unique recovery journey at their own pace.",
  },
  {
    icon: Target,
    title: "Lived Experience",
    description:
      "We are led by and employ people with lived experience of mental health.",
  },
];

const boardMembers = [
  {
    name: "Adam McCallum",
    role: "Chair",
    bio: "Adam has 20 years' experience in senior management and project management with expertise across numerous disciplines including business improvement, stakeholder management, quality and risk control, relationship building, personnel and budget management. He is a strong advocate for promoting acceptance of mental illness and supporting people who struggle with it day in and day out.",
  },
  {
    name: "Vilma Attanasio",
    role: "Vice Chair",
    bio: "Vilma is an experienced senior manager and non-executive director, with extensive experience in the financial services sector, including insurance. Her expertise lies in leadership, finance, distribution, strategy, and stakeholder management. She is deeply passionate about the benefits and importance of respect, diversity and inclusion in the workplace.",
  },
  {
    name: "Marc Sodomka",
    role: "Chair of Finance Audit and Risk Committee",
    bio: "Marc is a FCPA qualified accountant with over 23 years of experience in providing effective oversight and leadership for corporate services and commercial divisions. His areas of expertise include Financial Management, Information Technology, Information Systems, Procurement, Asset Management, and Risk Management.",
  },
  {
    name: "Pete Madsen",
    role: "Board Member",
    bio: "Pete is Fellow of the Australian Institute of Company Directors with a passion for the profit-for-purpose sector. He has a deep understanding of the NDIS, initially gained during his tenure as Board Chair and interim CEO in a disability organisation during the transition to NDIS.",
  },
  {
    name: "Miriam Whitford",
    role: "Board Member",
    bio: "Miriam is an experienced board director and strategic leader with a strong background in governance, business growth, innovation, e-commerce and stakeholder engagement. With executive experience across global FMCG, professional services, and the social sector, Miriam brings commercial acumen and strategic insight.",
  },
  {
    name: "Carolyn McKay",
    role: "Board Member",
    bio: "Carolyn is an experienced Social Worker Leader and Non-Executive director with extensive experience in the NGO sector including within Mental Health and Disability support organisations. She has a strong sense of social justice and is passionate about making a difference in the community.",
  },
  {
    name: "Jed Maher",
    role: "Board Member",
    bio: "Jed is a leader in the financial services industry, specialising in governance, change initiatives, risk and compliance systems, advisory services, and project management. He excels at fostering risk-aware cultures and offering governance expertise in complex regulatory environments.",
  },
];

const managementTeam = [
  {
    name: "Adam Dunkley",
    role: "Chief Executive Officer",
    bio: "Adam plays a key role in positioning Skylight for long-term success through strategic and operational leadership. He brings qualifications in Social Work, Business and Governance, and has worked across the private technology and human services sectors, including 16 years in executive leadership roles.",
  },
  {
    name: "Louise Ray",
    role: "People, Culture & Compliance Manager",
    bio: "Louise is an accomplished Human Resource Manager with a passion for people and seeing Skylight reach its goal of creating a place where people truly love their job. Louise is responsible for overseeing all aspects of Human Resources, Quality and Work Health and Safety.",
  },
  {
    name: "Nidhi Gupta",
    role: "Finance Manager",
    bio: "Nidhi is a proficient accountant that comes from a professional services background, having completed her Chartered Accountancy at Deloitte. She has vast knowledge of NDIS services with specific expertise in daily activities and accommodation services, plan management, and block funding.",
  },
  {
    name: "Amy Brooks",
    role: "Service Delivery Manager",
    bio: "Amy has had an exciting journey with her career at Skylight, initially starting as a Mental Health Community Worker within the Respite and 1:1 (PHaMs) programs. She uses her qualifications in Social Work and Psychology to support quality practice and program development across multiple service areas.",
  },
  {
    name: "Meike Wise",
    role: "Service Delivery & Experience Manager",
    bio: "For the past 20 years, Meike has worked towards specialising in customer and employee experience, change & transformation programs, and business operations. She is passionate about people and is on a mission to contribute to a kinder, more authentic world.",
  },
  {
    name: "Rob Merrett",
    role: "Service Delivery & Practice Manager",
    bio: "Rob comes with a broad range of knowledge, experience and qualifications in Counselling, Cognitive Behavioural Therapy, Supervision and Leadership. His passion is centred on mentoring others to reach their maximum potential and building quality evidence-based frameworks of support.",
  },
  {
    name: "Shane Ford",
    role: "Service Delivery Manager",
    bio: "Shane is a dedicated leader in the mental health sector with an Honours degree in Behavioural Science (Psychology) and over 15 years of management experience. He is particularly passionate about system-level change and ensuring that lived experience is at the forefront of service design and delivery.",
  },
];

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16 p-8 sm:p-12 bg-secondary rounded-lg">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
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
          <h2 className="text-3xl font-bold text-foreground mb-2">
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
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-8">
            Management Team
          </h3>
          <p className="text-foreground/80 mb-12">
            Our leadership team is dedicated to ensuring Skylight delivers
            high-quality, trauma-informed, and recovery-focused mental health
            support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Service Areas
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            We deliver services across six key regions of South Australia:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              "Mile End",
              "Elizabeth",
              "Christies Beach",
              "Murray Bridge",
              "Fleurieu Peninsula",
              "Mount Gambier",
            ].map((region, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">{region}</span>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-lg p-8 sm:p-12 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Explore Our Services
            </h2>
            <p className="text-foreground/80 mb-6 text-lg">
              Discover the range of NDIS and community mental health support we
              offer to help you on your recovery journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact-us">Enquire Today</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact-us">Submit Service Request</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
