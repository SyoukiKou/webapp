import { Hono } from 'hono'
import { pageHead, header, footer, pageScripts, worksData } from '../components/layout'

const app = new Hono()

app.get('/', (c) => {
  const currentCat = c.req.query('cat') || 'all'

  const categories = [
    { key: 'all',        label: 'All' },
    { key: 'exhibition', label: '展示会 / 学会出展' },
    { key: 'event',      label: 'イベントプロモーション' },
    { key: 'showroom',   label: 'ショールーム' },
    { key: 'store',      label: '店舗 / ディスプレイ' },
  ]

  const filterTabsHTML = categories.map(cat => {
    const active = currentCat === cat.key ? ' active' : ''
    return `<a href="/works?cat=${cat.key}" class="filter-tab${active}">${cat.label}</a>`
  }).join('')

  const filtered = currentCat === 'all'
    ? worksData
    : worksData.filter(w => w.category === currentCat)

  const worksHTML = filtered.map((work, i) => `
    <article class="work-card fade-up" style="transition-delay:${(i % 3) * 0.08}s">
      <a href="#" class="work-card-link">
        <div class="work-card-img">
          <img src="${work.img}" alt="${work.title}" loading="lazy">
          <div class="work-card-overlay">
            <span class="work-card-view">View Project</span>
          </div>
        </div>
        <div class="work-card-body">
          <p class="work-card-client">${work.client}</p>
          <h3 class="work-card-title">${work.title}</h3>
          <p class="work-card-subtitle">${work.subtitle}</p>
          <div class="work-card-tags">
            ${work.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}
          </div>
        </div>
      </a>
    </article>
  `).join('')

  return c.html(`
${pageHead('Works', '制作実績一覧 — 博展が手がけた展示会・イベント・ショールームなどの実績をご覧いただけます。')}

${header('/works')}

<main>
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Our Works</span>
      <h1 class="page-hero-title fade-up delay-1">Works</h1>
      <p class="page-hero-sub fade-up delay-2">制作実績</p>
    </div>
  </section>

  <!-- Works List -->
  <section class="works-page-section">
    <div class="section-inner">

      <!-- Filter -->
      <div class="filter-tabs-wrap">
        <div class="filter-tabs">
          ${filterTabsHTML}
        </div>
        <p class="works-count">${filtered.length} 件</p>
      </div>

      <!-- Grid -->
      <div class="works-page-grid">
        ${worksHTML}
      </div>

    </div>
  </section>
</main>

${footer()}
${pageScripts()}
  `)
})

export default app
