import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/hero.jpg";
import { GraduationCap, Briefcase, Globe2, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Link Migration & Education Agency — By Grace, From Sacrifice to Success" },
      { name: "description", content: "Trusted study abroad and skilled migration agency empowering African families to access global opportunities. God First. Legacy Always." },
      { property: "og:title", content: "Global Link Migration & Education Agency" },
      { property: "og:description", content: "From Sacrifice to Success — global study and migration pathways for African families." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Pillars />
      <MissionStrip />
      <ServicesPreview />
      <Destinations />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img src={hero} alt="" className="h-full w-full object-cover opacity-40" width={1600} height={1100} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            God First · Legacy Always
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            By Grace, <br />
            <span className="text-gold">From Sacrifice</span>
            <br />
            to Success.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            We turn the sacrifices of African parents into global opportunities for
            their children — opening doors to world-class education and skilled
            migration pathways.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.02]"
            >
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    { icon: ShieldCheck, title: "Trusted Guidance", text: "Faith-driven counsel rooted in integrity and family values." },
    { icon: Globe2, title: "Global Reach", text: "Pathways to Canada, UK, USA, Australia, Europe & Asia." },
    { icon: GraduationCap, title: "Proven Results", text: "End-to-end support — admissions, visa, settlement." },
  ];
  return (
    <section className="border-b border-border bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gold/15 text-navy">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-xl text-navy">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MissionStrip() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Our Mission
        </p>
        <p className="mt-6 font-display text-2xl leading-relaxed text-navy sm:text-3xl">
          "To turn the sacrifices of African parents into global opportunities
          for their children, empowering a generation to uplift their families
          and communities, by God's grace."
        </p>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const services = [
    {
      icon: GraduationCap,
      title: "Study Abroad & Education",
      text: "University placement, scholarships, student visas, and arrival support.",
    },
    {
      icon: Briefcase,
      title: "Work & Skilled Migration",
      text: "Skilled worker visas, work permits, and international job placement.",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What we do</p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">Pathways We Build</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-navy hover:text-gold">
            View all services →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-gold hover:shadow-elegant">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/5 transition-transform group-hover:scale-150" />
              <Icon className="relative h-10 w-10 text-gold" />
              <h3 className="relative mt-6 font-display text-2xl text-navy">{title}</h3>
              <p className="relative mt-3 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  const dests = ["Canada", "United Kingdom", "USA", "Australia", "Germany", "Ireland", "Dubai", "Malaysia", "Malta", "Qatar"];
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Destinations</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">A World of Opportunity</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            We connect African families to leading destinations across four continents.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {dests.map((d) => (
            <div key={d} className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center text-sm font-medium transition-colors hover:border-gold hover:text-gold">
              {d}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-center shadow-elegant sm:p-16">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 40%)" }} />
          <h2 className="relative font-display text-4xl text-white sm:text-5xl">
            Your child's future begins with one conversation.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/80">
            Book a free consultation with our migration and education advisors today.
          </p>
          <Link
            to="/contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.02]"
          >
            Book Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
