import { Hono } from 'hono'
import { handle } from '@hono/node-server/vercel'
import { serveStatic } from '@hono/node-server/serve-static'
import { header, footer, pageHead, pageScripts, worksData as layoutWorksData, newsData as layoutNewsData } from '../src/components/layout.js'

const app = new Hono()

// Static files (Node.js version for Vercel)
app.use('/static/*', serveStatic({ root: 'public' }))

// Favicon
app.get('/favicon.ico', (c) => {
  return new Response(null, { status: 204 })
})

// Works data
const worksData = [
  {
    id: 1,
    title: 'ORGATEC TOKYO 2025',
    client: 'コクヨ株式会社',
    subtitle: '国際家具見本市「オルガテック東京2025」',
    tags: ['#BtoB', '#展示会/学会出展', '#受賞作品'],
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85',
    featured: true,
    category: 'exhibition',
    year: '2025'
  },
  {
    id: 2,
    title: 'In the world tree',
    client: '株式会社カナデビア',
    subtitle: '大阪・関西万博（EXPO2025）',
    tags: ['#BtoC', '#店舗/ウィンドウディスプレイ'],
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    featured: false,
    category: 'store',
    year: '2025'
  },
  {
    id: 3,
    title: 'JAPAN MOBILITY SHOW 2025',
    client: '日本自動車工業会',
    subtitle: '次世代モビリティの体験空間',
    tags: ['#BtoC', '#展示会/学会出展'],
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    featured: false,
    category: 'exhibition',
    year: '2025'
  },
  {
    id: 4,
    title: 'Star Wars Celebration JAPAN 2025',
    client: '株式会社オーディオテクニカ',
    subtitle: '日本文化をモチーフとしたブースデザイン',
    tags: ['#BtoC', '#展示会/学会出展', '#デジタルコンテンツ'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    featured: false,
    category: 'exhibition',
    year: '2025'
  },
  {
    id: 5,
    title: 'Dewar\'s 12年 DISCOVER YOUR HIGHBALL',
    client: 'バカルディ ジャパン株式会社',
    subtitle: '六本木ヒルズカフェ 期間限定イベント',
    tags: ['#BtoC', '#イベントプロモーション'],
    img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80',
    featured: false,
    category: 'event',
    year: '2024'
  },
  {
    id: 6,
    title: 'Hakuten Permanent Showroom',
    client: 'パナソニック株式会社',
    subtitle: 'ブランド体験型ショールーム設計',
    tags: ['#BtoB', '#ショールーム'],
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
    featured: false,
    category: 'showroom',
    year: '2024'
  }
]


// News data
const newsData = [
  {
    date: '2026.02.19',
    category: 'News',
    title: '弊社のホームページをリニューアルしました。'
  },
  {
    date: '2025.11.01',
    category: 'Event',
    title: '未知の価値に挑戦するプログラム【SHIBUYA QWS チャレンジ #25】に採択されました。'
  },
  {
    date: '2025.10.18',
    category: 'Project',
    title: '公益財団法人Soilが主催する、社会課題解決を支援する助成プログラムSoil100に採択されました。'
  },
  {
    date: '2025.10.27',
    category: 'News',
    title: '弊社のホームページが完成しました。'
  },
  {
    date: '2025.10.05',
    category: 'Press',
    title: '異才を持つ学生が社会課題を解決するUT-LABの公認プロジェクトに採択されました。'
  },
  {
    date: '2025.02.21',
    category: 'Award',
    title: '第7回 WASEDA Demo Dayにてリザプロ賞を受賞しました。'
  }
]

// Hero slides
const heroSlides = [
  {
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=90',
    label: 'Exhibition / Award',
    title: 'ORGATEC TOKYO 2025',
    subtitle: '史上最多・三度目グランプリ受賞',
    client: 'KOKUYO Co., Ltd.',
    year: '2025'
  },
  {
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=90',
    label: 'Pavilion / EXPO 2025',
    title: 'In the world tree',
    subtitle: '大阪・関西万博 カナデビアパビリオン',
    client: 'KANADVIA Corporation',
    year: '2025'
  },
  {
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=90',
    label: 'Exhibition',
    title: 'JAPAN MOBILITY SHOW 2025',
    subtitle: '次世代モビリティの体験価値を創造',
    client: 'Japan Automobile Manufacturers Association',
    year: '2025'
  },
  {
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=90',
    label: 'Showroom / Branding',
    title: 'INNOVATION EXPERIENCE CENTER',
    subtitle: 'ブランド体験型空間設計',
    client: 'Panasonic Corporation',
    year: '2024'
  }
]

const tickerItems = [
  'Painting', 'Sculpture', 'Crafts', 'Photography',
  'Design', 'Music', 'Theater', 'Literature',
  'Media Arts', 'Video', 'Contemporary Art', 'Installation'
]

// Main HTML page
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

  const worksHTML = worksData.map((work, i) => `
    <article class="work-item" data-category="${work.category}">
      <a href="#" class="work-link">
        <div class="work-img-wrap">
          <img src="${work.img}" alt="${work.title}" class="work-img" loading="lazy">
          <div class="work-hover-overlay">
            <div class="work-hover-inner">
              <div class="work-hover-label">View Project</div>
            </div>
          </div>
        </div>
        <div class="work-info">
          <div class="work-client">${work.client}</div>
          <h3 class="work-title">${work.title}</h3>
          <div class="work-tags-row">
            ${work.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}
          </div>
        </div>
      </a>
    </article>
  `).join('')

  const newsHTML = newsData.map(n => `
    <a href="#" class="news-item">
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

  return c.html(`<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Hearth | 芸術と脳科学の融合を社会実装する</title>
  <meta name="description" content="体験価値の創造を通じて、企業・団体のコミュニケーションをデザインしています。イベントプロモーション、プライベートショー、展示会、ショールーム等の企画・制作。">
  <meta property="og:title" content="The Hearth | 芸術と脳科学の融合を社会実装する">
  <meta property="og:description" content="体験価値の創造を通じて、企業・団体のコミュニケーションをデザインしています。">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@300;400;600&family=Inter:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="/static/style.css">
</head>
<body>

  <!-- Loading Screen -->
  <div id="loading">
    <div class="loading-inner">
      <div class="loading-logo">
        <span class="loading-h">T</span><span class="loading-rest">he Hearth</span>
      </div>
      <div class="loading-sub">芸術と脳科学の融合を社会実装する</div>
      <div class="loading-bar-wrap"><div class="loading-bar"></div></div>
    </div>
  </div>

  <!-- Mobile Menu Overlay -->
  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
    <div class="mobile-menu-bg"></div>
    <div class="mobile-menu-content">
      <nav class="mobile-nav">
        <a href="/service" class="mobile-nav-link"><span class="mn-num">01</span><span class="mn-text">Service</span></a>
        <a href="/reports" class="mobile-nav-link"><span class="mn-num">02</span><span class="mn-text">Reports</span></a>
        <a href="/company" class="mobile-nav-link"><span class="mn-num">03</span><span class="mn-text">Company</span></a>
        <a href="/contact" class="mobile-nav-link"><span class="mn-num">04</span><span class="mn-text">Contact</span></a>
      </nav>
      <div class="mobile-menu-footer">
        <a href="/contact" class="mobile-contact-btn">Contact Us</a>
        <div class="mobile-social">
          <a href="#" aria-label="X (Twitter)"><i class="fab fa-x-twitter"></i></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header id="site-header" class="is-top">
    <a href="/" class="header-logo" aria-label="The Hearth ホーム">
      <div class="logo-mark-wrap">
        <svg class="logo-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="currentColor"/>
          <text x="20" y="28" text-anchor="middle" font-size="18" font-weight="bold" fill="white" font-family="serif">博</text>
        </svg>
      </div>
      <div class="logo-text">
        <span class="logo-en">The Hearth</span>
        <span class="logo-jp">芸術と脳科学の融合を社会実装する</span>
      </div>
    </a>

    <nav class="header-nav" aria-label="メインナビゲーション">
      <a href="/service" class="nav-link">Service</a>
      <a href="/reports" class="nav-link">Reports</a>
      <a href="/news" class="nav-link">News</a>
      <a href="/company" class="nav-link">Company</a>
      <a href="/contact" class="nav-link">Contact</a>
    </nav>

    <div class="header-right">
      <a href="/contact" class="btn-contact">Contact</a>
      <button class="hamburger" id="hamburger" aria-label="メニューを開く" aria-expanded="false">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
  </header>

  <main id="main-content">

    <!-- ===== HERO ===== -->
    <section id="hero" aria-label="メインビジュアル">
      <div class="hero-slider">
        ${heroSlidesHTML}
      </div>

      <div class="hero-content" id="heroContent">
        <div class="hero-content-inner">
          <div class="hero-eyebrow" id="heroLabel">Exhibition / Award</div>
          <h1 class="hero-title" id="heroTitle">ORGATEC TOKYO 2025</h1>
          <p class="hero-subtitle" id="heroSubtitle">史上最多・三度目グランプリ受賞</p>
          <div class="hero-client" id="heroClient">KOKUYO Co., Ltd.</div>
          <a href="#" class="hero-cta">View Project <span>→</span></a>
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

    <!-- ===== TICKER ===== -->
    <div id="service-ticker" aria-hidden="true">
      <div class="ticker-track">
        ${tickerHTML}
      </div>
    </div>

    <!-- ===== PURPOSE / OUR VISION ===== -->
    <section id="purpose" aria-label="パーパス">
      <div class="purpose-bg-text" aria-hidden="true">Communication Design</div>
      <div class="section-inner purpose-inner">
        <span class="purpose-label fade-up">The Hearth's Purpose</span>
        <div class="purpose-body">
          <p class="purpose-text fade-up delay-1">
            人・モノ・コトが時間や場所を問わずつながることができる時代において、<br>
            私たちは社会の流れを常に捉え、コミュニケーションの本質とは何かを探究し続けます。<br>
            そして、ココロある豊かなコミュニケーションをデザインすることで、<br>
            人と社会に創造力を生み出し、未来へつなげる原動力をつくります。
          </p>
          <h2 class="purpose-title fade-up delay-2">
            人と社会のコミュニケーションに<br>
            ココロを通わせ、<br>
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

    <!-- ===== WORKS ===== -->
    <section id="works" aria-label="制作実績">
      <div class="section-inner">
        <div class="section-head">
          <div class="section-head-left">
            <span class="section-eyebrow fade-up">Our Reports</span>
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
          <button class="filter-tab" data-filter="exhibition" role="tab" aria-selected="false">展示会 / 学会</button>
          <button class="filter-tab" data-filter="event" role="tab" aria-selected="false">イベント</button>
          <button class="filter-tab" data-filter="showroom" role="tab" aria-selected="false">ショールーム</button>
          <button class="filter-tab" data-filter="store" role="tab" aria-selected="false">店舗 / ディスプレイ</button>
        </div>

        <!-- Works Grid -->
        <div class="works-grid" id="worksGrid">
          ${worksHTML}
        </div>
      </div>
    </section>

    <!-- ===== SERVICE SECTION ===== -->
    <section id="service-home" aria-label="サービス">
      <div class="section-inner">
        <div class="section-head">
          <div class="section-head-left">
            <span class="section-eyebrow fade-up">What We Do</span>
            <h2 class="section-title-en fade-up delay-1">Service</h2>
            <p class="section-title-jp fade-up delay-2">サービス領域</p>
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
            <div class="service-card-icon"><i class="fas fa-building"></i></div>
            <div class="service-card-body">
              <h3 class="service-card-name">展示会 / 学会出展</h3>
              <p class="service-card-desc">国内外の展示会・学会において、企画から設計、制作、運営まで一気通貫で対応します。</p>
            </div>
            <span class="service-card-arrow">→</span>
          </a>
          <a href="/service" class="service-card fade-up delay-1">
            <div class="service-card-icon"><i class="fas fa-star"></i></div>
            <div class="service-card-body">
              <h3 class="service-card-name">イベントプロモーション</h3>
              <p class="service-card-desc">ブランド体験型イベントの企画・演出から当日運営まで、最高の瞬間をデザインします。</p>
            </div>
            <span class="service-card-arrow">→</span>
          </a>
          <a href="/service" class="service-card fade-up delay-2">
            <div class="service-card-icon"><i class="fas fa-store"></i></div>
            <div class="service-card-body">
              <h3 class="service-card-name">ショールーム / 商環境</h3>
              <p class="service-card-desc">恒久的なブランド空間の企画設計・施工。日常的な体験価値を通してブランドを強化します。</p>
            </div>
            <span class="service-card-arrow">→</span>
          </a>
          <a href="/service" class="service-card fade-up delay-3">
            <div class="service-card-icon"><i class="fas fa-desktop"></i></div>
            <div class="service-card-body">
              <h3 class="service-card-name">デジタルコンテンツ</h3>
              <p class="service-card-desc">インタラクティブなデジタル体験・映像制作で、リアルな空間にデジタルの力を融合します。</p>
            </div>
            <span class="service-card-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ===== NEWS ===== -->
    <section id="news" aria-label="ニュース">
      <div class="section-inner">
        <div class="section-head">
          <div class="section-head-left">
            <span class="section-eyebrow fade-up">Latest News</span>
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
          <a href="/reports" class="btn-secondary">実績を見る</a>
        </div>
      </div>
    </section>

  </main>

  <!-- ===== FOOTER ===== -->
  <footer id="site-footer" aria-label="フッター">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="footer-logo-mark">
              <svg viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" fill="white"/>
                <text x="20" y="28" text-anchor="middle" font-size="18" font-weight="bold" fill="black" font-family="serif">博</text>
              </svg>
            </div>
            <div class="footer-logo-text">
              <span class="footer-logo-en">The Hearth</span>
              <span class="footer-logo-sub">芸術と脳科学の融合を社会実装する</span>
            </div>
          </div>
          <p class="footer-company-jp">The Hearth</p>
          <p class="footer-address">〒163-0604 東京都新宿区西新宿1丁目25ー1</p>
          <div class="footer-social">
            <a href="#" aria-label="X (Twitter)"><i class="fab fa-x-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <nav class="footer-nav-simple" aria-label="フッターナビゲーション">
          <a href="/service" class="footer-nav-link">Service</a>
          <a href="/reports" class="footer-nav-link">Reports</a>
          <a href="/company" class="footer-nav-link">Company</a>
          <a href="/contact" class="footer-nav-link">Contact</a>
          <a href="/news" class="footer-nav-link">News</a>
        </nav>
      </div>

      <div class="footer-bottom">
        <div class="footer-legal-links">
          <a href="#">プライバシーポリシー</a>
          <a href="#">サイトポリシー</a>
          <a href="#">個人情報保護方針</a>
          <a href="#">Cookie設定</a>
        </div>
        <p class="footer-copyright">© 2024 The Hearth. All Rights Reserved.</p>
      </div>
    </div>
  </footer>

  <script id="slides-data" type="application/json">${slidesDataJSON}</script>
  <script src="/static/app.js"></script>
</body>
</html>`)
})

// API endpoints
app.get('/api/works', (c) => {
  const category = c.req.query('category')
  const filtered = category && category !== 'all'
    ? worksData.filter(w => w.category === category)
    : worksData
  return c.json(filtered)
})

app.get('/api/news', (c) => {
  return c.json(newsData)
})

// ── REPORTS PAGE ───────────────────────────────────────────
app.get('/reports', (c) => {
  const currentCat = c.req.query('cat') || 'all'
  const categories = [
    { key: 'all', label: 'All' },
    { key: 'exhibition', label: 'label1' },
    { key: 'event', label: 'label2' },
    { key: 'showroom', label: 'label3' },
    { key: 'store', label: 'label4' },
  ]
  const filtered = currentCat === 'all' ? layoutWorksData : layoutWorksData.filter(w => w.category === currentCat)
  const filterTabsHTML = categories.map(cat => {
    const active = currentCat === cat.key ? ' active' : ''
    return `<a href="/reports?cat=${cat.key}" class="filter-tab${active}">${cat.label}</a>`
  }).join('')
  const worksHTML = filtered.map((work, i) => `
    <article class="work-card fade-up" style="transition-delay:${(i % 3) * 0.08}s">
      <a href="#" class="work-card-link">
        <div class="work-card-img">
          <img src="${work.img}" alt="${work.title}" loading="lazy">
          <div class="work-card-overlay"><span class="work-card-view">View Project</span></div>
        </div>
        <div class="work-card-body">
          <p class="work-card-client">${work.client}</p>
          <h3 class="work-card-title">${work.title}</h3>
          <p class="work-card-subtitle">${work.subtitle}</p>
          <div class="work-card-tags">${work.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}</div>
        </div>
      </a>
    </article>`).join('')

  return c.html(`${pageHead('Reports', '研究レポート — The Hearthによる研究レポート。')}
${header('/reports')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Our Reports</span>
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
${pageScripts()}`)
})

// ── NEWS PAGE ─────────────────────────────────────────────
app.get('/news', (c) => {
  const newsHTML = newsData.map((n, i) => `
    <a href="#" class="news-card fade-up" style="transition-delay:${i * 0.05}s">
      <div class="news-card-inner">
        <div class="news-card-meta">
          <time class="news-card-date">${n.date}</time>
          <span class="news-card-category news-cat-${n.category.toLowerCase()}">${n.category}</span>
        </div>
        <h3 class="news-card-title">${n.title}</h3>
        <span class="news-card-arrow">→</span>
      </div>
    </a>`).join('')

  return c.html(`${pageHead('News', 'The Heathの最新情報・ニュースリリース。受賞実績、新サービス、プロジェクト情報などをお届けします。')}
${header('/news')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Latest News</span>
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
${pageScripts()}`)
})

// ── SERVICE PAGE ─────────────────────────────────────────
app.get('/service', (c) => {
  const serviceItems = [
    { icon: 'fa-building', name: '展示会 / 学会出展', desc: '国内外の展示会・学会における企画から施工・運営まで。ブースデザインで来場者に強い印象を与えます。', link: '/reports?cat=exhibition' },
    { icon: 'fa-star', name: 'イベントプロモーション', desc: 'ブランド体験型イベントの企画・演出・運営。ターゲットに刺さる体験で記憶に残るブランド接点を創出。', link: '/reports?cat=event' },
    { icon: 'fa-store', name: 'プライベートショー', desc: '自社開催の展示・発表会の企画運営。招待客に特別な体験価値を提供し、商談機会の最大化を支援。', link: '/reports' },
    { icon: 'fa-tv', name: 'デジタルコンテンツ', desc: 'AR/VR・インタラクティブ展示・映像制作。デジタルの力でリアルな空間を拡張し、体験価値を高めます。', link: '/reports' },
    { icon: 'fa-map-marker-alt', name: 'ショールーム / 商環境', desc: 'ブランドの恒久的な体験拠点の企画設計・施工。日常的な来訪で深いブランド理解を促します。', link: '/reports?cat=showroom' },
    { icon: 'fa-window-maximize', name: '店舗 / ウィンドウディスプレイ', desc: '路面店・百貨店・商業施設のディスプレイ制作。季節感やブランドの世界観を空間で表現します。', link: '/reports?cat=store' },
  ]
  const serviceMenuHTML = serviceItems.map(item => `
    <a href="${item.link}" class="service-menu-item fade-up">
      <div class="service-menu-icon"><i class="fas ${item.icon}"></i></div>
      <div class="service-menu-body">
        <h3 class="service-menu-name">${item.name}</h3>
        <p class="service-menu-desc">${item.desc}</p>
      </div>
      <div class="service-menu-arrow">→</div>
    </a>`).join('')

  return c.html(`${pageHead('Service', '体験価値の創造を通じて、企業や社会の課題解決に貢献します。リアル・デジタルを統合したコミュニケーションデザイン。')}
${header('/service')}
<main>
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85" alt="Service" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Our Service</span>
      <h1 class="page-hero-title fade-up delay-1">Service</h1>
      <p class="page-hero-lead fade-up delay-2">人も、社会も動かす<br>"体験"をつくる。</p>
    </div>
  </section>
  <section class="service-intro">
    <div class="section-inner">
      <div class="service-intro-grid">
        <div class="service-intro-text fade-up">
          <span class="section-eyebrow">OUR SERVICE</span>
          <h2 class="service-intro-title">体験創造のプロフェッショナルとして、<br>多岐にわたるソリューションを<br>統合的にご提供します。</h2>
        </div>
        <div class="service-intro-desc fade-up delay-2">
          <p>The Hearthは、リアル・デジタルを通じて、人の"体験"を統合的にデザインし、企業や社会の課題解決に貢献します。豊富な経験と充実した組織機能で、多様なお客様のニーズにお応えします。</p>
        </div>
      </div>
    </div>
  </section>
  <section class="service-domains">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">主な事業領域</span>
          <h2 class="section-title-en fade-up delay-1">Domain</h2>
        </div>
      </div>
      <div class="service-domain-grid">
        <div class="service-domain-item fade-up">
          <div class="service-domain-img"><img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" alt="BtoCマーケティング" loading="lazy"></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">BtoCマーケティング</h3>
            <p class="service-domain-desc">消費者に直接アプローチするイベント・プロモーション・体験型施策を企画から運営まで一気通貫で提供。ブランドと生活者の間に感動的な体験をつくります。</p>
            <div class="service-domain-tags"><span>イベントプロモーション</span><span>店舗・ウィンドウディスプレイ</span><span>アートイベント</span></div>
            <a href="/reports?cat=event" class="service-domain-link">実績を見る →</a>
          </div>
        </div>
        <div class="service-domain-item fade-up delay-1">
          <div class="service-domain-img"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80" alt="BtoBマーケティング" loading="lazy"></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">BtoBマーケティング</h3>
            <p class="service-domain-desc">展示会・学会・プライベートショー・ショールームなど、企業間の深い関係構築に向けた体験設計を行います。リード獲得から顧客育成まで支援します。</p>
            <div class="service-domain-tags"><span>展示会 / 学会出展</span><span>プライベートショー</span><span>ショールーム</span></div>
            <a href="/reports?cat=exhibition" class="service-domain-link">実績を見る →</a>
          </div>
        </div>
        <div class="service-domain-item fade-up delay-2">
          <div class="service-domain-img"><img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80" alt="行政・自治体" loading="lazy"></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">行政・自治体・街づくり関連</h3>
            <p class="service-domain-desc">地域活性化・観光PR・万博など、行政・自治体と連携した大規模な体験空間の企画・制作・運営に対応。地域と人をつなぐ体験をデザインします。</p>
            <div class="service-domain-tags"><span>パビリオン</span><span>地域PR</span><span>観光促進</span></div>
            <a href="/reports?cat=event" class="service-domain-link">実績を見る →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="service-strengths">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">ご提供価値</span>
          <h2 class="section-title-en fade-up delay-1">Our Strengths</h2>
          <p class="section-title-jp fade-up delay-2">The Hearthの強み</p>
        </div>
      </div>
      <div class="strength-grid">
        <div class="strength-item fade-up"><div class="strength-num">01</div><h3 class="strength-title">ワンストップの体験設計</h3><p class="strength-desc">企画・デザイン・制作・施工・運営まで、すべて一社で完結。スピードと品質を両立した一気通貫のサービスを提供します。</p></div>
        <div class="strength-item fade-up delay-1"><div class="strength-num">02</div><h3 class="strength-title">リアル × デジタルの融合</h3><p class="strength-desc">空間デザインとデジタルコンテンツを統合した体験設計が強み。インタラクティブ展示・AR/VR・映像演出を組み合わせます。</p></div>
        <div class="strength-item fade-up delay-2"><div class="strength-num">03</div><h3 class="strength-title">豊富な実績と専門知識</h3><p class="strength-desc">1967年の創業以来、国内外の展示会・イベントを多数手がけてきた実績と知見。各業界の特性を理解した提案が可能です。</p></div>
        <div class="strength-item fade-up delay-3"><div class="strength-num">04</div><h3 class="strength-title">サステナブルな空間づくり</h3><p class="strength-desc">廃材活用・資源循環を取り入れたサーキュラーデザインへの取り組み。環境に配慮した体験設計で企業のESG活動を支援します。</p></div>
      </div>
    </div>
  </section>
  <section class="service-menu-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">SERVICE MENU</span>
          <h2 class="section-title-en fade-up delay-1">What We Do</h2>
          <p class="section-title-jp fade-up delay-2">サービスメニュー</p>
        </div>
      </div>
      <div class="service-menu-list">${serviceMenuHTML}</div>
    </div>
  </section>
  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-img fade-up"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85" alt="デジタルソリューション" loading="lazy"></div>
        <div class="service-digital-content fade-up delay-2">
          <span class="section-eyebrow">Digital Solutions</span>
          <h2 class="service-digital-title">デジタル領域の強み</h2>
          <p class="service-digital-desc">時代に求められるデジタルソリューションをいち早く取り入れ、リアル領域との融合を進めています。専属部門、グループ会社を有し、信頼性の高く、成果につながるサービスをご提供します。</p>
          <ul class="service-digital-list">
            <li><i class="fas fa-check"></i> インタラクティブコンテンツ開発</li>
            <li><i class="fas fa-check"></i> AR / VR 体験設計</li>
            <li><i class="fas fa-check"></i> 映像・アニメーション制作</li>
            <li><i class="fas fa-check"></i> AIを活用した来場者分析</li>
            <li><i class="fas fa-check"></i> オンラインイベントプラットフォーム</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">プロジェクトのご相談は<br>お気軽にどうぞ</h2>
        <p class="contact-sub">お問い合わせ内容を確認後、担当者より折り返しご連絡させていただきます。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/contact" class="btn-primary">お問い合わせ</a>
        <a href="/reports" class="btn-secondary">実績を見る</a>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts()}`)
})

// ── COMPANY PAGE ─────────────────────────────────────────
app.get('/company', (c) => {
  const officers = [
    { role: '代表取締役 会長執行役員 CEO', name: '田口 徳久' },
    { role: '代表取締役 社長執行役員 COO', name: '原田 淳' },
    { role: '取締役 執行役員 CFO', name: '藤井 由康' },
    { role: '取締役（常勤監査等委員）', name: '田中 雅樹' },
    { role: '社外取締役（監査等委員）', name: '山田 毅志' },
    { role: '社外取締役（監査等委員）', name: '石塚 陽子' },
    { role: '社外取締役（監査等委員）', name: '金森 浩之' },
    { role: '執行役員', name: '福田 雄之' },
    { role: '執行役員', name: '南 正一郎' },
  ]
  const historyItems = [
    { year: '1967', text: '東京都中央区に「田口博展堂」として創業' },
    { year: '1970', text: '株式会社博展として法人化、設立' },
    { year: '1985', text: '大阪事務所を開設。全国展開を本格化' },
    { year: '1995', text: 'デジタルコンテンツ事業に本格参入' },
    { year: '2004', text: '東京証券取引所マザーズ市場に株式上場' },
    { year: '2012', text: '東京証券取引所JASDAQ市場に市場変更' },
    { year: '2015', text: '東証1部（現：プライム市場）への市場変更' },
    { year: '2018', text: 'デジタルエクスペリエンス株式会社をグループ化' },
    { year: '2022', text: '東京証券取引所グロース市場へ区分変更' },
    { year: '2024', text: 'ビジュアル・アイデンティティをリニューアル' },
  ]
  const officersHTML = officers.map((o, i) => `
    <div class="officer-item fade-up" style="transition-delay:${(i % 3) * 0.08}s">
      <div class="officer-avatar"><div class="officer-avatar-placeholder"><i class="fas fa-user"></i></div></div>
      <p class="officer-role">${o.role}</p>
      <p class="officer-name">${o.name}</p>
    </div>`).join('')
  const historyHTML = historyItems.map((item, i) => `
    <div class="history-item fade-up" style="transition-delay:${i * 0.06}s">
      <div class="history-year">${item.year}</div>
      <div class="history-line"></div>
      <div class="history-text">${item.text}</div>
    </div>`).join('')

  return c.html(`${pageHead('Company', 'The Hearthの会社概要・メンバー・実績をご覧いただけます。')}
${header('/company')}
<main>
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=85" alt="Company" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">About Us</span>
      <h1 class="page-hero-title fade-up delay-1">Company</h1>
      <p class="page-hero-sub fade-up delay-2">会社概要</p>
    </div>
  </section>
  <section class="company-purpose">
    <div class="section-inner">
      <div class="company-purpose-grid">
        <div class="company-purpose-text fade-up">
          <span class="section-eyebrow">Our Purpose</span>
          <h2 class="company-purpose-title">人と社会のコミュニケーションに<br>ココロを通わせ、<br>未来へつなげる原動力をつくる。</h2>
          <p class="company-purpose-desc">1967年の創業以来、博展はリアルな"体験"を通じた企業コミュニケーションの創造を事業領域としてきました。私たちは「Communication Design®」を旗印に、人と社会のつながりを深める体験を生み出し続けています。</p>
        </div>
        <div class="company-stats fade-up delay-2">
          <div class="company-stat"><div class="company-stat-num" data-target="57">0</div><div class="company-stat-unit">年</div><div class="company-stat-label">創業年数</div></div>
          <div class="company-stat"><div class="company-stat-num" data-target="473">0</div><div class="company-stat-unit">名</div><div class="company-stat-label">社員数（単体）</div></div>
          <div class="company-stat"><div class="company-stat-num" data-target="188">0</div><div class="company-stat-unit">億円</div><div class="company-stat-label">売上高（連結）</div></div>
          <div class="company-stat"><div class="company-stat-num" data-target="545">0</div><div class="company-stat-unit">名</div><div class="company-stat-label">社員数（連結）</div></div>
        </div>
      </div>
    </div>
  </section>
  <section class="company-overview">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">会社情報</span>
          <h2 class="section-title-en fade-up delay-1">Overview</h2>
          <p class="section-title-jp fade-up delay-2">会社概要</p>
        </div>
      </div>
      <div class="company-table-wrap fade-up">
        <table class="company-table">
          <tbody>
            <tr><th>正式名称</th><td>The Hearth</td></tr>
            <tr><th>所在地</th><td>〒163-0604<br>東京都新宿区西新宿1丁目25ー1<br></td></tr>
            <tr><th>設立</th><td>2025年9月7日</td></tr>
            <tr><th>資本金</th><td>300万円</td></tr>
            <tr><th>メンバー</th><td>3名</td></tr>
            <tr><th>事業内容</th><td>「Experience Marketing」を事業領域とした、コンタクトポイントにおけるコミュニケーション開発及び統合型マーケティングソリューションの提供</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section class="company-officers">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Leadership</span>
          <h2 class="section-title-en fade-up delay-1">Officers</h2>
          <p class="section-title-jp fade-up delay-2">役員</p>
        </div>
      </div>
      <div class="officers-grid">${officersHTML}</div>
    </div>
  </section>
  <section class="company-history">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">History</span>
          <h2 class="section-title-en fade-up delay-1">History</h2>
          <p class="section-title-jp fade-up delay-2">沿革</p>
        </div>
      </div>
      <div class="history-timeline">${historyHTML}</div>
    </div>
  </section>
  <section class="company-group" id="sustainability">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Group Companies</span>
          <h2 class="section-title-en fade-up delay-1">Group</h2>
          <p class="section-title-jp fade-up delay-2">グループ会社</p>
        </div>
      </div>
      <div class="group-grid">
        <div class="group-item fade-up"><h3 class="group-name">デジタルエクスペリエンス株式会社</h3><p class="group-desc">イベント領域におけるITプロダクトの提供。展示会・イベントのデジタル化を推進するサービスを展開。</p></div>
        <div class="group-item fade-up delay-1"><h3 class="group-name">株式会社ニチナン</h3><p class="group-desc">展示会・イベント、商環境など、リアルプロモーションサービスを中部・関西エリアで企画から制作までをワンストップサービスで提供。</p></div>
        <div class="group-item fade-up delay-2"><h3 class="group-name">株式会社ヒラミヤ</h3><p class="group-desc">3D CADによる複雑な仕様設計・簡易解析を用いたホテル、商環境・オフィス、装飾美術品等の企画・製作。</p></div>
      </div>
    </div>
  </section>
  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">プロジェクトのご相談は<br>お気軽にどうぞ</h2>
        <p class="contact-sub">お問い合わせ内容を確認後、担当者より折り返しご連絡させていただきます。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/contact" class="btn-primary">お問い合わせ</a>
        <a href="/reports" class="btn-secondary">実績を見る</a>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts(`
<script>
  document.querySelectorAll('.company-stat-num[data-target]').forEach(el => {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const target = parseInt(el.dataset.target);
        let t0 = performance.now();
        (function update(now) {
          const p = Math.min((now - t0) / 1600, 1);
          el.textContent = Math.floor((1 - Math.pow(1-p, 3)) * target);
          if (p < 1) requestAnimationFrame(update);
          else el.textContent = target;
        })(performance.now());
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
  });
</script>
`)}`)
})

// ── CONTACT PAGE ─────────────────────────────────────────
app.get('/contact', (c) => {
  const contactTypes = ['プロジェクト・制作の相談', '展示会 / 学会出展', 'イベントプロモーション', 'ショールーム / 商環境', 'デジタルコンテンツ', 'その他']
  const radioHTML = contactTypes.map(label => `
    <label class="form-radio">
      <input type="radio" name="type" value="${label}">
      <span class="form-radio-mark"></span>
      <span>${label}</span>
    </label>`).join('')

  return c.html(`${pageHead('Contact', 'プロジェクトのご相談、お問い合わせはこちらから。展示会・イベント・ショールームなど、あらゆる体験設計に対応します。')}
${header('/contact')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Get In Touch</span>
      <h1 class="page-hero-title fade-up delay-1">Contact</h1>
      <p class="page-hero-sub fade-up delay-2">お問い合わせ</p>
    </div>
  </section>
  <section class="contact-section">
    <div class="section-inner">
      <div class="contact-grid">
        <div class="contact-form-wrap fade-up">
          <h2 class="contact-form-title">プロジェクトのご相談・お問い合わせ</h2>
          <p class="contact-form-lead">以下のフォームにご記入の上、送信してください。担当者より2〜3営業日以内にご連絡いたします。</p>
          <form class="contact-form" id="contactForm" novalidate>
            <div class="form-row form-row--2">
              <div class="form-group">
                <label class="form-label" for="company">会社名・団体名 <span class="form-required">必須</span></label>
                <input class="form-input" type="text" id="company" name="company" placeholder="株式会社〇〇" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="name">お名前 <span class="form-required">必須</span></label>
                <input class="form-input" type="text" id="name" name="name" placeholder="山田 太郎" required>
              </div>
            </div>
            <div class="form-row form-row--2">
              <div class="form-group">
                <label class="form-label" for="email">メールアドレス <span class="form-required">必須</span></label>
                <input class="form-input" type="email" id="email" name="email" placeholder="example@company.co.jp" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="tel">電話番号</label>
                <input class="form-input" type="tel" id="tel" name="tel" placeholder="03-0000-0000">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">お問い合わせの種類 <span class="form-required">必須</span></label>
              <div class="form-radio-group">${radioHTML}</div>
            </div>
            <div class="form-group">
              <label class="form-label" for="budget">ご予算（目安）</label>
              <select class="form-select" id="budget" name="budget">
                <option value="" disabled selected>選択してください</option>
                <option>〜100万円</option>
                <option>100〜300万円</option>
                <option>300〜500万円</option>
                <option>500万〜1,000万円</option>
                <option>1,000万円以上</option>
                <option>未定</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="message">お問い合わせ内容 <span class="form-required">必須</span></label>
              <textarea class="form-textarea" id="message" name="message" rows="6" placeholder="プロジェクトの概要・開催時期・会場など、お気軽にご記入ください。" required></textarea>
            </div>
            <div class="form-group">
              <label class="form-checkbox">
                <input type="checkbox" name="privacy" required>
                <span class="form-checkbox-mark"></span>
                <span><a href="#" target="_blank">プライバシーポリシー</a>に同意する</span>
              </label>
            </div>
            <div class="form-submit-wrap">
              <button type="submit" class="form-submit-btn">
                <span class="form-submit-text">送信する</span>
                <span class="form-submit-icon">→</span>
              </button>
            </div>
          </form>
          <div class="form-success" id="formSuccess" style="display:none">
            <div class="form-success-icon"><i class="fas fa-check-circle"></i></div>
            <h3>お問い合わせを受け付けました</h3>
            <p>ご連絡いただきありがとうございます。<br>担当者より2〜3営業日以内にご連絡いたします。</p>
            <a href="/" class="btn-primary" style="margin-top:24px;display:inline-block">トップへ戻る</a>
          </div>
        </div>
        <div class="contact-info fade-up delay-2">
          <div class="contact-info-block">
            <h3 class="contact-info-heading">所在地</h3>
            <p class="contact-info-text">〒163-0604<br>東京都新宿区西新宿1丁目25ー1</p>
          </div>
          <div class="contact-info-block" id="recruit">
            <h3 class="contact-info-heading">採用に関するお問い合わせ</h3>
            <p class="contact-info-text">新卒採用・キャリア採用に関するご質問は、採用ページよりご確認ください。</p>
            <a href="#" class="contact-info-link">採用情報を見る →</a>
          </div>
          <div class="contact-info-block">
            <h3 class="contact-info-heading">SNS</h3>
            <div class="contact-social">
              <a href="#" class="contact-social-link" aria-label="X"><i class="fab fa-x-twitter"></i></a>
              <a href="#" class="contact-social-link" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="contact-social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="contact-social-link" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts(`
<script>
  document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.form-submit-btn');
    btn.disabled = true;
    btn.querySelector('.form-submit-text').textContent = '送信中...';
    setTimeout(() => {
      this.style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  });
</script>
`)}`)
})

export default handle(app)
export { app }
