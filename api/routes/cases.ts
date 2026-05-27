import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts } from '../../src/components/layout.js'

const app = new Hono()

const cases = [
  {
    title: '企業での研修・空間導入',
    label: 'For Business',
    summary: '人事・総務・新規事業部門に向けて、研修と空間の両面からエンゲージメントを改善します。',
    outcomes: ['心理的安全性の向上', 'コミュニケーションの改善', 'オフィス空間の体験価値向上'],
    href: '/solutions/business'
  },
  {
    title: '医療機関でのデバイス実証・導入',
    label: 'For Medical',
    summary: 'ICUや病棟の負荷を下げながら、患者とスタッフの双方にとって回復しやすい環境を整えます。',
    outcomes: ['患者ストレスの軽減', 'スタッフ負担の軽減', '実証実験と評価の一体化'],
    href: '/solutions/medical'
  },
  {
    title: '研究・共創のプロトタイピング',
    label: 'For R&D',
    summary: '芸術体験の定量評価や、生体連動デバイスの試作を共同研究として進めます。',
    outcomes: ['脳科学×アートの共同研究', '評価設計の整備', '新規デバイスの共創'],
    href: '/solutions/research'
  }
]

app.get('/cases', (c) => {
  const caseCardsHTML = cases.map((item, index) => `
    <a href="${item.href}" class="case-card fade-up delay-${Math.min(index + 1, 3)}">
      <span class="case-card-label">${item.label}</span>
      <h3 class="case-card-title">${item.title}</h3>
      <p class="case-card-desc">${item.summary}</p>
      <ul class="case-card-list">${item.outcomes.map((outcome) => `<li>${outcome}</li>`).join('')}</ul>
      <span class="case-card-cta">関連ソリューションを見る →</span>
    </a>
  `).join('')

  return c.html(`${pageHead({
    title: 'Cases',
    description: '導入事例と実績を、企業・医療・研究の観点から紹介します。',
    ogUrl: 'https://thehearth.jp/cases',
    canonical: 'https://thehearth.jp/cases'
  })}
${header('/cases', true)}
<main class="cases-page">
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&q=85&auto=format&fit=crop" alt="Cases" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Track Record</span>
      <h1 class="page-hero-title fade-up delay-1">Cases</h1>
      <p class="page-hero-lead fade-up delay-2">導入前にイメージしやすいよう、実装の文脈ごとに事例を整理しています。</p>
    </div>
  </section>

  <section class="case-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Examples</span>
          <h2 class="section-title-en fade-up delay-1">導入実績の見方</h2>
        </div>
      </div>
      <div class="case-grid">${caseCardsHTML}</div>
    </div>
  </section>

  <section class="solution-process-block">
    <div class="section-inner">
      <div class="solution-process-grid">
        <div class="solution-process-copy fade-up">
          <span class="section-eyebrow">Flow</span>
          <h2 class="solution-overview-title">相談から導入までの流れ</h2>
          <p class="solution-overview-desc">初回相談で課題を整理し、対象者や運営条件に合わせて実施案を作成します。必要に応じてデモや実証実験を挟み、導入後も振り返りを行います。</p>
        </div>
        <div class="solution-process-panel fade-up delay-1">
          <ul class="solution-overview-list">
            <li>1. 課題・対象者のヒアリング</li>
            <li>2. 対象に合わせたソリューション設計</li>
            <li>3. デモ / 実証 / 実施</li>
            <li>4. 振り返りと改善提案</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="solution-cta-block">
    <div class="section-inner">
      <div class="solution-cta-inner fade-up">
        <div>
          <span class="contact-eyebrow">Next Action</span>
          <h2 class="contact-title">導入イメージの相談から始められます。</h2>
          <p class="contact-sub">企業研修、医療実証、共同研究のいずれでもご相談ください。</p>
        </div>
        <div class="contact-actions">
          <a href="/contact" class="btn-primary">お問い合わせ</a>
          <a href="/solutions" class="btn-secondary">Solutions へ</a>
        </div>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

export default app
