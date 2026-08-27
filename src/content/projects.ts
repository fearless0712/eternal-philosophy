import type { Localized } from "@/i18n/config";

export type ProjectStatus = "live" | "in-development" | "concept" | "archived";

export type ProjectContent = {
  shortDescription: string;
  problem: string;
  idea: string;
  system: string;
  result: string;
  role?: string;
  keyFeatures?: string[];
  challenges?: string;
  futureImprovements?: string;
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;
  technology: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: ProjectStatus;
  featured: boolean;
  developmentPeriod?: string;
  content: Localized<ProjectContent>;
};

export const projects: Project[] = [
  {
    title: "EQUA Flow",
    slug: "equa-flow",
    category: "AI / AUTOMATION",
    year: "2026",
    technology: ["Python 3.12", "FastAPI", "Uvicorn", "Pydantic", "OpenAI Responses API", "Structured Outputs", "Jinja2", "JavaScript", "pytest"],
    githubUrl: "https://github.com/fearless0712/equa-flow",
    liveUrl: "https://equa-flow.onrender.com/",
    status: "live",
    featured: true,
    content: {
      ja: {
        shortDescription: "問い合わせの分類、優先順位付け、要約、返信案作成、CSV一括処理を統合したAI業務支援ワークフロー。",
        problem: "問い合わせ対応では、内容確認、担当振り分け、緊急度判断、要約、返信文の下書きといった初期処理に繰り返し作業が発生する。大量の問い合わせでは、この整理作業そのものが担当者の時間を消費し、人が本来行うべき判断や対応に集中しにくくなる。",
        idea: "問い合わせ本文をAIで直接「回答」させるのではなく、カテゴリー、緊急度、要約、返信案という業務で扱いやすい構造化データへ変換する。AIを最終判断者ではなく、初期整理を担う業務支援レイヤーとして設計した。",
        system: "単一問い合わせとCSV一括処理の両方に対応。CSVはAI処理前に行単位で検証し、正常行だけを最大3件並行で解析する。1件が失敗しても全体を停止させず部分成功として処理し、結果をCSVで出力する。AI実装はInquiryAnalyzerインターフェースで分離し、Fake AIとOpenAIを切り替えられる。",
        result: "問い合わせの分類、優先順位付け、要約、返信案作成という反復的な初期処理を一つのワークフローへ統合した。AI出力をPydanticで再検証し、返信案は自動送信せず人間の確認を前提にすることで、AI活用と業務上の信頼性を分離した。",
        role: "プロダクト設計 / システム設計 / 開発 / AI支援開発",
        keyFeatures: ["AIカテゴリー分類", "緊急度判定", "問い合わせ要約", "返信案生成", "CSV一括解析", "最大3件の並行処理", "部分成功処理", "CSV結果出力", "Fake AIモード", "Structured Outputs", "AI出力再検証", "CSRF・レート制限・セキュリティヘッダー", "CSV Formula Injection対策", "自動テスト100件・カバレッジ92%"],
        challenges: "AIによる一括処理では、1件のProvider failureによって処理全体を失敗させない設計が必要だった。また、AI出力をそのまま信頼せず、固定カテゴリーや緊急度をPydanticモデルによって再検証する信頼境界を設計した。",
        futureImprovements: "問い合わせ履歴管理、担当者アサイン、CRM連携、承認ワークフロー、分析ダッシュボードを追加し、受付から対応完了までを扱う業務基盤へ拡張できる。",
      },
      en: {
        shortDescription: "An AI-assisted inquiry workflow for classification, prioritization, summarization, response drafting, and batch CSV processing.",
        problem: "Customer support teams repeatedly spend time reviewing inquiries, assigning ownership, assessing urgency, summarizing context, and drafting initial responses. At scale, this preparation consumes the time that should be reserved for judgement and meaningful customer interaction.",
        idea: "Rather than asking AI to answer inquiries autonomously, the system converts each message into operationally useful structured data: category, urgency, summary, and a response draft. AI acts as a preparation layer, never the final decision-maker.",
        system: "The application supports both individual inquiries and batch CSV processing. Rows are validated before any AI call, and valid entries are analyzed with a maximum concurrency of three. A provider failure affects only that item, preserving partial results for export. An InquiryAnalyzer interface cleanly separates Fake AI and OpenAI implementations.",
        result: "The repetitive first stage of inquiry handling now runs as one coherent workflow. Pydantic validates AI output against controlled categories and urgency levels, while response drafts always remain subject to human review—separating automation from operational accountability.",
        role: "Product design / System design / Development / AI-assisted development",
        keyFeatures: ["AI category classification", "Urgency assessment", "Inquiry summarization", "Response drafting", "Batch CSV analysis", "Concurrency limited to three", "Partial-success processing", "CSV result export", "Fake AI mode", "Structured Outputs", "AI output revalidation", "CSRF, rate limiting, and security headers", "CSV formula-injection protection", "100 automated tests / 92% coverage"],
        challenges: "Batch AI processing needed to survive individual provider failures without discarding successful work. The system also required a clear trust boundary: model output is never accepted at face value and is revalidated against controlled categories and urgency levels through Pydantic models.",
        futureImprovements: "The workflow can grow into a complete inquiry operations platform with history, ownership assignment, CRM integration, approvals, and analytics from intake through resolution.",
      },
    },
  },
  {
    title: "EQUA Analytics",
    slug: "equa-analytics",
    category: "DATA / AI",
    year: "2026",
    technology: ["Python 3.12", "FastAPI", "Pydantic", "pandas", "Decimal", "Plotly", "Jinja2", "OpenAI Responses API", "Structured Outputs", "WeasyPrint", "Docker", "Render", "pytest"],
    githubUrl: "https://github.com/fearless0712/equa-analytics",
    liveUrl: "https://equa-analytics.onrender.com",
    status: "live",
    featured: true,
    content: {
      ja: {
        shortDescription: "販売CSVを、再現可能なKPI、可視化、AI支援インサイト、共有可能なレポートへ変換する分析アプリケーション。",
        problem: "販売データがCSVとして存在していても、KPI計算、月次比較、商品・カテゴリ・地域分析、異常候補の確認、報告資料作成までを人手で行うと時間がかかる。また、生成AIに生データをそのまま解析させる方法では、計算根拠や再現性の管理が難しい。",
        idea: "数値計算と異常候補検出は決定論的なロジックで行い、AIは計算済み結果の解釈と確認事項の提案に限定する。分析の正確性をAIに依存させず、AIを「分析結果を読むレイヤー」として利用する構造にした。",
        system: "販売CSVを検証・正規化し、pandasとDecimalでKPI、時系列、商品、カテゴリ、地域別分析を実行。IQRルールで外れ値候補を検出し、Dashboardへ表示する。AIへ渡す情報は計算済みの上限付きコンテキストのみ。HTML / PDF Business Reportも同じ分析モデルから生成する。",
        result: "CSVアップロードからデータ検証、KPI計算、可視化、データ品質評価、AI解釈、HTML/PDFレポート生成までを一つのWebアプリへ統合した。AIが利用できない場合でも決定論的分析とレポート出力を継続できる設計にした。",
        role: "プロダクト設計 / 分析設計 / 開発 / AI支援開発",
        keyFeatures: ["売上・数量・取引数", "平均注文額", "月次分析", "商品・カテゴリ・地域ランキング", "前月差・変化率", "IQR外れ値候補検出", "データ品質評価", "AI Insights", "HTML / PDF Report", "AI disabled / fake / openaiモード", "CSV最大10,000行", "メモリ内で完結するプライバシー重視の処理"],
        challenges: "AIに分析そのものを任せると再現性と正確性の境界が曖昧になるため、数値計算とAI解釈を完全に分離した。AIには計算済み情報だけを渡し、KPI再計算や根拠のない経営判断を行わせない設計にした。",
        futureImprovements: "複数CSV統合、期間比較、予測分析、定期レポート、自動データ取得、企業別KPIテンプレートへ拡張できる。",
      },
      en: {
        shortDescription: "A business analytics application that turns sales CSV data into reproducible KPIs, visual analysis, AI-assisted insight, and shareable reports.",
        problem: "Although sales data often exists in CSV files, calculating KPIs, comparing periods, analyzing products, categories, and regions, reviewing anomalies, and preparing reports remain time-consuming manual tasks. Sending raw data directly to generative AI also makes calculation lineage and reproducibility difficult to control.",
        idea: "All numerical analysis and anomaly candidate detection are deterministic. AI is deliberately limited to interpreting already-computed results and suggesting questions worth investigating. Accuracy never depends on the model; AI serves as a reading layer over a verifiable analysis core.",
        system: "The application validates and normalizes sales CSVs, then uses pandas and Decimal to calculate KPIs and analyze time series, products, categories, and regions. IQR rules identify potential outliers. Only bounded, precomputed context reaches the AI, and both HTML and PDF business reports are generated from the same analysis model.",
        result: "CSV validation, KPI computation, visualization, data-quality assessment, AI interpretation, and HTML/PDF reporting now form a single application. Deterministic analytics and reporting remain fully available even when the AI provider is disabled or unavailable.",
        role: "Product design / Analytics design / Development / AI-assisted development",
        keyFeatures: ["Sales, quantity, and transaction KPIs", "Average order value", "Monthly analysis", "Product, category, and regional rankings", "Period-over-period change", "IQR outlier candidates", "Data-quality assessment", "AI Insights", "HTML / PDF reports", "Disabled, fake, and OpenAI modes", "Up to 10,000 CSV rows", "Privacy-conscious in-memory processing"],
        challenges: "Allowing AI to perform the analysis would blur the boundary of accuracy and reproducibility. Numerical computation and model interpretation were therefore separated completely: the model receives computed evidence only and cannot recalculate KPIs or manufacture unsupported business conclusions.",
        futureImprovements: "Potential extensions include multi-file analysis, flexible period comparison, forecasting, scheduled reports, automated ingestion, and company-specific KPI templates.",
      },
    },
  },
  {
    title: "AI Localization App",
    slug: "ai-localization-app",
    category: "AI / LOCALIZATION",
    year: "2026",
    technology: ["Python", "FastAPI", "Jinja2", "SQLAlchemy", "PostgreSQL", "SQLite", "OpenAI Responses API", "Pydantic Structured Outputs", "Alembic", "Docker"],
    githubUrl: "https://github.com/fearless0712/ai-localization-app",
    liveUrl: "https://ai-localization-app.onrender.com",
    status: "live",
    featured: true,
    content: {
      ja: {
        shortDescription: "AI翻訳候補と翻訳メモリ、用語集、決定論的QA、人間承認、検証付き出力を統合したローカライズワークフロー。",
        problem: "JSONやCSVのローカライズでは、単純な機械翻訳だけでは構造破壊、placeholder欠損、用語不統一、過去翻訳の再利用不足、修正後の古い翻訳残存などが発生する。AI翻訳だけではプロダクション用途の品質管理が不足する。",
        idea: "AIを翻訳候補生成のみに使用し、構造保持、Translation Memory、Glossary、QA、承認、Export検証は決定論的システムで管理する。「AI翻訳アプリ」ではなく、ローカライズ業務全体のworkflowとして設計した。",
        system: "JSON / CSVを解析して構造を保持したsegmentへ分解。Exact Translation Memoryを先に適用し、関連Glossaryを抽出した上で未翻訳部分だけAIへ送信する。翻訳後はplaceholder・glossary・structureをQAし、人間によるreview / approvalを経て、round-trip validation済みJSON / CSVとして出力する。",
        result: "AI翻訳、Translation Memory、Glossary、QA、人間承認、検証付きExportを一つのworkflowへ統合した。AI Providerと決定論的な品質管理コアを分離し、AI出力だけでは保証できない構造・用語・placeholder品質をシステム側で管理できるようにした。",
        role: "プロダクト設計 / ワークフロー設計 / 開発 / AI支援開発",
        keyFeatures: ["JSON / CSV localization", "nested JSON対応", "Translation Memory", "Glossary", "placeholder保持", "古い翻訳の検出", "人間によるレビュー・承認", "変更履歴", "決定論的QA", "検証付きJSON / CSV出力", "AI部分失敗処理", "失敗segmentの再試行", "PostgreSQL / SQLite", "Alembic migrations", "認証・プロジェクト所有権"],
        challenges: "翻訳品質だけでなく、JSON/CSVの構造保持、source revision、placeholder、Glossary、承認状態を同時に管理する必要があった。AI Providerをworkflowから分離し、AI障害や再試行でも既存のhuman / TM / approved translationを上書きしない設計にした。",
        futureImprovements: "追加ファイル形式、複数AI Provider、チームレビュー、翻訳者権限管理、差分レビュー、CAT tool連携、API化へ拡張できる。",
      },
      en: {
        shortDescription: "A production-oriented localization workflow combining AI translation candidates with translation memory, terminology control, deterministic QA, human approval, and validated export.",
        problem: "Straight machine translation of JSON and CSV can break structure, lose placeholders, introduce inconsistent terminology, ignore previous translations, and leave stale target text after source changes. AI translation alone does not provide the controls required for production localization.",
        idea: "AI is used only to generate translation candidates. Structure preservation, translation memory, glossary enforcement, QA, approval, and export validation remain deterministic. The product is designed as an end-to-end localization workflow, not simply an AI translation interface.",
        system: "JSON and CSV files are parsed into structure-preserving segments. Exact translation-memory matches are applied first, relevant glossary terms are selected, and only untranslated content is sent to AI. Placeholder, terminology, and structural QA precede human review and approval, followed by round-trip-validated JSON or CSV export.",
        result: "AI translation, translation memory, terminology control, QA, human approval, and validated export now operate as one workflow. Separating the AI provider from the deterministic quality core allows the system—not the model—to protect structure, terminology, and placeholders.",
        role: "Product design / Workflow design / Development / AI-assisted development",
        keyFeatures: ["JSON and CSV localization", "Nested JSON support", "Translation memory", "Glossary enforcement", "Placeholder preservation", "Stale translation detection", "Human review and approval", "Revision history", "Deterministic QA", "Validated JSON / CSV export", "Partial AI failure handling", "Failed-segment retry", "PostgreSQL / SQLite", "Alembic migrations", "Authentication and project ownership"],
        challenges: "The workflow had to manage structure, source revisions, placeholders, terminology, and approval state together—not translation quality alone. Decoupling the AI provider ensures that failures and retries never overwrite human, translation-memory, or previously approved content.",
        futureImprovements: "The platform can expand to additional file formats, multiple AI providers, team review, translator permissions, change-focused review, CAT-tool integrations, and a public API.",
      },
    },
  },
  {
    title: "EQUA",
    slug: "equa-asset-management",
    category: "WEB APPLICATION / DATA",
    year: "2026",
    technology: ["Python", "Flask", "Jinja2", "Flask-Login", "Flask-Bcrypt", "Flask-WTF", "SQLAlchemy", "SQLite", "PostgreSQL", "Chart.js", "Bootstrap", "PWA", "Gunicorn", "Render"],
    githubUrl: "https://github.com/fearless0712/kakeibo-app",
    liveUrl: "https://kakeibo-app-mihg.onrender.com/login?next=%2F",
    status: "live",
    featured: true,
    content: {
      ja: {
        shortDescription: "銀行CSVを共通台帳へ正規化し、収支、残高、予算、資産推移を一元管理する資産管理アプリケーション。",
        problem: "銀行明細CSVは金融機関やCSV種類によって列名、文字コード、金額表現、取引形式が異なる。そのままでは収入・支出・残高を横断集計できず、家計や資産管理のために手作業で整理する必要がある。",
        idea: "銀行固有のCSV解釈をParser層へ隔離し、すべての取引を共通Transaction形式へ正規化する。入力形式と集計ロジックを分離することで、CSV形式が増えても資産台帳側のロジックを変更せず拡張できる構造にした。",
        system: "CSV形式を自動判定し、日付・摘要・金額・種別・残高・カテゴリーを共通Transactionへ変換。ユーザー単位で重複排除し、ImportHistoryと取引を関連付けることでCSV単位の取消・再計算を実現。SQLAlchemyを利用してSQLiteとPostgreSQLを共通データ層で扱う。",
        result: "銀行CSVの取込から収支分類、残高、資産推移、カテゴリー分析、予算、年間レポートまでを一つの資産台帳へ統合した。認証付きWebアプリ、PWA、PostgreSQL本番構成まで発展させ、ローカル用途からWebサービスまで同じデータモデルで扱えるようにした。",
        role: "プロダクト設計 / システム設計 / 開発 / AI支援開発",
        keyFeatures: ["Sony銀行CSV自動判定", "UTF-8 / BOM / CP932対応", "Transaction正規化", "SHA-256 fingerprint重複排除", "CSV追加インポート", "Import履歴", "CSV単位取消", "残高再計算", "月次・累計統計", "資産推移", "カテゴリー分析", "年間レポート", "認証・ユーザー別データ分離", "SQLite / PostgreSQL", "PWA", "Render deployment"],
        challenges: "複数形式の銀行CSVを扱いながら、重複取込、取消、残高再計算、ユーザー別データ分離を一貫して維持する必要があった。銀行固有処理をParser層へ分離し、共通Transactionを中心にデータモデルを構築した。",
        futureImprovements: "Sony銀行以外のParser、口座管理UI、投資・現金残高編集、取引編集、カテゴリー別予算、レポート出力、定期収支、認証強化、CI/E2Eへ拡張できる。",
      },
      en: {
        shortDescription: "An asset-management application that normalizes bank CSV data into one ledger for income, expenses, balances, budgets, and portfolio analytics.",
        problem: "Bank CSV exports vary by institution and statement type, with different columns, encodings, amount conventions, and transaction formats. Without normalization, income, expenses, and balances cannot be analyzed consistently and require substantial manual preparation.",
        idea: "Bank-specific interpretation is isolated behind a parser layer, while every record is normalized into a shared Transaction model. Separating input formats from ledger logic allows new CSV formats to be added without rewriting the asset-management core.",
        system: "The application detects CSV formats automatically and converts dates, descriptions, amounts, transaction types, balances, and categories into a common model. User-scoped fingerprints prevent duplicates. Linking transactions to ImportHistory enables file-level rollback and balance recalculation. SQLAlchemy provides one data layer across SQLite and PostgreSQL.",
        result: "CSV import, income and expense classification, balances, asset history, category analysis, budgets, and annual reporting now live in one ledger. The same model supports a local workflow and a production web service with authentication, PWA capabilities, and PostgreSQL.",
        role: "Product design / System design / Development / AI-assisted development",
        keyFeatures: ["Sony Bank CSV auto-detection", "UTF-8, BOM, and CP932 support", "Transaction normalization", "SHA-256 fingerprint deduplication", "Incremental CSV import", "Import history", "File-level rollback", "Balance recalculation", "Monthly and cumulative statistics", "Asset history", "Category analysis", "Annual reports", "Authentication and user-scoped data", "SQLite / PostgreSQL", "PWA", "Render deployment"],
        challenges: "Supporting multiple bank formats while preserving deduplication, rollback, balance recalculation, and strict user-level isolation required a stable domain model. Bank-specific behavior was confined to parsers, with the shared Transaction model serving as the system's center of gravity.",
        futureImprovements: "Next steps include additional bank parsers, account-management UI, editable investment and cash balances, transaction editing, category budgets, exports, recurring transactions, stronger authentication, and CI/E2E coverage.",
      },
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
