import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";

const IMAGES = {
  essentials: "https://images.unsplash.com/photo-1665607438186-7755c7f4dd30?w=900&h=700&fit=crop&auto=format",
  signature: "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?w=900&h=700&fit=crop&auto=format",
  maison: "https://images.unsplash.com/photo-1700514077430-3659e38eb5e7?w=900&h=700&fit=crop&auto=format",
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
    name: "Essentials",
    tier: "01",
    tagline: "For intimate gatherings",
    scale: "Up to 60 guests",
    price: "From KES 450,000",
    desc: "Our foundational offering provides the full weight of the Studio's expertise for smaller, deeply personal events. Every detail receives the same level of care as our most elaborate productions.",
    services: [
      "Initial concept consultation",
      "Venue scouting and coordination",
      "Décor concept and installation",
      "Day-of coordination (10 hours)",
      "Guest management and seating",
      "Vendor liaison and briefing",
      "Post-event debrief report",
    ],
    image: IMAGES.essentials,
    imageAlt: "Elegantly set table with fine silverware and glassware",
    reverse: false,
  },
  {
    name: "Signature",
    tier: "02",
    tagline: "For curated celebrations",
    scale: "Up to 150 guests",
    price: "From KES 950,000",
    desc: "The Signature package is our most sought-after offering — a full-service creative partnership that encompasses every dimension of your event, from the first mood board to the final farewell.",
    services: [
      "Everything in Essentials",
      "Full floral design and installation",
      "Custom lighting design and rigging",
      "Entertainment curation and direction",
      "Stationery design and production",
      "Weekend-long coordination (two days)",
      "Photography and film direction brief",
      "On-site styling team (three specialists)",
    ],
    image: IMAGES.signature,
    imageAlt: "Candlelit intimate table setting with floral arrangements",
    reverse: true,
  },
  {
    name: "Maison",
    tier: "03",
    tagline: "For legacy events",
    scale: "Up to 300 guests",
    price: "From KES 2,200,000",
    desc: "Maison is our most complete engagement — a six-month creative residency culminating in an event of lasting cultural significance. Reserved for eight productions per year.",
    services: [
      "Everything in Signature",
      "Six-month dedicated planning engagement",
      "International vendor access and curation",
      "Bespoke installation architecture",
      "Private pre-event dinner for principals",
      "Full weekend residency team (eight specialists)",
      "Post-event documentation and archive",
      "Bespoke content creation and lookbook",
      "First right of refusal for future events",
    ],
    image: IMAGES.maison,
    imageAlt: "Grand ballroom event with tables and atmospheric lighting",
    reverse: false,
  },
];

function PackageRow({ pkg }: { pkg: (typeof PACKAGES)[0] }) {
  return (
    <section style={{ borderBottom: "1px solid var(--border)" }}>
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: pkg.reverse ? "1fr 1fr" : "1fr 1fr",
          direction: pkg.reverse ? "rtl" : "ltr",
        }}
      >
        {/* Photo */}
        <div
          style={{
            background: "#0E0620",
            overflow: "hidden",
            minHeight: 520,
            borderRight: pkg.reverse ? "none" : "1px solid var(--border)",
            borderLeft: pkg.reverse ? "1px solid var(--border)" : "none",
            direction: "ltr",
          }}
        >
          <img
            src={pkg.image}
            alt={pkg.imageAlt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.78,
              display: "block",
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: "72px 64px", direction: "ltr" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 16,
              marginBottom: 32,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "0.18em",
                color: "var(--accent)",
                textTransform: "uppercase",
              }}
            >
              {pkg.tier}
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "0.18em",
                color: "var(--muted-foreground)",
                textTransform: "uppercase",
              }}
            >
              {pkg.tagline}
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 4vw, 64px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.08,
              color: "var(--foreground)",
              marginBottom: 8,
            }}
          >
            {pkg.name}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              fontWeight: 300,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--muted-foreground)",
              marginBottom: 32,
            }}
          >
            {pkg.scale}
          </p>

          <div style={{ width: 32, height: 1, background: "var(--border)", marginBottom: 32 }} />

          <p style={{ ...bodyText, fontSize: "14px", marginBottom: 40, maxWidth: 400 }}>{pkg.desc}</p>

          {/* Services list */}
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0" }}>
            {pkg.services.map((svc) => (
              <li
                key={svc}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <Check
                  size={12}
                  strokeWidth={1.5}
                  color="var(--accent)"
                  style={{ marginTop: 4, flexShrink: 0 }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {svc}
                </span>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid var(--border)",
              paddingTop: 32,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: 400,
                color: "var(--foreground)",
              }}
            >
              {pkg.price}
            </p>
            <Link
              to="/contact"
              style={navLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            >
              Enquire <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <main>
      {/* Page header */}
      <section
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "80px 64px 72px",
          borderBottom: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "end",
        }}
      >
        <div>
          <p style={{ ...eyebrow, marginBottom: 32 }}>Our Services</p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 5.5vw, 80px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.08,
              color: "var(--foreground)",
            }}
          >
            Three paths to an extraordinary event.
          </h1>
        </div>

        <div>
          <p style={{ ...bodyText, maxWidth: 440 }}>
            Each engagement is a bespoke undertaking. The packages below represent starting
            frameworks — in practice, every commission is tailored to the singular requirements
            of the occasion and the client. All prices are guides; final proposals are presented
            following an initial consultation.
          </p>
        </div>
      </section>

      {PACKAGES.map((pkg) => (
        <PackageRow key={pkg.name} pkg={pkg} />
      ))}

      {/* Bespoke note */}
      <section style={{ padding: "80px 64px", borderBottom: "1px solid var(--border)" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ ...eyebrow, marginBottom: 20 }}>A Note on Pricing</p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 2.5vw, 36px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.2,
                color: "var(--foreground)",
              }}
            >
              Every event is unique. So is every proposal.
            </h3>
          </div>
          <p style={bodyText}>
            The figures above are minimum investment guides. Most engagements exceed them based
            on guest count, venue complexity, floral requirements, and vendor scope. We present
            a detailed, itemised proposal following our initial consultation — there are no
            hidden costs, and we do not work on commission from any vendor.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "96px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 60px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
              color: "var(--foreground)",
              marginBottom: 40,
            }}
          >
            Ready to begin your event?
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
