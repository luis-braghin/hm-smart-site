"use client";

import { useState, useEffect } from "react";
import "./Header.css";

const WA_URL =
  "https://wa.me/5511986410004?text=Oi!%20Vi%20o%20site%20da%20HM%20Smart%20e%20quero%20saber%20mais%20sobre%20telefonia%20em%20nuvem.";

const NAV_LINKS = [
  { label: "Produtos", href: "#produtos" },
  { label: "Por que a HM", href: "#por-que" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Parceria", href: "#parceria" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <header className={`hd${scrolled ? " scrolled" : ""}`}>
        <div className="hd-inner container">
          {/* Logo */}
          <a href="#" className="hd-logo">
            <span className="mark">
              <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="44" fill="#3478C6" />
                <path d="M 64 86 L 84 104 L 80 80 Z" fill="#3478C6" />
                <text
                  x="50"
                  y="65"
                  textAnchor="middle"
                  fontFamily="'Plus Jakarta Sans',system-ui,sans-serif"
                  fontWeight="800"
                  fontSize="42"
                  fill="#fff"
                  letterSpacing="-2"
                >
                  HM
                </text>
              </svg>
            </span>
            <span className="word">Smart</span>
          </a>

          {/* Desktop nav */}
          <nav className="hd-nav">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hd-cta">
            <a href="#produtos" className="btn btn-ghost">
              Conhecer produtos
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon />
              Fale com a gente
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="hd-burger"
            aria-label="Abrir menu"
            onClick={() => setDrawerOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`drawer${drawerOpen ? " open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      >
        <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
          <button
            className="close"
            aria-label="Fechar menu"
            onClick={() => setDrawerOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setDrawerOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ marginTop: "auto" }}
          >
            <WhatsAppIcon />
            Fale com a gente
          </a>
        </div>
      </div>
    </>
  );
}
