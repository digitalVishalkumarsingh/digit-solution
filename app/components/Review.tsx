"use client";
import React, { useEffect } from "react";

const ReviewCarousel = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #0f2044 60%, #1a3060 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "72px 0",
        fontFamily: "'Sora', 'Segoe UI', sans-serif",
      }}
    >
      {/* Decorative blurred circles */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-60px",
          width: 300,
          height: 300,
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
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
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
            ⭐ Google Reviews
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "#ffffff",
              margin: "0 0 12px",
              lineHeight: 1.15,
            }}
          >
            What Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #fb923c, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Customers Say
            </span>
          </h2>
          <p style={{ color: "#93b4d8", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
            Real feedback from happy customers across Varanasi
          </p>
        </div>

        {/* Widget Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 18,
            padding: "32px 28px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.35)",
          }}
        >
          <div
            className="elfsight-app-d9ec9cc4-5b7a-44a8-a67d-c3cba9d82979"
            data-elfsight-app-lazy
          />
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a
            href="https://wa.me/917324802379"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #fb923c, #ea580c)",
              color: "#fff",
              padding: "12px 32px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(251,146,60,0.35)",
              transition: "transform 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            💬 Book on WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default ReviewCarousel;