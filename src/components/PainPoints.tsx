import "./PainPoints.css";

const CARDS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
    title: "Sua empresa perde ligações de clientes?",
    text: "Ramal ocupado, cliente desliga, dinheiro vai embora. A gente acaba com a fila eterna.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Filiais que não se comunicam bem?",
    text: "Cada unidade num sistema diferente, ligação interna virando interurbano. Não precisa ser assim.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Paga caro e não sabe por quê?",
    text: "Conta de telefone com 7 linhas de cobrança que ninguém entende. A gente abre a planilha junto com você.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
    title: "Cliente em vários canais sem integração?",
    text: "WhatsApp aqui, telefone ali, chat em outro lugar. Equipe perdida, cliente esperando.",
  },
];

export default function PainPoints() {
  return (
    <section className="alt" id="problemas">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Algum desses dói?</span>
          <h2>
            A telefonia da sua empresa devia ajudar você a vender — não
            atrapalhar.
          </h2>
          <p className="subtitle">
            Quase toda PME que chega na gente está vivendo pelo menos um desses
            problemas. Conhecemos cada um deles.
          </p>
        </div>

        <div className="pain-grid">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={`pain-card reveal${i > 0 ? ` d${i}` : ""}`}
            >
              <div className="pic">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
