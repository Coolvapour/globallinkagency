import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import about from "@/assets/about.jpg";
import { Heart, Compass, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Global Link Migration & Education Agency" },
      { name: "description", content: "Faith-driven migration and education agency turning African parents' sacrifices into global opportunities for the next generation." },
      { property: "og:title", content: "About Global Link Migration & Education" },
      { property: "og:description", content: "God First. Legacy Always. — Our story, mission and values." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">About Us</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl sm:text-6xl">
            Built on faith. Driven by family. Devoted to legacy.
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <img src={about} alt="An African family" loading="lazy" width={1200} height={900} className="rounded-2xl object-cover shadow-elegant" />
          <div>
            <h2 className="font-display text-3xl text-navy sm:text-4xl">Our Story</h2>
            <p className="mt-5 text-muted-foreground">
              Global Link Migration and Education Agency Limited was founded on a simple
              conviction: every African parent's sacrifice deserves a future worth fighting for.
              We exist to bridge the distance between hard-won dreams and global opportunity —
              guiding students and skilled professionals through study, work, and migration
              pathways with integrity, faith, and unwavering care.
            </p>
            <p className="mt-4 text-muted-foreground">
              From the first consultation to safe arrival abroad, we walk every step alongside
              the families we serve. By God's grace, we are turning sacrifices into success
              stories — one family, one passport, one legacy at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Foundation</p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">Mission, Motto & Promise</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Heart, title: "Mission", text: "To turn the sacrifices of African parents into global opportunities for their children, empowering a generation to uplift their families and communities, by God's grace." },
              { icon: Compass, title: "Motto", text: "God First. Legacy Always. — every decision rooted in faith; every outcome built to outlast us." },
              { icon: Award, title: "Promise", text: "By Grace, From Sacrifice to Success — relentless service, honest counsel, real results." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-card p-8 shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-navy">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-navy">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
