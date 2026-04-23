'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  phone: string;
  service: string;
  description: string;
}

interface FormErrors {
  name: string;
  phone: string;
  service: string;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 8,
  color: "#e2eaf5",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};

const contactItems = [
  { icon: "📞", label: "Phone", value: "07324802379", href: "tel:07324802379" },
  { icon: "✉️", label: "Email", value: "dizitsolution@gmail.com", href: "mailto:dizitsolution@gmail.com" },
  { icon: "📍", label: "Address", value: "Near Sunbeam School, Lahartara, Varanasi – 221002", href: null },
  { icon: "🕐", label: "Availability", value: "24 / 7 — All Days", href: null },
];

const services = [
  { value: "", label: "— Select Service —" },
  { value: "ac", label: "AC Repair" },
  { value: "washing_machine", label: "Washing Machine Repair" },
  { value: "fridge", label: "Refrigerator Repair" },
  { value: "microwave", label: "Microwave Repair" },
  { value: "tv", label: "TV Repair" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({ name: "", phone: "", service: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: FormErrors = { name: "", phone: "", service: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
      valid = false;
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please select a service";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setIsLoading(false);

      if (response.ok && result.success) {
        Swal.fire({ title: "Success!", text: "Request sent successfully!", icon: "success", confirmButtonText: "Ok" });
        setFormData({ name: "", phone: "", service: "", description: "" });
      } else {
        Swal.fire({ title: "Error!", text: result.error || "Something went wrong. Try again.", icon: "error", confirmButtonText: "Retry" });
      }
    } catch {
      setIsLoading(false);
      Swal.fire({ title: "Error!", text: "Network error. Try again.", icon: "error", confirmButtonText: "Retry" });
    }
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #0f2044 60%, #1a3060 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "80px 0 72px",
        fontFamily: "'Sora', 'Segoe UI', sans-serif",
      }}
    >
      {/* Decorative blurred circles */}
      <div style={{ position: "absolute", top: "-80px", right: "-60px", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 70%)", filter: "blur(48px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ display: "inline-block", background: "rgba(251,146,60,0.15)", border: "1px solid rgba(251,146,60,0.35)", color: "#fb923c", borderRadius: 999, padding: "4px 18px", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
            📬 Get In Touch
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#ffffff", margin: "0 0 12px", lineHeight: 1.15 }}>
            Contact &{" "}
            <span style={{ background: "linear-gradient(90deg, #fb923c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Book a Technician
            </span>
          </h2>
          <p style={{ color: "#93b4d8", fontSize: 15, maxWidth: 500, margin: "0 auto" }}>
            Have a question or need a repair? Reach out — we're available 24/7 across Varanasi.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40, alignItems: "start" }}>

          {/* Left: Contact Info */}
          <motion.div {...fadeUp(0.1)}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: 24 }}>
              How to Find Us
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {contactItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 18px" }}>
                  <span style={{ fontSize: 22, lineHeight: 1 }}>{item.icon}</span>
                  <div>
                    <div style={{ color: "#93b4d8", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ color: "#fb923c", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>{item.value}</a>
                    ) : (
                      <div style={{ color: "#e2eaf5", fontSize: 14 }}>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917324802379"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "linear-gradient(135deg, #fb923c, #ea580c)", color: "#fff", padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(251,146,60,0.35)", transition: "transform 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              💬 Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right: Booking Form */}
          <motion.div {...fadeUp(0.18)}>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 18, padding: "36px 32px", backdropFilter: "blur(12px)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: 24 }}>
                Book a Technician
              </h3>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle, borderColor: focused === "name" ? "#fb923c" : errors.name ? "#f87171" : "rgba(255,255,255,0.15)" }}
                  />
                  {errors.name && <p style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="10-digit Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle, borderColor: focused === "phone" ? "#fb923c" : errors.phone ? "#f87171" : "rgba(255,255,255,0.15)" }}
                  />
                  {errors.phone && <p style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.phone}</p>}
                </div>

                {/* Service */}
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocused("service")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle, borderColor: focused === "service" ? "#fb923c" : errors.service ? "#f87171" : "rgba(255,255,255,0.15)", appearance: "none", cursor: "pointer" }}
                  >
                    {services.map((s) => (
                      <option key={s.value} value={s.value} style={{ background: "#0f2044", color: "#e2eaf5" }}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.service}</p>}
                </div>

                {/* Description */}
                <div>
                  <textarea
                    name="description"
                    placeholder="Describe your problem (optional)"
                    value={formData.description}
                    onChange={handleChange}
                    onFocus={() => setFocused("description")}
                    onBlur={() => setFocused(null)}
                    rows={3}
                    style={{ ...inputStyle, borderColor: focused === "description" ? "#fb923c" : "rgba(255,255,255,0.15)", resize: "vertical" }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.03 }}
                  style={{
                    background: isLoading ? "rgba(251,146,60,0.5)" : "linear-gradient(135deg, #fb923c, #ea580c)",
                    color: "#fff",
                    padding: "14px",
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 15,
                    border: "none",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    boxShadow: "0 4px 20px rgba(251,146,60,0.3)",
                    fontFamily: "inherit",
                    transition: "background 0.2s",
                  }}
                >
                  {isLoading ? "Submitting…" : "🔧 Book Technician"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
        input::placeholder, textarea::placeholder { color: #5a7fa8; }
        select option { background: #0f2044; color: #e2eaf5; }
      `}</style>
    </section>
  );
}