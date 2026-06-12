import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, ArrowRight } from "lucide-react";

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

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--border)",
  padding: "14px 0",
  fontFamily: "var(--font-body)",
  fontSize: "15px",
  fontWeight: 300,
  color: "var(--foreground)",
  outline: "none",
  transition: "border-color 0.25s ease",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "10px",
  fontWeight: 300,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "var(--muted-foreground)",
  display: "block",
  marginBottom: 8,
};

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+254 115 529 448\n+254 792 304 242",
  },
  {
    icon: Mail,
    label: "Email",
    value: "eventstudioke@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@theeventstudio.ke",
  },
];

const EVENT_TYPES = [
  "Conference",
  "Corporate Event",
  "Training Workshop",
  "Networking Event",
  "Birthday Celebration",
  "Private Function",
  "Other",
];

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    organization: "",
    telephone: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* Page header */}
      <section
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "80px 64px 72px",
          borderBottom: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "end",
        }}
      >
        <div>
          <p style={{ ...eyebrow, marginBottom: 32 }}>Contact</p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 5.5vw, 80px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.08,
              color: "var(--foreground)",
            }}
          >
            Let's plan your next event.
          </h1>
        </div>

        <div>
          <p style={{ ...bodyText, maxWidth: 440 }}>
            We welcome enquiries from clients ready to create unforgettable experiences.
            Get in touch and a member of our team will respond within two business days
            to discuss your event and arrange an initial consultation.
          </p>
        </div>
      </section>

      {/* Main content: form + info */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
          }}
        >
          {/* Form */}
          <div style={{ padding: "72px 64px", borderRight: "1px solid var(--border)" }}>
            <p style={{ ...eyebrow, marginBottom: 48 }}>Submit Inquiry</p>

            {submitted ? (
              <div style={{ padding: "80px 0" }}>
                <div style={{ width: 32, height: 1, background: "var(--accent)", marginBottom: 40 }} />
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "40px",
                    fontWeight: 300,
                    fontStyle: "italic",
                    lineHeight: 1.15,
                    color: "var(--foreground)",
                    marginBottom: 24,
                  }}
                >
                  Thank you, {formState.name.split(" ")[0]}.
                </h2>
                <p style={{ ...bodyText, maxWidth: 400 }}>
                  Your inquiry has been received. A member of The Event Studio team will
                  be in touch within two business days to discuss your event.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                {/* Row 1: name + organization */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
                  <div>
                    <label style={labelStyle} htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle,
                        borderBottomColor: focused === "name" ? "rgba(212, 175, 55, 0.6)" : "rgba(212, 175, 55, 0.2)",
                      }}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="organization">Organization</label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formState.organization}
                      onChange={handleChange}
                      onFocus={() => setFocused("organization")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle,
                        borderBottomColor: focused === "organization" ? "rgba(212, 175, 55, 0.6)" : "rgba(212, 175, 55, 0.2)",
                      }}
                      placeholder="Company / Organization (optional)"
                    />
                  </div>
                </div>

                {/* Row 2: phone + email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
                  <div>
                    <label style={labelStyle} htmlFor="telephone">Phone Number</label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      required
                      value={formState.telephone}
                      onChange={handleChange}
                      onFocus={() => setFocused("telephone")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle,
                        borderBottomColor: focused === "telephone" ? "rgba(212, 175, 55, 0.6)" : "rgba(212, 175, 55, 0.2)",
                      }}
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle,
                        borderBottomColor: focused === "email" ? "rgba(212, 175, 55, 0.6)" : "rgba(212, 175, 55, 0.2)",
                      }}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Row 3: event type + date */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
                  <div>
                    <label style={labelStyle} htmlFor="eventType">Event Type</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formState.eventType}
                      onChange={handleChange}
                      onFocus={() => setFocused("eventType")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle,
                        borderBottomColor: focused === "eventType" ? "rgba(212, 175, 55, 0.6)" : "rgba(212, 175, 55, 0.2)",
                        cursor: "pointer",
                        appearance: "none" as const,
                        WebkitAppearance: "none" as const,
                      }}
                    >
                      <option value="" style={{ background: "#1A0A2E" }}>Select…</option>
                      {EVENT_TYPES.map((t) => (
                        <option key={t} value={t} style={{ background: "#1A0A2E" }}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="eventDate">Expected Event Date</label>
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="text"
                      value={formState.eventDate}
                      onChange={handleChange}
                      onFocus={() => setFocused("eventDate")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle,
                        borderBottomColor: focused === "eventDate" ? "rgba(212, 175, 55, 0.6)" : "rgba(212, 175, 55, 0.2)",
                      }}
                      placeholder="e.g. August 2025"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    rows={5}
                    style={{
                      ...inputStyle,
                      borderBottomColor: focused === "message" ? "rgba(212, 175, 55, 0.6)" : "rgba(212, 175, 55, 0.2)",
                      resize: "none",
                    }}
                    placeholder="Tell us about your event — vision, venue preferences, guest count, or anything else that matters to you…"
                  />
                </div>

                {/* Submit */}
                <div style={{ paddingTop: 8 }}>
                  <button
                    type="submit"
                    style={{
                      background: "transparent",
                      border: "1px solid var(--border)",
                      padding: "16px 40px",
                      fontFamily: "var(--font-body)",
                      fontSize: "10px",
                      fontWeight: 300,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--foreground)",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      transition: "border-color 0.25s ease, color 0.25s ease",
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
                    Submit Inquiry <ArrowRight size={13} strokeWidth={1.5} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div style={{ padding: "72px 64px" }}>
            <p style={{ ...eyebrow, marginBottom: 48 }}>Get In Touch</p>

            {CONTACT_DETAILS.map((detail) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.label}
                  style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid var(--border)" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <Icon size={13} strokeWidth={1.5} color="var(--accent)" />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "10px",
                        fontWeight: 300,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                      }}
                    >
                      {detail.label}
                    </span>
                  </div>
                  <p style={{ ...bodyText, fontSize: "14px", whiteSpace: "pre-line" }}>
                    {detail.value}
                  </p>
                </div>
              );
            })}

            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 300,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 16,
                }}
              >
                Studio Hours
              </p>
              {[
                { day: "Monday – Friday", hours: "9:00 – 18:00" },
                { day: "Saturday", hours: "10:00 – 14:00 (by appointment)" },
                { day: "Sunday", hours: "Closed" },
              ].map(({ day, hours }) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ ...bodyText, fontSize: "13px" }}>{day}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 300, color: "var(--muted-foreground)" }}>
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
