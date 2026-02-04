"use client";

import { useState } from "react";

type AnalyzeResult = {
  category?: string;
  preview?: string;
  locked?: string;
  blocked?: boolean;
  message?: string;
};

export default function SystemPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<AnalyzeResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    setLoading(true);
    setResult(null);

    const userId =
      typeof window !== "undefined" ? localStorage.getItem("uid") : null;

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        userId,
      }),
    });

    const data = (await res.json()) as AnalyzeResult;

    setResult(data);
    setLoading(false);
  }

  return (
    <section style={wrap}>
      <div style={top}>
        <span style={badge}>DECISION ENVIRONMENT</span>
        <h2 style={h2}>Decision Diagnostic</h2>
        <p style={muted}>
          Describe the decision you are postponing. No names required. Clarity
          only.
        </p>
      </div>

      <div style={panel}>
        <label style={label}>Decision Input</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Example: We are considering terminating a senior role but fear political fallout…"
          style={textarea}
        />

        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <button
            onClick={analyze}
            disabled={loading || text.trim().length < 20}
            style={{
              ...btn,
              opacity: loading || text.trim().length < 20 ? 0.6 : 1,
            }}
          >
            {loading ? "Analyzing…" : "Analyze Decision"}
          </button>

          <a href="/pricing" style={ghostBtn}>
            View Access Levels
          </a>
        </div>
      </div>

      {result && (
        <div style={{ marginTop: 24 }}>
          {result.blocked && (
            <div style={blockedBox}>
              <div style={{ fontWeight: 700 }}>Access Restricted</div>
              <p style={{ marginTop: 10, color: "var(--text-muted)" }}>
                {result.message ||
                  "Daily decision capacity reached. Unlock additional access to proceed."}
              </p>

              <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
                <a href="/pricing" style={btnDanger}>
                  Unlock Additional Capacity
                </a>
                <a href="/system" style={ghostBtn}>
                  Return
                </a>
              </div>
            </div>
          )}

          {!result.blocked && (
            <div style={resultBox}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Preview Analysis</strong>
                <span style={pill}>
                  {result.category ? result.category : "SIGNAL"}
                </span>
              </div>

              <p style={preText}>{result.preview}</p>

              <div style={lockedBox}>
                <div style={{ fontWeight: 700 }}>Restricted Layer</div>
                <p style={{ marginTop: 10, color: "var(--text-muted)" }}>
                  {result.locked ||
                    "Full consequence modeling and executive synthesis are restricted to authorized access."}
                </p>

                <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
                  <a href="/pricing" style={btnPrimary}>
                    Unlock Full Analysis
                  </a>
                  <a href="/pricing" style={ghostBtn}>
                    Download Strategic PDF
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

/* ====== STYLES ====== */

const wrap: React.CSSProperties = {
  maxWidth: 980,
  margin: "80px auto",
  padding: "0 24px",
};

const top: React.CSSProperties = {
  marginBottom: 18,
};

const badge: React.CSSProperties = {
  display: "inline-block",
  fontSize: 11,
  letterSpacing: 2,
  color: "var(--text-muted)",
  border: "1px solid var(--border)",
  padding: "8px 12px",
  borderRadius: 999,
};

const h2: React.CSSProperties = {
  marginTop: 18,
  fontSize: 28,
  fontWeight: 700,
};

const muted: React.CSSProperties = {
  marginTop: 10,
  color: "var(--text-muted)",
  lineHeight: 1.6,
  maxWidth: 760,
};

const panel: React.CSSProperties = {
  background: "var(--panel)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: 22,
};

const label: React.CSSProperties = {
  fontSize: 12,
  color: "var(--text-muted)",
  letterSpacing: 1.5,
  display: "block",
};

const textarea: React.CSSProperties = {
  width: "100%",
  height: 170,
  marginTop: 10,
  background: "#060606",
  border: "1px solid var(--border)",
  borderRadius: 10,
  padding: 14,
  color: "#fff",
  outline: "none",
  resize: "vertical",
};

const btn: React.CSSProperties = {
  background: "var(--accent)",
  padding: "12px 18px",
  borderRadius: 10,
  fontWeight: 700,
  color: "#fff",
};

const ghostBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 18px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.18)",
  color: "rgba(255,255,255,0.8)",
  fontWeight: 600,
};

const resultBox: React.CSSProperties = {
  background: "var(--panel)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: 22,
};

const pill: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: 2,
  color: "rgba(255,255,255,0.75)",
  border: "1px solid rgba(255,255,255,0.14)",
  padding: "8px 10px",
  borderRadius: 999,
};

const preText: React.CSSProperties = {
  marginTop: 14,
  whiteSpace: "pre-line",
  lineHeight: 1.6,
  color: "rgba(255,255,255,0.86)",
};

const lockedBox: React.CSSProperties = {
  marginTop: 18,
  padding: 18,
  borderRadius: 12,
  border: "1px dashed rgba(255,255,255,0.16)",
  background: "rgba(0,0,0,0.25)",
};

const btnPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 18px",
  borderRadius: 10,
  background: "#fff",
  color: "#000",
  fontWeight: 800,
};

const blockedBox: React.CSSProperties = {
  background: "rgba(124,45,18,0.12)",
  border: "1px solid rgba(124,45,18,0.6)",
  borderRadius: 12,
  padding: 22,
};

const btnDanger: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 18px",
  borderRadius: 10,
  background: "rgba(124,45,18,0.9)",
  color: "#fff",
  fontWeight: 800,
};
