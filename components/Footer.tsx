import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="footer-big">Small acts, done together, change a city.</p>

        <div className="footer-grid">
          <div>
            <p className="footer-name">{site.name}</p>
            <p className="footer-text">
              Rotaract develops young adults as leaders in their communities and workplaces,
              and takes part in service projects around the world.
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/#causes">Causes</Link></li>
              <li><Link href="/#events">Events</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3>Get involved</h3>
            <ul>
              <li><Link href="/contact?topic=membership">Become a member</Link></li>
              <li><Link href="/contact?topic=volunteer">Volunteer</Link></li>
              <li><Link href="/contact?topic=donation">Donate</Link></li>
              <li><Link href="/contact?topic=partnership">Partner</Link></li>
            </ul>
          </div>

          <div>
            <h3>Find us</h3>
            <ul>
              <li>{site.address}</li>
              <li><a href={site.phoneHref}>{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <ul className="social">
            <li><a href={site.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href={site.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href={site.socials.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
