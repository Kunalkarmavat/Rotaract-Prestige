import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Rotaract Club of Prestige in Gwalior to join, volunteer, donate or partner with us.",
};

export default function Contact() {
  const map = `https://www.google.com/maps?q=${encodeURIComponent(
    "Prestige Institute of Management, DD Nagar, Gwalior"
  )}&output=embed`;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1 className="h1">Let us talk</h1>
          <p className="lead">
            Want to join, volunteer, donate or partner with us? Send a message and we will get
            back to you.
          </p>
        </div>
      </section>

      <section className="section pt0">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h2>Visit</h2>
              <p>{site.address}</p>
            </div>
            <div className="info-card">
              <h2>Call</h2>
              <p><a href={site.phoneHref}>{site.phone}</a></p>
            </div>
            <div className="info-card">
              <h2>Email</h2>
              <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
            </div>
            <div className="info-card">
              <h2>Follow</h2>
              <p className="inline-links">
                <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href={site.socials.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
              </p>
            </div>
          </div>

          <div className="form-card">
            <h2 className="h3">Send us a message</h2>
            <ContactForm />
          </div>
        </div>

        <div className="wrap map-wrap">
          <iframe
            title="Map showing Prestige Institute of Management, Gwalior"
            src={map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
