import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";

const IMAGES = {
  coordination: "https://images.unsplash.com/photo-1665607438186-7755c7f4dd30?w=900&h=700&fit=crop&auto=format",
  planning: "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?w=900&h=700&fit=crop&auto=format",
  corporate: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=700&fit=crop&auto=format",
};

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "10px",
  fontWeight: 300,
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "var(--accent)",
};

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "15px",
  fontWeight: 300,
  lineHeight: 1.85,
  color: "var(--muted-foreground)",
};

const navLink: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "11px",
  fontWeight: 300,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "var(--foreground)",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
};

const PACKAGES = [
  {
    name: "Event Coordination",
    tier: "01",
    tagline: "You've planned the event. We bring it to life.",
    desc: "Our coordination service is designed for clients who have done their own planning but need a dedicated professional to ensure flawless execution on the day. We align people, vendors, and timelines so everything runs smoothly.",
    services: ["Vendor Coordination", "Venue Liaison", "Event Timeline Management", "Event-Day Supervision", "Troubleshooting & Support"],
    image: IMAGES.coordination,
    imageAlt: "Event coordinator arranging table settings",
    reverse: false,
  },
  {
    name: "Event Planning & Management",
    tier: "02",
    tagline: "Complete end-to-end event management.",
    desc: "From initial concept to final execution, we handle every dimension of your event. This full-service package is ideal for clients who want a dedicated partner from the very first idea all the way through to the final farewell.",
    services: ["Budget Creation", "Venue Sourcing", "Vendor Management", "Guest Management", "Event Timeline Development", "Event Execution"],
    image: IMAGES.planning,
    imageAlt: "Elegant candlelit table setting with floral arrangements",
    reverse: true,
  },
  {
    name: "Conferences & Corporate Events",
    tier: "03",
    tagline: "Professional management for impactful corporate experiences.",
    desc: "Tailored for organizations that need structured, professional event management. We handle the complexity of large-scale corporate events so your team can focus on what matters most.",
    services: ["Registration Management", "Program Design", "Speaker Coordination", "AV Coordination", "Catering Coordination", "Post-Event Reporting"],
    image: IMAGES.corporate,
    imageAlt: "Grand conference setup with professional lighting",
    reverse: false,
  },
];

function PackageRow({ pkg, isMobile }: { pkg: (typeof PACKAGES)[0]; isMobile: boolean }) {
  return (
    <section style={{ borderBottom: "1px solid var(--border)" }}>
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          direction: !isMobile && pkg.reverse ? "rtl" : "ltr",
        }}
      >
        {/* Photo */}
        <div
          style={{
            background: "#0E0620",
            overflow: "hidden",
            minHeight: isMobile ? 220 : 520,
            borderRight: !isMobile && !pkg.reverse ? "1px solid var(--border)" : "none",
            borderLeft: !isMobile && pkg.reverse ? "1px solid var(--border)" : "none",
            borderBottom: isMobile ? "1px solid var(--border)" : "none",
            direction: "ltr",
          }}
        >
          <img
            src={pkg.image}
            alt={pkg.imageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.78, display: "block" }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: isMobile ? "40px 24px" : "72px 64px", direction: "ltr" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 24 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 300, letterSpacing: "0.18em", color: "var(--accent)", textTransform: "uppercase" }}>
              {pkg.tier}
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 300, letterSpacing: "0.18em", color: "var(--muted-foreground)", textTransform: "uppercase" }}>
              {pkg.tagline}
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "28px" : "clamp(36px, 3.5vw, 56px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
              color: "var(--foreground)",
              marginBottom: 28,
            }}
          >
            {pkg.name}
          </h2>

          <div style={{ width: 32, height: 1, background: "var(--border)", marginBottom: 28 }} />

          <p style={{ ...bodyText, fontSize: "14px", marginBottom: 32, maxWidth: 400 }}>{pkg.desc}</p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
            {pkg.services.map((svc) => (
              <li key={svc} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                <Check size={12} strokeWidth={1.5} color="var(--accent)" style={{ marginTop: 4, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 300, lineHeight: 1.6, color: "var(--muted-foreground)" }}>
                  {svc}
                </span>
              </li>
            ))}
          </ul>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 28 }}>
            <Link
              to="/contact"
              style={{
                ...navLink,
                border: "1px solid var(--border)",
                padding: "14px 24px",
                transition: "border-color 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--foreground)";
              }}
            >
              Request This Package <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  const isMobile = useIsMobile();

  return (
    <main>
      {/* Page header */}
      <section
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: isMobile ? "56px 24px 48px" : "80px 64px 72px",
          borderBottom: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 24 : 64,
          alignItems: "end",
        }}
      >
        <div>
          <p style={{ ...eyebrow, marginBottom: 28 }}>Our Services</p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "40px" : "clamp(48px, 5.5vw, 80px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.08,
              color: "var(--foreground)",
            }}
          >
            What makes an event successful?
          </h1>
        </div>

        <div>
          <p style={{ ...bodyText, maxWidth: 440 }}>
            It's more than just a beautiful venue. It's the perfect planning, coordination, and
            execution. Every engagement is tailored to the singular requirements of your occasion.
            Reach out for a consultation and we'll craft a bespoke proposal for your event.
          </p>
        </div>
      </section>

      {PACKAGES.map((pkg) => (
        <PackageRow key={pkg.name} pkg={pkg} isMobile={isMobile} />
      ))}

      {/* CTA */}
      <section style={{ padding: isMobile ? "64px 24px" : "96px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "32px" : "clamp(36px, 4vw, 60px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
              color: "var(--foreground)",
              marginBottom: 32,
            }}
          >
            Ready to elevate your next event?
          </h2>
          <Link
            to="/contact"
            style={{ ...navLink, justifyContent: "center", display: "inline-flex" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
          >
            Request a Consultation <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </main>
  );
}
