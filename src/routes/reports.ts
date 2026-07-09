import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts } from '../components/layout.js'

const app = new Hono()

// Reports section is temporarily disabled - returns 404 for all routes
app.get('/reports/:slug', (c) => {
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
      <h1 class="page-hero-title fade-up">Reports Temporarily Unavailable</h1>
      <p class="page-hero-sub fade-up delay-1">申し訳ございません。レポートは現在非公開です。</p>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`, 404)
})

app.get('/reports', (c) => {
  return c.html(`${pageHead({
    title: 'Reports',
    description: 'お探しのレポートが見つかりませんでした。',
    noindex: true,
  })}
${header('/reports')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up">Reports Temporarily Unavailable</h1>
      <p class="page-hero-sub fade-up delay-1">申し訳ございません。レポートは現在非公開です。</p>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`, 404)
})

export default app
