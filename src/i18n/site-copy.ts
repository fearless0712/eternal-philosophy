import type { Localized } from "./config";

export const siteCopy = {
  heroFootnote: { ja: "AIと自動化で、時間を生み出す仕組みをつくる。", en: "I build systems that create time." },
  services: [
    { title: "AI DEVELOPMENT", description: { ja: "知性を組み込んだシステムを設計する。", en: "Systems powered by intelligence." } },
    { title: "AUTOMATION", description: { ja: "繰り返し作業を、仕組みに変える。", en: "Remove repetitive work." } },
    { title: "WEB SYSTEMS", description: { ja: "実際に使われ続ける道具をつくる。", en: "Build tools people actually use." } },
    { title: "DATA", description: { ja: "情報を、判断できる形へ変える。", en: "Turn information into decisions." } },
  ],
  about: {
    accent: { ja: "考える時間。つくる時間。前へ進む時間。", en: "TIME TO THINK. TIME TO CREATE. TIME TO MOVE FORWARD." },
    body1: { ja: "AI、自動化、Webシステムを設計する上で大切にしているのは、技術が仕事の中へ自然に溶け込み、人の注意と時間を取り戻すことです。", en: "I design AI, automation, and web systems around one belief: technology is most valuable when it disappears into the work and gives people their attention back." },
    body2: { ja: "ソフトウェアを増やすのではなく、意図を持って設計され、変化に対応し、新しい可能性を生み出す仕組みをつくります。", en: "Not more software. Better systems—built with intent, made to evolve, and measured by what they make possible." },
  },
} satisfies {
  heroFootnote: Localized<string>;
  services: { title: string; description: Localized<string> }[];
  about: Record<"accent" | "body1" | "body2", Localized<string>>;
};
