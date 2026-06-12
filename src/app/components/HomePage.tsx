import { Link } from "react-router";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=1400&fit=crop&auto=format",
  about: "https://images.unsplash.com/photo-1649615644613-758b850399c1?w=800&h=1100&fit=crop&auto=format",
  gallery1: "https://images.unsplash.com/photo-1712314947761-a8d718bd8c32?w=1400&h=900&fit=crop&auto=format",
  gallery2: "https://images.unsplash.com/photo-1710587384835-0f3de33d8042?w=700&h=900&fit=crop&auto=format",
  gallery3: "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?w=700&h=500&fit=crop&auto=format",
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
  {
    name: "Event Coordination",
    desc: "You've planned the event. We bring it to life.",
    items: ["Vendor Coordination", "Venue Liaison", "Event Timeline Management", "Event-Day Supervision", "Troubleshooting & Support"],
  },
  {
    name: "Event Planning & Management",
    desc: "Complete end-to-end event management.",
    items: ["Budget Creation", "Venue Sourcing", "Vendor Management", "Guest Management", "Event Execution"],
  },
  {
    name: "Conferences & Corporate Events",
    desc: "Professional management for impactful corporate experiences.",
    items: ["Registration Management", "Speaker Coordination", "AV & Catering Coordination", "Post-Event Reporting"],
  },
];

const WHY_US = [
  "Attention to Detail",
  "Professional Event Execution",
  "Trusted Vendor Network",
  "Creative Event Solutions",
  "Personalized Client Experience",
  "Stress-Free Planning",
];

const INDUSTRIES = [
  { icon: "🏢", label: "Corporate Organizations" },
  { icon: "🌍", label: "NGOs & Development Partners" },
  { icon: "🎓", label: "Universities & Training Institutions" },
  { icon: "🏛", label: "Government Agencies" },
  { icon: "🤝", label: "Professional Associations" },
  { icon: "🎉", label: "Private Clients" },
];

export function HomePage() {
  const isMobile = useIsMobile();
  const px = isMobile ? "24px" : "64px";

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          minHeight: isMobile ? "auto" : "calc(100vh - 72px)",
        }}
      >
        <div
          className="flex flex-col justify-between"
          style={{
            padding: isMobile ? "56px 24px 48px" : "96px 64px 80px",
            borderRight: isMobile ? "none" : "1px solid var(--border)",
            borderBottom: isMobile ? "1px solid var(--border)" : "none",
          }}
        >
          <div>
            <p style={eyebrow}>Nairobi, Kenya</p>
          </div>

          <div style={{ marginTop: isMobile ? 40 : 0 }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? "48px" : "clamp(52px, 5.5vw, 88px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.08,
                color: "var(--foreground)",
                marginBottom: 32,
                maxWidth: 560,
              }}
            >
              Innovate. Execute. Elevate.
            </h1>

            <div style={{ width: 48, height: 1, background: "var(--accent)", marginBottom: 32 }} />

            <p style={{ ...bodyText, maxWidth: 420, marginBottom: 48 }}>
              Creating unforgettable event experiences through exceptional planning,
              seamless coordination, and flawless execution.
            </p>

            <div
              className="flex items-center"
              style={{ gap: 24, flexWrap: "wrap" }}
            >
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
                Book a Consultation
              </Link>
              <Link
                to="/services"
                style={navLink}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              >
                View Our Services <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {!isMobile && (
            <div className="flex items-center" style={{ gap: 8 }}>
              <ArrowDownRight size={14} strokeWidth={1} color="var(--muted-foreground)" />
              <span style={{ ...eyebrow, color: "var(--muted-foreground)" }}>Scroll</span>
            </div>
          )}
        </div>

        {/* Hero photo — hidden on mobile to keep layout clean */}
        {!isMobile && (
          <div style={{ background: "#0E0620", position: "relative", overflow: "hidden" }}>
            <img
              src={IMAGES.hero}
              alt="Elegant event setup with purple and gold lighting"
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.75, display: "block" }}
            />
          </div>
        )}
      </section>

      {/* About intro */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "2fr 3fr",
          }}
        >
          {/* Photo — only shown on desktop */}
          {!isMobile && (
            <div
              style={{
                background: "#0E0620",
                borderRight: "1px solid var(--border)",
                overflow: "hidden",
                minHeight: 520,
              }}
            >
              <img
                src={IMAGES.about}
                alt="Formal dinner table setting"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8, display: "block" }}
              />
            </div>
          )}

          <div style={{ padding: isMobile ? "48px 24px" : "96px 80px" }}>
            <p style={{ ...eyebrow, marginBottom: 24 }}>Bringing Your Vision to Life</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? "30px" : "clamp(36px, 3.5vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.18,
                color: "var(--foreground)",
                marginBottom: 32,
              }}
            >
              Every event should be memorable, impactful, and stress-free.
            </h2>
            <div style={{ width: 32, height: 1, background: "var(--border)", marginBottom: 32 }} />
            <p style={{ ...bodyText, marginBottom: 20 }}>
              At The Event Studio, whether you're planning a conference, corporate gathering,
              training workshop, networking event, birthday celebration, or private function,
              our team ensures every detail is handled with professionalism and care.
            </p>
            <p style={{ ...bodyText, marginBottom: 40 }}>
              Based in Nairobi, Kenya, we partner with clients to create experiences that
              inspire, engage, and leave lasting impressions.
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

      {/* Why choose us */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${px}` }}>
          <div style={{ padding: `${isMobile ? "40px" : "64px"} 0 ${isMobile ? "32px" : "48px"}`, borderBottom: "1px solid var(--border)" }}>
            <p style={eyebrow}>Why Choose The Event Studio</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
            }}
          >
            {WHY_US.map((reason, i) => {
              const cols = isMobile ? 2 : 3;
              const isLastInRow = (i + 1) % cols === 0;
              const isInLastRow = i >= WHY_US.length - cols;
              return (
                <div
                  key={reason}
                  style={{
                    padding: isMobile ? "28px 16px" : "40px 0",
                    borderRight: !isLastInRow ? "1px solid var(--border)" : "none",
                    borderBottom: !isInLastRow ? "1px solid var(--border)" : "none",
                    paddingRight: !isLastInRow ? (isMobile ? 16 : 48) : 0,
                    paddingLeft: i % cols !== 0 ? (isMobile ? 16 : 48) : 0,
                  }}
                >
                  <span style={{ fontSize: 16, marginBottom: 10, display: "block" }}>✨</span>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: isMobile ? "15px" : "18px",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "var(--foreground)",
                      lineHeight: 1.3,
                    }}
                  >
                    {reason}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${px}` }}>
          <div style={{ padding: `${isMobile ? "40px" : "64px"} 0 0`, borderBottom: "1px solid var(--border)" }}>
            <p style={eyebrow}>Our Services</p>
          </div>

          {SERVICES.map((svc, i) => (
            <div
              key={svc.name}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
                alignItems: "start",
                padding: isMobile ? "32px 0" : "40px 0",
                borderBottom: i < SERVICES.length - 1 ? "1px solid var(--border)" : "none",
                gap: isMobile ? 16 : 48,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: isMobile ? "22px" : "26px",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--foreground)",
                }}
              >
                {svc.name}
              </p>
              <p style={{ ...bodyText, fontSize: "14px" }}>{svc.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {svc.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      ...bodyText,
                      fontSize: "13px",
                      paddingLeft: 16,
                      position: "relative",
                      marginBottom: 6,
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div style={{ padding: `${isMobile ? "32px" : "40px"} 0` }}>
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

      {/* Featured Events Gallery */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              padding: `${isMobile ? "40px" : "64px"} ${px} ${isMobile ? "32px" : "48px"}`,
              borderBottom: "1px solid var(--border)",
            }}
          >
            <p style={eyebrow}>Featured Events</p>
          </div>

          {isMobile ? (
            /* Mobile: single stacked image */
            <div style={{ background: "#0E0620", overflow: "hidden", height: 280 }}>
              <img
                src={IMAGES.gallery1}
                alt="Grand banquet hall with chandeliers"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.82, display: "block" }}
              />
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr" }}>
              <div style={{ borderRight: "1px solid var(--border)", background: "#0E0620", overflow: "hidden", height: 580 }}>
                <img src={IMAGES.gallery1} alt="Grand banquet hall" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.82, display: "block" }} />
              </div>
              <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", height: 580 }}>
                <div style={{ background: "#0E0620", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
                  <img src={IMAGES.gallery2} alt="Luxury floral arrangement" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", opacity: 0.82, display: "block" }} />
                </div>
                <div style={{ background: "#0E0620", overflow: "hidden" }}>
                  <img src={IMAGES.gallery3} alt="Candlelit table" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.82, display: "block" }} />
                </div>
              </div>
            </div>
          )}

          <div style={{ borderTop: "1px solid var(--border)", padding: `24px ${px}` }}>
            <p style={{ ...bodyText, fontSize: "13px", fontStyle: "italic" }}>
              "Every event tells a story. Here's a glimpse of the experiences we create."
            </p>
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${px}` }}>
          <div style={{ padding: `${isMobile ? "40px" : "64px"} 0 ${isMobile ? "32px" : "48px"}`, borderBottom: "1px solid var(--border)" }}>
            <p style={eyebrow}>Industries We Serve</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)" }}>
            {INDUSTRIES.map((ind, i) => {
              const cols = isMobile ? 2 : 3;
              const isLastInRow = (i + 1) % cols === 0;
              const isInLastRow = i >= INDUSTRIES.length - cols;
              return (
                <div
                  key={ind.label}
                  style={{
                    padding: isMobile ? "24px 12px" : "36px 0",
                    borderRight: !isLastInRow ? "1px solid var(--border)" : "none",
                    borderBottom: !isInLastRow ? "1px solid var(--border)" : "none",
                    paddingRight: !isLastInRow ? (isMobile ? 12 : 40) : 0,
                    paddingLeft: i % cols !== 0 ? (isMobile ? 12 : 40) : 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: isMobile ? 18 : 20 }}>{ind.icon}</span>
                  <p style={{ ...bodyText, fontSize: isMobile ? "13px" : "14px", color: "var(--foreground)" }}>{ind.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client promise + CTA */}
      <section style={{ padding: isMobile ? "72px 24px" : "120px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 28, color: "var(--muted-foreground)" }}>Our Client Promise</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "36px" : "clamp(40px, 5vw, 72px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
              color: "var(--foreground)",
              marginBottom: 16,
            }}
          >
            You focus on your guests.
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "36px" : "clamp(40px, 5vw, 72px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
              color: "var(--accent)",
              marginBottom: 32,
            }}
          >
            We focus on the details.
          </h2>
          <p style={{ ...bodyText, maxWidth: 520, margin: "0 auto 48px" }}>
            From concept to completion, we are committed to delivering events that exceed expectations.
          </p>
          <div style={{ width: 1, height: 48, background: "var(--border)", margin: "0 auto 40px" }} />
          <div
            className="flex items-center justify-center"
            style={{ gap: 24, flexWrap: "wrap" }}
          >
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
              Request a Quote
            </Link>
            <Link
              to="/contact"
              style={navLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            >
              Contact Us <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
