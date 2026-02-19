# Google Analytics 設定手順（環境変数版）

このプロジェクトでは環境変数を使ってGoogle Analyticsを安全に設定しています。

## Step 1: Google Analytics測定IDを取得

1. [Google Analytics](https://analytics.google.com/)にアクセス
2. 新しいプロパティを作成し、測定ID（`G-XXXXXXXXXX`形式）を取得

## Step 2: ローカル環境での設定

プロジェクトのルートにある`.env.local`ファイルを編集：

```bash
# .env.local
VITE_GA_ID=G-XXXXXXXXXX
```

※ローカルでアクセスを計測したくない場合は空にする：
```bash
VITE_GA_ID=
```

※`.env.local`は`.gitignore`に含まれているため、GitHubにはアップロードされません

## Step 3: Vercelでの環境変数設定

1. [Vercelダッシュボード](https://vercel.com/)にアクセス
2. プロジェクト → **Settings** → **Environment Variables**
3. 以下を追加：
   - **Key**: `VITE_GA_ID`
   - **Value**: `G-XXXXXXXXXX`（実際のGA測定ID）
   - **Environment**: Production にチェック

## Step 4: 再デプロイ

環境変数設定は次回デプロイ時から有効になります：

```bash
git add .
git commit -m "feat: Add Google Analytics with environment variables"
git push origin main
```

Vercelが自動的にビルドを開始します。

## Step 5: 動作確認

1. デプロイ完了後、本番サイトにアクセス
2. Google Analyticsの「リアルタイム」レポートで自分のアクセスが計測されていれば成功

## 仕組み

- `src/components/layout.ts`の`pageHead`関数で環境変数を読み込み
- `VITE_GA_ID`が設定されている場合のみGoogle Analyticsスクリプトを出力
- ローカル開発時は空にすることで計測を無効化できる

## 注意事項

- 環境変数名は必ず`VITE_`で始める必要があります（Viteの仕様）
- `.env.local`は絶対にGitにコミットしないこと
- Vercel再デプロイ後でないと反映されません
