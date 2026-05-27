import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts } from '../../src/components/layout.js'

const app = new Hono()

const downloadItems = [
  {
    title: '総合パンフレット',
    desc: 'Solutions、Cases、Science を横断した全体像を1冊にまとめた資料です。',
    status: 'PDF準備中',
    href: '/contact'
  },
  {
    title: '企業向けホワイトペーパー',
    desc: '組織課題、研修設計、オフィス空間改善の考え方をまとめています。',
    status: '資料請求',
    href: '/solutions/business'
  },
  {
    title: '医療・福祉向け資料',
    desc: 'KOMOREBI を中心に、医療現場での導入イメージと評価観点を整理しています。',
    status: '資料請求',
    href: '/solutions/medical'
  },
  {
    title: '研究共創メモ',
    desc: '共同研究のテーマ、評価設計、試作の進め方を簡潔にまとめた資料です。',
    status: '資料請求',
    href: '/solutions/research'
  }
]

app.get('/download', (c) => {
  const downloadCardsHTML = downloadItems.map((item, index) => `
    <a href="${item.href}" class="download-card fade-up delay-${Math.min(index + 1, 3)}">
      <span class="download-card-status">${item.status}</span>
      <h3 class="download-card-title">${item.title}</h3>
      <p class="download-card-desc">${item.desc}</p>
      <span class="download-card-cta">詳しく見る →</span>
    </a>
  `).join('')

  return c.html(`${pageHead({
    title: 'Download',
    description: 'The Hearthの資料ダウンロード・請求ページです。',
    ogUrl: 'https://thehearth.jp/download',
    canonical: 'https://thehearth.jp/download'
  })}
${header('/download', true)}
<main class="download-page">
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=85&auto=format&fit=crop" alt="Download" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Download</span>
      <h1 class="page-hero-title fade-up delay-1">資料ダウンロード</h1>
      <p class="page-hero-lead fade-up delay-2">資料は準備中のものを含みますが、必要な内容はお問い合わせからすぐご案内できます。</p>
    </div>
  </section>

  <section class="download-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Materials</span>
          <h2 class="section-title-en fade-up delay-1">ダウンロード・請求資料</h2>
        </div>
      </div>
      <div class="download-grid">${downloadCardsHTML}</div>
    </div>
  </section>

  <section class="solution-cta-block">
    <div class="section-inner">
      <div class="solution-cta-inner fade-up">
        <div>
          <span class="contact-eyebrow">Need Help</span>
          <h2 class="contact-title">どの資料が適切か迷う場合はご相談ください。</h2>
          <p class="contact-sub">導入目的に合わせて、必要な資料を個別に案内します。</p>
        </div>
        <div class="contact-actions">
          <a href="/contact" class="btn-primary">お問い合わせ</a>
          <a href="/solutions" class="btn-secondary">Solutions</a>
        </div>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

export default app
