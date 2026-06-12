import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const IMAGES = {
  banquetHall: "https://images.unsplash.com/photo-1712314947761-a8d718bd8c32?w=1400&h=900&fit=crop&auto=format",
  chandeliers: "https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?w=1440&h=700&fit=crop&auto=format",
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

const VALUES = [
  { n: "01", title: "Excellence", body: "We hold ourselves to the highest standards in every event we touch — from the first consultation to the final farewell." },
  { n: "02", title: "Professionalism", body: "Our team operates with discipline, reliability, and a commitment to representing our clients with dignity and care." },
  { n: "03", title: "Creativity", body: "We bring fresh, innovative ideas to every event, ensuring each experience is unique and memorable." },
  { n: "04", title: "Integrity", body: "We are transparent, honest, and accountable. Our clients trust us because we do exactly what we say we will do." },
  { n: "05", title: "Client Satisfaction", body: "Your vision is our brief. We succeed only when you — and your guests — leave with an experience that exceeded every expectation." },
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
          Nairobi's trusted event management partner.
        </h1>
      </section>

      {/* Story section */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
          }}
        >
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
              alt="Grand event hall"
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8, display: "block" }}
            />
          </div>

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
              Founded with one mission
            </h2>
            <div style={{ width: 32, height: 1, background: "var(--border)", marginBottom: 32 }} />
            <p style={{ ...bodyText, marginBottom: 20 }}>
              The Event Studio was founded with one mission: to help individuals and
              organizations create exceptional event experiences without the stress of
              managing every detail themselves.
            </p>
            <p style={{ ...bodyText, marginBottom: 20 }}>
              We combine creativity, professionalism, and strategic planning to ensure
              each event is executed seamlessly from start to finish.
            </p>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              Based in Nairobi, Kenya, we serve corporate organizations, NGOs, government
              agencies, universities, professional associations, and private clients across
              East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div
            style={{
              padding: "72px 64px",
              borderRight: "1px solid var(--border)",
            }}
          >
            <p style={{ ...eyebrow, marginBottom: 32 }}>Our Vision</p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.2,
                color: "var(--foreground)",
              }}
            >
              To become Kenya's most trusted event management partner.
            </h3>
          </div>

          <div style={{ padding: "72px 64px" }}>
            <p style={{ ...eyebrow, marginBottom: 32 }}>Our Mission</p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.2,
                color: "var(--foreground)",
              }}
            >
              To deliver memorable events through innovation, excellence, and personalized service.
            </h3>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ padding: "64px 64px 0", borderBottom: "1px solid var(--border)", paddingBottom: 48 }}>
            <p style={eyebrow}>Our Core Values</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
            {VALUES.map((v, i) => (
              <div
                key={v.n}
                style={{
                  padding: "56px 64px",
                  borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: i < VALUES.length - 1 ? "1px solid var(--border)" : "none",
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
                  {v.n}
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
                  💜 {v.title}
                </h3>
                <p style={{ ...bodyText, fontSize: "14px" }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ borderBottom: "1px solid var(--border)", background: "#0E0620" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 3fr" }}>
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
              "You enjoy the event. We handle the details."
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
              — The Event Studio
            </p>
          </div>

          <div style={{ overflow: "hidden", minHeight: 480 }}>
            <img
              src={IMAGES.chandeliers}
              alt="Elaborate crystal chandeliers"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.72, display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 64px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Link
            to="/contact"
            style={navLink}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
          >
            Work With Us <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </main>
  );
}
