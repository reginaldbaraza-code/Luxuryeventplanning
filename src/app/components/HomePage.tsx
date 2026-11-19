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
  letterSpacing: "0.2em",
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
    name: "Backdrops & installs",
    desc: "Statement arches, balloon work, florals — built for photos and the room.",
  },
  {
    name: "Day-of coordination",
    desc: "Vendors, timeline, and calm on the floor so you stay with your guests.",
  },
  {
    name: "Full planning",
    desc: "From concept and budget through to the last clear-down.",
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
      {/* Full-bleed hero — brand + one line + CTA on the real first-gig set */}
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
          alt="Milestone backdrop with orange and white balloon garland and florals"
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
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? "42px" : "clamp(56px, 7vw, 96px)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 0.95,
                color: "#F3EEE6",
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              yessiir.event studio
            </p>
            <p
              style={{
                ...bodyText,
                color: "rgba(243,238,230,0.82)",
                maxWidth: 420,
                marginBottom: 32,
                fontSize: isMobile ? "15px" : "17px",
              }}
            >
              Spaces that mark the moment — Nairobi.
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
                Book a consult
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
                See the work <ArrowRight size={14} strokeWidth={1.75} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* One job: who we are */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <motion.div
          {...fade}
          style={{
            maxWidth: 820,
            margin: "0 auto",
            padding: isMobile ? "64px 24px" : "96px 64px",
          }}
        >
          <p style={{ ...eyebrow, marginBottom: 20 }}>The studio</p>
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
            Grateful for the past, excited for the next chapter.
          </h2>
          <p style={{ ...bodyText, marginBottom: 20 }}>
            The Event Studio designs and builds celebration installs — backdrops, balloons,
            florals — and runs the day so everything lands on time. Private milestones,
            corporate gatherings, and the in-between.
          </p>
          <p style={{ ...bodyText, marginBottom: 36 }}>
            Fresh off our first paid gig, and already obsessed with how a room feels when
            people walk in.
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

      {/* Featured work — first gig */}
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
              <p style={{ ...eyebrow, marginBottom: 12 }}>Featured work</p>
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
                First gig — milestone backdrop
              </h2>
            </div>
            <p style={{ ...bodyText, maxWidth: 360, fontSize: "14px", margin: 0 }}>
              Orange + white balloon garland, florals, and a custom quote board for a next-chapter
              celebration.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.35fr 1fr",
              gap: 0,
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
                alt="Styled milestone backdrop with florals and spotlight"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </motion.div>
            <motion.div
              {...fade}
              transition={{ ...(fade as { transition?: object }).transition, delay: 0.1 }}
              style={{ overflow: "hidden", minHeight: isMobile ? 480 : 640, background: "#1C1916" }}
            >
              <img
                src={WORK.full}
                alt="Full view of the arched quote board and balloon install"
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

      {/* Services — one purpose */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: isMobile ? "0 24px" : "0 64px" }}>
          <motion.div {...fade} style={{ padding: isMobile ? "48px 0 24px" : "72px 0 32px" }}>
            <p style={eyebrow}>What we do</p>
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
          <div style={{ padding: isMobile ? "28px 0 48px" : "36px 0 72px", borderTop: "1px solid var(--border)" }}>
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
              Full services <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? "72px 24px" : "112px 64px", textAlign: "center" }}>
        <motion.div {...fade} style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 20, color: "var(--muted-foreground)" }}>Next chapter</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "36px" : "56px",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--foreground)",
              marginBottom: 20,
            }}
          >
            Tell us the date. We&apos;ll shape the room.
          </h2>
          <p style={{ ...bodyText, marginBottom: 36 }}>
            Nairobi and nearby — private celebrations, brand moments, and everything that needs
            to look as good as it feels.
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
