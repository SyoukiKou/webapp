# データ管理

このフォルダには、Webサイトで表示されるニュースとレポートのデータが保存されています。

## 📄 ファイル

### `news.ts`

ニュース記事のデータを管理します。

**データ項目：**

- `id`: 一意の識別番号（重複しないように連番で付ける）
- `slug`: URL用の英数字ID（例: `website-renewal-2026`）
- `date`: 公開日（形式: `YYYY.MM.DD`）
- `category`: カテゴリー（`News`, `Event`, `Project`, `Press`, `Award`）
- `title`: タイトル
- `description`: 本文・説明文

**新しいニュースを追加する方法：**

1. `news.ts` を開く
2. 配列の先頭に新しいオブジェクトを追加（最新が上）
3. `id` は既存の最大値+1
4. `slug` は一意の英数字（例: `new-service-launch-2026`）
5. 保存してサーバーを再起動

**例：**

```json
{
  "id": 7,
  "slug": "new-service-launch-2026",
  "date": "2026.03.01",
  "category": "News",
  "title": "新サービスをリリースしました",
  "description": "新しいサービスの説明文をここに記載します。"
}
```

### `reports.ts`

研究レポートのデータを管理します。トップページの「Reports」セクションに表示されます。

**データ項目：**

- `id`: 一意の識別番号
- `slug`: URL用の英数字ID（例: `ai-sensibility-judgment-value`）
- `title`: タイトル
- `client`: クライアント名
- `subtitle`: サブタイトル
- `summary`: 詳細ページの冒頭要約
- `publishedAt`: 公開日（`YYYY-MM-DD`）
- `tags`: タグの配列（例: `['AI', '主観的判断']`）
- `img`: 画像URL
- `featured`: トップページに表示するか（`true` / `false`）
- `category`: カテゴリー（`ai`, `neuroaesthetics`, `leadership`, `social-prescribing`）
- `year`: 年度
- `intro`: 詳細ページの導入文
- `sections`: 本文セクションの配列
- `takeaways`: 要点の配列

**新しいレポートを追加する方法：**

1. `reports.ts` を開く
2. `slug` を一意に設定する
3. `summary` と `sections` を書き、一覧と詳細の両方に流用できるようにする
4. 画像は `/static/` フォルダに配置するか、外部URLを使用
5. 保存してサーバーを再起動

## 🔄 変更を反映する方法

1. TSファイルを編集
2. ファイルを保存
3. サーバーを再起動（開発環境）
   ```bash
   npm run dev
   ```

## ⚠️ 注意事項

- JSON互換の構文エラーに注意（カンマ、括弧の閉じ忘れなど）
- `id` は重複しないこと
- `slug` も重複しないこと（URLになります）
- 日付は新しい順に並べると管理しやすい
- バックアップを取ることを推奨
