import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts, createProductSchema } from '../components/layout.js'
import { serviceDetailPages } from '../data/service-pages/index.js'
import type { ServiceDetailPage } from '../data/service-pages/types.js'

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
${header('/solutions', true)}
<main>
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="${page.heroImage}" alt="${page.pageTitle}" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Clinical LP</span>
      <h1 class="page-hero-title fade-up delay-1">${page.pageTitle}</h1>
      <p class="page-hero-lead fade-up delay-2">${page.heroLead}</p>
      <div class="contact-actions fade-up delay-3">
        <a href="/contact" class="btn-primary">臨床相談をする</a>
        <a href="/download" class="btn-secondary">資料を見る</a>
      </div>
    </div>
  </section>

  <section class="service-intro">
    <div class="section-inner">
      <div class="service-intro-grid">
        <div class="service-intro-text fade-up">
          <span class="section-eyebrow">Why It Matters</span>
          <h2 class="service-intro-title">${page.challengeTitle}</h2>
        </div>
        <div class="service-intro-desc fade-up delay-2">
          <p>${page.challengeBody}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-content fade-up">
          <span class="section-eyebrow">What KOMOREBI Does</span>
          <h2 class="service-digital-title">${page.introTitle}</h2>
          <p class="service-digital-desc">${page.introBody}</p>
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
          <span class="section-eyebrow fade-up">Core Elements</span>
          <h2 class="section-title-en fade-up delay-1">環境制御の中核</h2>
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
          <span class="section-eyebrow fade-up">Implementation</span>
          <h2 class="section-title-en fade-up delay-1">導入と検証の進め方</h2>
        </div>
      </div>
      <div class="service-menu-list">
        ${recordsHTML}
      </div>
    </div>
  </section>

  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-content fade-up">
          <span class="section-eyebrow">Clinical Fit</span>
          <h2 class="service-digital-title">現場に合わせて始められるか</h2>
          <p class="service-digital-desc">既存病棟への負荷を抑えながら、試験導入から継続運用へ移れるように、設置条件と運用条件を先に整理します。</p>
        </div>
        <div class="service-digital-desc fade-up delay-2">
          <ul class="service-digital-list">
            <li><i class="fas fa-check"></i> 既存設備を活かす前提で、設置負荷を最小化</li>
            <li><i class="fas fa-check"></i> 電源・通信・スペースの条件を先に確認</li>
            <li><i class="fas fa-check"></i> 試験導入から共同研究まで段階的に設計</li>
            <li><i class="fas fa-check"></i> 安全性と運用ルールを合わせて整理</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">臨床現場での試験導入・共同研究についてご相談ください</h2>
        <p class="contact-sub">医療安全と検証計画を前提に、導入可否を一緒に整理します。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/contact" class="btn-primary">臨床相談をする</a>
        <a href="/download" class="btn-secondary">資料を見る</a>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`
}

app.get('/service', (c) => c.redirect('/solutions', 301))

app.get('/service/:slug', (c) => {
  const slug = c.req.param('slug')
  return c.redirect(`/solutions/${slug}`, 301)
})

app.get('/rae', (c) => c.redirect('/solutions/rae', 301))
app.get('/machi', (c) => c.redirect('/solutions/machi', 301))
app.get('/welfare', (c) => c.redirect('/solutions/welfare', 301))

app.get('/rae.html', (c) => c.redirect('/solutions/rae', 301))
app.get('/machi.html', (c) => c.redirect('/solutions/machi', 301))
app.get('/welfare.html', (c) => c.redirect('/solutions/welfare', 301))

export default app
