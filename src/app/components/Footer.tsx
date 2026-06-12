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
        className="mx-auto flex flex-col md:flex-row items-start md:items-center justify-between"
        style={{ maxWidth: 1440, gap: 32 }}
      >
        <div>
          <p style={{ ...tiny, color: "var(--foreground)", letterSpacing: "0.25em", marginBottom: 8 }}>
            The Event Studio
          </p>
          <p style={tiny}>Nairobi, Kenya</p>
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

        <p style={tiny}>&copy; {new Date().getFullYear()} The Event Studio</p>
      </div>
    </footer>
  );
}
