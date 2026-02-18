import { Hono } from 'hono'
import { handle } from '@hono/node-server/vercel'
import { serveStatic } from '@hono/node-server/serve-static'
import { header, footer, pageHead, pageScripts, worksData, newsData } from '../src/components/layout'

const app = new Hono()

// ── Static files ──────────────────────────────────────────
app.use('/static/*', serveStatic({ root: './public' }))
app.get('/favicon.ico', (c) => new Response(null, { status: 204 }))

// ── TOP PAGE ──────────────────────────────────────────────
app.get('/', (c) => {
  const heroSlides = [
    { label: 'Exhibition Design', title: 'ORGATEC TOKYO 2025', client: 'KOKUYO Co., Ltd.', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=90' },
    { label: 'Pavilion Design', title: 'In the world tree', client: 'KANADEVIA Corporation', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=90' },
    { label: 'Event Production', title: "Dewar's 12 DISCOVER YOUR HIGHBALL", client: 'Bacardi Japan', img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1920&q=90' },
    { label: 'Brand Experience', title: 'Star Wars Celebration JAPAN 2025', client: 'Audio Technica', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=90' },
  ]

  const storyData = [
    { title: 'RE:WORLD HIROSHIMA — 万博で広島の未来を発信', date: '2026.02', tags: ['#行政/自治体', '#イベントプロモーション'], img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80', url: '#' },
    { title: '暗闇婚礼 蠢一族 ─ 東京ドームお化け屋敷リニューアル', date: '2026.01', tags: ['#BtoC', '#イベントプロモーション'], img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&q=80', url: '#' },
    { title: '資生堂 在る美 ── 銀座ウィンドウアート', date: '2025.10', tags: ['#BtoC', '#店舗/ウィンドウディスプレイ', '#受賞作品'], img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', url: '#' },
    { title: 'Dewar\'s 12年 DISCOVER YOUR HIGHBALL', date: '2025.11', tags: ['#BtoC', '#イベントプロモーション'], img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80', url: '#' },
  ]

  const featuredWork = worksData.find(w => w.featured) || worksData[0]
  const otherWorks = worksData.filter(w => !w.featured).slice(0, 5)

  const heroSlidesHTML = heroSlides.map((s, i) => `
    <div class="hero-slide${i === 0 ? ' active' : ''}" data-index="${i}">
      <div class="hero-bg" style="background-image:url('${s.img}')"></div>
    </div>`).join('')

  const heroDotsHTML = heroSlides.map((_, i) => `
    <button class="hero-dot${i === 0 ? ' active' : ''}" data-slide="${i}" aria-label="スライド ${i+1}"></button>`).join('')

  const featuredWorksHTML = `
    <article class="work-featured fade-up">
      <a href="/reports" class="work-featured-link">
        <div class="work-featured-img">
          <img src="${featuredWork.img}" alt="${featuredWork.title}" loading="lazy">
          <div class="work-overlay"><span>View Works</span></div>
        </div>
        <div class="work-featured-body">
          <p class="work-client">${featuredWork.client}</p>
          <h3 class="work-title">${featuredWork.title}</h3>
          <p class="work-subtitle">${featuredWork.subtitle}</p>
          <div class="work-tags">${featuredWork.tags.map(t => `<span>${t}</span>`).join('')}</div>
        </div>
      </a>
    </article>
    ${otherWorks.map((w, i) => `
      <article class="work-item fade-up" style="transition-delay:${0.08 + i * 0.06}s" data-filter="${w.category}">
        <a href="/reports" class="work-item-link">
          <div class="work-item-img">
            <img src="${w.img}" alt="${w.title}" loading="lazy">
            <div class="work-overlay"><span>View</span></div>
          </div>
          <p class="work-client">${w.client}</p>
          <h3 class="work-title">${w.title}</h3>
          <div class="work-tags">${w.tags.map(t => `<span>${t}</span>`).join('')}</div>
        </a>
      </article>`).join('')}`

  const storiesHTML = storyData.map((s, i) => `
    <article class="story-item fade-up" style="transition-delay:${i * 0.08}s">
      <a href="${s.url}" class="story-link">
        <div class="story-img">
          <img src="${s.img}" alt="${s.title}" loading="lazy">
        </div>
        <div class="story-body">
          <div class="story-tags">${s.tags.map(t => `<span>${t}</span>`).join('')}</div>
          <h3 class="story-title">${s.title}</h3>
          <span class="story-date">${s.date}</span>
        </div>
      </a>
    </article>`).join('')

  const newsHTML = newsData.map(n => `
    <li class="news-item fade-up">
      <a href="#" class="news-link">
        <time class="news-date">${n.date}</time>
        <span class="news-cat news-cat--${n.category.toLowerCase()}">${n.category}</span>
        <span class="news-title">${n.title}</span>
      </a>
    </li>`).join('')

  return c.html(`<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>株式会社博展 HAKUTEN | Communication Design®</title>
  <meta name="description" content="博展は体験創造のプロフェッショナルとして、企業のコミュニケーションを多角的にデザインします。展示会・イベント・ショールーム・デジタルコンテンツ。">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@300;400;600&family=Inter:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="/static/style.css">
</head>
<body>

<!-- Loading Screen -->
<div id="loading" class="loading-screen">
  <div class="loading-inner">
    <div class="loading-logo">
      <svg viewBox="0 0 60 60" fill="none" width="60" height="60">
        <rect width="60" height="60" fill="white"/>
        <text x="30" y="42" text-anchor="middle" font-size="28" font-weight="bold" fill="black" font-family="serif">博</text>
      </svg>
    </div>
    <div class="loading-bar-wrap"><div class="loading-bar" id="loadingBar"></div></div>
  </div>
</div>

<!-- Cookie Notice -->
<div id="cookieNotice" class="cookie-notice">
  <p>本サイトはCookieを使用しています。サイトを引き続き利用することで、<a href="#" class="cookie-link">サイトポリシー</a>に同意したものとみなします。</p>
  <button id="cookieAccept" class="cookie-accept">OK</button>
</div>

${header('/')}

<main>
  <!-- ── HERO ── -->
  <section id="hero" class="hero">
    <div class="hero-slides-wrap" id="heroSlides">${heroSlidesHTML}</div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-meta fade-hero">
        <span class="hero-label" id="heroLabel">${heroSlides[0].label}</span>
      </div>
      <h1 class="hero-title">
        <span class="hero-title-jp fade-hero delay-hero-1">人も、社会も動かす</span>
        <span class="hero-title-jp fade-hero delay-hero-1">"体験"をつくる。</span>
      </h1>
      <div class="hero-work-info fade-hero delay-hero-2">
        <span class="hero-work-title" id="heroWorkTitle">${heroSlides[0].title}</span>
        <span class="hero-sep">／</span>
        <span class="hero-work-client" id="heroWorkClient">${heroSlides[0].client}</span>
      </div>
    </div>
    <div class="hero-progress"><div class="hero-progress-bar" id="heroProgress"></div></div>
    <div class="hero-dots" id="heroDots">${heroDotsHTML}</div>
    <div class="hero-scroll-arrow">
      <span>Scroll</span>
      <svg viewBox="0 0 24 40" width="16" height="28"><line x1="12" y1="0" x2="12" y2="32" stroke="white" stroke-width="1.5"/><polyline points="6,26 12,32 18,26" fill="none" stroke="white" stroke-width="1.5"/></svg>
    </div>
  </section>

  <!-- ── SERVICE TICKER ── -->
  <div class="service-ticker" aria-hidden="true">
    <div class="ticker-inner">
      ${Array(3).fill('Exhibition Design&nbsp;&nbsp;//&nbsp;&nbsp;Event Production&nbsp;&nbsp;//&nbsp;&nbsp;Showroom Design&nbsp;&nbsp;//&nbsp;&nbsp;Window Display&nbsp;&nbsp;//&nbsp;&nbsp;Digital Content&nbsp;&nbsp;//&nbsp;&nbsp;Communication Design®&nbsp;&nbsp;//&nbsp;&nbsp;').join('')}
    </div>
  </div>

  <!-- ── WORKS ── -->
  <section id="works" class="works-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Our Works</span>
          <h2 class="section-title-en fade-up delay-1">Works</h2>
          <p class="section-title-jp fade-up delay-2">制作実績</p>
        </div>
        <div class="section-head-right">
          <a href="/reports" class="section-more-link fade-up">View All Works →</a>
        </div>
      </div>

      <!-- Filter buttons -->
      <div class="works-filters fade-up">
        <button class="filter-btn active" data-cat="all">All</button>
        <button class="filter-btn" data-cat="exhibition">展示会 / 学会出展</button>
        <button class="filter-btn" data-cat="event">イベントプロモーション</button>
        <button class="filter-btn" data-cat="showroom">ショールーム</button>
        <button class="filter-btn" data-cat="store">店舗 / ディスプレイ</button>
      </div>

      <div class="works-grid" id="worksGrid">
        ${featuredWorksHTML}
      </div>
    </div>
  </section>

  <!-- ── STORY ── -->
  <section id="story" class="story-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Behind the Works</span>
          <h2 class="section-title-en fade-up delay-1">Story</h2>
          <p class="section-title-jp fade-up delay-2">プロジェクトストーリー</p>
        </div>
        <div class="section-head-right">
          <a href="/reports" class="section-more-link fade-up">View All Stories →</a>
        </div>
      </div>
      <div class="story-grid">${storiesHTML}</div>
    </div>
  </section>

  <!-- ── PURPOSE ── -->
  <section id="purpose" class="purpose-section">
    <div class="purpose-bg-text" aria-hidden="true">COMMUNICATION<br>DESIGN</div>
    <div class="section-inner">
      <div class="purpose-content">
        <span class="section-eyebrow fade-up" style="color:rgba(255,255,255,0.6)">Our Purpose</span>
        <h2 class="purpose-title fade-up delay-1">
          人と社会の<br>コミュニケーションに<br>ココロを通わせ、<br>未来へつなげる<br>原動力をつくる。
        </h2>
        <a href="/service" class="purpose-link fade-up delay-2">Our Vision &amp; Service →</a>
      </div>
    </div>
  </section>

  <!-- ── ABOUT ── -->
  <section id="about" class="about-section">
    <div class="section-inner">
      <div class="about-grid">
        <div class="about-visual fade-up">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=85" alt="HAKUTEN about">
          <div class="about-visual-caption">Experience Marketing</div>
        </div>
        <div class="about-content">
          <span class="section-eyebrow fade-up">About HAKUTEN</span>
          <h2 class="about-title fade-up delay-1">体験創造のプロフェッショナルとして</h2>
          <p class="about-desc fade-up delay-2">1967年の創業以来、博展は「体験価値の創造」を軸に企業のコミュニケーションを支えてきました。展示会・イベント・ショールームなどリアル接点でのコミュニケーション設計から、デジタルとの融合まで、ワンストップでご提供します。</p>
          <div class="about-stats">
            <div class="about-stat fade-up delay-2">
              <span class="stat-num" data-target="57">0</span>
              <span class="stat-unit">年</span>
              <span class="stat-label">創業</span>
            </div>
            <div class="about-stat fade-up delay-3">
              <span class="stat-num" data-target="473">0</span>
              <span class="stat-unit">名</span>
              <span class="stat-label">社員数</span>
            </div>
            <div class="about-stat fade-up" style="transition-delay:0.4s">
              <span class="stat-num" data-target="188">0</span>
              <span class="stat-unit">億円</span>
              <span class="stat-label">売上高</span>
            </div>
          </div>
          <a href="/company" class="about-link fade-up delay-3">Company Overview →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ── NEWS ── -->
  <section id="news" class="news-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Latest Updates</span>
          <h2 class="section-title-en fade-up delay-1">News</h2>
        </div>
        <div class="section-head-right">
          <a href="#" class="section-more-link fade-up">View All News →</a>
        </div>
      </div>
      <ul class="news-list">${newsHTML}</ul>
    </div>
  </section>

  <!-- ── CONTACT CTA ── -->
  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">プロジェクトのご相談は<br>お気軽にどうぞ</h2>
        <p class="contact-sub">展示会・イベント・ショールームなど、あらゆる体験設計のご要望に対応いたします。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/contact" class="btn-primary">お問い合わせ</a>
        <a href="/reports" class="btn-secondary">実績を見る</a>
      </div>
    </div>
  </section>
</main>

${footer()}
<script src="/static/app.js"></script>
</body>
</html>`)
})

// ── WORKS PAGE ──────────────────────────────────────────────
app.get('/reports', (c) => {
  const currentCat = c.req.query('cat') || 'all'

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'exhibition', label: '展示会 / 学会出展' },
    { key: 'event', label: 'イベントプロモーション' },
    { key: 'showroom', label: 'ショールーム' },
    { key: 'store', label: '店舗 / ディスプレイ' },
  ]

  const filtered = currentCat === 'all' ? worksData : worksData.filter(w => w.category === currentCat)

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

  return c.html(`${pageHead('Works', '制作実績一覧 — 博展が手がけた展示会・イベント・ショールームなどの実績をご覧いただけます。')}
${header('/reports')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Our Works</span>
      <h1 class="page-hero-title fade-up delay-1">Works</h1>
      <p class="page-hero-sub fade-up delay-2">制作実績</p>
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

// ── SERVICE PAGE ──────────────────────────────────────────────
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
          <p>博展は、リアル・デジタルを通じて、人の"体験"を統合的にデザインし、企業や社会の課題解決に貢献します。豊富な経験と充実した組織機能で、多様なお客様のニーズにお応えします。</p>
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
          <div class="service-domain-img"><img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80" alt="行政・自治体・街づくり" loading="lazy"></div>
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
          <p class="section-title-jp fade-up delay-2">博展の強み</p>
        </div>
      </div>
      <div class="strength-grid">
        <div class="strength-item fade-up">
          <div class="strength-num">01</div>
          <h3 class="strength-title">ワンストップの体験設計</h3>
          <p class="strength-desc">企画・デザイン・制作・施工・運営まで、すべて一社で完結。スピードと品質を両立した一気通貫のサービスを提供します。</p>
        </div>
        <div class="strength-item fade-up delay-1">
          <div class="strength-num">02</div>
          <h3 class="strength-title">リアル × デジタルの融合</h3>
          <p class="strength-desc">空間デザインとデジタルコンテンツを統合した体験設計が強み。インタラクティブ展示・AR/VR・映像演出を組み合わせます。</p>
        </div>
        <div class="strength-item fade-up delay-2">
          <div class="strength-num">03</div>
          <h3 class="strength-title">豊富な実績と専門知識</h3>
          <p class="strength-desc">1967年の創業以来、国内外の展示会・イベントを多数手がけてきた実績と知見。各業界の特性を理解した提案が可能です。</p>
        </div>
        <div class="strength-item fade-up delay-3">
          <div class="strength-num">04</div>
          <h3 class="strength-title">サステナブルな空間づくり</h3>
          <p class="strength-desc">廃材活用・資源循環を取り入れたサーキュラーデザインへの取り組み。環境に配慮した体験設計で企業のESG活動を支援します。</p>
        </div>
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
        <div class="service-digital-img fade-up">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85" alt="デジタルソリューション" loading="lazy">
        </div>
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
        <p class="contact-sub">展示会・イベント・ショールームなど、あらゆる体験設計のご要望に対応いたします。</p>
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

// ── COMPANY PAGE ──────────────────────────────────────────────
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
      <div class="officer-avatar">
        <div class="officer-avatar-placeholder"><i class="fas fa-user"></i></div>
      </div>
      <p class="officer-role">${o.role}</p>
      <p class="officer-name">${o.name}</p>
    </div>`).join('')

  const historyHTML = historyItems.map((item, i) => `
    <div class="history-item fade-up" style="transition-delay:${i * 0.06}s">
      <div class="history-year">${item.year}</div>
      <div class="history-line"></div>
      <div class="history-text">${item.text}</div>
    </div>`).join('')

  return c.html(`${pageHead('Company', '株式会社博展の会社概要・役員情報・沿革・グループ会社情報をご覧いただけます。')}
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
          <h2 class="company-purpose-title">
            人と社会のコミュニケーションに<br>
            ココロを通わせ、<br>
            未来へつなげる原動力をつくる。
          </h2>
          <p class="company-purpose-desc">1967年の創業以来、博展はリアルな"体験"を通じた企業コミュニケーションの創造を事業領域としてきました。私たちは「Communication Design®」を旗印に、人と社会のつながりを深める体験を生み出し続けています。</p>
        </div>
        <div class="company-stats fade-up delay-2">
          <div class="company-stat">
            <div class="company-stat-num" data-target="57">0</div>
            <div class="company-stat-unit">年</div>
            <div class="company-stat-label">創業年数</div>
          </div>
          <div class="company-stat">
            <div class="company-stat-num" data-target="473">0</div>
            <div class="company-stat-unit">名</div>
            <div class="company-stat-label">社員数（単体）</div>
          </div>
          <div class="company-stat">
            <div class="company-stat-num" data-target="188">0</div>
            <div class="company-stat-unit">億円</div>
            <div class="company-stat-label">売上高（連結）</div>
          </div>
          <div class="company-stat">
            <div class="company-stat-num" data-target="545">0</div>
            <div class="company-stat-unit">名</div>
            <div class="company-stat-label">社員数（連結）</div>
          </div>
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
            <tr><th>正式名称</th><td>株式会社 博展</td></tr>
            <tr><th>英文名称</th><td>Hakuten Corporation</td></tr>
            <tr><th>所在地</th><td>
              <strong>本社</strong><br>〒104-0031 東京都中央区京橋三丁目１番１号 東京スクエアガーデン20F<br><br>
              <strong>西日本事業所</strong><br>〒541-0043 大阪府大阪市中央区高麗橋3-2-7 ORIX 高麗橋ビル5F<br><br>
              <strong>中部営業所</strong><br>〒460-0008 愛知県名古屋市中区栄三丁目１８番１号 ナディアパーク ビジネスセンタービル21F
            </td></tr>
            <tr><th>創業</th><td>1967年</td></tr>
            <tr><th>設立</th><td>1970年</td></tr>
            <tr><th>資本金</th><td>2億3,970万円（2024年12月末）</td></tr>
            <tr><th>従業員数</th><td>単体：473名　連結：545名（2024年12月末）</td></tr>
            <tr><th>事業内容</th><td>「Experience Marketing」を事業領域とした、コンタクトポイントにおけるコミュニケーション開発及び統合型マーケティングソリューションの提供</td></tr>
            <tr><th>売上高（連結）</th><td>188億4,543万円（2024年12月末）</td></tr>
            <tr><th>取引先業種</th><td>情報、通信、製造、食品、医療、自動車、スポーツなど</td></tr>
            <tr><th>取引銀行</th><td>三井住友銀行、みずほ銀行、三菱ＵＦＪ銀行、横浜銀行、りそな銀行、三井住友信託銀行</td></tr>
            <tr><th>上場市場</th><td>東京証券取引所グロース　証券コード：2173</td></tr>
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
        <div class="group-item fade-up">
          <h3 class="group-name">デジタルエクスペリエンス株式会社</h3>
          <p class="group-desc">イベント領域におけるITプロダクトの提供。展示会・イベントのデジタル化を推進するサービスを展開。</p>
        </div>
        <div class="group-item fade-up delay-1">
          <h3 class="group-name">株式会社ニチナン</h3>
          <p class="group-desc">展示会・イベント、商環境など、リアルプロモーションサービスを中部・関西エリアで企画から制作までをワンストップサービスで提供。</p>
        </div>
        <div class="group-item fade-up delay-2">
          <h3 class="group-name">株式会社ヒラミヤ</h3>
          <p class="group-desc">3D CADによる複雑な仕様設計・簡易解析を用いたホテル、商環境・オフィス、装飾美術品等の企画・製作。</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">プロジェクトのご相談は<br>お気軽にどうぞ</h2>
        <p class="contact-sub">展示会・イベント・ショールームなど、あらゆる体験設計のご要望に対応いたします。</p>
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

// ── CONTACT PAGE ──────────────────────────────────────────────
app.get('/contact', (c) => {
  const contactTypes = [
    'プロジェクト・制作の相談',
    '展示会 / 学会出展',
    'イベントプロモーション',
    'ショールーム / 商環境',
    'デジタルコンテンツ',
    'その他',
  ]

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
            <h3 class="contact-info-heading">本社</h3>
            <p class="contact-info-text">〒104-0031<br>東京都中央区京橋三丁目1番1号<br>東京スクエアガーデン20F</p>
          </div>
          <div class="contact-info-block">
            <h3 class="contact-info-heading">西日本事業所</h3>
            <p class="contact-info-text">〒541-0043<br>大阪府大阪市中央区高麗橋3-2-7<br>ORIX 高麗橋ビル5F</p>
          </div>
          <div class="contact-info-block">
            <h3 class="contact-info-heading">中部営業所</h3>
            <p class="contact-info-text">〒460-0008<br>愛知県名古屋市中区栄三丁目18番1号<br>ナディアパーク ビジネスセンタービル21F</p>
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

// ── API ROUTES ──────────────────────────────────────────────
app.get('/api/reports', (c) => {
  const category = c.req.query('category')
  const data = category && category !== 'all'
    ? worksData.filter(w => w.category === category)
    : worksData
  return c.json(data)
})

app.get('/api/news', (c) => c.json(newsData))

export default handle(app)
