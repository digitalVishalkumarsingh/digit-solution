'use client';

import { motion } from "framer-motion";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  emoji: string;
}

interface Issue {
  icon: string;
  text: string;
}

const services: Service[] = [
  { title: "Washing Machine Repair", description: "We fix motor problems, drainage issues, faulty door seals, and more.", imageUrl: "/whashingmachine.jpg", emoji: "🔧" },
  { title: "Washing Machine Installation", description: "Professional installation to ensure proper setup and efficiency.", imageUrl: "/installationwashingmachine.jpg", emoji: "🛠️" },
  { title: "Washing Machine Maintenance", description: "Regular maintenance services for long-lasting performance.", imageUrl: "/whashingmaintaince.jpg", emoji: "🔍" },
  { title: "PCB Repair", description: "Expert PCB repair for electronic control issues.", imageUrl: "/pcb.jpg", emoji: "⚡" },
  { title: "Motor & Winding Repair", description: "We fix or replace motors and windings for optimal performance.", imageUrl: "/motorrepair.png", emoji: "⚙️" },
  { title: "Gearbox Replacement", description: "Replacement of malfunctioning gearboxes to restore efficiency.", imageUrl: "/gearboxrepair.jpg", emoji: "🔩" },
];

const issues: Issue[] = [
  { icon: "❌", text: "Machine doesn't start" },
  { icon: "💧", text: "Doesn't rinse properly" },
  { icon: "🔊", text: "Loud noises during cycle" },
  { icon: "📳", text: "Excessive vibrations" },
  { icon: "🚿", text: "Drain pump issues" },
  { icon: "🌀", text: "Motor not spinning" },
];

const stats = [
  { num: "5000+", label: "Repairs Done" },
  { num: "4.9★", label: "Avg Rating" },
  { num: "24/7", label: "Availability" },
  { num: "100%", label: "Guaranteed" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function WashingMachineRepair() {
  const handleBooking = (title: string) => {
    window.open(
      `https://wa.me/917324802379?text=${encodeURIComponent(`Book Service: ${title}`)}`,
      "_blank"
    );
  };

  return (
    <>
      <div style={{ fontFamily: "'Sora', 'Segoe UI', sans-serif" }}>

        {/* ── HERO ── */}
        <section
          style={{
            background: "linear-gradient(135deg, #0a1628 0%, #0f2044 60%, #1a3060 100%)",
            position: "relative",
            overflow: "hidden",
            minHeight: "92vh",
            display: "flex",
            alignItems: "stretch",
          }}
        >
          {/* Blurred circles */}
          <div style={{ position: "absolute", top: -80, right: -60, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 70%)", filter: "blur(48px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, left: -60, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

          <div style={{ display: "flex", flexWrap: "wrap", width: "100%", maxWidth: 1200, margin: "0 auto", padding: "80px 24px 60px", gap: 40, alignItems: "center" }}>

            {/* Left */}
            <motion.div {...fadeUp(0)} style={{ flex: "1 1 340px", zIndex: 1 }}>
              <span style={{ display: "inline-block", background: "rgba(251,146,60,0.15)", border: "1px solid rgba(251,146,60,0.35)", color: "#fb923c", borderRadius: 999, padding: "4px 18px", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>
                🫧 Washing Machine Services
              </span>
              <h1 style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
                Washing Machine{" "}
                <span style={{ background: "linear-gradient(90deg, #fb923c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Repair & Services
                </span>{" "}
                in Varanasi
              </h1>
              <p style={{ color: "#93b4d8", fontSize: 15, lineHeight: 1.8, marginBottom: 32, maxWidth: 480 }}>
                Expert washing machine services at your doorstep — competitive prices, certified technicians, and same-day availability. Repair, installation, and maintenance for all brands.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
                <a href="tel:7324802379" style={{ background: "linear-gradient(135deg, #fb923c, #ea580c)", color: "#fff", padding: "13px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(251,146,60,0.35)", transition: "transform 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
                  📞 Call Now
                </a>
                <a href="https://wa.me/917324802379" target="_blank" rel="noopener noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff", padding: "13px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", transition: "background 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.14)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}>
                  💬 WhatsApp
                </a>
              </div>

              {/* Stats row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
                {stats.map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fb923c", lineHeight: 1 }}>{s.num}</div>
                    <div style={{ color: "#93b4d8", fontSize: 12, marginTop: 3 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Hero image */}
            <motion.div {...fadeUp(0.15)} style={{ flex: "1 1 320px", position: "relative", minHeight: 360, borderRadius: 18, overflow: "hidden", boxShadow: "0 16px 64px rgba(0,0,0,0.5)" }}>
              <Image src="/washingpage.webp" alt="Washing Machine Repair Varanasi" fill style={{ objectFit: "cover" }} priority />
              {/* Orange overlay glow */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(251,146,60,0.12) 0%, transparent 60%)" }} />
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section style={{ background: "linear-gradient(180deg, #0f2044 0%, #0a1628 100%)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ display: "inline-block", background: "rgba(251,146,60,0.15)", border: "1px solid rgba(251,146,60,0.35)", color: "#fb923c", borderRadius: 999, padding: "4px 18px", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
                Our Services
              </span>
              <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>
                What We{" "}
                <span style={{ background: "linear-gradient(90deg, #fb923c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Fix & Install
                </span>
              </h2>
              <p style={{ color: "#93b4d8", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
                All brands, all models — front load and top load covered.
              </p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, overflow: "hidden", transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(251,146,60,0.45)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "relative", height: 200 }}>
                    <Image src={service.imageUrl} alt={service.title} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.8) 0%, transparent 60%)" }} />
                    <span style={{ position: "absolute", top: 14, left: 14, background: "rgba(251,146,60,0.2)", border: "1px solid rgba(251,146,60,0.4)", borderRadius: 999, padding: "4px 12px", fontSize: 18 }}>
                      {service.emoji}
                    </span>
                  </div>
                  <div style={{ padding: "20px 22px 22px" }}>
                    <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{service.title}</h3>
                    <p style={{ color: "#93b4d8", fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{service.description}</p>
                    <button
                      onClick={() => handleBooking(service.title)}
                      style={{ background: "linear-gradient(135deg, #fb923c, #ea580c)", color: "#fff", border: "none", padding: "10px 20px", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", width: "100%", fontFamily: "inherit", transition: "opacity 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    >
                      Book This Service →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMON ISSUES ── */}
        <section style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2044 100%)", padding: "72px 0", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", bottom: -40, left: -40, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: 44 }}>
              <span style={{ display: "inline-block", background: "rgba(251,146,60,0.15)", border: "1px solid rgba(251,146,60,0.35)", color: "#fb923c", borderRadius: 999, padding: "4px 18px", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
                Common Problems
              </span>
              <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#fff", margin: 0 }}>
                Common Washing Machine{" "}
                <span style={{ background: "linear-gradient(90deg, #fb923c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Issues We Solve
                </span>
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {issues.map((issue, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "18px 20px", display: "flex", alignItems: "center", gap: 12, transition: "border-color 0.2s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(251,146,60,0.4)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)")}
                >
                  <span style={{ fontSize: 24 }}>{issue.icon}</span>
                  <span style={{ color: "#e2eaf5", fontSize: 14, fontWeight: 500 }}>{issue.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA strip */}
            <motion.div {...fadeUp(0.3)} style={{ marginTop: 52, background: "rgba(251,146,60,0.1)", border: "1px solid rgba(251,146,60,0.25)", borderRadius: 16, padding: "32px 36px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
              <div>
                <div style={{ color: "#fb923c", fontWeight: 700, fontSize: "1.1rem", marginBottom: 6 }}>Ready to get it fixed?</div>
                <div style={{ color: "#93b4d8", fontSize: 14 }}>Our technicians are available 24/7 across Varanasi.</div>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:7324802379" style={{ background: "linear-gradient(135deg, #fb923c, #ea580c)", color: "#fff", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(251,146,60,0.35)" }}>
                  📞 Call Now
                </a>
                <a href="https://wa.me/917324802379" target="_blank" rel="noopener noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                  💬 WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
      `}</style>
    </>
  );
}