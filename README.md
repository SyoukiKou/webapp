# 株式会社博展 HAKUTEN | Communication Design®

博展公式サイト（https://www.hakuten.co.jp/）の忠実な再現版です。

## 🌐 デモ

サンドボックス: https://3000-i9v7ace75xq9ssgjnxubl-cbeee0f9.sandbox.novita.ai

## ✨ 実装済み機能

- **ローディング画面** - ロゴのフェードインアニメーション + プログレスバー
- **ヘッダー** - スクロール時の背景変化、モバイルメニュー（clip-path アニメーション）
- **ヒーロースライダー** - 自動再生、プログレスバー、タッチスワイプ、キーボード操作
- **サービステッカー** - 無限スクロールテキスト
- **Worksセクション** - カテゴリフィルター、グリッドレイアウト（featured対応）
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
npm install
npm run build
# PM2で起動
pm2 start ecosystem.config.cjs
# または
npx wrangler pages dev dist --port 3000
```

## 📊 データ

現在はモックデータを使用しています。実際の運用では：
- Cloudflare D1 (SQLite) や KV でデータを管理
- APIエンドポイント: `/api/works`, `/api/news`, `/api/story`

## 🔗 参考

- 元サイト: https://www.hakuten.co.jp/
- 株式会社博展: Communication Design® - 体験価値の創造を通じて、企業・団体のコミュニケーションをデザイン

---

**Last Updated**: 2026-02-18  
**Status**: ✅ Active
