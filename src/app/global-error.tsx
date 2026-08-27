"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#050505", color: "#eeeae2", fontFamily: "Arial, sans-serif" }}>
        <main style={{ minHeight: "100svh", padding: "6vh 3.2vw", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <p style={{ margin: 0, fontSize: 10, fontWeight: 700, lineHeight: .85 }}>ETERNAL<br />PHILOSOPHY</p>
          <h1 style={{ margin: "auto 0", fontSize: "clamp(72px, 15vw, 250px)", lineHeight: .72, letterSpacing: "-.085em" }}>SOMETHING<br />WENT WRONG.</h1>
          <button type="button" onClick={reset} style={{ alignSelf: "flex-end", padding: "18px 0", border: 0, borderBottom: "1px solid #9b9d9a", color: "#eeeae2", background: "none", fontSize: 9, letterSpacing: ".17em", cursor: "pointer" }}>TRY AGAIN →</button>
        </main>
      </body>
    </html>
  );
}
