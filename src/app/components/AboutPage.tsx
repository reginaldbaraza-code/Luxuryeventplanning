import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const IMAGES = {
  banquetHall: "https://images.unsplash.com/photo-1712314947761-a8d718bd8c32?w=1400&h=900&fit=crop&auto=format",
  chandeliers: "https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?w=1440&h=700&fit=crop&auto=format",
  formalTable: "https://images.unsplash.com/photo-1707333514156-d42751dca70d?w=800&h=1000&fit=crop&auto=format",
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

const PRINCIPLES = [
  {
    n: "01",
    title: "Authorship over assembly",
    body:
      "Every event begins with a singular point of view. We do not collect vendor services — we compose an experience, end to end.",
  },
  {
    n: "02",
    title: "Restraint as luxury",
    body:
      "We resist the impulse to fill every surface. Empty space, considered silence, and deliberate simplicity communicate what excess cannot.",
  },
  {
    n: "03",
    title: "Permanence in memory",
    body:
      "Our measure of success is not the event itself, but what guests carry home. The weight of a moment is proportional to its honesty.",
  },
  {
    n: "04",
    title: "Partnership over service",
    body:
      "We work alongside our clients as creative partners. Your vision is the brief; our role is to realise it with precision and care.",
  },
];

export function AboutPage() {
  return (
    <main>
      {/* Page header */}
      <section
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "80px 64px 72px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <p style={{ ...eyebrow, marginBottom: 32 }}>About the Studio</p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 5.5vw, 80px)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.08,
            color: "var(--foreground)",
            maxWidth: 700,
          }}
        >
          Nairobi's atelier for extraordinary events.
        </h1>
      </section>

      {/* Story section: photo left, text right */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
          }}
        >
          {/* Photo */}
          <div
            style={{
              background: "#0E0620",
              borderRight: "1px solid var(--border)",
              overflow: "hidden",
              minHeight: 560,
            }}
          >
            <img
              src={IMAGES.banquetHall}
              alt="Grand event hall with crystal chandeliers"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.8,
                display: "block",
              }}
            />
          </div>

          {/* Text */}
          <div style={{ padding: "80px 64px" }}>
            <p style={{ ...eyebrow, marginBottom: 32 }}>Our Story</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 2.8vw, 40px)",
                fontWeight: 400,
                lineHeight: 1.25,
                color: "var(--foreground)",
                marginBottom: 32,
              }}
            >
              Founded in 2018 by Amara Wanjiku
            </h2>
            <div style={{ width: 32, height: 1, background: "var(--border)", marginBottom: 32 }} />
            <p style={{ ...bodyText, marginBottom: 20 }}>
              The Event Studio was born from a conviction that Nairobi deserved an event practice
              built to international standards — not merely competent, but genuinely visionary.
            </p>
            <p style={{ ...bodyText, marginBottom: 20 }}>
              Amara spent a decade working alongside the world's foremost luxury event houses in
              London, Dubai, and Cape Town before returning home to found the Studio with a
              founding team of eight specialists.
            </p>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              Today, the Studio serves a private roster of clients across East Africa, planning
              fewer than thirty events per year with deliberate selectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          {/* Header */}
          <div
            style={{
              padding: "64px 64px 0",
              borderBottom: "1px solid var(--border)",
              paddingBottom: 48,
            }}
          >
            <p style={eyebrow}>How We Work</p>
          </div>

          {/* Principles grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.n}
                style={{
                  padding: "56px 64px",
                  borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    fontWeight: 300,
                    letterSpacing: "0.18em",
                    color: "var(--accent)",
                    display: "block",
                    marginBottom: 24,
                  }}
                >
                  {p.n}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    fontWeight: 400,
                    fontStyle: "italic",
                    lineHeight: 1.3,
                    color: "var(--foreground)",
                    marginBottom: 16,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ ...bodyText, fontSize: "14px" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed studio image */}
      <section style={{ borderBottom: "1px solid var(--border)", background: "#0E0620" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 3fr" }}>
          {/* Pull quote */}
          <div
            style={{
              padding: "80px 64px",
              borderRight: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 32, height: 1, background: "var(--accent)", marginBottom: 40 }} />
            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 2.5vw, 36px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.35,
                color: "var(--foreground)",
                marginBottom: 40,
              }}
            >
              "Beauty in every detail. Precision in every plan. Legacy in every memory."
            </blockquote>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--muted-foreground)",
              }}
            >
              — Amara Wanjiku, Founder
            </p>
          </div>

          {/* Photo */}
          <div style={{ overflow: "hidden", minHeight: 480 }}>
            <img
              src={IMAGES.chandeliers}
              alt="Elaborate crystal chandeliers"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.72, display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Team section */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 64px" }}>
          <div style={{ borderBottom: "1px solid var(--border)", padding: "64px 0 48px" }}>
            <p style={eyebrow}>The Team</p>
          </div>

          {[
            { name: "Amara Wanjiku", role: "Founder & Creative Director", tenure: "Est. 2018" },
            { name: "Kobi Ndiaye", role: "Head of Production", tenure: "Since 2020" },
            { name: "Fatima Al-Rashid", role: "Floral & Spatial Design Lead", tenure: "Since 2021" },
            { name: "David Otieno", role: "Client Relations Director", tenure: "Since 2019" },
          ].map((member, i, arr) => (
            <div
              key={member.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 1fr",
                alignItems: "center",
                padding: "32px 0",
                borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--foreground)",
                }}
              >
                {member.name}
              </p>
              <p style={{ ...bodyText, fontSize: "14px" }}>{member.role}</p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                  color: "var(--muted-foreground)",
                  textAlign: "right",
                  textTransform: "uppercase",
                }}
              >
                {member.tenure}
              </p>
            </div>
          ))}

          <div style={{ padding: "48px 0" }}>
            <Link
              to="/contact"
              style={navLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            >
              Work With Us <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
