# 株式会社The Hearth

The Hearthの公式サイトです。

## ✨ 実装済み機能

- **ローディング画面** - ロゴのフェードインアニメーション + プログレスバー
- **ヘッダー** - スクロール時の背景変化、モバイルメニュー（clip-path アニメーション）
- **ヒーロースライダー** - 自動再生、プログレスバー、タッチスワイプ、キーボード操作
- **サービステッカー** - 無限スクロールテキスト
- **Reportsセクション** - 研究レポートカテゴリフィルター、グリッドレイアウト（featured対応）
- **Storyセクション** - 記事カード、画像ホバー効果
- **Purposeセクション** - 黒背景、大型背景テキスト
- **Serviceセクション** - 4カラムグリッド
- **Aboutセクション** - 会社概要、数字カウンターアニメーション
- **Newsセクション** - ニュース一覧、カテゴリバッジ
- **コンタクトバナー** - CTAセクション
- **フッター** - 詳細ナビゲーション、SNSリンク
- **Cookie通知** - LocalStorage連携
- **スクロールアニメーション** - Intersection Observer APIによるfade-up
- **レスポンシブ対応** - モバイル/タブレット/デスクトップ

## 🛠 技術スタック

- **Framework**: Hono (Edge-first web framework)
- **Runtime**: Cloudflare Workers / Vercel Edge
- **Build**: Vite + @hono/vite-build
- **Styling**: Pure CSS (変数 + アニメーション)
- **Fonts**: Google Fonts (Noto Sans JP, Inter)
- **Icons**: Font Awesome 6
- **Analytics**: Google Analytics (環境変数で設定)
- **Images**: Unsplash (プレースホルダー)

## 📁 プロジェクト構造

```
webapp/
├── src/
│   ├── index.tsx          # メインアプリ (Cloudflare Pages)
│   └── index-node.tsx     # Node.js版 (Vercel)
├── api/
│   └── handler.ts         # Vercelサーバーレス関数
├── public/
│   └── static/
│       ├── style.css      # メインスタイルシート
│       └── app.js         # フロントエンドJS
├── vercel.json            # Vercel設定
├── wrangler.jsonc         # Cloudflare Pages設定
└── vite.config.ts         # Viteビルド設定
```

## 🚀 デプロイ方法

### Vercel
1. GitHubリポジトリを作成してプッシュ
2. [Vercel](https://vercel.com) でリポジトリをインポート
3. Framework Preset: `Other`
4. Build Command: (空白)
5. Output Directory: (空白)
6. Install Command: `npm install`

### Cloudflare Pages
```bash
npm run build
npm run deploy
```

## 💻 ローカル開発

```bash
# 依存関係のインストール
npm install

# 環境変数の設定（初回のみ）
cp .env.example .env.local
# .env.local を編集してGoogle Analytics IDを設定

# ビルド
npm run build

# PM2で起動
pm2 start ecosystem.config.cjs
# または
npx wrangler pages dev dist --port 3000
```

## 🔐 環境変数

本プロジェクトではGoogle Analyticsを環境変数で管理しています。

### ローカル開発

1. `.env.local` ファイルを作成（`.env.example` をコピー）
2. Google Analytics測定IDを設定：
   ```bash
   VITE_GA_ID=G-XXXXXXXXXX
   ```
3. ローカルで計測したくない場合は空にする

### Vercel本番環境

1. Vercelダッシュボード → Settings → Environment Variables
2. `VITE_GA_ID` に実際のGoogle Analytics測定IDを設定
3. 再デプロイで反映

詳細は [docs/GOOGLE_ANALYTICS_SETUP.md](docs/GOOGLE_ANALYTICS_SETUP.md) を参照してください。

## 📊 データ

現在はモックデータを使用しています。実際の運用では：
- Cloudflare D1 (SQLite) や KV でデータを管理
- APIエンドポイント: `/api/news`

---

**Last Updated**: 2026-02-18  
**Status**: ✅ Active
