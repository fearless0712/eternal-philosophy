import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#050505", color: "#eeeae2", fontFamily: "Arial, sans-serif", fontSize: 74, fontWeight: 700, letterSpacing: "-0.12em" }}>E<span style={{ color: "#c9b58a" }}>/</span>P</div>,
    size,
  );
}
