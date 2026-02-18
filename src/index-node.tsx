import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'

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

// Story data
const storyData = [
  {
    id: 1,
    date: 'Feb. 2026',
    title: '被爆からの復興と魅力あふれる広島の姿を伝えるブース「RE:WORLD HIROSHIMA」を2025年大阪・関西万博に出展',
    client: '広島県',
    subtitle: '大阪・関西万博（EXPO2025）広島県ブース「RE:WORLD HIROSHIMA」',
    tags: ['#行政/自治体/官公庁', '#イベントプロモーション'],
    img: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=600&q=80'
  },
  {
    id: 2,
    date: 'Jan. 2026',
    title: '8年ぶりの全面リニューアル「暗闇婚礼 蠢一族お化け屋敷」はこうして生まれた──制作陣と（株）東京ドームが語る、新たなホラー体験への挑戦',
    client: '株式会社東京ドーム',
    subtitle: '暗闇婚礼 蠢一族お化け屋敷',
    tags: ['#BtoC', '#イベントプロモーション', '#店舗/ウィンドウディスプレイ'],
    img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80'
  },
  {
    id: 3,
    date: 'Dec. 2025',
    title: 'マテリアルに記憶を残し、サーキュラーデザインの実現へのメッセージを発信する実験の場「ANTENNA」の挑戦',
    client: '三井デザインテック株式会社',
    subtitle: 'ANTENNA プロジェクト',
    tags: ['#BtoB', '#ブランディング', '#オフィス', '#サステナビリティ実績'],
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'
  },
  {
    id: 4,
    date: 'Sep. 2025',
    title: '『スター・ウォーズ』の世界観とオーディオテクニカのブランドを表現した「Star Wars Celebration JAPAN 2025」の展示デザイン',
    client: '株式会社オーディオテクニカ',
    subtitle: 'STARWARS CELEBRATION JAPAN 2025',
    tags: ['#BtoC', '#展示会/学会出展', '#デジタルコンテンツ'],
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80'
  }
]

// News data
const newsData = [
  {
    date: '2026.02.14',
    category: 'News',
    title: '博展グループ、2025年12月期連結決算発表（売上高188億円）'
  },
  {
    date: '2026.01.22',
    category: 'Award',
    title: 'ORGATEC TOKYO 2025にてグランプリをはじめとする史上初のダブル受賞を達成'
  },
  {
    date: '2025.12.10',
    category: 'Event',
    title: '博展の1年間のクリエイティブの集大成「Hakuten Open Studio 2025」を開催'
  },
  {
    date: '2025.04.13',
    category: 'Project',
    title: '大阪・関西万博（EXPO2025）「未来の都市」パビリオン、4月13日より出展開始'
  },
  {
    date: '2025.03.19',
    category: 'Press',
    title: '博展・デジタルエクスペリエンス、AIを活用した展示会効果測定サービスを新たに開始'
  },
  {
    date: '2025.01.14',
    category: 'Press',
    title: '「パケテン」が累計ユーザー数5,000社を突破。展示会ブース設計・施工のオンライン受注を加速'
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
  'Exhibition', 'Event Promotion', 'Private Show', 'Showroom',
  'Digital Contents', 'Space Design', 'Pavilion', 'Store Display',
  'Communication Design®', 'Experience Design', 'Brand Activation',
  'Sustainability'
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
    <article class="work-item ${work.featured ? 'work-featured' : ''}" data-category="${work.category}">
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

  const storyHTML = storyData.map(s => `
    <a href="#" class="story-item">
      <div class="story-img-wrap">
        <img src="${s.img}" alt="${s.title}" loading="lazy">
        <div class="story-img-overlay"></div>
      </div>
      <div class="story-body">
        <div class="story-meta">
          <span class="story-date">${s.date}</span>
          <span class="story-client-name">${s.client}</span>
        </div>
        <p class="story-subtitle">${s.subtitle}</p>
        <h3 class="story-title">${s.title}</h3>
        <div class="story-tags">
          ${s.tags.map(t => `<span class="story-tag">${t}</span>`).join('')}
        </div>
      </div>
    </a>
  `).join('')

  const newsHTML = newsData.map(n => `
    <a href="#" class="news-item">
      <div class="news-item-inner">
        <div class="news-meta">
          <time class="news-date">${n.date}</time>
          <span class="news-category news-cat-${n.category.toLowerCase()}">${n.category}</span>
        </div>
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
  <title>株式会社博展 HAKUTEN | Communication Design®</title>
  <meta name="description" content="体験価値の創造を通じて、企業・団体のコミュニケーションをデザインしています。イベントプロモーション、プライベートショー、展示会、ショールーム等の企画・制作。">
  <meta property="og:title" content="株式会社博展 HAKUTEN | Communication Design®">
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
        <span class="loading-h">H</span><span class="loading-rest">AKUTEN</span>
      </div>
      <div class="loading-sub">Communication Design®</div>
      <div class="loading-bar-wrap"><div class="loading-bar"></div></div>
    </div>
  </div>

  <!-- Cookie Notice -->
  <div class="cookie-notice" id="cookieNotice">
    <p>当社のウェブサイトはサービス向上およびお客様により適したサービスを提供するため、Cookieを使用しております。当サイトの使用を継続することで、当サイトの<a href="#">ポリシー</a>に同意したものといたします。</p>
    <button class="cookie-btn" id="cookieAccept">同意する</button>
  </div>

  <!-- Mobile Menu Overlay -->
  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
    <div class="mobile-menu-bg"></div>
    <div class="mobile-menu-content">
      <nav class="mobile-nav">
        <a href="#works" class="mobile-nav-link"><span class="mn-num">01</span><span class="mn-text">Works</span></a>
        <a href="#story" class="mobile-nav-link"><span class="mn-num">02</span><span class="mn-text">Story</span></a>
        <a href="#" class="mobile-nav-link"><span class="mn-num">03</span><span class="mn-text">Service</span></a>
        <a href="#purpose" class="mobile-nav-link"><span class="mn-num">04</span><span class="mn-text">Purpose</span></a>
        <a href="#about" class="mobile-nav-link"><span class="mn-num">05</span><span class="mn-text">Company</span></a>
        <a href="#news" class="mobile-nav-link"><span class="mn-num">06</span><span class="mn-text">News</span></a>
      </nav>
      <div class="mobile-menu-footer">
        <a href="#" class="mobile-contact-btn">Contact Us</a>
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
    <a href="/" class="header-logo" aria-label="博展 ホーム">
      <div class="logo-mark-wrap">
        <svg class="logo-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="currentColor"/>
          <text x="20" y="28" text-anchor="middle" font-size="18" font-weight="bold" fill="white" font-family="serif">博</text>
        </svg>
      </div>
      <div class="logo-text">
        <span class="logo-jp">株式会社博展</span>
        <span class="logo-en">HAKUTEN</span>
      </div>
    </a>

    <nav class="header-nav" aria-label="メインナビゲーション">
      <a href="#works" class="nav-link">Works</a>
      <a href="#story" class="nav-link">Story</a>
      <a href="#" class="nav-link">Service</a>
      <a href="#purpose" class="nav-link">Purpose</a>
      <a href="#about" class="nav-link">Company</a>
      <a href="#news" class="nav-link">News</a>
    </nav>

    <div class="header-right">
      <a href="#" class="btn-contact">Contact</a>
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

    <!-- ===== WORKS ===== -->
    <section id="works" aria-label="制作実績">
      <div class="section-inner">
        <div class="section-head">
          <div class="section-head-left">
            <span class="section-eyebrow fade-up">Our Works</span>
            <h2 class="section-title-en fade-up delay-1">Works</h2>
            <p class="section-title-jp fade-up delay-2">制作実績</p>
          </div>
          <a href="#" class="view-all-btn fade-up delay-2">
            View All Works
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
        <div class="works-grid grid-with-featured" id="worksGrid">
          ${worksHTML}
        </div>
      </div>
    </section>

    <!-- ===== STORY ===== -->
    <section id="story" aria-label="ストーリー">
      <div class="section-inner">
        <div class="section-head">
          <div class="section-head-left">
            <span class="section-eyebrow fade-up">Our Story</span>
            <h2 class="section-title-en fade-up delay-1">Story</h2>
            <p class="section-title-jp fade-up delay-2">ストーリー</p>
          </div>
          <a href="#" class="view-all-btn fade-up delay-2">
            View All Stories
            <svg class="arrow-icon" viewBox="0 0 24 8" fill="none">
              <path d="M0 4H22M19 1L22 4L19 7" stroke="currentColor" stroke-width="1"/>
            </svg>
          </a>
        </div>

        <div class="story-grid">
          ${storyHTML}
        </div>
      </div>
    </section>

    <!-- ===== PURPOSE ===== -->
    <section id="purpose" aria-label="パーパス">
      <div class="purpose-bg-text" aria-hidden="true">Communication Design</div>
      <div class="section-inner purpose-inner">
        <span class="purpose-label fade-up">Hakuten's Purpose</span>
        <div class="purpose-body">
          <p class="purpose-text fade-up delay-1">
            人・モノ・コトが時間や場所を問わずつながることができる時代。<br>
            私たちは社会の流れを常に捉え、<br>
            <em>"つながること"</em>すなわちコミュニケーションの本質とは何かを探究し続ける。
          </p>
          <h2 class="purpose-title fade-up delay-2">
            人と社会のコミュニケーションに<br>
            ココロを通わせ、<br>
            未来へつなげる原動力をつくる。
          </h2>
        </div>
        <div class="purpose-bottom fade-up delay-3">
          <div class="purpose-cd">Communication Design<sup>®</sup></div>
          <a href="#" class="purpose-link">
            Our Vision
            <svg class="arrow-icon" viewBox="0 0 24 8" fill="none">
              <path d="M0 4H22M19 1L22 4L19 7" stroke="currentColor" stroke-width="1"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ===== SERVICE ===== -->
    <section id="service" aria-label="サービス">
      <div class="section-inner">
        <div class="section-head">
          <div class="section-head-left">
            <span class="section-eyebrow fade-up">What We Do</span>
            <h2 class="section-title-en fade-up delay-1">Service</h2>
            <p class="section-title-jp fade-up delay-2">サービス</p>
          </div>
        </div>

        <div class="service-grid">
          <div class="service-item fade-up">
            <div class="service-icon"><i class="fas fa-building"></i></div>
            <h3 class="service-name">展示会 / 学会出展</h3>
            <p class="service-desc">国内外の展示会・学会において、企画から設計、制作、運営まで一気通貫で対応します。</p>
          </div>
          <div class="service-item fade-up delay-1">
            <div class="service-icon"><i class="fas fa-star"></i></div>
            <h3 class="service-name">イベントプロモーション</h3>
            <p class="service-desc">ブランド体験型イベントの企画・演出から当日運営まで、最高の瞬間をデザインします。</p>
          </div>
          <div class="service-item fade-up delay-2">
            <div class="service-icon"><i class="fas fa-store"></i></div>
            <h3 class="service-name">ショールーム / 店舗</h3>
            <p class="service-desc">恒久的なブランド空間の企画設計・施工。日常的な体験価値を通してブランドを強化します。</p>
          </div>
          <div class="service-item fade-up delay-3">
            <div class="service-icon"><i class="fas fa-tv"></i></div>
            <h3 class="service-name">デジタルコンテンツ</h3>
            <p class="service-desc">インタラクティブなデジタル体験・映像制作で、リアルな空間にデジタルの力を融合します。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ABOUT ===== -->
    <section id="about" aria-label="会社概要">
      <div class="section-inner">
        <div class="about-grid">
          <div class="about-visual fade-up">
            <div class="about-img-main">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=85" alt="博展 オフィス" loading="lazy">
            </div>
            <div class="about-img-sub">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" alt="博展 チーム" loading="lazy">
            </div>
          </div>
          <div class="about-content">
            <span class="section-eyebrow fade-up">About Us</span>
            <h2 class="about-title fade-up delay-1">
              体験価値の創造を通じて<br>コミュニケーションを<br>デザインする。
            </h2>
            <p class="about-text fade-up delay-2">
              博展は1967年の創業以来、リアルな体験を通じた企業コミュニケーションの創造を事業領域としてきました。展示会・イベント・ショールームなどにおいて、企画から設計、制作、運営まで一気通貫のサービスを提供しています。
            </p>
            <div class="about-stats fade-up delay-2">
              <div class="stat-item">
                <div class="stat-num" data-target="57">0</div>
                <div class="stat-unit">年</div>
                <div class="stat-label">創業年数</div>
              </div>
              <div class="stat-item">
                <div class="stat-num" data-target="473">0</div>
                <div class="stat-unit">名</div>
                <div class="stat-label">社員数（単体）</div>
              </div>
              <div class="stat-item">
                <div class="stat-num" data-target="188">0</div>
                <div class="stat-unit">億円</div>
                <div class="stat-label">売上高（連結）</div>
              </div>
            </div>
            <a href="#" class="view-all-btn fade-up delay-3">
              Company Information
              <svg class="arrow-icon" viewBox="0 0 24 8" fill="none">
                <path d="M0 4H22M19 1L22 4L19 7" stroke="currentColor" stroke-width="1"/>
              </svg>
            </a>
          </div>
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
          <a href="#" class="view-all-btn fade-up delay-2">
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
          <p class="contact-sub">展示会・イベント・ショールームなど、あらゆる体験設計のご要望に対応いたします。</p>
        </div>
        <div class="contact-actions fade-up delay-2">
          <a href="#" class="btn-primary">お問い合わせ</a>
          <a href="#" class="btn-secondary">資料請求</a>
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
              <span class="footer-logo-en">HAKUTEN</span>
              <span class="footer-logo-sub">Communication Design®</span>
            </div>
          </div>
          <p class="footer-company-jp">株式会社博展</p>
          <p class="footer-address">〒104-0031 東京都中央区京橋三丁目1番1号<br>東京スクエアガーデン20F</p>
          <div class="footer-social">
            <a href="#" aria-label="X (Twitter)"><i class="fab fa-x-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <nav class="footer-nav" aria-label="フッターナビゲーション">
          <div class="footer-nav-col">
            <h3 class="footer-nav-heading">Works</h3>
            <ul>
              <li><a href="#">展示会 / 学会出展</a></li>
              <li><a href="#">イベントプロモーション</a></li>
              <li><a href="#">プライベートショー</a></li>
              <li><a href="#">ショールーム</a></li>
              <li><a href="#">店舗 / ウィンドウ</a></li>
              <li><a href="#">デジタルコンテンツ</a></li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <h3 class="footer-nav-heading">Company</h3>
            <ul>
              <li><a href="#">会社概要</a></li>
              <li><a href="#">Purpose / Vision</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">IR情報</a></li>
              <li><a href="#">グループ会社</a></li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <h3 class="footer-nav-heading">Recruit</h3>
            <ul>
              <li><a href="#">採用情報</a></li>
              <li><a href="#">新卒採用</a></li>
              <li><a href="#">キャリア採用</a></li>
              <li><a href="#">社内制度・文化</a></li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <h3 class="footer-nav-heading">Contact</h3>
            <ul>
              <li><a href="#">お問い合わせ</a></li>
              <li><a href="#">資料請求</a></li>
              <li><a href="#">アクセス</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="footer-bottom">
        <div class="footer-legal-links">
          <a href="#">プライバシーポリシー</a>
          <a href="#">サイトポリシー</a>
          <a href="#">個人情報保護方針</a>
          <a href="#">Cookie設定</a>
        </div>
        <p class="footer-copyright">© 2024 HAKUTEN Corporation. All Rights Reserved.</p>
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

app.get('/api/story', (c) => {
  return c.json(storyData)
})

export default app
