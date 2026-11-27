import Link from "next/link";
import Photo from "@/components/Photo";
import Faq from "@/components/Faq";
import VideoCard from "@/components/VideoCard";
import { causes, events, faqs, news, site, stats, steps, ways } from "@/lib/site";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1 className="display">
              Young leaders,
              <br />
              serving Gwalior,
              <br />
              one drive at a time.
            </h1>
            <p className="lead">
              We are the Rotaract Club of Prestige. We give clothes, plant trees, feed birds and
              back causes in education and health, and we invite you to join in.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" href="/contact?topic=donation">Donate</Link>
              <Link className="btn btn-ghost" href="/contact?topic=membership">Join the club</Link>
            </div>
          </div>

          <div className="collage" aria-hidden="false">
            <div className="collage-main">
              <Photo file="hero-main" alt="Volunteers handing a donation box to a child" priority />
            </div>
            <div className="collage-side">
              <Photo file="hero-side" alt="Two smiling club members" priority />
            </div>
            <div className="collage-chip">
              <strong>RID {site.rid}</strong>
              <span>Rotaract Club of Prestige</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section">
        <div className="wrap split">
          <div className="split-media">
            <Photo file="vision" alt="Volunteers gathered around a globe with a green sprout" />
          </div>
          <div>
            <h2 className="h2">We envision young people who understand themselves and change the world around them.</h2>
            <p className="body-lg">
              Rotaract brings students and young professionals together to serve, lead and
              learn. Our fellowship promotes integrity and advances goodwill, understanding and
              peace through service in our own community.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" href="/about">About the club</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE SERVE */}
      <section className="section tint" id="how">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Your support turns into help on the ground.</h2>
            <Link className="btn btn-primary" href="/contact?topic=donation">Donate</Link>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CAUSES */}
      <section className="section" id="causes">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Causes we serve</h2>
            <p className="body-lg head-note">Three areas where our drives and projects make the biggest difference.</p>
          </div>
          <div className="cards-3">
            {causes.map((c) => (
              <article key={c.title} className="card">
                <div className="card-media">
                  <Photo file={c.image} alt={c.title} />
                </div>
                <div className="card-body">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <a className="text-link" href={c.href} target="_blank" rel="noopener noreferrer">
                    Read more on rotary.org
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section dark">
        <div className="wrap split split-video">
          <div>
            <h2 className="h2">Watch our latest drive</h2>
            <p className="body-lg">
              In this video we donate clothes to poor families and give food to people in rural
              areas. It is the clearest picture of what a day with the club looks like.
            </p>
            <div className="actions">
              <Link className="btn btn-gold" href="/contact?topic=volunteer">Volunteer with us</Link>
            </div>
          </div>
          <VideoCard />
        </div>
      </section>

      {/* EVENTS */}
      <section className="section" id="events">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Events we have held</h2>
            <a className="btn btn-ghost" href={site.socials.instagram} target="_blank" rel="noopener noreferrer">
              See more on Instagram
            </a>
          </div>
          <div className="cards-3">
            {events.map((e) => (
              <article key={e.title} className="card event">
                <div className="card-media">
                  <Photo file={e.image} alt={e.title} />
                  <span className="date-badge">
                    <b>{e.day}</b>
                    {e.month}
                  </span>
                </div>
                <div className="card-body">
                  <h3>{e.title}</h3>
                  <p className="meta">
                    {e.time}, {e.place}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WAYS TO HELP */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Four ways to help</h2>
          </div>
          <div className="cards-4">
            {ways.map((w) => (
              <article key={w.title} className="way">
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <Link className="text-link" href={`/contact?topic=${w.topic}`}>{w.cta}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="wrap faq-grid">
          <div>
            <h2 className="h2">Answers to common questions</h2>
            <p className="body-lg">Cannot find what you need? Write to us and we will reply.</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/contact">Contact us</Link>
            </div>
          </div>
          <Faq />
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </section>

      {/* NEWS */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Rotary in the news</h2>
          </div>
          <div className="news">
            {news.map((n) => (
              <a key={n.href} className="news-item" href={n.href} target="_blank" rel="noopener noreferrer">
                <span className="meta">{n.source}, {n.date}</span>
                <span className="news-title">{n.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap center">
          <h2 className="h2">Ready to serve with us?</h2>
          <p className="body-lg">Join the club, volunteer at a drive or fund the next one.</p>
          <div className="actions center-actions">
            <Link className="btn btn-gold" href="/contact?topic=membership">Join the club</Link>
            <Link className="btn btn-light" href="/contact?topic=donation">Donate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
