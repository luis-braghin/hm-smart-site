import "./FAQ.css";

const WA_URL = "https://wa.me/5511986410004";

const faqs = [
  {
    q: "O que é PABX em Nuvem?",
    a: (
      <>
        <p>
          É a versão moderna do velho aparelhão de telefonia que ficava na sala
          dos servidores. Em vez de equipamento físico na sua empresa, tudo roda
          na internet (na &lsquo;nuvem&rsquo;): ramais, URA (aquela voz que diz
          &lsquo;digite 1 para vendas&rsquo;), gravação, conferência e
          relatórios. Você acessa pelo computador, celular ou um telefone IP —
          onde estiver.
        </p>
      </>
    ),
  },
  {
    q: "Preciso comprar algum equipamento especial?",
    a: (
      <>
        <p>
          Não. Você usa os computadores e celulares que já tem com o nosso
          softphone (um app gratuito). Se preferir telefone físico, indicamos
          modelos IP simples que custam pouco — mas é opcional.
        </p>
      </>
    ),
  },
  {
    q: "Vou perder meu número atual?",
    a: (
      <>
        <p>
          Não. A portabilidade já vem inclusa: seu número de fixo (e até 0800)
          continua sendo seu, só muda quem opera nos bastidores. Seus clientes
          não notam diferença.
        </p>
      </>
    ),
  },
  {
    q: "Funciona para equipes em home office?",
    a: (
      <>
        <p>
          Funciona como se a pessoa estivesse no escritório. O ramal
          &lsquo;mora&rsquo; no computador ou celular dela — atender,
          transferir, gravar e ver fila, tudo igual. Vendedor externo também é a
          mesma história.
        </p>
      </>
    ),
  },
  {
    q: "A qualidade das ligações é boa?",
    a: (
      <>
        <p>
          Sim — usamos codecs HD que entregam áudio melhor que a telefonia
          tradicional. O que pode atrapalhar é uma internet ruim na ponta; por
          isso, nosso time avalia sua conexão antes da ativação e indica ajustes
          se for o caso.
        </p>
      </>
    ),
  },
  {
    q: "Quanto custa para implantar?",
    a: (
      <>
        <p>
          Não tem custo de instalação nem de manutenção. Você paga uma
          mensalidade que varia conforme o número de ramais e o pacote de
          minutos. Cada empresa é uma empresa — por isso a gente monta a
          proposta junto com você, sem pacote engessado.
        </p>
        <p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">
            Pedir uma proposta no WhatsApp &rarr;
          </a>
        </p>
      </>
    ),
    customLink: true,
  },
  {
    q: "E se a internet cair?",
    a: (
      <>
        <p>
          A gente configura desvio automático pro celular cadastrado, pra um
          número fixo ou pra uma URA com mensagem. Nenhuma ligação se perde. E
          indicamos arranjos com link de backup (4G ou segunda operadora) pra
          empresas que não podem parar.
        </p>
      </>
    ),
  },
  {
    q: "Quanto tempo leva para ativar?",
    a: (
      <>
        <p>
          Pra um número novo, em 1-2 dias úteis. Pra portabilidade do seu número
          atual, depende da operadora atual, mas em geral fica entre 5 e 10 dias
          úteis. Enquanto isso, você já pode usar um número provisório.
        </p>
      </>
    ),
  },
  {
    q: "Como faço para contratar?",
    a: (
      <>
        <p>
          Manda um &lsquo;oi&rsquo; pelo WhatsApp. A gente faz uma conversa
          rápida (15 minutos), entende seu cenário e em até 1 dia útil você
          recebe uma proposta personalizada. Sem pressão, sem ligação fria — você
          decide no seu tempo.
        </p>
        <p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">
            Mandar &lsquo;oi&rsquo; pelo WhatsApp &rarr;
          </a>
        </p>
      </>
    ),
    customLink: true,
  },
];

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2>Tira-dúvidas antes da conversa.</h2>
          <p>
            Se sua pergunta não estiver aqui, manda um &lsquo;oi&rsquo; pelo
            WhatsApp. Resposta na hora.
          </p>
        </div>

        <div className="faq-wrap">
          {faqs.map((item, i) => (
            <details key={i} className="faq">
              <summary>
                {item.q}
                <span className="plus">
                  <PlusIcon />
                </span>
              </summary>
              <div className="faq-body">
                {item.a}
                {!item.customLink && (
                  <p>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                      Ainda tem dúvidas? Fale com a gente &rarr;
                    </a>
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
