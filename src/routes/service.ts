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
        <a href="/solutions" class="btn-secondary">ソリューション一覧へ</a>
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
