export default function Home() {
  return (
    <section style={{
      maxWidth: 1120,
      margin: "120px auto",
      padding: "0 24px",
      display: "flex",
      flexDirection: "column",
      gap: 64
    }}>
      <header>
        <span style={{
          color: "var(--text-muted)",
          letterSpacing: 2,
          fontSize: 12
        }}>
          DECISION INTELLIGENCE SYSTEM
        </span>

        <h1 style={{
          marginTop: 24,
          fontSize: 48,
          lineHeight: 1.1
        }}>
          Jarvis executivo de próxima geração.<br />
          Voz, automação e decisão em tempo real.
        </h1>

        <p style={{
          marginTop: 28,
          fontSize: 18,
          color: "var(--text-muted)",
          maxWidth: 760
        }}>
          Decision Gap Engine™ orquestra voz, ferramentas e aprendizado contínuo para
          executar tarefas em dispositivos, sistemas e canais digitais, com confirmação
          explícita antes de cada ação sensível.
        </p>

        <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="/auth">
            <button style={{
              background: "var(--accent)",
              padding: "18px 40px",
              borderRadius: 6,
              fontWeight: 600,
              fontSize: 15
            }}>
              Entrar no ambiente executivo
            </button>
          </a>
          <button style={{
            background: "transparent",
            padding: "18px 32px",
            borderRadius: 6,
            border: "1px solid var(--border)",
            fontWeight: 600,
            fontSize: 15,
            color: "var(--text-muted)"
          }}>
            Ver protocolo de segurança
          </button>
        </div>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
        {[
          {
            title: "Voz total e multicanal",
            body: "Escuta contínua, transcrição e resposta com voz customizada, em PT-BR, com registros do que será executado."
          },
          {
            title: "Controle de dispositivos",
            body: "Aciona aplicativos, navega, automatiza atalhos e assume fluxos em desktop e mobile com autorização progressiva."
          },
          {
            title: "Mensagens e social",
            body: "Envia e-mails, WhatsApp, Instagram, X e Facebook com confirmação explícita e trilha de auditoria."
          },
          {
            title: "Aprendizado executivo",
            body: "Cria playbooks, pergunta quando há ambiguidade e registra decisões para evoluir estratégias."
          }
        ].map((item) => (
          <article
            key={item.title}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 24,
              minHeight: 180,
              display: "flex",
              flexDirection: "column",
              gap: 12
            }}
          >
            <h3 style={{ fontSize: 18, margin: 0 }}>{item.title}</h3>
            <p style={{ margin: 0, color: "var(--text-muted)", lineHeight: 1.6 }}>{item.body}</p>
          </article>
        ))}
      </section>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 24,
        background: "rgba(255,255,255,0.02)",
        borderRadius: 16,
        padding: 32,
        border: "1px solid var(--border)"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, color: "var(--text-muted)" }}>PROCEDIMENTO</span>
          <h2 style={{ margin: 0, fontSize: 28 }}>Fluxo de execução com confirmação</h2>
          <p style={{ margin: 0, color: "var(--text-muted)", lineHeight: 1.6 }}>
            Cada ação crítica é explicada, prevista e autorizada pelo usuário. O sistema
            pede permissão quando precisa integrar API, acessar dispositivos ou publicar.
          </p>
        </div>
        <ol style={{
          margin: 0,
          paddingLeft: 20,
          color: "var(--text-muted)",
          lineHeight: 1.8,
          display: "flex",
          flexDirection: "column",
          gap: 8
        }}>
          <li>Entender intenção e pedir detalhes faltantes.</li>
          <li>Explicar o que será feito, em voz e texto.</li>
          <li>Solicitar autorização para canais, contas e dispositivos.</li>
          <li>Executar com rastreio, logs e confirmação de sucesso.</li>
          <li>Aprender e sugerir melhorias para o próximo ciclo.</li>
        </ol>
      </section>
    </section>
  );
}
