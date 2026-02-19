import { Hono } from 'hono'
import { handle } from '@hono/node-server/vercel'
import { serveStatic } from '@hono/node-server/serve-static'
import { header, footer, pageHead, pageScripts, newsData } from '../src/components/layout.js'

// ルートファイルをインポート
import homeRoutes from './routes/home.js'
import reportsRoutes from './routes/reports.js'
import newsRoutes from './routes/news.js'
import serviceRoutes from './routes/service.js'
import companyRoutes from './routes/company.js'
import contactRoutes from './routes/contact.js'

const app = new Hono()

// Static files (Node.js version for Vercel)
app.use('/static/*', serveStatic({ root: 'public' }))

// Favicon
app.get('/favicon.ico', (c) => {
  return new Response(null, { status: 204 })
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
  const pages = [
    '/',
    '/service',
    '/reports',
    '/news',
    '/company',
    '/contact'
  ]
  const newsPages = newsData.map((item) => `/news/${item.slug}`)
  const urls = [...pages, ...newsPages]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join('\n') +
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

// 404 Not Found
app.notFound((c) => {
  return c.html(`
${pageHead('Not Found', 'お探しのページが見つかりませんでした。')}
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
