import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { contactData, siteData } from "../../data";
import ContactForm from "./ContactForm";

type InfoCardProps = {
  icon: ReactNode;
  label: string;
  children: ReactNode;
};

function InfoCard({ icon, label, children }: InfoCardProps) {
  return (
    <li className="flex items-center gap-5 rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur-sm">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue">
        {icon}
      </span>
      <div className="text-white">
        <p className="font-bold">{label}</p>
        <div className="mt-1 text-sm text-white/80">{children}</div>
      </div>
    </li>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate bg-linear-125 from-[#353685] via-[#86296d] to-[#e32b36] py-24 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-32 before:bg-linear-to-b before:from-brand-blue before:to-transparent before:[mask-image:linear-gradient(to_right,black,transparent_55%)] lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-[11px] leading-4 font-bold tracking-[0.2em] text-white">
            <span className="size-1.5 rounded-full bg-brand-red" />
            {contactData.badge}
          </span>
          <h2 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl">
            {contactData.title}
          </h2>

          <ul className="mt-10 space-y-5">
            <InfoCard
              icon={<Phone className="size-5" />}
              label={contactData.phoneLabel}
            >
              {siteData.phones.map((phone, index) => (
                <span key={phone.href}>
                  {index > 0 && <span className="mx-2 text-white/40">|</span>}
                  <a href={phone.href} className="hover:text-white">
                    {phone.label}
                  </a>
                </span>
              ))}
            </InfoCard>

            <InfoCard
              icon={<Mail className="size-5" />}
              label={contactData.emailLabel}
            >
              <a href={`mailto:${siteData.email}`} className="hover:text-white">
                {siteData.email}
              </a>
            </InfoCard>

            <InfoCard
              icon={<MapPin className="size-5" />}
              label={contactData.locationLabel}
            >
              {siteData.address}
            </InfoCard>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
