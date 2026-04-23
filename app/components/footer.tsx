"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { label: "AC Services", href: "/acrepair", icon: "❄️" },
  { label: "Washing Machine", href: "/washing-machine-services", icon: "🫧" },
  { label: "Refrigerator", href: "/refrigerator-services", icon: "🧊" },
  { label: "RO Purifier", href: "/ro-purifier-services", icon: "💧" },
  { label: "Geyser Repair", href: "/geyser-services", icon: "🔥" },
  { label: "Microwave Repair", href: "/microwave-services", icon: "📡" },
];

const social = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    path: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43 1a9 9 0 01-2.88 1.1A4.52 4.52 0 0016.11.64a4.5 4.5 0 00-4.5 4.5 4.61 4.61 0 00.11 1.03A12.79 12.79 0 011.64 1.4a4.49 4.49 0 001.4 6.01 4.46 4.46 0 01-2.04-.56v.06a4.51 4.51 0 003.62 4.42 4.57 4.57 0 01-2.03.08 4.52 4.52 0 004.22 3.13A9.05 9.05 0 010 16.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.4-.01-.59A9.24 9.24 0 0023 3z",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
  },
];

const Footer = () => {
  return (
    <footer style={{ background: "#0f172a", color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .footer-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          padding: 5px 0;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #f97316; }
        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .social-btn:hover {
          background: #f97316;
          color: white;
          border-color: #f97316;
        }
      `}</style>

      {/* CTA Strip */}
      <div style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)", padding: "32px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 4px", color: "white" }}>
              Appliance Not Working? We'll Fix It Today.
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", margin: 0 }}>
              Same-day service · Certified technicians · Varanasi & nearby areas
            </p>
          </div>
          <motion.a
            href="tel:07324802379"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "white",
              color: "#ea580c",
              fontWeight: 700,
              fontSize: 15,
              padding: "12px 28px",
              borderRadius: 12,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              whiteSpace: "nowrap",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
            </svg>
            Call 07324802379
          </motion.a>
        </div>
      </div>

      {/* Main footer content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48 }}>

          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <img src="/Dizit-Solution.webp" alt="Dizit Solution" style={{ height: 36, marginBottom: 16, filter: "brightness(0) invert(1)" }} />
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
              Trusted home appliance repair & service in Varanasi. Fast, reliable, and professional technicians at your doorstep.
            </p>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["⭐ 4.9 Rated", "✅ Verified Techs", "🔧 5000+ Repairs"].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontSize: 12,
                    padding: "5px 10px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.06)",
                    color: "#94a3b8",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 16 }}>
              Services
            </h4>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="footer-link">
                <span style={{ fontSize: 15 }}>{s.icon}</span>
                {s.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 16 }}>
              Company
            </h4>
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms-and-conditions" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 16 }}>
              Contact Us
            </h4>

            {[
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                ),
                text: "07324802379",
                href: "tel:07324802379",
              },
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                ),
                text: "dizitsolution@gmail.com",
                href: "mailto:dizitsolution@gmail.com",
              },
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ),
                text: "Near Sunbeam School, Lahartara, Varanasi – 221002",
                href: "#",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14, textDecoration: "none", color: "#94a3b8", fontSize: 14, lineHeight: 1.5, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f97316")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <span style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                {item.text}
              </a>
            ))}

            {/* Social */}
            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              {social.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="social-btn" title={s.name}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "20px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p style={{ color: "#475569", fontSize: 13, margin: 0 }}>
            © 2025 Dizit Solution. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/privacy-policy" style={{ color: "#475569", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
              onMouseEnter={(e: any) => (e.target.style.color = "#f97316")}
              onMouseLeave={(e: any) => (e.target.style.color = "#475569")}
            >
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" style={{ color: "#475569", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
              onMouseEnter={(e: any) => (e.target.style.color = "#f97316")}
              onMouseLeave={(e: any) => (e.target.style.color = "#475569")}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;