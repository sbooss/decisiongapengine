import Link from "next/link";

export default function PricingPage() {
  return (
    <section style={wrap}>
      <div style={head}>
        <span style={kicker}>ACCESS LEVELS</span>
        <h1 style={title}>Strategic Access</h1>
        <p style={subtitle}>
          A controlled decision intelligence system. Designed for executives,
          companies and high-responsibility professionals.
        </p>
      </div>

      <div style={grid}>
        {/* INDIVIDUAL */}
        <div style={card}>
          <div style={cardTop}>
            <div>
              <div style={planName}>Individual</div>
              <div style={planDesc}>Personal clarity layer</div>
            </div>
            <span style={chip}>LIMITED</span>
          </div>

          <div style={priceRow}>
            <span style={price}>$19</span>
            <span style={per}>/month</span>
          </div>

          <div style={divider} />

          <ul style={list}>
            <li style={li}>5 decision signals/day</li>
            <li style={li}>Preview-only (restricted depth)</li>
            <li style={li}>No PDF export</li>
            <li style={li}>No historical comparison</li>
          </ul>

          <div style={divider} />

          <Link href="/auth" style={ghostBtn}>
            Start Individual Access
          </Link>

          <p style={finePrint}>
            Best for personal decision clarity without deep modeling.
          </p>
        </div>

        {/* EXECUTIVE (highlight) */}
        <div style={cardFeatured}>
          <div style={glow} />
          <div style={cardTop}>
            <div>
              <div style={planNameFeatured}>Executive</div>
              <div style={planDesc}>Judgment-grade analysis</div>
            </div>
            <span style={chipFeatured}>RECOMMENDED</span>
          </div>

          <div style={priceRow}>
            <span style={priceFeatured}>$40</span>
            <span style={per}>/month</span>
          </div>

          <div style={dividerSoft} />

          <ul style={list}>
            <li style={liStrong}>3 deep decisions/day</li>
            <li style={liStrong}>Full strategic synthesis</li>
            <li style={liStrong}>Executive PDF reports</li>
            <li style={liStrong}>Risk & inertia signals</li>
          </ul>

          <div style={dividerSoft} />

          <Link href="/auth" style={primaryBtn}>
            Unlock Executive Access
          </Link>

          <div style={extraBox}>
            <div style={extraTitle}>Extension</div>
            <div style={extraText}>
              Need more capacity today? Add +3 decisions for <b>$40</b>.
            </div>
          </div>
        </div>

        {/* COMPANY */}
        <div style={card}>
          <div style={cardTop}>
            <div>
              <div style={planName}>Company</div>
              <div style={planDesc}>Controlled org intelligence</div>
            </div>
            <span style={chip}>3 USERS</span>
          </div>

          <div style={priceRow}>
            <span style={price}>$120</span>
            <span style={per}>/month</span>
          </div>

          <div style={divider} />

          <ul style={list}>
            <li style={li}>Maximum 3 users</li>
            <li style={li}>3 deep decisions/user/day</li>
            <li style={li}>3 reports/user/day</li>
            <li style={li}>Centralized decision logs</li>
          </ul>

          <div style={divider} />

          <Link href="/auth" style={ghostBtn}>
            Request Company Access
          </Link>

          <p style={finePrint}>
            Add users or capacity via controlled upgrades.
          </p>
        </div>
      </div>

      {/* Bottom trust */}
      <div style={bottom}>
        <div style={bottomBox}>
          <div style={bottomTitle}>What you unlock</div>
          <p style={bottomText}>
            Scenario divergence, consequence modeling, financial exposure signals,
            irreversible thresholds, and executive-grade synthesis — built to
            reduce uncertainty under pressure.
          </p>
        </div>

        <div style={bottomBox}>
          <div style={bottomTitle}>Design principle</div>
          <p style={bottomText}>
            This system is intentionally restrained. It reveals enough to
            clarify direction — and withholds what requires deeper modeling.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===== Executive Ultra Dark Styles ===== */

const wrap: React.CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #050505 0%, #050505 60%, #030303 100%)",
  padding: "90px 24px 70px",
};

const head: React.CSSProperties = {
  maxWidth: 980,
  margin: "0 auto",
};

const kicker: React.CSSProperties = {
  display: "inline-block",
  fontSize: 11,
  letterSpacing: 2.5,
  color: "rgba(255,255,255,0.55)",
  border: "1px solid rgba(255,255,255,0.12)",
  padding: "8px 12px",
  borderRadius: 999,
};

const title: React.CSSProperties = {
  marginTop: 18,
  fontSize: 44,
  letterSpacing: -0.5,
  fontWeight: 800,
};

const subtitle: React.CSSProperties = {
  marginTop: 14,
  color: "rgba(255,255,255,0.60)",
  lineHeight: 1.7,
  maxWidth: 760,
  fontSize: 16,
};

const grid: React.CSSProperties = {
  maxWidth: 1100,
  margin: "40px auto 0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 18,
  alignItems: "stretch",
};

const card: React.CSSProperties = {
  background: "rgba(11,11,11,0.95)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 16,
  padding: 22,
  display: "flex",
  flexDirection: "column",
  position: "relative",
};

const cardFeatured: React.CSSProperties = {
  ...card,
  border: "1px solid rgba(255,255,255,0.22)",
  transform: "translateY(-6px)",
  background: "rgba(0,0,0,0.75)",
  overflow: "hidden",
};

const glow: React.CSSProperties = {
  position: "absolute",
  top: -120,
  left: -120,
  width: 320,
  height: 320,
  background: "radial-gradient(circle, rgba(99,102,241,0.28), transparent 60%)",
  filter: "blur(2px)",
  pointerEvents: "none",
};

const cardTop: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 12,
  position: "relative",
};

const planName: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 800,
};

const planNameFeatured: React.CSSProperties = {
  ...planName,
  fontSize: 20,
};

const planDesc: React.CSSProperties = {
  marginTop: 6,
  fontSize: 13,
  color: "rgba(255,255,255,0.55)",
};

const chip: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: 2,
  color: "rgba(255,255,255,0.7)",
  border: "1px solid rgba(255,255,255,0.14)",
  padding: "8px 10px",
  borderRadius: 999,
};

const chipFeatured: React.CSSProperties = {
  ...chip,
  border: "1px solid rgba(99,102,241,0.45)",
  color: "rgba(255,255,255,0.86)",
  background: "rgba(99,102,241,0.10)",
};

const priceRow: React.CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  gap: 10,
  marginTop: 18,
};

const price: React.CSSProperties = {
  fontSize: 40,
  fontWeight: 900,
  letterSpacing: -1,
};

const priceFeatured: React.CSSProperties = {
  ...price,
  fontSize: 44,
};

const per: React.CSSProperties = {
  color: "rgba(255,255,255,0.55)",
  fontSize: 13,
  letterSpacing: 1.2,
};

const divider: React.CSSProperties = {
  height: 1,
  background: "rgba(255,255,255,0.10)",
  margin: "18px 0",
};

const dividerSoft: React.CSSProperties = {
  height: 1,
  background: "rgba(255,255,255,0.14)",
  margin: "18px 0",
};

const list: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: 10,
  color: "rgba(255,255,255,0.74)",
  fontSize: 14,
  lineHeight: 1.5,
};

const li: React.CSSProperties = {
  paddingLeft: 18,
  position: "relative",
};

const liStrong: React.CSSProperties = {
  ...li,
  color: "rgba(255,255,255,0.86)",
  fontWeight: 600,
};

const ghostBtn: React.CSSProperties = {
  marginTop: 18,
  display: "inline-flex",
  justifyContent: "center",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.18)",
  color: "rgba(255,255,255,0.85)",
  fontWeight: 700,
};

const primaryBtn: React.CSSProperties = {
  marginTop: 18,
  display: "inline-flex",
  justifyContent: "center",
  padding: "12px 14px",
  borderRadius: 12,
  background: "#ffffff",
  color: "#000000",
  fontWeight: 900,
};

const finePrint: React.CSSProperties = {
  marginTop: 14,
  color: "rgba(255,255,255,0.45)",
  fontSize: 12,
  lineHeight: 1.6,
};

const extraBox: React.CSSProperties = {
  marginTop: 18,
  padding: 14,
  borderRadius: 14,
  border: "1px solid rgba(99,102,241,0.25)",
  background: "rgba(99,102,241,0.08)",
  position: "relative",
};

const extraTitle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 900,
  letterSpacing: 1.6,
  color: "rgba(255,255,255,0.88)",
};

const extraText: React.CSSProperties = {
  marginTop: 8,
  fontSize: 13,
  lineHeight: 1.6,
  color: "rgba(255,255,255,0.70)",
};

const bottom: React.CSSProperties = {
  maxWidth: 1100,
  margin: "26px auto 0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 18,
};

const bottomBox: React.CSSProperties = {
  background: "rgba(11,11,11,0.85)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 16,
  padding: 18,
};

const bottomTitle: React.CSSProperties = {
  fontWeight: 900,
  letterSpacing: 1.4,
  fontSize: 12,
  color: "rgba(255,255,255,0.82)",
  textTransform: "uppercase",
};

const bottomText: React.CSSProperties = {
  marginTop: 10,
  color: "rgba(255,255,255,0.56)",
  lineHeight: 1.65,
  fontSize: 13,
};
