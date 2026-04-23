"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { label: "AC Services", href: "/acrepair", icon: "❄️" },
  { label: "Washing Machine", href: "/washing-machine-services", icon: "🫧" },
  { label: "Refrigerator", href: "/refrigerator-services", icon: "🧊" },
  { label: "RO Purifier", href: "/ro-purifier-services", icon: "💧" },
  { label: "Geyser Repair", href: "/geyser-services", icon: "🔥" },
  { label: "Microwave", href: "/microwave-services", icon: "📡" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .dizit-header * { font-family: 'Plus Jakarta Sans', sans-serif; }
        .nav-link {
          position: relative;
          font-size: 14px;
          font-weight: 500;
          color: #1e293b;
          text-decoration: none;
          padding: 6px 0;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: #f97316;
          border-radius: 2px;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #f97316; }
        .nav-link:hover::after { width: 100%; }
        .service-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 10px;
          text-decoration: none;
          color: #334155;
          font-size: 13.5px;
          font-weight: 500;
          transition: background 0.18s, color 0.18s;
        }
        .service-card:hover {
          background: #fff7ed;
          color: #ea580c;
        }
        .book-btn {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          font-size: 14px;
          font-weight: 600;
          padding: 9px 20px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 14px rgba(249,115,22,0.35);
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .book-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(249,115,22,0.45);
        }
        .phone-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #15803d;
          font-size: 13px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 999px;
        }
      `}</style>

      <nav
        className="dizit-header"
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100%",
          zIndex: 1000,
          background: scrolled ? "rgba(255,255,255,0.97)" : "white",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.10)" : "0 1px 0 #e2e8f0",
          transition: "box-shadow 0.3s",
        }}
      >
        {/* Top bar */}
        <div style={{ background: "#1e293b", padding: "7px 0", textAlign: "center" }}>
          <span style={{ color: "#94a3b8", fontSize: 12, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            ⚡ Same-day service available · 
            <span style={{ color: "#f97316", fontWeight: 600 }}> Call: 911256473</span>
            &nbsp;· Varanasi & nearby areas
          </span>
        </div>

        {/* Main nav */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}>
              <img src="/Dizit-Solution.webp" alt="Dizit Solution" style={{ height: 36 }} />
            </motion.div>
          </Link>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-link"
                style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
              >
                Services
                <motion.svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth={2.5}
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 12px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "white",
                      borderRadius: 16,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
                      border: "1px solid #e2e8f0",
                      padding: 16,
                      width: 320,
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 6,
                    }}
                  >
                    <div style={{ gridColumn: "1/-1", paddingBottom: 10, marginBottom: 4, borderBottom: "1px solid #f1f5f9" }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        Our Services
                      </span>
                    </div>
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="service-card">
                        <span style={{ fontSize: 18 }}>{s.icon}</span>
                        <span>{s.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className="phone-pill desktop-only">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
              07324802379
            </div>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <motion.button
                className="book-btn"
                whileTap={{ scale: 0.97 }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Book Service
              </motion.button>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 8, padding: "7px 9px", cursor: "pointer", display: "none" }}
              className="hamburger"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth={2.5}>
                {mobileOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{ background: "white", borderTop: "1px solid #f1f5f9", overflow: "hidden" }}
            >
              <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ padding: "11px 14px", borderRadius: 10, fontWeight: 500, fontSize: 15, color: "#1e293b", textDecoration: "none", background: "transparent", transition: "background 0.15s" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div style={{ borderTop: "1px solid #f1f5f9", marginTop: 8, paddingTop: 12 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Services</p>
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 10, fontSize: 14, fontWeight: 500, color: "#334155", textDecoration: "none" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span style={{ fontSize: 18 }}>{s.icon}</span>
                      {s.label}
                    </Link>
                  ))}
                </div>
                <Link href="/contact" style={{ textDecoration: "none", marginTop: 12 }} onClick={() => setMobileOpen(false)}>
                  <button className="book-btn" style={{ width: "100%", justifyContent: "center" }}>
                    Book a Service
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .desktop-only { display: none !important; }
            .hamburger { display: block !important; }
          }
        `}</style>
      </nav>

      {/* Spacer for fixed nav */}
      <div style={{ height: 100 }} />
    </>
  );
};

export default Header;