"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const params = useSearchParams();
  const plan = params.get("plan");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function start() {
      const userId = localStorage.getItem("uid");
      if (!userId || !plan) {
        setError("Missing access context.");
        return;
      }

      setLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, userId }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Unable to start checkout.");
        setLoading(false);
      }
    }

    start();
  }, [plan]);

  return (
    <section style={wrap}>
      <div style={box}>
        <h2>Preparing Secure Checkout</h2>
        <p style={muted}>
          Redirecting to payment environment…
        </p>

        {loading && <div style={loader} />}
        {error && <p style={errorText}>{error}</p>}
      </div>
    </section>
  );
}

const wrap: React.CSSProperties = {
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const box: React.CSSProperties = {
  background: "var(--panel)",
  border: "1px solid var(--border)",
  padding: 28,
  borderRadius: 14,
  textAlign: "center",
};

const muted: React.CSSProperties = {
  marginTop: 10,
  color: "var(--text-muted)",
};

const errorText: React.CSSProperties = {
  marginTop: 14,
  color: "#ef4444",
};

const loader: React.CSSProperties = {
  margin: "18px auto 0",
  width: 32,
  height: 32,
  border: "3px solid rgba(255,255,255,0.2)",
  borderTopColor: "#fff",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};
