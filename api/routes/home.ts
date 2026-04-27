import { Hono } from 'hono'
import { header, footer, pageScripts, heroSlides, reportsData, reportCategories, newsData } from '../../src/components/layout.js'

const app = new Hono()

const tickerItems = [
  'Painting', 'Sculpture', 'Crafts', 'Photography',
  'Design', 'Music', 'Theater', 'Literature',
  'Media Arts', 'Video', 'Contemporary Art', 'Installation'
]

app.get('/', (c) => {
  const heroSlidesHTML = heroSlides.map((slide, i) => `
    <div class="hero-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
      <img src="${slide.img}" alt="${slide.title}" class="hero-slide-img" loading="${i === 0 ? 'eager' : 'lazy'}">
      <div class="hero-slide-overlay"></div>
    </div>
  `).join('')

  const heroIndicatorsHTML = heroSlides.map((_, i) => `
    <button class="hero-dot ${i === 0 ? 'active' : ''}" data-slide="${i}" aria-label="Slide ${i + 1}">
      <span class="hero-dot-fill"></span>
    </button>
  `).join('')

  const latestReports = [...reportsData]
    .sort((a, b) => {
      const yearDiff = Number(b.year) - Number(a.year)
      if (yearDiff !== 0) return yearDiff
      return Number(b.id) - Number(a.id)
    })
    .slice(0, 3)

  const reportsHTML = latestReports.map((report, i) => `
    <article class="work-item" data-category="${report.category}">
      <a href="#" class="work-link">
        <div class="work-img-wrap">
          <img src="${report.img}" alt="${report.title}" class="work-img" loading="lazy">
          <div class="work-hover-overlay">
            <div class="work-hover-inner">
              <div class="work-hover-label">View Report</div>
            </div>
          </div>
        </div>
        <div class="work-info">
          <div class="work-client">${report.client}</div>
          <h3 class="work-title">${report.title}</h3>
          <div class="work-tags-row">
            ${report.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}
          </div>
        </div>
      </a>
    </article>
  `).join('')

  const reportFilterTabsHTML = reportCategories
    .filter(cat => cat.key !== 'all')
    .map(cat => `<button class="filter-tab" data-filter="${cat.key}" role="tab" aria-selected="false">${cat.label}</button>`)
    .join('')

  const newsHTML = newsData.slice(0, 5).map(n => `
    <a href="/news/${n.slug}" class="news-item">
      <div class="news-item-inner">
        <time class="news-date">${n.date}</time>
        <span class="news-category news-cat-${n.category.toLowerCase()}">${n.category}</span>
        <p class="news-title">${n.title}</p>
        <span class="news-arrow">→</span>
      </div>
    </a>
  `).join('')

  const tickerHTML = [...tickerItems, ...tickerItems].map(item =>
    `<span class="ticker-item"><span class="ticker-dot">◆</span>${item}</span>`
  ).join('')

  const slidesDataJSON = JSON.stringify(heroSlides)
  const gaId = process.env.VITE_GA_ID || ''
  const gaScript = gaId ? `
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  </script>` : ''

  return c.html(`<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Hearth | 芸術で社会課題を解決する</title>
  <meta name="description" content="芸術体験の実装を通じて、これからの社会をデザインしています。">
  <link rel="canonical" href="https://thehearth.jp">
  
  <!-- Open Graph (OG) Tags -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="The Hearth | 芸術で社会課題を解決する">
  <meta property="og:description" content="芸術体験の実装を通じて、これからの社会をデザインしています。">
  <meta property="og:url" content="https://thehearth.jp">
  <meta property="og:image" content="https://thehearth.jp/static/logo.png">
  <meta property="og:site_name" content="The Hearth">
  <meta property="og:locale" content="ja_JP">
  
  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="The Hearth">
  <meta name="twitter:description" content="芸術体験の実装を通じて、これからの社会をデザインしています。">
  <meta name="twitter:image" content="https://thehearth.jp/static/logo.png">
  
  <!-- Favicon & Icons -->
  <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#ffffff">
  
  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"Organization","@id":"https://thehearth.jp","name":"The Hearth","url":"https://thehearth.jp","logo":"https://thehearth.jp/static/logo.png","description":"芸術体験の実装を通じて、これからの社会をデザインしています。","sameAs":["https://x.com/syiaviolin","https://www.instagram.com/syiaviolin/","https://www.facebook.com/syiaviolin/"],"address":{"@type":"PostalAddress","streetAddress":"西新宿1丁目25ー1","addressLocality":"新宿区","addressRegion":"東京都","postalCode":"163-0604","addressCountry":"JP"},"contactPoint":{"@type":"ContactPoint","contactType":"Customer Service","email":"info@thehearth.jp"}}
  </script>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@300;400;600&family=Inter:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="/static/style.css">
  ${gaScript}
</head>
<body class="is-homepage">

  <!-- Loading Screen -->
  <div id="loading">
    <div class="loading-inner">
      <div class="loading-logo">
        <span class="loading-h">T</span><span class="loading-rest">he Hearth</span>
      </div>
      <div class="loading-sub">芸術で社会課題を解決する</div>
      <div class="loading-bar-wrap"><div class="loading-bar"></div></div>
    </div>
  </div>

  ${header('/')}

  <main id="main-content">

    <!-- ===== HERO ===== -->
    <section id="hero" aria-label="メインビジュアル">
      <div class="hero-slider">
        ${heroSlidesHTML}
      </div>

      <div class="hero-content" id="heroContent">
        <div class="hero-content-inner">
          <div class="hero-eyebrow" id="heroLabel">Music</div>
          <h1 class="hero-title" id="heroTitle">Marunouchi Street Music</h1>
          <p class="hero-subtitle" id="heroSubtitle">芸術あふれる街づくり</p>
          <div class="hero-client" id="heroClient">丸の内仲通り</div>
          <a href="/service" class="hero-cta">View Project <span>→</span></a>
        </div>
      </div>

      <div class="hero-side-info">
        <div class="hero-counter">
          <span id="heroCurrentNum" class="hero-num-current">01</span>
          <span class="hero-num-sep">/</span>
          <span class="hero-num-total">0${heroSlides.length}</span>
        </div>
      </div>

      <div class="hero-indicators" role="tablist" aria-label="スライドナビゲーション">
        ${heroIndicatorsHTML}
      </div>

      <div class="hero-scroll-hint" aria-hidden="true">
        <span class="scroll-text">Scroll</span>
        <span class="scroll-line"></span>
      </div>

      <div class="hero-progress-bar" id="heroProgressBar"></div>
    </section>

    <!-- ===== PURPOSE / OUR VISION ===== -->
    <section id="purpose" aria-label="パーパス">
      <div class="purpose-bg-text" aria-hidden="true">Communication Design</div>
      <div class="section-inner purpose-inner">
        <span class="purpose-label fade-up">The Hearth's Purpose</span>
        <div class="purpose-body">
          <p class="purpose-text fade-up delay-1">
            人・モノ・コトが時間や場所を問わずつながることができる時代において、<br>
            私たちは社会の流れを常に捉え、生きることの本質とは何かを探究し続けます。<br>
            そして、ココロある豊かな芸術体験を通じて、<br>
            人と社会に創造力を生み出し、未来へつなげる原動力をつくります。
          </p>
          <h2 class="purpose-title fade-up delay-2">
            人と社会のつながりに<br>
            芸術を通わせ、<br>
            未来へつなげる原動力をつくる。
          </h2>
        </div>
        <div class="purpose-bottom fade-up delay-3">
          <a href="/service" class="purpose-link">
            OUR SERVICE
            <svg class="arrow-icon" viewBox="0 0 24 8" fill="none">
              <path d="M0 4H22M19 1L22 4L19 7" stroke="currentColor" stroke-width="1"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ===== TICKER ===== -->
    <div id="service-ticker" aria-hidden="true">
      <div class="ticker-track">
        ${tickerHTML}
      </div>
    </div>

    <!-- ===== SERVICE SECTION ===== -->
    <section id="service-home" aria-label="サービス">
      <div class="section-inner">
        <div class="section-head">
          <div class="section-head-left">
            <h2 class="section-title-en fade-up delay-1">Service</h2>
            <p class="section-title-jp fade-up delay-2">サービス</p>
          </div>
          <a href="/service" class="view-all-btn fade-up delay-2">
            View All Services
            <svg class="arrow-icon" viewBox="0 0 24 8" fill="none">
              <path d="M0 4H22M19 1L22 4L19 7" stroke="currentColor" stroke-width="1"/>
            </svg>
          </a>
        </div>

        <div class="service-cards-grid">
          <a href="/service" class="service-card fade-up">
            <div class="service-card-icon"><i class="fas fa-hands-helping"></i></div>
            <div class="service-card-body">
              <h3 class="service-card-name">Regulative Art Experience</h3>
              <p class="service-card-desc">音楽体験と対話を組み合わせ、職場のメンタルケアとコミュニケーション改善を無理なく支援するプログラムです。</p>
            </div>
            <span class="service-card-arrow">→</span>
          </a>
          <a href="/service" class="service-card fade-up delay-1">
            <div class="service-card-icon"><i class="fas fa-music"></i></div>
            <div class="service-card-body">
              <h3 class="service-card-name">Creative Bar</h3>
              <p class="service-card-desc">メンタルヘルス×芸術の実践者が集うノンアルコールのクリエイティブ・バー。即興ヴァイオリン生演奏と対話、短歌&モクテル体験で「今の自分」を捉え直します。</p>
            </div>
            <span class="service-card-arrow">→</span>
          </a>
          <a href="/service" class="service-card fade-up delay-3">
            <div class="service-card-icon"><i class="fas fa-desktop"></i></div>
            <div class="service-card-body">
              <h3 class="service-card-name">KOMOREBI</h3>
              <p class="service-card-desc">五感刺激デバイスを医療現場に導入し、治療とケアの質を向上させます。</p>
            </div>
            <span class="service-card-arrow">→</span>
          </a>
          <a href="/service" class="service-card fade-up delay-2">
            <div class="service-card-icon"><i class="fas fa-chart-line"></i></div>
            <div class="service-card-body">
              <h3 class="service-card-name">睡眠の質向上プログラム</h3>
              <p class="service-card-desc">音楽と感覚デザインを活用し、ストレス緩和と入眠前のコンディション調整を支援。日々の休息の質を高め、翌日の集中力と回復力につなげます。</p>
            </div>
            <span class="service-card-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ===== REPORTS ===== -->
    <section id="reports" aria-label="研究レポート">
      <div class="section-inner">
        <div class="section-head">
          <div class="section-head-left">
            <h2 class="section-title-en fade-up delay-1">Reports</h2>
            <p class="section-title-jp fade-up delay-2">研究レポート</p>
          </div>
          <a href="/reports" class="view-all-btn fade-up delay-2">
            View All Reports
            <svg class="arrow-icon" viewBox="0 0 24 8" fill="none">
              <path d="M0 4H22M19 1L22 4L19 7" stroke="currentColor" stroke-width="1"/>
            </svg>
          </a>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-tabs fade-up" role="tablist" aria-label="カテゴリフィルター">
          <button class="filter-tab active" data-filter="all" role="tab" aria-selected="true">All</button>
          ${reportFilterTabsHTML}
        </div>

        <!-- Reports Grid -->
        <div class="reports-grid" id="reportsGrid">
          ${reportsHTML}
        </div>
      </div>
    </section>

    <!-- ===== NEWS ===== -->
    <section id="news" aria-label="ニュース">
      <div class="section-inner">
        <div class="section-head">
          <div class="section-head-left">
            <h2 class="section-title-en fade-up delay-1">News</h2>
            <p class="section-title-jp fade-up delay-2">最新情報</p>
          </div>
          <a href="/news" class="view-all-btn fade-up delay-2">
            View All News
            <svg class="arrow-icon" viewBox="0 0 24 8" fill="none">
              <path d="M0 4H22M19 1L22 4L19 7" stroke="currentColor" stroke-width="1"/>
            </svg>
          </a>
        </div>

        <div class="news-list fade-up">
          ${newsHTML}
        </div>
      </div>
    </section>

    <!-- ===== CONTACT BANNER ===== -->
    <section id="contact-banner" aria-label="お問い合わせ">
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
  <script id="slides-data" type="application/json">${slidesDataJSON}</script>
  ${pageScripts({ includeApp: true, includePages: false })}`)
})

export default app
