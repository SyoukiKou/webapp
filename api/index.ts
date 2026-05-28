import { Hono } from 'hono'
import { handle } from '@hono/node-server/vercel'
import { serveStatic } from '@hono/node-server/serve-static'
import { header, footer, pageHead, pageScripts, newsData, reportsData } from '../src/components/layout.js'

// ルートファイルをインポート
import homeRoutes from '../src/routes/home.js'
import reportsRoutes from '../src/routes/reports.js'
import newsRoutes from '../src/routes/news.js'
import serviceRoutes from '../src/routes/service.js'
import companyRoutes from './routes/company.js'
import contactRoutes from '../src/routes/contact.js'
import komorebiRoutes from '../src/routes/komorebi.js'
import sitePolicyRoutes from '../src/routes/site-policy.js'

const app = new Hono()

// Static files (Node.js version for Vercel)
app.use('/static/*', serveStatic({ root: 'public' }))

// Favicon
app.get('/favicon.ico', (c) => {
  return new Response(null, { status: 204 })
})

// Favicon PNG（logo.pngをファビコンとして提供）
app.get('/favicon.png', (c) => {
  return c.redirect('/static/logo.png', 301)
})

app.get('/favicon-16x16.png', (c) => {
  return c.redirect('/static/logo.png', 301)
})

app.get('/apple-touch-icon.png', (c) => {
  return c.redirect('/static/logo.png', 301)
})

// robots.txt
app.get('/robots.txt', (c) => {
  const origin = new URL(c.req.url).origin
  const body = `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`
  return c.text(body)
})

// sitemap.xml
app.get('/sitemap.xml', (c) => {
  const origin = new URL(c.req.url).origin
  const today = new Date().toISOString().split('T')[0]
  const pages = [
    { path: '/', priority: '1.0' },
    { path: '/solutions', priority: '0.9' },
    { path: '/solutions/business', priority: '0.8' },
    { path: '/solutions/medical', priority: '0.8' },
    { path: '/solutions/research', priority: '0.8' },
    { path: '/solutions/culture', priority: '0.8' },
    { path: '/solutions/rae', priority: '0.8' },
    { path: '/solutions/machi', priority: '0.8' },
    { path: '/solutions/welfare', priority: '0.8' },
    { path: '/solutions/live-bgm', priority: '0.8' },
    { path: '/solutions/komorebi', priority: '0.8' },
    { path: '/solutions/reporting', priority: '0.8' },
    { path: '/solutions/creative-bar', priority: '0.8' },
    { path: '/reports', priority: '0.8' },
    { path: '/news', priority: '0.8' },
    { path: '/company', priority: '0.7' },
    { path: '/site-policy', priority: '0.5' },
    { path: '/contact', priority: '0.9' }
  ]
  const newsPages = newsData.map((item) => ({
    path: `/news/${item.slug}`,
    priority: '0.7',
    lastmod: item.date.replace(/\./g, '-')
  }))
  const reportPages = reportsData.map((item) => ({
    path: `/reports/${item.slug}`,
    priority: '0.7',
    lastmod: item.publishedAt,
  }))
  const urls = [...pages, ...newsPages, ...reportPages]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((item) => {
      const lastmod = 'lastmod' in item ? item.lastmod : today
      return `  <url>
    <loc>${origin}${item.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${item.priority}</priority>
  </url>`
    }).join('\n') +
    `\n</urlset>`

  return c.text(xml, 200, { 'Content-Type': 'application/xml' })
})

// API endpoints
app.get('/api/news', (c) => {
  return c.json(newsData)
})

// ページルートをマウント
app.route('/', homeRoutes)
app.route('/', reportsRoutes)
app.route('/', newsRoutes)
app.route('/', serviceRoutes)
app.route('/', companyRoutes)
app.route('/', contactRoutes)
app.route('/', komorebiRoutes)
app.route('/', sitePolicyRoutes)

app.get('/service', (c) => c.redirect('/solutions', 301))

// 404 Not Found
app.notFound((c) => {
  return c.html(`
${pageHead({
  title: 'Not Found',
  description: 'お探しのページが見つかりませんでした。',
  noindex: true,
  nofollow: true
})}
${header('/')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up">404</h1>
      <p class="page-hero-sub fade-up delay-1">お探しのページが見つかりませんでした。</p>
    </div>
  </section>
  <section style="padding: 80px 0; text-align: center;">
    <div class="section-inner">
      <a href="/" class="btn-primary">トップへ戻る</a>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}
  `, 404)
})

export default handle(app)
export { app }
