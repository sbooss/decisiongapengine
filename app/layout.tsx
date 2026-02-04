import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Decision Gap Engine™",
  description: "Executive decision intelligence system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        <main className="pt-24">{children}</main>

        <footer
          style={{
            maxWidth: 1200,
            margin: "80px auto 40px",
            padding: "0 24px",
            color: "rgba(255,255,255,0.45)",
            fontSize: 12,
            letterSpacing: 1.2,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 18,
          }}
        >
          <span>Designed for executives where errors are not forgiven.</span>
          <span>Developed by W.N</span>
        </footer>
      </body>
    </html>
  );
}
