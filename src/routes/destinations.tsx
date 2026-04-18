import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, MapPin } from "lucide-react";
import canada from "@/assets/destinations/canada.jpg";
import uk from "@/assets/destinations/uk.jpg";
import usa from "@/assets/destinations/usa.jpg";
import australia from "@/assets/destinations/australia.jpg";
import germany from "@/assets/destinations/germany.jpg";
import ireland from "@/assets/destinations/ireland.jpg";
import dubai from "@/assets/destinations/dubai.jpg";
import malaysia from "@/assets/destinations/malaysia.jpg";
import malta from "@/assets/destinations/malta.jpg";
import qatar from "@/assets/destinations/qatar.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Study Destinations — Global Link Migration & Education" },
      {
        name: "description",
        content:
          "Explore study and work destinations: Canada, UK, USA, Australia, Germany, Ireland, Dubai, Malaysia, Malta and Qatar.",
      },
      { property: "og:title", content: "A World of Opportunity — Our Destinations" },
      {
        property: "og:description",
        content:
          "From North America to the Gulf, Europe and Asia — pathways to over 300 universities across 25+ countries.",
      },
      { property: "og:image", content: "/src/assets/destinations/canada.jpg" },
    ],
  }),
  component: DestinationsPage,
});

const destinations = [
  {
    name: "Canada",
    image: canada,
    region: "North America",
    blurb:
      "Affordable world-class universities, post-study work permits and clear permanent residency pathways.",
    highlights: ["Express Entry PR", "PGWP up to 3 yrs", "Top-ranked colleges"],
  },
  {
    name: "United Kingdom",
    image: uk,
    region: "Europe",
    blurb:
      "Globally respected degrees, 2-year Graduate Route visa and a vibrant multicultural student life.",
    highlights: ["Russell Group unis", "Graduate Route visa", "1-year Master's"],
  },
  {
    name: "United States",
    image: usa,
    region: "North America",
    blurb:
      "Home to Ivy League and STEM powerhouses with strong scholarships and OPT/STEM-OPT work options.",
    highlights: ["Ivy League access", "STEM OPT 3 yrs", "Generous aid"],
  },
  {
    name: "Australia",
    image: australia,
    region: "Oceania",
    blurb:
      "High quality of life, Group of Eight universities and post-study work rights of 2–4 years.",
    highlights: ["Group of Eight", "PSW 2–4 yrs", "Skilled migration"],
  },
  {
    name: "Germany",
    image: germany,
    region: "Europe",
    blurb:
      "Tuition-free public universities, strong engineering programs and 18-month job-search visa.",
    highlights: ["Low/no tuition", "EU Blue Card", "Engineering hub"],
  },
  {
    name: "Ireland",
    image: ireland,
    region: "Europe",
    blurb:
      "English-speaking EU nation with thriving tech sector and 2-year stay-back for Master's grads.",
    highlights: ["Tech & pharma jobs", "2-yr stay back", "EU access"],
  },
  {
    name: "Dubai (UAE)",
    image: dubai,
    region: "Middle East",
    blurb:
      "Tax-free careers, branch campuses of global universities and a regional business hub close to home.",
    highlights: ["Tax-free salaries", "Global campuses", "Golden Visa"],
  },
  {
    name: "Malaysia",
    image: malaysia,
    region: "Asia",
    blurb:
      "Affordable tuition, English-taught programs and twinning degrees with UK & Australian universities.",
    highlights: ["Low cost of living", "Twinning degrees", "Multicultural"],
  },
  {
    name: "Malta",
    image: malta,
    region: "Europe",
    blurb:
      "EU member with English as an official language, growing tech & finance sector and Mediterranean lifestyle.",
    highlights: ["English-speaking EU", "Schengen access", "iGaming & finance"],
  },
  {
    name: "Qatar",
    image: qatar,
    region: "Middle East",
    blurb:
      "Education City hosts top US & European university campuses with strong scholarships and tax-free careers.",
    highlights: ["Education City", "Top scholarships", "Tax-free income"],
  },
] as const;

function DestinationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Destinations
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl sm:text-6xl">
            A world of <span className="text-gold">opportunity</span> — choose your horizon.
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            We connect African families to over 300 accredited universities across 25+
            countries. Below are the destinations our students choose most often.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <article
                key={d.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-gold hover:shadow-elegant"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={d.image}
                    alt={`${d.name} landmark`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      <MapPin className="h-3 w-3" /> {d.region}
                    </div>
                    <h2 className="mt-1 font-display text-3xl text-white">{d.name}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">{d.blurb}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {d.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-navy"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-center shadow-elegant sm:p-16">
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Not sure which country fits you?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Book a free guidance session — we'll match you to the destination that fits
              your goals, budget and timeline.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.02]"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
