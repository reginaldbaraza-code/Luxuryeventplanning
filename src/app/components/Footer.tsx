import { Link } from "react-router";

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
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "48px 64px" }}>
      <div
        className="mx-auto"
        style={{ maxWidth: 1440 }}
      >
        {/* Top row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between"
          style={{ gap: 32, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid var(--border)" }}
        >
          <div>
            <p style={{ ...tiny, color: "var(--foreground)", letterSpacing: "0.25em", marginBottom: 4, fontSize: "12px" }}>
              The Event Studio
            </p>
            <p style={{ ...tiny, letterSpacing: "0.2em" }}>Innovate • Execute • Elevate</p>
          </div>

          <div className="flex items-center" style={{ gap: 40 }}>
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
          className="flex flex-col md:flex-row items-start md:items-center justify-between"
          style={{ gap: 16 }}
        >
          <div className="flex flex-col" style={{ gap: 6 }}>
            <p style={tiny}>📍 Nairobi, Kenya</p>
            <p style={tiny}>📧 eventstudioke@gmail.com</p>
            <p style={tiny}>📞 +254 115 529 448 &nbsp;|&nbsp; +254 792 304 242</p>
            <p style={tiny}>📸 @theeventstudio.ke</p>
          </div>
          <p style={tiny}>&copy; {new Date().getFullYear()} The Event Studio</p>
        </div>
      </div>
    </footer>
  );
}
