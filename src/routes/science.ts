import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts } from '../components/layout.js'
import { reportsData } from '../../data/reports.js'

const app = new Hono()

app.get('/science', (c) => {
  const reportCardsHTML = [...reportsData]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((report, index) => `
      <a href="/reports/${report.slug}" class="science-report-card fade-up delay-${Math.min(index + 1, 3)}">
        <div class="science-report-card-meta">${report.publishedAt} / ${report.client}</div>
        <h3 class="science-report-card-title">${report.title}</h3>
        <p class="science-report-card-desc">${report.summary}</p>
        <div class="science-report-card-tags">${report.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      </a>
    `)
    .join('')

  return c.html(`${pageHead({
    title: 'Science & Reports',
    description: '脳波データ、学会発表、調査レポートなど、The Hearthの研究背景をまとめています。',
    ogUrl: 'https://thehearth.jp/science',
    canonical: 'https://thehearth.jp/science'
  })}
${header('/science', true)}
<main class="science-page">
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1515259006763-31d9e0d1b4b0?w=1920&q=85&auto=format&fit=crop" alt="Science" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Research & Evidence</span>
      <h1 class="page-hero-title fade-up delay-1">Science & Reports</h1>
      <p class="page-hero-lead fade-up delay-2">研究の背景や調査レポートを通じて、芸術の価値を検証します。</p>
    </div>
  </section>

  <section class="science-overview-block">
    <div class="section-inner">
      <div class="solution-overview-grid">
        <div class="solution-overview-copy fade-up">
          <span class="section-eyebrow">Focus</span>
          <h2 class="solution-overview-title">何を見ているのか</h2>
          <p class="solution-overview-desc">感性、自己言及、社会的処方、AI時代の判断など、芸術の価値を言葉とデータの両面から捉え直しています。</p>
        </div>
        <div class="solution-overview-panel fade-up delay-1">
          <span class="section-eyebrow">Topics</span>
          <ul class="solution-overview-list">
            <li>脳科学と美的体験</li>
            <li>社会的処方と健康格差</li>
            <li>組織変革と感性</li>
            <li>AI時代の人間の判断</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="science-reports-block">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Reports</span>
          <h2 class="section-title-en fade-up delay-1">調査レポート</h2>
        </div>
        <a href="/reports" class="view-all-btn fade-up delay-2">Reports へ</a>
      </div>
      <div class="science-report-grid">${reportCardsHTML}</div>
    </div>
  </section>

  <section class="solution-cta-block">
    <div class="section-inner">
      <div class="solution-cta-inner fade-up">
        <div>
          <span class="contact-eyebrow">Research Contact</span>
          <h2 class="contact-title">共同研究や追加資料の確認も可能です。</h2>
          <p class="contact-sub">実証設計、学会発表、データ連携についてはお問い合わせください。</p>
        </div>
        <div class="contact-actions">
          <a href="/contact" class="btn-primary">お問い合わせ</a>
          <a href="/solutions/research" class="btn-secondary">Research へ</a>
        </div>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

export default app
