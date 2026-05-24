import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote:
      "Reduzimos 40% da conta de telefone no primeiro mês — e a equipe atende muito melhor com o softphone no notebook.",
    name: "Escritório de advocacia",
    loc: "São Paulo SP \u00B7 18 ramais",
  },
  {
    quote:
      "A equipe explicou tudo numa linguagem que eu, que não sou de tecnologia, entendi de primeira. Faz diferença.",
    name: "Clínica de fisioterapia",
    loc: "Campinas SP \u00B7 6 ramais",
  },
  {
    quote:
      "Tenho 3 filiais em estados diferentes. Antes era um caos. Agora é um só sistema — ligação interna sem custo nenhum.",
    name: "Distribuidora",
    loc: "Curitiba PR \u00B7 32 ramais",
  },
];

const SEGMENTS = [
  {
    label: "Advocacia",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1L1 12h3v9h6v-6h4v6h6v-9h3L12 1z" />
      </svg>
    ),
  },
  {
    label: "Clínicas",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    label: "Contabilidade",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Comércio",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    label: "Startups",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "Indústria",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M5 20V8l5 4V8l5 4V4l5 4v12" />
      </svg>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="alt" id="depoimentos">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">
            <span className="dot" />
            O que dizem por aí
          </span>
          <h2>Empresas que reduziram conta e pararam de perder cliente.</h2>
          <p>
            Histórias reais de quem trocou a telefonia antiga pela nuvem da HM
            Smart.
          </p>
        </div>

        <div className="test-marquee">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="test-card">
              <div className="quote-mark">&ldquo;</div>
              <blockquote>{t.quote}</blockquote>
              <div className="meta">
                <span className="name">{t.name}</span>
                <span className="loc">{t.loc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="segments">
          {SEGMENTS.map((s) => (
            <span key={s.label} className="seg">
              {s.icon}
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
