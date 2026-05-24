"use client";

import { useState, useEffect } from "react";
import "./CookieBanner.css";

const STORAGE_KEY = "hm_ck";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // localStorage unavailable
      return;
    }

    const timer = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  function accept(value: string) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  return (
    <div className={`cookie${visible ? " show" : ""}`} role="dialog" aria-label="Consentimento de cookies">
      <p>
        <strong>Cookies 🍪</strong> — Usamos cookies para melhorar sua
        experiência. Você pode aceitar todos ou apenas os essenciais.
      </p>
      <div className="ck-actions">
        <button className="btn btn-primary" onClick={() => accept("all")}>
          Aceitar tudo
        </button>
        <button className="btn btn-ghost" onClick={() => accept("essential")}>
          Só essenciais
        </button>
      </div>
    </div>
  );
}
