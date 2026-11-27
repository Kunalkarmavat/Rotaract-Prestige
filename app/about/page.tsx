import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { causes, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Rotaract Club of Prestige in Gwalior: our mission, our vision, the causes we serve and the core team behind the work.",
};

const palette = [
  ["#FDE0EC", "#A80E50"],
  ["#FFE9C2", "#8A5A00"],
  ["#E3E9FF", "#2F3F9E"],
  ["#DDF3E6", "#1F6B3F"],
];

const initials = (name: string) => {
  const parts = name.split(" ").filter(Boolean);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
};

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1 className="h1">Young people who turn free time into service.</h1>
          <p className="lead">
            Rotaract focuses on the development of young adults as leaders in their communities
            and workplaces. Our club in Gwalior does that through hands-on service.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="split-media">
            <Photo file="mission" alt="Club members standing arm in arm" />
          </div>
          <div>
            <h2 className="h2">Our mission</h2>
            <p className="body-lg">
              We provide service to others, promote integrity, and advance world understanding,
              goodwill and peace through our fellowship of business, professional and community
              leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap split reverse">
          <div className="split-media">
            <Photo file="vision" alt="Volunteers gathered around a globe with a green sprout" />
          </div>
          <div>
            <h2 className="h2">Our vision</h2>
            <p className="body-lg">
              Together, we see a world where people unite and take action to create lasting
              change: across the globe, in our communities and in ourselves.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">What we work on</h2>
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint" id="team">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Meet the 2026-27 post holders</h2>
            <p className="body-lg head-note">The people who plan, run and report every drive.</p>
          </div>
          <ul className="team">
            {team.map((m, i) => {
              const [bg, fg] = palette[i % palette.length];
              return (
                <li key={m.name} className="member">
                  <span className="avatar" style={{ background: bg, color: fg }} aria-hidden="true">
                    {initials(m.name)}
                  </span>
                  <div>
                    <h3>Rtr. {m.name}</h3>
                    <p>{m.role}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="wrap center">
          <h2 className="h2">Want to be part of the next drive?</h2>
          <p className="body-lg">Tell us a little about yourself and our membership team will reply.</p>
          <div className="actions center-actions">
            <Link className="btn btn-gold" href="/contact?topic=membership">Apply for membership</Link>
            <Link className="btn btn-light" href="/contact">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
