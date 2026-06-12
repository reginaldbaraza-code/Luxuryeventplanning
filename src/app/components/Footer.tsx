import { Link } from "react-router";
import { useIsMobile } from "../hooks/useIsMobile";

const tiny: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "10px",
  fontWeight: 300,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "var(--muted-foreground)",
  textDecoration: "none",
};

export function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: isMobile ? "40px 24px" : "48px 64px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 28,
            paddingBottom: 28,
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div>
            <p style={{ ...tiny, color: "var(--foreground)", letterSpacing: "0.25em", marginBottom: 4, fontSize: "12px" }}>
              The Event Studio
            </p>
            <p style={{ ...tiny, letterSpacing: "0.2em" }}>Innovate • Execute • Elevate</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 24 : 40, flexWrap: "wrap" }}>
            {[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={tiny}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: isMobile ? 16 : 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <p style={tiny}>📍 Nairobi, Kenya</p>
            <p style={tiny}>📧 eventstudioke@gmail.com</p>
            <p style={tiny}>📞 +254 115 529 448 &nbsp;|&nbsp; +254 792 304 242</p>
            <p style={tiny}>📸 @theeventstudio.ke</p>
          </div>
          <p style={{ ...tiny, marginTop: isMobile ? 8 : 0 }}>&copy; {new Date().getFullYear()} The Event Studio</p>
        </div>
      </div>
    </footer>
  );
}
