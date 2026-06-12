import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Instagram, ArrowRight, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

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

const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "10px",
  fontWeight: 300,
  letterSpacing: "0.1em",
  color: "#c0392b",
  marginTop: 6,
  display: "block",
};

const CONTACT_DETAILS = [
  { icon: MapPin,    label: "Location",  value: "Nairobi, Kenya" },
  { icon: Phone,     label: "Telephone", value: "+254 115 529 448\n+254 792 304 242" },
  { icon: Mail,      label: "Email",     value: "eventstudioke@gmail.com" },
  { icon: Instagram, label: "Instagram", value: "@theeventstudio.ke" },
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

type FormValues = {
  name: string;
  organization: string;
  telephone: string;
  email: string;
  eventType: string;
  eventDate: string;
  message: string;
};

function FieldInput({
  id,
  label,
  error,
  placeholder,
  type = "text",
  registration,
}: {
  id: string;
  label: string;
  error?: string;
  placeholder: string;
  type?: string;
  registration: ReturnType<ReturnType<typeof useForm<FormValues>>["register"]>;
}) {
  return (
    <div>
      <label style={labelStyle} htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...registration}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: error ? "1px solid #c0392b" : "1px solid rgba(212,175,55,0.2)",
          padding: "14px 0",
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          fontWeight: 300,
          color: "var(--foreground)",
          outline: "none",
          transition: "border-color 0.25s ease",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderBottomColor = error
            ? "#c0392b"
            : "rgba(212,175,55,0.6)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderBottomColor = error
            ? "#c0392b"
            : "rgba(212,175,55,0.2)";
        }}
      />
      {error && <span style={errorStyle}>{error}</span>}
    </div>
  );
}

export function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onBlur" });

  async function onSubmit(data: FormValues) {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          organization: data.organization || "N/A",
          telephone: data.telephone,
          reply_to: data.email,
          event_type: data.eventType || "Not specified",
          event_date: data.eventDate || "Not specified",
          message: data.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      toast.success("Inquiry sent — we'll be in touch within two business days.");
      reset();
    } catch {
      toast.error("Something went wrong. Please email us directly at eventstudioke@gmail.com");
    }
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

            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: "flex", flexDirection: "column", gap: 40 }}
              noValidate
            >
              {/* Row 1: name + organization */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
                <FieldInput
                  id="name"
                  label="Name *"
                  placeholder="Your full name"
                  error={errors.name?.message}
                  registration={register("name", { required: "Name is required" })}
                />
                <FieldInput
                  id="organization"
                  label="Organization"
                  placeholder="Company / Organization (optional)"
                  registration={register("organization")}
                />
              </div>

              {/* Row 2: phone + email */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
                <FieldInput
                  id="telephone"
                  label="Phone Number *"
                  placeholder="+254 700 000 000"
                  type="tel"
                  error={errors.telephone?.message}
                  registration={register("telephone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[+\d\s\-()]{7,20}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                />
                <FieldInput
                  id="email"
                  label="Email Address *"
                  placeholder="you@example.com"
                  type="email"
                  error={errors.email?.message}
                  registration={register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
              </div>

              {/* Row 3: event type + date */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
                {/* Event type select */}
                <div>
                  <label style={labelStyle} htmlFor="eventType">Event Type</label>
                  <select
                    id="eventType"
                    {...register("eventType")}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(212,175,55,0.2)",
                      padding: "14px 0",
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      fontWeight: 300,
                      color: "var(--foreground)",
                      outline: "none",
                      cursor: "pointer",
                      appearance: "none",
                      WebkitAppearance: "none",
                      transition: "border-color 0.25s ease",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(212,175,55,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(212,175,55,0.2)")}
                  >
                    <option value="" style={{ background: "#1A0A2E" }}>Select…</option>
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t} style={{ background: "#1A0A2E" }}>{t}</option>
                    ))}
                  </select>
                </div>

                <FieldInput
                  id="eventDate"
                  label="Expected Event Date"
                  placeholder="e.g. August 2025"
                  registration={register("eventDate")}
                />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle} htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your event — vision, venue preferences, guest count, or anything else that matters to you…"
                  {...register("message", { required: "Please tell us about your event" })}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: errors.message
                      ? "1px solid #c0392b"
                      : "1px solid rgba(212,175,55,0.2)",
                    padding: "14px 0",
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "var(--foreground)",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.25s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderBottomColor = errors.message
                      ? "#c0392b"
                      : "rgba(212,175,55,0.6)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderBottomColor = errors.message
                      ? "#c0392b"
                      : "rgba(212,175,55,0.2)";
                  }}
                />
                {errors.message && <span style={errorStyle}>{errors.message.message}</span>}
              </div>

              {/* Submit */}
              <div style={{ paddingTop: 8 }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: "transparent",
                    border: "1px solid var(--border)",
                    padding: "16px 40px",
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    fontWeight: 300,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: isSubmitting ? "var(--muted-foreground)" : "var(--foreground)",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    transition: "border-color 0.25s ease, color 0.25s ease",
                    opacity: isSubmitting ? 0.6 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "var(--accent)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = isSubmitting
                      ? "var(--muted-foreground)"
                      : "var(--foreground)";
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={13} strokeWidth={1.5} style={{ animation: "spin 1s linear infinite" }} />
                      Sending…
                    </>
                  ) : (
                    <>
                      Submit Inquiry <ArrowRight size={13} strokeWidth={1.5} />
                    </>
                  )}
                </button>
              </div>
            </form>
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

            {/* Studio hours */}
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

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </main>
  );
}
