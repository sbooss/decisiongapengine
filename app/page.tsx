export default function Home() {
  return (
    <section style={{
      maxWidth: 960,
      margin: "140px auto",
      padding: "0 24px"
    }}>
      <span style={{
        color: "var(--text-muted)",
        letterSpacing: 2,
        fontSize: 12
      }}>
        DECISION INTELLIGENCE SYSTEM
      </span>

      <h1 style={{
        marginTop: 24,
        fontSize: 46,
        lineHeight: 1.1
      }}>
        You already know<br />
        what must be decided.<br />
        You just avoid the cost of clarity.
      </h1>

      <p style={{
        marginTop: 28,
        fontSize: 18,
        color: "var(--text-muted)",
        maxWidth: 720
      }}>
        Decision Gap Engine™ reveals the structural consequences leaders postpone —
        before those consequences become irreversible.
      </p>

      <div style={{ marginTop: 56 }}>
        <a href="/auth">
          <button style={{
            background: "var(--accent)",
            padding: "18px 40px",
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 15
          }}>
            Enter Decision Environment
          </button>
        </a>
      </div>
    </section>
  );
}
