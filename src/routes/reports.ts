import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts, createArticleSchema, reportsData, reportCategories } from '../components/layout.js'

const app = new Hono()

type ReportItem = (typeof reportsData)[number]

const sortReports = (items: ReportItem[]) => [...items].sort((a, b) => {
  const dateDiff = b.publishedAt.localeCompare(a.publishedAt)
  if (dateDiff !== 0) return dateDiff
  return b.id - a.id
})

const getCategoryLabel = (key: string) => reportCategories.find(cat => cat.key === key)?.label || key

const renderTagList = (tags: string[]) => tags.map(tag => `<span class="work-tag">${tag}</span>`).join('')

const renderReportCard = (report: ReportItem, index: number) => `
  <article class="work-card fade-up" style="transition-delay:${(index % 3) * 0.08}s">
    <a href="/reports/${report.slug}" class="work-card-link">
      <div class="work-card-img">
        <img src="${report.img}" alt="${report.title}" loading="lazy">
        <div class="work-card-overlay"><span class="work-card-view">Read Report</span></div>
      </div>
      <div class="work-card-body">
        <p class="work-card-client">${report.client} / ${report.year}</p>
        <h3 class="work-card-title">${report.title}</h3>
        <p class="work-card-subtitle">${report.subtitle}</p>
        <div class="work-card-tags">${renderTagList(report.tags)}</div>
      </div>
    </a>
  </article>`

const renderReportSections = (report: ReportItem) => report.sections.map(section => `
  <section class="report-detail-section fade-up">
    <h2 class="report-detail-section-title">${section.heading}</h2>
    ${section.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
    ${section.bullets?.length ? `<ul class="report-detail-list">${section.bullets.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
  </section>
`).join('')

app.get('/reports/:slug', (c) => {
  const slug = c.req.param('slug')
  const report = reportsData.find(item => item.slug === slug)

  if (!report) {
    return c.html(`${pageHead({
      title: 'Report Not Found',
      description: 'お探しのレポートが見つかりませんでした。',
      noindex: true,
      nofollow: true,
    })}
${header('/reports')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up">Report Not Found</h1>
      <p class="page-hero-sub fade-up delay-1">お探しのレポートが見つかりませんでした。</p>
    </div>
  </section>
  <section style="padding: 80px 0; text-align: center;">
    <div class="section-inner">
      <a href="/reports" class="btn-primary">レポート一覧に戻る</a>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`, 404)
  }

  const relatedReports = sortReports(
    reportsData
      .filter(item => item.slug !== report.slug)
      .sort((a, b) => {
        const aScore = a.category === report.category ? 0 : 1
        const bScore = b.category === report.category ? 0 : 1
        if (aScore !== bScore) return aScore - bScore
        return b.publishedAt.localeCompare(a.publishedAt)
      })
  ).slice(0, 3)

  const articleSchema = createArticleSchema({
    headline: report.title,
    description: report.summary,
    image: report.img,
    datePublished: report.publishedAt,
    url: `https://thehearth.jp/reports/${report.slug}`,
  })

  return c.html(`${pageHead({
    title: report.title,
    description: report.summary,
    ogType: 'article',
    ogImage: report.img,
    ogUrl: `https://thehearth.jp/reports/${report.slug}`,
    canonical: `https://thehearth.jp/reports/${report.slug}`,
    structuredData: articleSchema,
  })}
${header('/reports', true)}
<main>
  <article class="report-detail">
    <section class="report-detail-hero">
      <div class="section-inner">
        <div class="report-detail-meta fade-up">
          <span class="report-detail-category">${getCategoryLabel(report.category)}</span>
          <time class="report-detail-date">${report.publishedAt}</time>
        </div>
        <h1 class="report-detail-title fade-up delay-1">${report.title}</h1>
        <p class="report-detail-lead fade-up delay-2">${report.summary}</p>
        <div class="report-detail-tags fade-up delay-3">${renderTagList(report.tags)}</div>
      </div>
    </section>

    <section class="report-detail-content">
      <div class="section-inner">
        <div class="report-detail-body fade-up">
          <p class="report-detail-intro">${report.intro}</p>
          ${renderReportSections(report)}

          <section class="report-detail-section report-detail-section--takeaways fade-up">
            <h2 class="report-detail-section-title">このレポートの要点</h2>
            <ul class="report-detail-list report-detail-list--takeaways">
              ${report.takeaways.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </section>
        </div>

        <div class="report-detail-footer fade-up delay-1">
          <a href="/reports" class="news-back-link">
            <svg class="arrow-icon" viewBox="0 0 24 8" fill="none" style="transform: rotate(180deg)">
              <path d="M0 4H22M19 1L22 4L19 7" stroke="currentColor" stroke-width="1"/>
            </svg>
            レポート一覧に戻る
          </a>
        </div>
      </div>
    </section>

    <section class="report-related">
      <div class="section-inner">
        <h2 class="report-related-title fade-up">関連レポート</h2>
        <div class="works-grid report-related-grid">
          ${relatedReports.map((item, index) => renderReportCard(item, index)).join('')}
        </div>
      </div>
    </section>
  </article>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

app.get('/reports', (c) => {
  const currentCat = c.req.query('cat') || 'all'
  const sortedReports = sortReports(reportsData)
  const filtered = currentCat === 'all' ? sortedReports : sortedReports.filter(item => item.category === currentCat)
  const filterTabsHTML = reportCategories.map(cat => {
    const active = currentCat === cat.key ? ' active' : ''
    return `<a href="/reports?cat=${cat.key}" class="filter-tab${active}">${cat.label}</a>`
  }).join('')
  const worksHTML = filtered.map((work, i) => renderReportCard(work, i)).join('')

  return c.html(`${pageHead({
    title: 'Reports',
    description: 'AI、神経美学、リーダーシップ、社会的処方を横断して、芸術の社会的価値を読み解くレポートアーカイブ。',
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
      <p class="page-hero-lead fade-up delay-3">AI、神経美学、リーダーシップ、社会的処方を横断し、芸術の社会的価値を読み解く読み物アーカイブ。</p>
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
