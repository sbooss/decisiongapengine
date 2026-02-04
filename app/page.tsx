import Image from "next/image";

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
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/logo.png.png"
            alt="Decision Gap Engine"
            width={48}
            height={48}
            style={{ objectFit: "contain" }}
            priority
          />
          <span style={{
            color: "var(--text-muted)",
            letterSpacing: 2,
            fontSize: 12
          }}>
            DECISION INTELLIGENCE SYSTEM
          </span>
        </div>

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
          Decision Gap Engine™ entrega um assistente que conversa, aprende e executa
          tarefas em dispositivos, sistemas e canais digitais. Ele explica cada ação,
          pede autorização quando precisa integrar APIs e reduz erros com validação
          contínua.
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
            body: "Escuta contínua, transcrição e resposta com voz customizada em PT-BR, sempre explicando o que vai executar."
          },
          {
            title: "Controle de dispositivos",
            body: "Aciona aplicativos, navega, automatiza atalhos e assume fluxos em desktop e mobile com autorização progressiva."
          },
          {
            title: "Identificação por voz",
            body: "Reconhece a voz de cada pessoa autorizada, inicia com um olá personalizado e adapta o fluxo ao perfil."
          },
          {
            title: "Mensagens e social",
            body: "Envia e-mails, WhatsApp, Instagram, X e Facebook com confirmação explícita e trilha de auditoria."
          },
          {
            title: "Aprendizado executivo",
            body: "Cria playbooks, pergunta quando há ambiguidade e registra decisões para evoluir estratégias."
          },
          {
            title: "Respostas em tempo real",
            body: "Responde rápido, pergunta quando há ambiguidade e ajusta o plano de execução para garantir precisão."
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

    </section>
  );
}
