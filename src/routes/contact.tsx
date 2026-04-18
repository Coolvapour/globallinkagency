import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Global Link Migration & Education Agency" },
      { name: "description", content: "Book a free consultation with our migration and education advisors. We're here to guide your family from sacrifice to success." },
      { property: "og:title", content: "Contact Global Link Migration & Education" },
      { property: "og:description", content: "Reach our team and start your global journey today." },
    ],
  }),
  component: ContactPage,
});

type SendMethod = "email" | "whatsapp";

const WHATSAPP_NUMBER = "254722496897";
const CONTACT_EMAIL = "glinkagency254@gmail.com";

function ContactPage() {
  const [sendMethod, setSendMethod] = useState<SendMethod>("email");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = `Inquiry: ${service} — ${name}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n\n` +
      `${message}`;

    if (sendMethod === "whatsapp") {
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      toast.success("Opening WhatsApp...");
    } else {
      const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
      toast.success("Opening your email app...");
    }
  }

  const details: { icon: typeof Phone; label: string; value: string; href?: string }[] = [
    { icon: Phone, label: "Phone / WhatsApp", value: "+254 722 496 897", href: "tel:+254722496897" },
    { icon: Mail, label: "Email", value: "glinkagency254@gmail.com", href: "mailto:glinkagency254@gmail.com" },
    { icon: Clock, label: "Hours", value: "Mon – Fri · 9:00 – 17:00" },
    { icon: MapPin, label: "Location", value: "Next to Ukerio Motors, Opposite Mediheal Hospital, Along Eldoret-Nakuru Highway, Eldoret" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Toaster />
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl sm:text-6xl">
            Let's start your <span className="text-gold">journey</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Share a few details and our advisors will reach out personally — within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-5 lg:px-8">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl text-navy">Reach our team</h2>
            <ul className="mt-8 space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold/15 text-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold">{label}</div>
                    {href ? (
                      <a href={href} className="mt-1 block text-foreground hover:text-navy">{value}</a>
                    ) : (
                      <div className="mt-1 text-foreground">{value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl bg-secondary p-6">
              <p className="font-display text-xl italic text-navy">"By Grace, From Sacrifice to Success."</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold">God First. Legacy Always.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-elegant md:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-navy">Service of Interest</label>
                <select name="service" className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                  <option>Study Abroad & Education</option>
                  <option>Work & Skilled Migration</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-navy">How can we help?</label>
              <textarea name="message" rows={5} required className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
            </div>

            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-navy">Send via</div>
              <div className="mt-2 inline-flex rounded-full border border-border bg-background p-1">
                <button
                  type="button"
                  onClick={() => setSendMethod("email")}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${sendMethod === "email" ? "bg-navy text-primary-foreground shadow-elegant" : "text-navy/70 hover:text-navy"}`}
                >
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setSendMethod("whatsapp")}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${sendMethod === "whatsapp" ? "bg-navy text-primary-foreground shadow-elegant" : "text-navy/70 hover:text-navy"}`}
                >
                  WhatsApp
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-elegant"
            >
              {sendMethod === "whatsapp" ? "Send via WhatsApp" : "Send via Email"}
            </button>
          </form>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-navy">Find Us</h2>
          <p className="mt-2 text-muted-foreground">
            Visit our office in Eldoret — Next to Ukerio Motors, Opposite Mediheal Hospital, Along Eldoret-Nakuru Highway.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-elegant">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.661136312418!2d35.2950739!3d0.5085887000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781014bc5a4f3ef%3A0x3b098afa180eaa4b!2sPiolite%20Tents%20%26%20Steel%20Design%2C%20Tents%20in%20Eldoret%2C%20Tent%20Makers%20in%20Eldoret%2C%20Tent%20Repairs%20in%20Eldoret%2C%20Camping%20Tents%20In%20Eldoret!5e0!3m2!1sen!2ske!4v1776503165720!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Global Link Migration Office Location"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-navy">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
    </div>
  );
}
