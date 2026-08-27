import { ImageResponse } from "next/og";

export const alt = "ETERNAL PHILOSOPHY — WE CREATE TIME.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "68px 72px", background: "#050505", color: "#eeeae2", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontSize: 18, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: .85 }}><span>ETERNAL<br />PHILOSOPHY</span><span style={{ color: "#9b9d9a", fontSize: 11, fontWeight: 400, letterSpacing: ".18em" }}>TOKYO / JAPAN — 2026</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ marginBottom: 28, color: "#c9b58a", fontSize: 13, letterSpacing: ".2em" }}>WE CREATE TIME.</span>
        <span style={{ fontSize: 82, fontWeight: 700, letterSpacing: "-0.065em", lineHeight: .82 }}>AI DEVELOPMENT</span>
        <span style={{ alignSelf: "flex-end", color: "#c9b58a", fontSize: 98, fontWeight: 700, letterSpacing: "-0.075em", lineHeight: .82 }}>AUTOMATION</span>
        <span style={{ marginLeft: 90, fontSize: 86, fontWeight: 700, letterSpacing: "-0.07em", lineHeight: .82 }}>DIGITAL SYSTEMS</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#9b9d9a", fontSize: 10, letterSpacing: ".18em" }}><span style={{ width: 52, height: 1, background: "#c9b58a" }} />AI / AUTOMATION / DIGITAL PRODUCTS</div>
    </div>,
    size,
  );
}
