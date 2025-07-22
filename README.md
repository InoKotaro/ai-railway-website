# AI電鉄 WEBサイト (ポートフォリオ)

Next.js と Tailwind CSS を使い、鉄道会社をイメージしてWEBサイトを制作致しました。<br>
企業サイトを想定し、ヘッダー、スライダー、お知らせ、企業案内なども作成しております。<br>

## AI電鉄について

本ポートフォリオで使用している車両や駅、沿線施設、忘れ物などの画像はGoogle DeepMind製画像生成AIツール**Whisk**で生成しております。<br>
AIが作った世界観という意味をこめて、「AI電鉄」という名前に致しました。

---

## デモサイト

要書換え
[https://ai-railway.vercel.app/](https://ai-railway.vercel.app/)

---

## 使用技術

- Next.js 14

- React

- Tailwind CSS

- Swiper

- Vercel（ホスティング）

- PostgreSQL（データベース）

- GitHub

---

## 主な機能

- 自動スライダーでファーストビューを表示

- レスポンシブデザイン（PC/タブレット/スマホ対応）

- ページルーティング（企業ページ、安全対策ページなど）

- コンポーネント分割で保守性を向上

---

## セットアップ方法

1⃣ このリポジトリをクローン

```bash
要書換え
git clone https://github.com/your-username/ai-railway-website.git
```

2⃣ 必要なパッケージをインストール

```bash
npm install
```

3⃣ 開発サーバーを起動

```bash
npm run dev
```

4⃣ ブラウザで http://localhost:3000 にアクセス

## こだわりポイント

- リロードするたびに運転状況がランダムで変化

- Next.js の静的サイト生成（SSG）を意識

- ディレクトリ構造を整理し、再利用できるコンポーネントを作成

- Tailwind CSS を使った効率的なスタイリング

- Vercel を利用してデプロイと自動デプロイ（CI/CD）を体験
