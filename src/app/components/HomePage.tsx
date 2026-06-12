import { Link } from "react-router";
import { ArrowRight, ArrowDownRight } from "lucide-react";

const IMAGES = {
  heroPhoto: "https://images.unsplash.com/photo-1737682599438-319b61711b5f?w=1200&h=1400&fit=crop&auto=format",
  formalDinner: "https://images.unsplash.com/photo-1649615644613-758b850399c1?w=800&h=1100&fit=crop&auto=format",
  banquetHall: "https://images.unsplash.com/photo-1712314947761-a8d718bd8c32?w=1400&h=900&fit=crop&auto=format",
  flowers: "https://images.unsplash.com/photo-1710587384835-0f3de33d8042?w=700&h=900&fit=crop&auto=format",
  candles: "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?w=700&h=500&fit=crop&auto=format",
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

const SERVICES = [
  { name: "Essentials", desc: "Intimate gatherings, up to 60 guests", price: "From KES 450,000" },
  { name: "Signature", desc: "Curated celebrations, up to 150 guests", price: "From KES 950,000" },
  { name: "Maison", desc: "Legacy events, up to 300 guests", price: "From KES 2,200,000" },
];

export function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "calc(100vh - 72px)",
        }}
      >
        {/* Left: text */}
        <div
          className="flex flex-col justify-between"
          style={{ padding: "96px 64px 80px", borderRight: "1px solid var(--border)" }}
        >
          <div>
            <p style={eyebrow}>Nairobi · Est. 2018</p>
          </div>

          <div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(52px, 5.5vw, 88px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.08,
                color: "var(--foreground)",
                marginBottom: 40,
                maxWidth: 560,
              }}
            >
              We Compose the Moments That Endure.
            </h1>

            <div style={{ width: 48, height: 1, background: "var(--accent)", marginBottom: 40 }} />

            <p style={{ ...bodyText, maxWidth: 400, marginBottom: 56 }}>
              The Event Studio is Nairobi's foremost luxury event design practice. We work with
              discerning clients to realise celebrations of singular beauty and lasting resonance.
            </p>

            <Link
              to="/services"
              style={navLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            >
              Explore Our Work <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="flex items-center" style={{ gap: 8 }}>
            <ArrowDownRight size={14} strokeWidth={1} color="var(--muted-foreground)" />
            <span style={{ ...eyebrow, color: "var(--muted-foreground)" }}>Scroll</span>
          </div>
        </div>

        {/* Right: photo */}
        <div style={{ background: "#0E0620", position: "relative", overflow: "hidden" }}>
          <img
            src={IMAGES.heroPhoto}
            alt="Elegant long dining table with chandelier"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.75,
              display: "block",
            }}
          />
        </div>
      </section>

      {/* Studio intro */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "2fr 3fr",
          }}
        >
          {/* Photo */}
          <div
            style={{
              background: "#0E0620",
              borderRight: "1px solid var(--border)",
              overflow: "hidden",
              minHeight: 520,
            }}
          >
            <img
              src={IMAGES.formalDinner}
              alt="Formal dinner table setting"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.8, display: "block" }}
            />
          </div>

          {/* Text */}
          <div style={{ padding: "96px 80px" }}>
            <p style={{ ...eyebrow, marginBottom: 32 }}>Our Philosophy</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 3.5vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.18,
                color: "var(--foreground)",
                marginBottom: 40,
                maxWidth: 480,
              }}
            >
              An atelier for life's defining moments.
            </h2>
            <div style={{ width: 32, height: 1, background: "var(--border)", marginBottom: 40 }} />
            <p style={{ ...bodyText, maxWidth: 480, marginBottom: 20 }}>
              We believe that a great event is not assembled — it is authored. Every element,
              from the angle of the candlelight to the weight of the linen, contributes to a
              single, coherent narrative.
            </p>
            <p style={{ ...bodyText, maxWidth: 480, marginBottom: 56 }}>
              Our practice is grounded in restraint, precision, and an intimate understanding of
              what makes a moment feel inevitable rather than planned.
            </p>
            <Link
              to="/about"
              style={navLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            >
              About the Studio <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          {/* Section header */}
          <div
            style={{
              padding: "64px 64px 48px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={eyebrow}>Selected Work</p>
            <Link
              to="/services"
              style={{ ...navLink, fontSize: "10px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            >
              View All Services <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Editorial photo grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 2fr",
              gridTemplateRows: "auto auto",
            }}
          >
            {/* Large landscape — spans full height left column */}
            <div
              style={{
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                background: "#0E0620",
                overflow: "hidden",
                height: 580,
              }}
            >
              <img
                src={IMAGES.banquetHall}
                alt="Grand banquet hall with chandeliers"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.82, display: "block" }}
              />
            </div>

            {/* Right: two stacked images */}
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", height: 580 }}>
              <div
                style={{
                  background: "#0E0620",
                  borderBottom: "1px solid var(--border)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={IMAGES.flowers}
                  alt="Luxury floral arrangement"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", opacity: 0.82, display: "block" }}
                />
              </div>
              <div style={{ background: "#0E0620", overflow: "hidden" }}>
                <img
                  src={IMAGES.candles}
                  alt="Candlelit table with floral decor"
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.82, display: "block" }}
                />
              </div>
            </div>
          </div>

          {/* Caption strip */}
          <div
            style={{
              borderTop: "1px solid var(--border)",
              padding: "28px 64px",
              display: "flex",
              gap: 64,
            }}
          >
            {["Amani Wedding, Karen Country Club", "Mbeki Corporate Gala, Nairobi Serena", "Private Celebration, Ol Pejeta"].map((caption) => (
              <p
                key={caption}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 300,
                  letterSpacing: "0.12em",
                  color: "var(--muted-foreground)",
                }}
              >
                {caption}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 64px" }}>
          <div style={{ padding: "64px 0 0", borderBottom: "1px solid var(--border)", marginBottom: 0 }}>
            <p style={eyebrow}>What We Offer</p>
          </div>

          {SERVICES.map((svc, i) => (
            <div
              key={svc.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 1fr",
                alignItems: "center",
                padding: "36px 0",
                borderBottom: i < SERVICES.length - 1 ? "1px solid var(--border)" : "none",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.querySelectorAll<HTMLElement>("[data-name]").forEach((n) => (n.style.color = "var(--accent)"));
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.querySelectorAll<HTMLElement>("[data-name]").forEach((n) => (n.style.color = "var(--foreground)"));
              }}
            >
              <p
                data-name="true"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--foreground)",
                  transition: "color 0.25s ease",
                }}
              >
                {svc.name}
              </p>
              <p style={{ ...bodyText, fontSize: "14px" }}>{svc.desc}</p>
              <p
                style={{
                  ...eyebrow,
                  color: "var(--muted-foreground)",
                  textAlign: "right",
                  letterSpacing: "0.1em",
                  fontSize: "11px",
                }}
              >
                {svc.price}
              </p>
            </div>
          ))}

          <div style={{ padding: "40px 0" }}>
            <Link
              to="/services"
              style={navLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            >
              View Full Services <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section style={{ padding: "120px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 32, color: "var(--muted-foreground)" }}>Ready to Begin</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5vw, 72px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
              color: "var(--foreground)",
              marginBottom: 48,
            }}
          >
            Begin a Conversation.
          </h2>
          <div style={{ width: 1, height: 64, background: "var(--border)", margin: "0 auto 48px" }} />
          <Link
            to="/contact"
            style={{
              ...navLink,
              justifyContent: "center",
              display: "inline-flex",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
          >
            Get in Touch <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </main>
  );
}
