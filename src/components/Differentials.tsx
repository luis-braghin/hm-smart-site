import "./Differentials.css";

const STATS = [
  { value: "9", suffix: "+", label: "anos de mercado", counter: true },
  { value: "100", suffix: "%", label: "cobertura nacional", counter: true },
  { value: "24", suffix: "h", label: "suporte humano", counter: true },
  { value: "4,9", suffix: "", label: "avaliação dos clientes", counter: false, prefix: "★ " },
];

const DIFFS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Atendimento humanizado",
    text: "Aqui você fala com gente que conhece o setor — não com robô.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: "Sem custos de instalação ou manutenção",
    text: "Você não compra hardware, não paga visita técnica.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        <circle cx="19" cy="3" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Ligações ilimitadas, fixo e móvel nacional",
    text: "Plano com franquia que conversa com o tamanho da sua operação.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
        <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
      </svg>
    ),
    title: "Portabilidade inclusa",
    text: "Seu número atual continua sendo seu. Migração simples.",
  },
];

export default function Differentials() {
  return (
    <section className="alt" id="diferenciais">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Por que a HM Smart</span>
          <h2>Tecnologia parruda. Gente que atende como gente.</h2>
          <p className="subtitle">
            A combinação que a sua empresa não vai encontrar facilmente nesse
            mercado.
          </p>
        </div>

        <div className="stats-row reveal">
          {STATS.map((s, i) => (
            <div key={i} className="stat">
              <div
                className="num"
                {...(s.counter
                  ? { "data-counter": s.value, "data-suffix": s.suffix }
                  : {})}
              >
                {s.prefix ?? ""}
                {s.value}
                {s.suffix}
              </div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="diff-grid">
          {DIFFS.map((d, i) => (
            <div key={i} className={`diff-card reveal${i > 0 ? ` d${i}` : ""}`}>
              <div className="ico">{d.icon}</div>
              <div>
                <h4>{d.title}</h4>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
