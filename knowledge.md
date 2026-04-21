# knowledge.md — 給下一個 Agent 的交接文件

此專案是 Louis (Chia-Jui) Chang 的個人網站。Vue 3 + TypeScript + Vite，部署到 GitHub Pages user site (`https://louischang0126.github.io/`)。內容源頭是 `c:/Users/qulip/Desktop/RESUME/Resume.typ`。

本文件讓你不用翻對話紀錄就能繼續開發。

---

## 使用者

- **Louis (Chia-Jui) Chang / 張家睿**
- NYCU CS B.S. (2022–2026) → M.S. Data Science & Engineering (2026–2028)
- 研究領域：Computer Vision（SAM3 / YOLO / D-FINE / VLM）、Robotics（ROS2 / PX4 / Diffusion Policy / UMI）、LLM Agents
- GitHub: `LouisChang0126`；Email: `qulip.louis.0126@gmail.com`
- 回覆習慣：**用繁體中文**，能讀英文技術內容
- 互動風格：**先討論再實作**；面對設計選擇時喜歡看到有預覽/範例的多選項；決策完就希望一次到位

---

## 已確認的設計決策（不要再問、不要重開）

| 項目 | 決定 |
|---|---|
| 風格 | **學術 + 開發者混合**：上半 academic homepage（Hero + News + Publications），下半 project showcase 卡片 |
| 技術棧 | Vue 3 + TypeScript + Vite 6；無 Vue Router、無 Pinia、無 vue-i18n（刻意避免依賴） |
| 部署 | GitHub Pages user site `LouisChang0126.github.io`；`vite.config.ts` base = `'/'` |
| 語言 | **中英雙語切換**（右上角按鈕，localStorage `locale`） |
| 主題 | **深淺色切換**（右上角按鈕，localStorage `theme`，預設讀 `prefers-color-scheme`） |
| 圖片 | **全部先用佔位圖**，ImagePlaceholder 元件自動偵測載入失敗 → 顯示灰底虛線框 + 路徑提示 |
| 強調色 | `--accent: #d64545`（淺）/`#ff6b6b`（深），沿用 Resume.typ 的紅 |

---

## 專案結構

```
LouisChang0126.github.io/
├── .github/workflows/deploy.yml    # push to main → build + deploy-pages artifact
├── public/
│   ├── github.svg                   # 複製自 RESUME/
│   ├── Resume.pdf                   # 複製自 RESUME/，Hero 的 Download CV 按鈕
│   ├── profile.jpg                  # ★ 使用者要自己放
│   ├── projects/{id}.jpg            # ★ 9 個佔位路徑，id 見 src/data/projects.ts
│   └── publications/yearguessr.png  # ★ 使用者要自己放
├── src/
│   ├── main.ts                      # createApp + 引入 3 支 CSS
│   ├── App.vue                      # 只做 section 組裝
│   ├── types.ts                     # Localized<T>, Project, Publication, ...
│   ├── shims-vue.d.ts
│   ├── composables/
│   │   ├── useLocale.ts             # ref<'en'|'zh'> + t(Localized) + toggle()
│   │   └── useTheme.ts              # ref<'light'|'dark'> + toggle()
│   ├── data/                        # ★ 所有內容都在這；改文字 = 改這裡
│   │   ├── profile.ts               # 姓名 / 頭銜 / tagline / 聯絡資訊 / resume 路徑
│   │   ├── news.ts                  # 時間線事件
│   │   ├── publications.ts          # 目前只有 YearGuessr
│   │   ├── projects.ts              # 9 個專案（featured 會出現在預設顯示）
│   │   ├── experience.ts            # Garmin / Uancare / HCIS Lab / TA
│   │   ├── awards.ts                # 4 個獎
│   │   ├── education.ts             # 學歷 + 分類 coursework
│   │   ├── skills.ts                # 7 類
│   │   ├── extracurricular.ts       # 3 個社團
│   │   └── messages.ts              # UI 字串（區塊標題、按鈕）中英版
│   ├── components/
│   │   ├── NavBar.vue               # sticky 頂欄 + brand + anchor links + 2 個 toggle
│   │   ├── Hero.vue                 # 頭像 + 姓名 + tagline + 聯絡 pills + Download CV
│   │   ├── News.vue                 # 預設顯示 4 筆，可展開全部
│   │   ├── Publications.vue + PublicationCard.vue   # 左圖右文，authors 粗體 Chia-Jui
│   │   ├── Projects.vue + ProjectCard.vue           # 2 欄 grid（手機 1 欄）；預設顯 featured，可展開全部
│   │   ├── Experience.vue           # 左側紅點時間軸
│   │   ├── Awards.vue               # 🏆 條列
│   │   ├── Education.vue            # 學歷 + coursework 分類 pills
│   │   ├── Skills.vue               # 7 類 pill
│   │   ├── Extracurricular.vue      # 預設折疊（+/−）
│   │   ├── Footer.vue
│   │   ├── ImagePlaceholder.vue     # ★★★ 核心：載入失敗就顯示灰框 + path 提示
│   │   ├── LangToggle.vue
│   │   └── ThemeToggle.vue
│   └── styles/
│       ├── base.css                 # reset + container + section header
│       ├── theme.css                # CSS vars，[data-theme="dark"] 覆寫
│       └── typography.css           # 字體 / 標籤 / link-pill
├── index.html                       # data-theme="light" 預設
├── vite.config.ts                   # base: '/'，alias @ → src/
├── tsconfig.json                    # strict, bundler resolution, paths @/*
├── package.json
├── README.md                        # 使用者導向的精簡說明
└── knowledge.md                     # 本檔案
```

---

## ★ ImagePlaceholder 約定（最重要）

所有圖片都經過 [`src/components/ImagePlaceholder.vue`](src/components/ImagePlaceholder.vue)。

```vue
<ImagePlaceholder
  src="/projects/safmc.jpg"
  :alt="t(project.title)"
  label="Optional custom label"
  aspect-ratio="16 / 9"
  :rounded="false"
/>
```

- `@error` 觸發時 `failed = true`，改渲染虛線灰框 + 🖼 icon + `replace: /projects/safmc.jpg` code
- 使用者只要把真實檔案放到 `public/projects/safmc.jpg`，該卡片自動變實圖，**不需改程式碼**
- 新增圖片位置時，也一律走這個元件；不要直接用 `<img>`

**請勿**：把佔位圖渲染成真實 SVG 再塞進 `public/`。使用者已表達偏好「全部先用佔位、之後自己補」。讓灰框維持醒目。

---

## 雙語資料約定

```ts
// types.ts
export type Locale = 'en' | 'zh';
export type Localized<T = string> = { en: T; zh: T };
```

- 所有可翻譯欄位必須是 `Localized<...>`；日期、tag 文字（YOLO、ROS2）**不翻譯**
- 取值：`const { t } = useLocale(); t(project.title)`
- 新增資料時英中並列寫，翻譯缺漏一目瞭然

**中文翻譯現況**：我做了一次 best-effort 翻譯，使用者可能還沒全部校對。若使用者要修中文，去對應 `src/data/*.ts` 編輯即可。

---

## 主題系統

- 兩套 CSS 變數在 [`src/styles/theme.css`](src/styles/theme.css)：`:root` 與 `[data-theme="dark"]`
- `useTheme()` 寫 `document.documentElement.setAttribute('data-theme', v)`
- 新增元件時一律用變數（`var(--bg)`, `var(--fg)`, `var(--accent)`, `var(--muted)`, `var(--card)`, `var(--border)`, `var(--tag-bg/fg)`, `var(--link)`, `var(--shadow)`）
- GitHub SVG logo 在深色主題用 `filter: invert(1)` 反白（見 Hero.vue / ProjectCard.vue / PublicationCard.vue 的 `.gh-icon` 樣式）

---

## 部署

- Workflow `.github/workflows/deploy.yml` 已就位：push main → `npm ci` → `npm run build`（含 `vue-tsc --noEmit`）→ `actions/upload-pages-artifact` → `actions/deploy-pages`
- 使用者尚未在 GitHub 建立 repo。首次設定流程（README.md 也有寫）：
  1. GitHub 建立 repo 名稱**必須**是 `LouisChang0126.github.io`
  2. Settings → Pages → Source: **GitHub Actions**
  3. `git init && git add . && git commit -m "init" && git remote add origin git@github.com:LouisChang0126/LouisChang0126.github.io.git && git push -u origin main`

---

## 指令

```bash
npm install       # 初次
npm run dev       # localhost:5173（被占用會跳 5174）
npm run build     # vue-tsc --noEmit + vite build → dist/（已驗證 98KB JS / 14KB CSS）
npm run preview   # 本機預覽 dist/
```

---

## 交付時已完成、使用者尚未做的事

**使用者端待辦**：
1. 放真實圖片到 `public/profile.jpg`、`public/projects/*.jpg`、`public/publications/yearguessr.png`
2. 校對 [`src/data/*.ts`](src/data/) 中文翻譯（名字、專業術語、公司名中英）
3. 調整 Hero tagline（目前是我幫忙寫的，位於 `src/data/profile.ts`）
4. 決定 Projects 要哪幾個 `featured: true`（目前：safmc / garmin-hazard / garmin-detection / umi / meichu）
5. 建立 GitHub repo 並推送（首次部署需要）

**可能的下一步工作**：
- 加一個「Contact」區塊（目前只在 Hero 有聯絡 pills）
- 把 Resume.typ 編譯成 PDF 並自動複製到 public/（目前是手動複製一次）
- News 加上 RSS / Atom feed
- 加社交圖片 (`og:image`)、`sitemap.xml`
- Scroll reveal 動畫（若使用者開口要）
- `src/data/news.ts` 自動排序（目前是我手動按時間倒排）

**不要自作主張做的事**：
- 加重型動畫 framework（Motion One / GSAP）— 使用者選了「混合 academic+dev」而不是純 developer vibes，克制
- 加 Vue Router — 目前是 SPA 單頁，錨點跳轉就夠
- 加 Pinia / vue-i18n — 現在的 composable 已經夠輕

---

## 對話歷史的精要

1. 使用者把 Resume.pdf + Resume.typ 給我，要求做個人網頁
2. 明確要求「要跟我討論樣式」「不要只有文字、要保留放圖片的地方」
3. 第一輪 AskUserQuestion（4 題 with ASCII 預覽）→ 選了學術+開發者混合、Vue+TS、所有圖片都要、GitHub Pages
4. 第二輪 AskUserQuestion（4 題）→ 選了 user site repo、雙語、全部用佔位圖、深淺色切換
5. 寫計畫 → ExitPlanMode → 使用者通過
6. 實作全部 42 檔、`npm install && npm run build` 成功、`npm run dev` 啟動成功
7. 使用者說要開新 Agent 寫 knowledge.md（= 本檔案）

---

## 環境

- Windows 11 / bash shell (Git Bash)
- 工作目錄應為 `c:/Users/qulip/Desktop/LouisChang0126.github.io/`（**不是** RESUME repo）
- Node / npm 可用；`node_modules` 已安裝；`dist/` 已 build 過一次
- 今天日期：2026-04-21
