import "./Partner.css";

const STATS = [
  { val: "Desde 2007", label: "no mercado de telecom" },
  { val: "2.500+", valAccent: " cidades", label: "com cobertura no Brasil" },
  { val: "Licenciada", valAccent: " ANATEL", label: "operação regulamentada" },
  { val: "Google", valAccent: " Cloud", label: "infraestrutura de ponta" },
];

const CLIENTS = ["SBT", "Unopar", "Positivo"];

export default function Partner() {
  return (
    <section className="partner" id="parceiro">
      <div className="container">
        {/* ── Top: text + card ── */}
        <div className="partner-top">
          <div>
            <span className="eyebrow">
              <span className="dot" />
              Parceria estratégica
            </span>
            <h2>
              Tecnologia de operadora.{" "}
              <span className="accent2">
                Atendimento de quem te conhece pelo nome.
              </span>
            </h2>
            <p>
              A HM Smart é parceira autorizada da{" "}
              <strong>Baldussi Telecom</strong> desde a chegada da operadora em
              São Paulo. O <strong>Humberto, sócio da HM Smart</strong>, foi
              quem trouxe a Baldussi pra capital e ajudou na expansão nacional.
            </p>
            <p>
              Quer dizer que você não fala com uma revendedora qualquer: você tem
              a infraestrutura de uma grande operadora{" "}
              <strong>licenciada na ANATEL</strong>, rodando no{" "}
              <strong>Google Cloud</strong> — com o cuidado de gente que te
              conhece pelo nome.
            </p>
          </div>

          {/* Partnership card */}
          <div className="pm-card">
            <div className="pm-row">
              <div className="pm-hm">
                <svg
                  viewBox="0 0 110 110"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
              </div>
              <span className="pm-x">&times;</span>
              <div className="pm-bd">
                <span className="bd-name">Baldussi</span>
                <span className="bd-tag">Telecom</span>
              </div>
            </div>
            <div className="pm-meta">
              <div>
                <span className="pm-meta-label">Parceria desde</span>
                <strong>Expansão SP</strong>
              </div>
              <div>
                <span className="pm-meta-label">Status</span>
                <strong>Parceira autorizada</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="partner-stats">
          {STATS.map((s, i) => (
            <div key={i} className="ps">
              <div className="ps-bar" />
              <div className="ps-val">
                {s.val}
                {s.valAccent && <em>{s.valAccent}</em>}
              </div>
              <div className="ps-lbl">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Clients ── */}
        <div className="partner-clients">
          <div className="lead">Quem confia na Baldussi</div>
          <div className="names">
            {CLIENTS.map((name) => (
              <span key={name}>{name}</span>
            ))}
            <span>+ centenas de empresas no Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
}
