import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts, createProductSchema } from '../../src/components/layout.js'
import { serviceDetailPages } from '../../src/data/service-pages/index.js'
import type { ServiceDetailPage } from '../../src/data/service-pages/types.js'

const app = new Hono()

function renderServiceDetailPage(page: ServiceDetailPage): string {
  const pagePath = `/service/${page.slug}`

  const casesHTML = page.cases.map((item, index) => `
        <article class="service-domain-item fade-up${index > 0 ? ` delay-${Math.min(index, 3)}` : ''}">
          <div class="service-domain-img"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">${item.title}</h3>
            <p class="service-domain-desc">${item.desc}</p>
            <div class="service-domain-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
          </div>
        </article>
  `).join('')

  const recordsHTML = page.records.map((item, index) => `
        <article class="service-menu-item fade-up${index > 0 ? ` delay-${Math.min(index, 3)}` : ''}">
          <div class="service-menu-icon"><i class="fas fa-check"></i></div>
          <div class="service-menu-body">
            <h3 class="service-menu-name">${item.title}</h3>
            <p class="service-menu-desc">${item.desc}</p>
          </div>
        </article>
  `).join('')

  return `${pageHead({
    title: page.pageTitle,
    description: page.description,
    ogImage: page.heroImage,
    ogUrl: `https://thehearth.jp${pagePath}`,
    canonical: `https://thehearth.jp${pagePath}`,
    structuredData: createProductSchema({
      name: page.pageTitle,
      description: page.description,
      image: page.heroImage,
      url: `https://thehearth.jp${pagePath}`
    })
  })}
${header('/service', true)}
<main>
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="${page.heroImage}" alt="${page.pageTitle}" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Solution Detail</span>
      <h1 class="page-hero-title fade-up delay-1">${page.pageTitle}</h1>
      <p class="page-hero-lead fade-up delay-2">${page.heroLead}</p>
    </div>
  </section>

  <section class="service-intro">
    <div class="section-inner">
      <div class="service-intro-grid">
        <div class="service-intro-text fade-up">
          <span class="section-eyebrow">Overview</span>
          <h2 class="service-intro-title">${page.introTitle}</h2>
        </div>
        <div class="service-intro-desc fade-up delay-2">
          <p>${page.introBody}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-content fade-up">
          <span class="section-eyebrow">Why This Solution</span>
          <h2 class="service-digital-title">${page.challengeTitle}</h2>
          <p class="service-digital-desc">${page.challengeBody}</p>
        </div>
        <div class="service-digital-img fade-up delay-2">
          <img src="${page.heroImage}" alt="${page.pageTitle}" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <section class="service-domains">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Use Cases</span>
          <h2 class="section-title-en fade-up delay-1">活用イメージ</h2>
        </div>
      </div>
      <div class="service-domain-grid">
        ${casesHTML}
      </div>
    </div>
  </section>

  <section class="service-menu-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Track Record</span>
          <h2 class="section-title-en fade-up delay-1">導入・活動実績</h2>
        </div>
      </div>
      <div class="service-menu-list">
        ${recordsHTML}
      </div>
    </div>
  </section>

  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">ご相談はお気軽にどうぞ</h2>
        <p class="contact-sub">課題や目的に合わせて、最適な実施プランをご提案します。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/contact" class="btn-primary">お問い合わせ</a>
        <a href="/service" class="btn-secondary">サービス一覧へ</a>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`
}

app.get('/service', (c) => {
  const solutionsHTML = serviceDetailPages.map((item, i) => `
        <div class="service-domain-item fade-up delay-${Math.min((i % 3) + 1, 3)}">
          <div class="service-domain-img"><a href="/service/${item.slug}" aria-label="${item.cardTitle}の詳細を見る"><img src="${item.cardImage}" alt="${item.cardTitle}" loading="lazy"></a></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">${item.cardTitle}</h3>
            <p class="service-domain-desc">${item.cardDescription}</p>
            <div class="service-domain-tags">${item.cardTags.map(tag => `<span>${tag}</span>`).join('')}</div>
            <a href="/service/${item.slug}" class="service-domain-link">詳細を見る →</a>
          </div>
        </div>
  `).join('')

  return c.html(`${pageHead({
    title: 'Service',
    description: '体験価値の創造を通じて、企業や社会の課題解決に貢献します。リアル・デジタルを統合したコミュニケーションデザイン。',
    ogImage: 'https://thehearth.jp/static/logo.png',
    ogUrl: 'https://thehearth.jp/service',
    canonical: 'https://thehearth.jp/service'
  })}
${header('/service', true)}
<main>
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85" alt="Service" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up delay-1">Service</h1>
      <p class="page-hero-lead fade-up delay-2">人も、社会も動かす<br>"体験"をつくる。</p>
    </div>
  </section>
  <section class="service-intro">
    <div class="section-inner">
      <div class="service-intro-grid">
        <div class="service-intro-text fade-up">
          <span class="section-eyebrow">OUR SERVICE</span>
          <h2 class="service-intro-title">体験創造のプロフェッショナルとして、<br>多岐にわたるソリューションを<br>統合的にご提供します。</h2>
        </div>
        <div class="service-intro-desc fade-up delay-2">
          <p>The Hearthは、芸術を通じて、人の"体験"を統合的にデザインし、企業や社会の課題解決に貢献します。豊富な経験と充実した組織機能で、多様なお客様のニーズにお応えします。</p>
        </div>
      </div>
    </div>
  </section>
  <section class="service-domains">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Solutions</h2>
          <p class="section-title-jp fade-up delay-2">主なソリューション</p>
        </div>
      </div>
      <div class="service-domain-grid">
        ${solutionsHTML}
      </div>
    </div>
  </section>
  <section class="service-strengths">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Our Strengths</h2>
          <p class="section-title-jp fade-up delay-2">The Hearthの強み</p>
        </div>
      </div>
      <div class="strength-grid">
        <div class="strength-item fade-up"><div class="strength-num">01</div><h3 class="strength-title">目的起点のプログラム設計</h3><p class="strength-desc">実施ありきではなく、対象者・課題・期待する変化を整理したうえで、最適な実施形式を設計します。</p></div>
        <div class="strength-item fade-up delay-1"><div class="strength-num">02</div><h3 class="strength-title">芸術体験と対話の統合</h3><p class="strength-desc">生演奏などの芸術体験に対話プロセスを組み合わせ、感情の動きや気づきを現場で活かせる学びに変換します。</p></div>
        <div class="strength-item fade-up delay-2"><div class="strength-num">03</div><h3 class="strength-title">多様な現場への実装力</h3><p class="strength-desc">オフィス・都市空間・高齢者施設など、環境や運営条件に合わせて安全かつ無理のない導入を行います。</p></div>
        <div class="strength-item fade-up delay-3"><div class="strength-num">04</div><h3 class="strength-title">継続に向けた検証と改善</h3><p class="strength-desc">実施後の振り返りと評価を通じて、単発で終わらない継続運用モデルへ改善を重ねます。</p></div>
      </div>
    </div>
  </section>
  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-img fade-up"><img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85&auto=format&fit=crop" alt="プログラム実施に向けた対話と準備" loading="lazy"></div>
        <div class="service-digital-content fade-up delay-2">
          <span class="section-eyebrow">Our Approach</span>
          <h2 class="service-digital-title">実装に向けた進め方</h2>
          <p class="service-digital-desc">私たちは、芸術体験を単発イベントで終わらせず、現場で継続できる取り組みにすることを重視しています。目的整理から実施、振り返りまでを一貫して伴走します。</p>
          <ul class="service-digital-list">
            <li><i class="fas fa-check"></i> 課題・対象者に合わせた実施目的の整理</li>
            <li><i class="fas fa-check"></i> 現場運営に合わせたプログラム設計</li>
            <li><i class="fas fa-check"></i> 生演奏と対話を組み合わせた実施</li>
            <li><i class="fas fa-check"></i> 実施後の振り返りと次回改善提案</li>
            <li><i class="fas fa-check"></i> 継続運用に向けた社内連携支援</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">プロジェクトのご相談は<br>お気軽にどうぞ</h2>
        <p class="contact-sub">お問い合わせ内容を確認後、担当者より折り返しご連絡させていただきます。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/contact" class="btn-primary">お問い合わせ</a>
        <a href="/reports" class="btn-secondary">レポートを見る</a>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

app.get('/service/:slug', (c) => {
  const slug = c.req.param('slug')
  const page = serviceDetailPages.find((item) => item.slug === slug)

  if (!page) {
    return c.html(`${pageHead({
      title: 'Service Not Found',
      description: 'お探しのサービス詳細が見つかりませんでした。',
      noindex: true,
      nofollow: true
    })}
${header('/service')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up">Service Not Found</h1>
      <p class="page-hero-sub fade-up delay-1">お探しのサービス詳細が見つかりませんでした。</p>
    </div>
  </section>
  <section style="padding: 80px 0; text-align: center;">
    <div class="section-inner">
      <a href="/service" class="btn-primary">サービス一覧に戻る</a>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}` , 404)
  }

  return c.html(renderServiceDetailPage(page))
})

app.get('/rae', (c) => c.redirect('/service/rae', 301))
app.get('/machi', (c) => c.redirect('/service/machi', 301))
app.get('/welfare', (c) => c.redirect('/service/welfare', 301))

app.get('/rae.html', (c) => c.redirect('/service/rae', 301))
app.get('/machi.html', (c) => c.redirect('/service/machi', 301))
app.get('/welfare.html', (c) => c.redirect('/service/welfare', 301))

export default app
