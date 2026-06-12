import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const label: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "10px",
  fontWeight: 300,
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
};

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <nav
        style={{ borderBottom: "1px solid var(--border)" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background"
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: 1440, padding: "0 64px", height: 72 }}
        >
          <Link to="/" style={{ ...label, letterSpacing: "0.28em", fontSize: "11px", color: "var(--foreground)" }}>
            The Event Studio
          </Link>

          <div className="hidden md:flex items-center" style={{ gap: 48 }}>
            {LINKS.map(({ to, label: text }) => (
              <Link
                key={to}
                to={to}
                style={{
                  ...label,
                  color: pathname === to ? "var(--accent)" : "var(--foreground)",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== to) e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  if (pathname !== to) e.currentTarget.style.color = "var(--foreground)";
                }}
              >
                {text}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: "var(--foreground)" }}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>

        {open && (
          <div
            style={{ borderTop: "1px solid var(--border)", padding: "32px 64px 40px" }}
            className="md:hidden bg-background"
          >
            {LINKS.map(({ to, label: text }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                style={{
                  ...label,
                  display: "block",
                  marginBottom: 28,
                  color: pathname === to ? "var(--accent)" : "var(--foreground)",
                }}
              >
                {text}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <div style={{ height: 72 }} />
    </>
  );
}
