"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

interface Service {
  emoji: string;
  title: string;
  desc: string;
}

interface Pillar {
  icon: string;
  label: string;
}

interface Stat {
  num: string;
  label: string;
}

const services: Service[] = [
  {
    emoji: "❄️",
    title: "AC Repair",
    desc: "Expert repair for all types of air conditioners — split, window, and inverter.",
  },
  {
    emoji: "🧊",
    title: "Refrigerator Repair",
    desc: "Efficient fridge repair solutions to keep your food fresh and safe.",
  },
  {
    emoji: "🫧",
    title: "Washing Machine Repair",
    desc: "Prompt, reliable repair for all brands — front load and top load.",
  },
];

const pillars: Pillar[] = [
  { icon: "🏅", label: "Certified Technicians" },
  { icon: "🔧", label: "Genuine Parts" },
  { icon: "💰", label: "Transparent Pricing" },
  { icon: "⚡", label: "Same-Day Service" },
];

const stats: Stat[] = [
  { num: "5000+", label: "Repairs Done" },
  { num: "4.9★", label: "Average Rating" },
  { num: "24/7", label: "Availability" },
  { num: "100%", label: "Satisfaction" },
];

export default function About() {
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
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 70%)",
          filter: "blur(48px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(251,146,60,0.15)",
              border: "1px solid rgba(251,146,60,0.35)",
              color: "#fb923c",
              borderRadius: 999,
              padding: "4px 18px",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Who We Are
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#ffffff",
              margin: "0 0 12px",
              lineHeight: 1.15,
            }}
          >
            About{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #fb923c, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dizit Solution
            </span>
          </h2>
          <p style={{ color: "#93b4d8", fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Varanasi&apos;s most trusted home appliance repair service — certified, fast, and guaranteed.
          </p>
        </motion.div>

        {/* Trust Pillars Bar */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            display: "flex",
            flexWrap: "wrap" as const,
            gap: 12,
            justifyContent: "center",
            marginBottom: 56,
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 999,
                padding: "8px 20px",
                color: "#e2eaf5",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: 18 }}>{p.icon}</span>
              {p.label}
            </div>
          ))}
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 48,
            alignItems: "center",
            marginBottom: 60,
          }}
        >
          {/* Left: Text */}
          <motion.div {...fadeUp(0.15)}>
            <h3
              style={{
                fontSize: "1.45rem",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: 16,
                lineHeight: 1.3,
              }}
            >
              Home Appliance Repair in{" "}
              <span style={{ color: "#fb923c" }}>Varanasi</span>
            </h3>
            <p style={{ color: "#93b4d8", lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>
              Welcome to <strong style={{ color: "#fb923c" }}>Dizit Solution</strong> — your trusted
              partner for home appliance repair in Varanasi. We understand how disruptive a faulty
              appliance can be, which is why our dedicated team delivers fast, reliable, and
              affordable repair services across Varanasi and surrounding areas.
            </p>
            <p style={{ color: "#93b4d8", lineHeight: 1.8, fontSize: 15, marginBottom: 24 }}>
              Our certified technicians use only{" "}
              <strong style={{ color: "#e2eaf5" }}>genuine parts</strong>, offer{" "}
              <strong style={{ color: "#e2eaf5" }}>competitive pricing</strong>, and back every
              repair with a <strong style={{ color: "#e2eaf5" }}>100% satisfaction guarantee</strong>.
              We&apos;re available <strong style={{ color: "#fb923c" }}>24/7</strong> for prompt,
              dependable service.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
              <a
                href="tel:7324802379"
                style={{
                  background: "linear-gradient(135deg, #fb923c, #ea580c)",
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(251,146,60,0.35)",
                  display: "inline-block",
                  transition: "transform 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/917324802379"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.14)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
                }
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: Stats card */}
          <motion.div {...fadeUp(0.22)}>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                padding: "36px 32px",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 24,
                  marginBottom: 28,
                }}
              >
                {stats.map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: "#fb923c",
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {s.num}
                    </div>
                    <div style={{ color: "#93b4d8", fontSize: 13, fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  background: "rgba(251,146,60,0.1)",
                  border: "1px solid rgba(251,146,60,0.25)",
                  borderRadius: 10,
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 28 }}>🏆</span>
                <div>
                  <div style={{ color: "#fb923c", fontWeight: 700, fontSize: 14 }}>
                    Varanasi&apos;s #1 Repair Service
                  </div>
                  <div style={{ color: "#93b4d8", fontSize: 12 }}>
                    Trusted by 5000+ happy customers
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Cards */}
        <motion.div {...fadeUp(0.28)}>
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#fff",
              marginBottom: 28,
            }}
          >
            Our Core <span style={{ color: "#fb923c" }}>Services</span>
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.32 + i * 0.08 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14,
                  padding: "28px 24px",
                  cursor: "default",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(251,146,60,0.45)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{s.emoji}</div>
                <h4
                  style={{
                    color: "#fb923c",
                    fontWeight: 700,
                    fontSize: 17,
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h4>
                <p style={{ color: "#93b4d8", fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
                <div
                  style={{
                    marginTop: 16,
                    color: "#fb923c",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  Book This Service →
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
}