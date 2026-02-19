import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts, reportsData } from '../../src/components/layout.js'

const app = new Hono()

app.get('/reports', (c) => {
  const currentCat = c.req.query('cat') || 'all'
  const categories = [
    { key: 'all', label: 'All' },
    { key: 'label1', label: '脳波と音楽' },
    { key: 'label2', label: '脳波と味覚' },
    { key: 'label3', label: '脳波とメンタルヘルス' },
    { key: 'label4', label: 'ニューロマーケティング' },
  ]
  const filtered = currentCat === 'all' ? reportsData : reportsData.filter(w => w.category === currentCat)
  const filterTabsHTML = categories.map(cat => {
    const active = currentCat === cat.key ? ' active' : ''
    return `<a href="/reports?cat=${cat.key}" class="filter-tab${active}">${cat.label}</a>`
  }).join('')
  const worksHTML = filtered.map((work, i) => `
    <article class="work-card fade-up" style="transition-delay:${(i % 3) * 0.08}s">
      <a href="#" class="work-card-link">
        <div class="work-card-img">
          <img src="${work.img}" alt="${work.title}" loading="lazy">
          <div class="work-card-overlay"><span class="work-card-view">View Report</span></div>
        </div>
        <div class="work-card-body">
          <p class="work-card-client">${work.client}</p>
          <h3 class="work-card-title">${work.title}</h3>
          <p class="work-card-subtitle">${work.subtitle}</p>
          <div class="work-card-tags">${work.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}</div>
        </div>
      </a>
    </article>`).join('')

  return c.html(`${pageHead({
    title: 'Reports',
    description: '研究レポート — The Hearthによる研究レポート。',
    ogImage: 'https://thehearth.jp/static/logo.png',
    ogUrl: 'https://thehearth.jp/reports',
    canonical: 'https://thehearth.jp/reports'
  })}
${header('/reports')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up delay-1">Reports</h1>
      <p class="page-hero-sub fade-up delay-2">研究レポート</p>
    </div>
  </section>
  <section class="works-page-section">
    <div class="section-inner">
      <div class="filter-tabs-wrap">
        <div class="filter-tabs">${filterTabsHTML}</div>
        <p class="works-count">${filtered.length} 件</p>
      </div>
      <div class="works-page-grid">${worksHTML}</div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

export default app
