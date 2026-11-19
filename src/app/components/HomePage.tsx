import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useIsMobile } from "../hooks/useIsMobile";

const WORK = {
  hero: "/work/first-gig-hero.jpg",
  full: "/work/first-gig-full.jpg",
};

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--accent)",
};

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1.7,
  color: "var(--muted-foreground)",
};

const SERVICES = [
  {
    name: "Styling & installs",
    desc: "Backdrops, balloon work, and florals designed for photos, guests, and the room.",
  },
  {
    name: "Day-of coordination",
    desc: "Vendor management, timelines, and floor presence so the host can stay with guests.",
  },
  {
    name: "Full event planning",
    desc: "Concept, budget, venue, and execution — end to end for private and corporate briefs.",
  },
];

export function HomePage() {
  const isMobile = useIsMobile();
  const reduce = useReducedMotion();
  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10%" },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <main>
      <section
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <motion.img
          src={WORK.hero}
          alt="Professional milestone backdrop with balloon garland and florals in Nairobi"
          initial={reduce ? false : { scale: 1.06 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--hero-scrim)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 1440,
            margin: "0 auto",
            padding: isMobile ? "0 24px 48px" : "0 64px 72px",
          }}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ ...eyebrow, color: "rgba(243,238,230,0.9)", marginBottom: 14 }}>
              Nairobi, Kenya
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? "44px" : "clamp(56px, 7vw, 92px)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 0.95,
                color: "#F3EEE6",
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              The Event Studio
            </h1>
            <p
              style={{
                ...bodyText,
                color: "rgba(243,238,230,0.85)",
                maxWidth: 460,
                marginBottom: 32,
                fontSize: isMobile ? "15px" : "17px",
              }}
            >
              Planning, styling, and day-of execution for private celebrations and corporate
              gatherings across Nairobi.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              <Link
                to="/contact"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "var(--accent-foreground)",
                  background: "var(--accent)",
                  padding: "14px 22px",
                }}
              >
                Book a consultation
              </Link>
              <a
                href="#work"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "#F3EEE6",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                View recent work <ArrowRight size={14} strokeWidth={1.75} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <motion.div
          {...fade}
          style={{
            maxWidth: 820,
            margin: "0 auto",
            padding: isMobile ? "64px 24px" : "96px 64px",
          }}
        >
          <p style={{ ...eyebrow, marginBottom: 20 }}>About</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "32px" : "clamp(36px, 4vw, 52px)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.15,
              color: "var(--foreground)",
              marginBottom: 24,
            }}
          >
            Events that feel considered — and run on time.
          </h2>
          <p style={{ ...bodyText, marginBottom: 20 }}>
            The Event Studio supports clients in Nairobi with event planning, styling, and
            coordination. Whether it is a milestone celebration, brand activation, or corporate
            programme, we focus on clear planning and a polished finish.
          </p>
          <p style={{ ...bodyText, marginBottom: 36 }}>
            From concept through execution, our job is to protect your time, your budget, and
            the experience your guests walk into.
          </p>
          <Link
            to="/about"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--accent)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            About the studio <ArrowRight size={14} strokeWidth={1.75} />
          </Link>
        </motion.div>
      </section>

      <section id="work" style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <motion.div
            {...fade}
            style={{
              padding: isMobile ? "48px 24px 28px" : "72px 64px 36px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              gap: 16,
              alignItems: isMobile ? "flex-start" : "end",
            }}
          >
            <div>
              <p style={{ ...eyebrow, marginBottom: 12 }}>Recent work</p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: isMobile ? "28px" : "40px",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--foreground)",
                  margin: 0,
                }}
              >
                Milestone backdrop install
              </h2>
            </div>
            <p style={{ ...bodyText, maxWidth: 380, fontSize: "14px", margin: 0 }}>
              Custom quote board, balloon garland, and florals for a next-chapter celebration —
              styled for guest flow and photography.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.35fr 1fr",
              borderTop: "1px solid var(--border)",
            }}
          >
            <motion.div
              {...fade}
              style={{
                borderRight: isMobile ? "none" : "1px solid var(--border)",
                borderBottom: isMobile ? "1px solid var(--border)" : "none",
                overflow: "hidden",
                minHeight: isMobile ? 420 : 640,
                background: "#1C1916",
              }}
            >
              <img
                src={WORK.hero}
                alt="Styled milestone backdrop with florals and lighting"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </motion.div>
            <motion.div
              {...fade}
              style={{ overflow: "hidden", minHeight: isMobile ? 480 : 640, background: "#1C1916" }}
            >
              <img
                src={WORK.full}
                alt="Full view of arched backdrop and balloon install"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: isMobile ? "0 24px" : "0 64px" }}>
          <motion.div {...fade} style={{ padding: isMobile ? "48px 0 24px" : "72px 0 32px" }}>
            <p style={eyebrow}>Services</p>
          </motion.div>
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.name}
              {...fade}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
                gap: isMobile ? 8 : 48,
                padding: isMobile ? "28px 0" : "36px 0",
                borderTop: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: isMobile ? "24px" : "28px",
                  fontStyle: "italic",
                  margin: 0,
                  color: "var(--foreground)",
                }}
              >
                {svc.name}
              </p>
              <p style={{ ...bodyText, margin: 0 }}>{svc.desc}</p>
            </motion.div>
          ))}
          <div
            style={{
              padding: isMobile ? "28px 0 48px" : "36px 0 72px",
              borderTop: "1px solid var(--border)",
            }}
          >
            <Link
              to="/services"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--accent)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              View all services <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? "72px 24px" : "112px 64px", textAlign: "center" }}>
        <motion.div {...fade} style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 20, color: "var(--muted-foreground)" }}>
            Start a project
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "36px" : "52px",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.12,
              color: "var(--foreground)",
              marginBottom: 20,
            }}
          >
            Share the date. We&apos;ll shape the plan.
          </h2>
          <p style={{ ...bodyText, marginBottom: 36 }}>
            Serving clients across Nairobi and surrounding areas — private events, corporate
            programmes, and everything in between.
          </p>
          <Link
            to="/contact"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--accent-foreground)",
              background: "var(--accent)",
              padding: "14px 28px",
              display: "inline-block",
            }}
          >
            Request a quote
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
