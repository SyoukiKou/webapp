import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts, newsData } from '../../src/components/layout.js'

const app = new Hono()

// ニュース詳細ページ
app.get('/news/:slug', (c) => {
  const slug = c.req.param('slug')
  const news = newsData.find(n => n.slug === slug)
  
  if (!news) {
    return c.html(`${pageHead('News Not Found', 'お探しのニュースが見つかりませんでした。')}
${header('/news')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up">News Not Found</h1>
      <p class="page-hero-sub fade-up delay-2">お探しのニュースが見つかりませんでした。</p>
    </div>
  </section>
  <section style="padding: 80px 0; text-align: center;">
    <div class="section-inner">
      <a href="/news" class="btn-primary">ニュース一覧に戻る</a>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`, 404)
  }

  // 関連ニュースを最大3件取得（現在のニュース以外）
  const relatedNews = newsData
    .filter(n => n.id !== news.id)
    .slice(0, 3)
    .map(n => `
      <a href="/news/${n.slug}" class="news-card fade-up">
        <div class="news-card-inner">
          <div class="news-card-meta">
            <time class="news-card-date">${n.date}</time>
            <span class="news-card-category news-cat-${n.category.toLowerCase()}">${n.category}</span>
          </div>
          <h3 class="news-card-title">${n.title}</h3>
          <span class="news-card-arrow">→</span>
        </div>
      </a>
    `).join('')

  return c.html(`${pageHead(news.title, news.description)}
${header('/news', true)}
<main>
  <article class="news-detail">
    <div class="news-detail-hero">
      <div class="section-inner">
        <div class="news-detail-meta fade-up">
          <time class="news-detail-date">${news.date}</time>
          <span class="news-detail-category news-cat-${news.category.toLowerCase()}">${news.category}</span>
        </div>
        <h1 class="news-detail-title fade-up delay-1">${news.title}</h1>
      </div>
    </div>
    
    <div class="news-detail-content">
      <div class="section-inner">
        <div class="news-detail-body fade-up">
          <p>${news.description}</p>
        </div>
        ${news.link ? `<div class="news-detail-article-link fade-up delay-1"><a href="${news.link}" target="_blank" rel="noopener noreferrer" class="news-external-link">View Article</a></div>` : ''}
        
        <div class="news-detail-footer fade-up delay-1">
          <a href="/news" class="news-back-link">
            <svg class="arrow-icon" viewBox="0 0 24 8" fill="none" style="transform: rotate(180deg)">
              <path d="M0 4H22M19 1L22 4L19 7" stroke="currentColor" stroke-width="1"/>
            </svg>
            ニュース一覧に戻る
          </a>
        </div>
      </div>
    </div>
    
    ${relatedNews.length > 0 ? `
    <div class="news-related">
      <div class="section-inner">
        <h2 class="news-related-title fade-up">関連ニュース</h2>
        <div class="news-related-grid">
          ${relatedNews}
        </div>
      </div>
    </div>
    ` : ''}
  </article>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

// ニュース一覧ページ
app.get('/news', (c) => {
  const newsHTML = newsData.map((n, i) => `
    <a href="/news/${n.slug}" class="news-card fade-up" style="transition-delay:${i * 0.05}s">
      <div class="news-card-inner">
        <div class="news-card-meta">
          <time class="news-card-date">${n.date}</time>
          <span class="news-card-category news-cat-${n.category.toLowerCase()}">${n.category}</span>
        </div>
        <h3 class="news-card-title">${n.title}</h3>
        <span class="news-card-arrow">→</span>
      </div>
    </a>`).join('')

  return c.html(`${pageHead('News', 'The Hearthの最新情報・ニュースリリース。受賞実績、新サービス、プロジェクト情報などをお届けします。')}
${header('/news')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up delay-1">News</h1>
      <p class="page-hero-sub fade-up delay-2">最新情報</p>
    </div>
  </section>
  <section class="news-page-section">
    <div class="section-inner">
      <div class="news-page-grid">${newsHTML}</div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

export default app
