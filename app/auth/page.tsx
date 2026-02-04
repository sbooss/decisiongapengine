"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login"|"register">("login");
  const router = useRouter();

  async function submit() {
    const res = await fetch("/api/auth", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password, mode })
});

    const data = await res.json();
    if (data.userId) {
      localStorage.setItem("uid", data.userId);
      router.push("/system");
    }
  }

  return (
    <section style={card}>
      <h2>{mode === "login" ? "Access" : "Request Access"}</h2>
      <input placeholder="Email" style={input} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" style={input} onChange={e=>setPassword(e.target.value)} />
      <button onClick={submit} style={btn}>{mode === "login" ? "Enter" : "Create Account"}</button>
      <a onClick={()=>setMode(mode==="login"?"register":"login")} style={link}>
        {mode==="login"?"Create account":"Back to login"}
      </a>
    </section>
  );
}
const card={maxWidth:420,margin:"120px auto",padding:32,background:"var(--panel)",border:"1px solid var(--border)",borderRadius:8};
const input={background:"#050505",border:"1px solid var(--border)",padding:12,borderRadius:6,color:"#fff",marginTop:12};
const btn={marginTop:16,background:"var(--accent)",padding:14,borderRadius:6,fontWeight:600};
const link={display:"block",marginTop:12,color:"var(--text-muted)",cursor:"pointer"};
