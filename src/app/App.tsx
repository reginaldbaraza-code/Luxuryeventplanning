import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ServicesPage } from "./components/ServicesPage";
import { ContactPage } from "./components/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--background)" }}>
      <Navigation />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1A0A2E",
            border: "1px solid rgba(212,175,55,0.3)",
            color: "#F5F0E8",
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 300,
            letterSpacing: "0.05em",
          },
        }}
      />
    </BrowserRouter>
  );
}
