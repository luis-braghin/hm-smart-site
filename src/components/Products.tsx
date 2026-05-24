import "./Products.css";

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

const PRODUCTS = [
  {
    feat: true,
    tag: "Carro-chefe",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.5 2a8.38 8.38 0 0 1 5.5 2" />
        <path d="M14.5 6a4.26 4.26 0 0 1 3.5 2" />
        <circle cx="19" cy="3" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "PABX em Nuvem",
    quote: "Seu ramal em qualquer lugar do mundo.",
    description:
      "Central telefônica 100% na nuvem: ramais ilimitados, URA inteligente, gravação de chamadas e painel em tempo real. Sem hardware, sem manutenção.",
    bullets: [
      "Ramais ilimitados com mobilidade total",
      "URA personalizada e fila de atendimento",
      "Painel de métricas e gravação de chamadas",
    ],
    waLink:
      "https://wa.me/5511986410004?text=Oi!%20Quero%20saber%20mais%20sobre%20PABX%20em%20Nuvem.",
    hasButtons: true,
  },
  {
    feat: true,
    tag: null,
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="9" y2="10" strokeWidth="3" strokeLinecap="round" />
        <line x1="12" y1="10" x2="12" y2="10" strokeWidth="3" strokeLinecap="round" />
        <line x1="15" y1="10" x2="15" y2="10" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: "Plataforma Omnichannel",
    quote: "Atenda seus clientes onde eles estiverem.",
    description:
      "WhatsApp, telefone, chat e e-mail numa tela só. Histórico unificado, distribuição automática e métricas por canal.",
    bullets: [
      "WhatsApp Business API integrado",
      "Histórico completo do cliente em um lugar",
      "Relatórios por canal e por atendente",
    ],
    waLink:
      "https://wa.me/5511986410004?text=Oi!%20Quero%20saber%20mais%20sobre%20a%20Plataforma%20Omnichannel.",
    hasButtons: true,
  },
  {
    feat: false,
    tag: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8" />
        <path d="M8 14h4" />
      </svg>
    ),
    title: "SMS",
    quote: "Mensagens que chegam e convertem.",
    description:
      "Envio de SMS em massa ou individual com alta taxa de entrega. Ideal para confirmações, cobranças e campanhas.",
    bullets: [
      "Disparo em massa com personalização",
      "Relatório de entrega em tempo real",
    ],
    waLink: null,
    hasButtons: false,
  },
  {
    feat: false,
    tag: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: "Softphone",
    quote: "Seu ramal no bolso.",
    description:
      "Aplicativo para celular e desktop que transforma qualquer dispositivo no seu ramal corporativo. Leve o escritório com você.",
    bullets: [
      "Disponível para Android, iOS e desktop",
      "Qualidade de voz HD com criptografia",
    ],
    waLink: null,
    hasButtons: false,
  },
  {
    feat: false,
    tag: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <circle cx="5" cy="19" r="3" />
        <circle cx="19" cy="19" r="3" />
        <line x1="12" y1="8" x2="5" y2="16" />
        <line x1="12" y1="8" x2="19" y2="16" />
      </svg>
    ),
    title: "Matriz & Filiais",
    quote: "Todas as suas unidades como uma só.",
    description:
      "Conecte matriz e filiais com ramais internos gratuitos, numeração unificada e gestão centralizada. Sem interurbano.",
    bullets: [
      "Ligações entre unidades a custo zero",
      "Gestão centralizada de todas as filiais",
    ],
    waLink: null,
    hasButtons: false,
  },
];

export default function Products() {
  return (
    <section id="produtos">
      <div className="container-wide">
        <div className="section-head reveal">
          <span className="eyebrow">O que a HM Smart entrega</span>
          <h2>Soluções de telefonia em nuvem feitas sob medida pra PMEs.</h2>
          <p className="subtitle">
            Cinco produtos que conversam entre si. Você contrata só o que faz
            sentido pra sua operação.
          </p>
        </div>

        <div className="prod-grid">
          {PRODUCTS.map((prod, i) => (
            <div
              key={i}
              className={`prod-card${prod.feat ? " feat" : ""} reveal${
                i > 0 ? ` d${i}` : ""
              }`}
            >
              {prod.tag && <span className="tag">{prod.tag}</span>}
              <div className="ico">{prod.icon}</div>
              <h3>{prod.title}</h3>
              <span className="tag-quote">{prod.quote}</span>
              <p className="lede">{prod.description}</p>
              <ul>
                {prod.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {prod.hasButtons && (
                <div className="actions">
                  <a href="#contato" className="btn btn-primary">
                    Saiba mais
                  </a>
                  <a
                    href={prod.waLink!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                </div>
              )}
              {!prod.hasButtons && (
                <div className="actions">
                  <a href="#contato" className="btn btn-text">
                    Saiba mais &rarr;
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
