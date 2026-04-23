
'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';

/* ─── Data ─────────────────────────────────────────── */
const services = [
  { title: "AC Services", img: "/repairman-doing-air-conditioner-service_1303-26541.avif", desc: "Expert AC repair & maintenance for all types.", icon: "" },
  { title: "Washing Machine", img: "/whashingmachine.jpg", desc: "Front load & top load repair specialists.", icon: "" },
  { title: "Refrigerator Repair", img: "/fridge-repair1.jpg", desc: "All brands, all models — same day service.", icon: "" },
  { title: "Geyser Repair", img: "/geyser-repair.jpg", desc: "Safe and efficient heating restoration.", icon: "" },
  { title: "Microwave Repair", img: "/microvwave-repair.avif", desc: "Quick turnaround on all microwave issues.", icon: "" },
  { title: "RO Purifier", img: "/ro-water.webp", desc: "Clean, safe drinking water guaranteed.", icon: "" },
  { title: "Deep Freezer", img: "/deepfridge.webp", desc: "Optimal freezing performance restored.", icon: "" },
  { title: "Chimney Repair", img: "/chimney.webp", desc: "Safe & functional chimney servicing.", icon: "" },
];

const trustPoints = [
  { icon: "⏱", title: "On-Time Guarantee", desc: "We show up exactly when we say — no waiting." },
  { icon: "🛡", title: "Certified Technicians", desc: "All techs are trained, background-checked & verified." },
  { icon: "✅", title: "Genuine Parts Only", desc: "We use only OEM/certified parts for every repair." },
  { icon: "💰", title: "Transparent Pricing", desc: "Fixed quotes upfront. Zero hidden charges. Ever." },
];

const brands = [
  { name: "LG", src: "/lg-logo.webp" },
  { name: "Samsung", src: "/samsung-logo.webp" },
  { name: "Whirlpool", src: "/whirlpool.webp" },
  { name: "Daikin", src: "/dekin-logo.webp" },
  { name: "Bosch", src: "/bosch-logo.webp" },
  { name: "Haier", src: "/haire-logo.webp" },
  { name: "Panasonic", src: "/Panasonic_Group_logo.svg.webp" },
  { name: "Blue Star", src: "/blustar_logo.webp" },
  { name: "Sony", src: "/sony.webp" },
  { name: "Mitsubishi", src: "/Mitsubishi_Electric_logo.svg.webp" },
  { name: "Electrolux", src: "/Electrolux-.webp" },
  { name: "Sharp", src: "/sharp-logo.webp" },
];

const whyPoints = [
  { num: "01", title: "Skilled & Experienced", body: "Highly trained techs with deep knowledge of all major brands and models — diagnosing fast, fixing right." },
  { num: "02", title: "Same-Day Service", body: "Book before noon and we'll be at your door the same day. We know downtime is costly." },
  { num: "03", title: "100% Satisfaction", body: "Not happy? We come back and fix it — no questions asked, no extra charge." },
  { num: "04", title: "Serving Varanasi Since Day 1", body: "Deep roots in the community. Thousands of happy households across Varanasi trust us." },
];

type FormData = { name: string; phone: string; service: string; problem?: string };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

/* ─── Component ─────────────────────────────────────── */
export default function Home() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    const msg = `*Booking Request*%0A%0AName: ${data.name}%0APhone: ${data.phone}%0AService: ${data.service}%0AProblem: ${data.problem || 'No description'}%0A%0APlease confirm the booking.`;
    window.open(`https://wa.me/+919112564731?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');
        .dz-root { font-family: 'DM Sans', sans-serif; color: #0f172a; }
        .dz-root h1, .dz-root h2, .dz-root h3, .dz-root h4 { font-family: 'Sora', sans-serif; }

        /* form elements */
        .dz-input {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          color: #0f172a;
          background: #f8fafc;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .dz-input:focus { border-color: #f97316; box-shadow: 0 0 0 3px rgba(249,115,22,0.12); background: white; }
        .dz-input::placeholder { color: #94a3b8; }

        .dz-btn-primary {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          font-family: 'Sora', sans-serif;
          font-weight: 600;
          font-size: 14px;
          padding: 12px 28px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(249,115,22,0.35);
          transition: transform 0.15s, box-shadow 0.15s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .dz-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(249,115,22,0.40); }

        .dz-btn-ghost {
          background: rgba(255,255,255,0.15);
          color: white;
          font-family: 'Sora', sans-serif;
          font-weight: 600;
          font-size: 14px;
          padding: 12px 28px;
          border-radius: 12px;
          border: 1.5px solid rgba(255,255,255,0.4);
          cursor: pointer;
          transition: background 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .dz-btn-ghost:hover { background: rgba(255,255,255,0.22); }

        .service-card {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #f1f5f9;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .service-card:hover { transform: translateY(-5px); box-shadow: 0 12px 36px rgba(0,0,0,0.11); }

        .brand-card {
          background: white;
          border-radius: 14px;
          border: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px 14px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .brand-card:hover { transform: scale(1.05); box-shadow: 0 4px 20px rgba(0,0,0,0.09); }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 20s linear infinite; display: flex; gap: 24px; width: max-content; }
        .marquee-track:hover { animation-play-state: paused; }

        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(249,115,22,0.4); }
          70% { box-shadow: 0 0 0 14px rgba(249,115,22,0); }
          100% { box-shadow: 0 0 0 0 rgba(249,115,22,0); }
        }
        .pulse-btn { animation: pulse-ring 2s infinite; }

        .stat-card {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 14px;
          padding: 18px 24px;
          text-align: center;
          backdrop-filter: blur(8px);
        }
      `}</style>

      <div className="dz-root">

        {/* ═══ HERO SECTION ═══ */}
        <section style={{
          background: "linear-gradient(140deg, #0c1a3a 0%, #1e3a6e 50%, #0f2447 100%)",
          padding: "72px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* decorative circles */}
          <div style={{ position: "absolute", top: -80, right: -80, width: 360, height: 360, borderRadius: "50%", background: "rgba(249,115,22,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, left: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(59,130,246,0.08)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center", justifyContent: "space-between" }}>

            {/* Left */}
            <motion.div
              style={{ flex: "1 1 400px", color: "white" }}
              initial="hidden"
              animate="visible"
              variants={fadeUp(0)}
            >
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(249,115,22,0.18)", border: "1px solid rgba(249,115,22,0.35)",
                borderRadius: 999, padding: "5px 14px", marginBottom: 20,
                fontSize: 12, fontWeight: 600, color: "#fbbf24", letterSpacing: "0.06em", textTransform: "uppercase",
                fontFamily: "'Sora', sans-serif",
              }}>
                ⚡ Same-Day Service Available
              </div>

              <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 18, color: "white" }}>
                Home Appliance<br />
                <span style={{ color: "#f97316" }}>Repair & Services</span><br />
                in Varanasi
              </h1>

              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 28, maxWidth: 440 }}>
                Dizit Solution brings certified technicians to your door for AC, refrigerator, washing machine, RO, and more — fast, reliable, guaranteed.
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
                <a href="tel:07324802379" style={{ textDecoration: "none" }}>
                  <button className="dz-btn-primary pulse-btn">
                    📞 Call: 07324802379
                  </button>
                </a>
                <a href="https://wa.me/+919112564731" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                  <button className="dz-btn-ghost">
                    💬 WhatsApp Us
                  </button>
                </a>
              </div>

              <motion.p style={{ color: "#fbbf24", fontWeight: 600, fontSize: 14, fontFamily: "'Sora', sans-serif" }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                ✓ 100% Satisfaction Guarantee &nbsp;·&nbsp; ✓ No Hidden Charges
              </motion.p>

              {/* Stats row */}
              <motion.div
                style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}
                initial="hidden" animate="visible" variants={fadeUp(0.5)}
              >
                {[["5000+", "Repairs Done"], ["4.9★", "Google Rating"], ["8+", "Appliances"], ["2hr", "Avg. Response"]].map(([val, lbl]) => (
                  <div className="stat-card" key={lbl}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "white", fontFamily: "'Sora', sans-serif" }}>{val}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 3 }}>{lbl}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              style={{
                flex: "1 1 340px",
                background: "white",
                borderRadius: 24,
                padding: "36px 32px",
                boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
                maxWidth: 420,
              }}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{ width: 40, height: 40, background: "linear-gradient(135deg,#f97316,#ea580c)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", margin: 0 }}>Book a Technician</h3>
                  <p style={{ fontSize: 12, color: "#94a3b8", margin: 0 }}>Response within 30 minutes</p>
                </div>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "10px 14px", marginBottom: 16, fontSize: 13, color: "#15803d", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}
                >
                  ✅ Request sent! We&apos;ll call you shortly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <input
                    {...register('name', { required: "Name is required" })}
                    className="dz-input"
                    placeholder="Your Full Name"
                  />
                  {errors.name && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.name.message}</p>}
                </div>

                <div>
                  <input
                    {...register('phone', { required: "Phone number is required", pattern: { value: /^[0-9]{10}$/, message: "Enter valid 10-digit number" } })}
                    className="dz-input"
                    placeholder="Mobile Number"
                    type="tel"
                  />
                  {errors.phone && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.phone.message}</p>}
                </div>

                <div>
                  <select {...register('service', { required: "Please select a service" })} className="dz-input">
                    <option value="">— Select Service —</option>
                    <option value="AC Repair">❄️ AC Repair & Service</option>
                    <option value="Washing Machine Repair">🫧 Washing Machine Repair</option>
                    <option value="Refrigerator Repair">🧊 Refrigerator Repair</option>
                    <option value="RO Purifier Service">💧 RO Purifier Service</option>
                    <option value="Geyser Repair">🔥 Geyser Repair</option>
                    <option value="Microwave Repair">📡 Microwave Repair</option>
                    <option value="Deep Freezer Repair">🫙 Deep Freezer Repair</option>
                    <option value="Chimney Repair">🏠 Chimney Repair</option>
                  </select>
                  {errors.service && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.service.message}</p>}
                </div>

                <textarea
                  {...register('problem')}
                  className="dz-input"
                  placeholder="Describe the problem (optional)"
                  rows={3}
                  style={{ resize: "none" }}
                />

                <motion.button
                  type="submit"
                  className="dz-btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "14px 28px", fontSize: 15 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Technician via WhatsApp
                </motion.button>

                <p style={{ fontSize: 11, color: "#94a3b8", textAlign: "center" }}>
                  🔒 Your details are safe. We never share your info.
                </p>
              </form>
            </motion.div>
          </div>
        </section>

        {/* ═══ TRUST BAR ═══ */}
        <section style={{ background: "#fff7ed", borderBottom: "1px solid #fed7aa", borderTop: "1px solid #fed7aa", padding: "14px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
            {["✅ Certified Technicians", "⚡ Same-Day Service", "🔧 Genuine Parts Only", "💰 No Hidden Charges", "⭐ 4.9 Google Rating"].map((item) => (
              <span key={item} style={{ fontSize: 13, fontWeight: 600, color: "#92400e", display: "flex", alignItems: "center", gap: 4 }}>{item}</span>
            ))}
          </div>
        </section>

        {/* ═══ SERVICES SECTION ═══ */}
        <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div
              style={{ textAlign: "center", marginBottom: 52 }}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp()}
            >
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 999, padding: "4px 14px", fontSize: 12, fontWeight: 600, color: "#1d4ed8", marginBottom: 14, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "'Sora', sans-serif" }}>
                What We Fix
              </div>
              <h2 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, color: "#0f172a", marginBottom: 12 }}>
                Home Appliance Services in Varanasi
              </h2>
              <p style={{ fontSize: 16, color: "#64748b", maxWidth: 520, margin: "0 auto" }}>
                From AC to geysers — all in one place. Same-day response, certified techs, guaranteed results.
              </p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  className="service-card"
                  initial="hidden" whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp(i * 0.06)}
                >
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img src={s.img} alt={s.title} style={{ width: "100%", height: 180, objectFit: "cover", display: "block", transition: "transform 0.4s" }} />
                    <div style={{ position: "absolute", top: 12, left: 12, background: "white", borderRadius: 10, padding: "4px 10px", fontSize: 13, fontWeight: 600, color: "#0f172a", display: "flex", alignItems: "center", gap: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}>
                      <span style={{ fontSize: 16 }}>{s.icon}</span>
                    </div>
                  </div>
                  <div style={{ padding: "18px 20px 22px" }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.6, marginBottom: 14 }}>{s.desc}</p>
                    <a href="tel:07324802379" style={{ textDecoration: "none" }}>
                      <button style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: 9, padding: "8px 16px", fontSize: 13, fontWeight: 600, color: "#f97316", cursor: "pointer", transition: "all 0.2s", fontFamily: "'Sora', sans-serif", width: "100%" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#fff7ed"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#f97316"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f8fafc"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#e2e8f0"; }}
                      >
                        Book This Service →
                      </button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TRUST PILLARS ═══ */}
        <section style={{ background: "white", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div
              style={{ textAlign: "center", marginBottom: 52 }}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp()}
            >
              <h2 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, color: "#0f172a", marginBottom: 12 }}>
                About Dizit Solution
              </h2>
              <p style={{ fontSize: 16, color: "#64748b", maxWidth: 560, margin: "0 auto" }}>
                Varanasi&apos;s most trusted home appliance repair platform — serving LG, Samsung, Daikin, Whirlpool, Haier, and 20+ other brands.
              </p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, marginBottom: 56 }}>
              {trustPoints.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial="hidden" whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp(i * 0.1)}
                  style={{
                    background: "#f8fafc",
                    borderRadius: 18,
                    padding: "28px 24px",
                    border: "1px solid #f1f5f9",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,0.09)" }}
                >
                  <div style={{ width: 48, height: 48, background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>
                    {t.icon}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{t.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65 }}>{t.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Why Choose section inline */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "flex-start" }}>
              <motion.div
                style={{ flex: "1 1 400px" }}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp()}
              >
                <h2 style={{ fontSize: "clamp(20px,3vw,32px)", fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>
                  Why Thousands Choose Dizit Solution
                </h2>
                <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.7, marginBottom: 32 }}>
                  We pride ourselves on being the most reliable home appliance service in Varanasi — covering <strong style={{ color: "#f97316" }}>AC repair</strong>, <strong style={{ color: "#f97316" }}>refrigerator repair</strong>, washing machines, geysers, RO purifiers, and more.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {whyPoints.map((p, i) => (
                    <motion.div
                      key={p.num}
                      initial="hidden" whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp(i * 0.1)}
                      style={{ display: "flex", gap: 16 }}
                    >
                      <div style={{ flexShrink: 0, width: 40, height: 40, background: "linear-gradient(135deg,#f97316,#ea580c)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, fontWeight: 700, fontFamily: "'Sora', sans-serif" }}>
                        {p.num}
                      </div>
                      <div>
                        <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>{p.title}</h4>
                        <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{p.body}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="tel:9112564731" style={{ textDecoration: "none" }}>
                    <button className="dz-btn-primary">📞 Call Now</button>
                  </a>
                  <a href="https://wa.me/+919112564731" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                    <button style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", color: "#15803d", fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 14, padding: "12px 24px", borderRadius: 12, cursor: "pointer" }}>
                      💬 WhatsApp
                    </button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                style={{ flex: "1 1 360px" }}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="/technician-repairing-home-appliance.webp"
                  alt="Dizit Solution Technician"
                  style={{ width: "100%", borderRadius: 20, boxShadow: "0 20px 60px rgba(0,0,0,0.14)", display: "block" }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ CTA STRIP ═══ */}
        <section style={{ background: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)", padding: "52px 24px" }}>
          <motion.div
            style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp()}
          >
            <h2 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, color: "white", marginBottom: 12 }}>
              Appliance Not Working? We&apos;ll Fix It Today.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 28 }}>
              Available 24/7 · Same-day booking · Varanasi & nearby areas
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:07324802379" style={{ textDecoration: "none" }}>
                <motion.button
                  style={{ background: "white", color: "#c2410c", fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: 8 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  📞 Call: 9112564731
                </motion.button>
              </a>
              <a href="https://wa.me/+919112564731" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <motion.button
                  className="dz-btn-ghost"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  💬 Book via WhatsApp
                </motion.button>
              </a>
            </div>
          </motion.div>
        </section>

        {/* ═══ BRANDS SECTION ═══ */}
        <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div
              style={{ textAlign: "center", marginBottom: 44 }}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp()}
            >
              <h2 style={{ fontSize: "clamp(20px,3.5vw,32px)", fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>Brands We Repair</h2>
              <p style={{ fontSize: 15, color: "#64748b" }}>
                We service all major brands — regardless of where purchased.
              </p>
            </motion.div>

            {/* Scrolling marquee */}
            <div style={{ overflow: "hidden", padding: "4px 0" }}>
              <div className="marquee-track">
                {[...brands, ...brands].map((brand, i) => (
                  <div key={i} className="brand-card" style={{ minWidth: 120, height: 72 }}>
                    <img src={brand.src} alt={brand.name} style={{ height: 40, objectFit: "contain", maxWidth: 90, filter: "grayscale(30%)", transition: "filter 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                      onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(30%)")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ DESCRIPTION / SEO SECTION ═══ */}
        <section style={{ background: "white", padding: "72px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <motion.h2
              style={{ fontSize: "clamp(20px,3.5vw,32px)", fontWeight: 800, color: "#0f172a", marginBottom: 24, textAlign: "center" }}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp()}
            >
              Home Appliances Repair & Services in Varanasi
            </motion.h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                "Welcome to Dizit Solution — Varanasi's one-stop destination for all home appliance repair needs. We understand that a broken appliance disrupts your day. That's why we deliver fast, affordable, and reliable repair services that get your home back on track.",
                "We specialize in AC repair in Varanasi and handle all types — window, split, and central air systems. From refrigerant leaks to compressor failures, our technicians diagnose and fix any issue the same day.",
                "We also offer comprehensive refrigerator repair services to keep your food fresh and safe. Our experts handle everything from faulty compressors to broken seals, across all major brands.",
                "Beyond AC and refrigerators, our team repairs washing machines, microwaves, RO purifiers, geysers, chimneys, and deep freezers. One call, all problems solved.",
                "All our technicians are certified and experienced. We use only genuine parts. Competitive pricing. 100% satisfaction guarantee — always.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  style={{ fontSize: 15, color: "#475569", lineHeight: 1.8 }}
                  initial="hidden" whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp(i * 0.08)}
                >
                  {text.split(/(AC repair|refrigerator repair|repair services|home appliance repair)/gi).map((part, idx) =>
                    ["ac repair", "refrigerator repair", "repair services", "home appliance repair"].includes(part.toLowerCase())
                      ? <strong key={idx} style={{ color: "#f97316", fontWeight: 600 }}>{part}</strong>
                      : part
                  )}
                </motion.p>
              ))}
            </div>

            <motion.div
              style={{ marginTop: 40, background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 16, padding: "24px 28px", textAlign: "center" }}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp(0.3)}
            >
              <p style={{ fontSize: 16, fontWeight: 600, color: "#92400e", marginBottom: 16, fontFamily: "'Sora', sans-serif" }}>
                Contact us today to schedule your <span style={{ color: "#c2410c" }}>AC Repair</span>, <span style={{ color: "#c2410c" }}>Refrigerator Repair</span>, or any home appliance service. Available 24/7.
              </p>
              <a href="tel:07324802379" style={{ textDecoration: "none" }}>
                <button className="dz-btn-primary" style={{ fontSize: 15 }}>
                  📞 Book Now @ 07324802379
                </button>
              </a>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}