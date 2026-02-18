// ============================================
// 共通データ
// ============================================
export const worksData = [
  { id: 1, title: 'ORGATEC TOKYO 2025', client: 'コクヨ株式会社', subtitle: '国際家具見本市「オルガテック東京2025」', tags: ['#BtoB', '#展示会/学会出展', '#受賞作品'], img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85', featured: true, category: 'exhibition', year: '2025' },
  { id: 2, title: 'In the world tree', client: '株式会社カナデビア', subtitle: '大阪・関西万博（EXPO2025）パビリオン', tags: ['#BtoC', '#店舗/ウィンドウディスプレイ'], img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80', featured: false, category: 'store', year: '2025' },
  { id: 3, title: 'JAPAN MOBILITY SHOW 2025', client: '日本自動車工業会', subtitle: '次世代モビリティの体験空間', tags: ['#BtoC', '#展示会/学会出展'], img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', featured: false, category: 'exhibition', year: '2025' },
  { id: 4, title: 'Star Wars Celebration JAPAN 2025', client: '株式会社オーディオテクニカ', subtitle: '日本文化をモチーフとしたブースデザイン', tags: ['#BtoC', '#展示会/学会出展', '#デジタルコンテンツ'], img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', featured: false, category: 'exhibition', year: '2025' },
  { id: 5, title: "Dewar's 12年 DISCOVER YOUR HIGHBALL", client: 'バカルディ ジャパン株式会社', subtitle: '六本木ヒルズカフェ 期間限定イベント', tags: ['#BtoC', '#イベントプロモーション'], img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80', featured: false, category: 'event', year: '2024' },
  { id: 6, title: 'Innovation Experience Center', client: 'パナソニック株式会社', subtitle: 'ブランド体験型ショールーム設計', tags: ['#BtoB', '#ショールーム'], img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', featured: false, category: 'showroom', year: '2024' },
  { id: 7, title: '在る美 ウィンドウアート', client: '株式会社資生堂', subtitle: '東京銀座資生堂ビル ウィンドウディスプレイ', tags: ['#BtoC', '#店舗/ウィンドウディスプレイ', '#受賞作品'], img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', featured: false, category: 'store', year: '2024' },
  { id: 8, title: 'RE:WORLD HIROSHIMA', client: '広島県', subtitle: '大阪・関西万博 広島県ブース', tags: ['#行政/自治体', '#イベントプロモーション'], img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80', featured: false, category: 'event', year: '2025' },
  { id: 9, title: '暗闇婚礼 蠢一族お化け屋敷', client: '株式会社東京ドーム', subtitle: '東京ドームシティ アトラクションズ', tags: ['#BtoC', '#イベントプロモーション'], img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&q=80', featured: false, category: 'event', year: '2025' },
]

export const newsData = [
  { date: '2026.02.14', category: 'News', title: '博展グループ、2025年12月期連結決算発表（売上高188億円）' },
  { date: '2026.01.22', category: 'Award', title: 'ORGATEC TOKYO 2025にてグランプリをはじめとする史上初のダブル受賞を達成' },
  { date: '2025.12.10', category: 'Event', title: '博展の1年間のクリエイティブの集大成「Hakuten Open Studio 2025」を開催' },
  { date: '2025.04.13', category: 'Project', title: '大阪・関西万博（EXPO2025）「未来の都市」パビリオン、4月13日より出展開始' },
  { date: '2025.03.19', category: 'Press', title: '博展・デジタルエクスペリエンス、AIを活用した展示会効果測定サービスを新たに開始' },
  { date: '2025.01.14', category: 'Press', title: '「パケテン」が累計ユーザー数5,000社を突破。展示会ブース設計・施工のオンライン受注を加速' },
]

// ============================================
// ヘッダー HTML
// ============================================
export function header(currentPath: string = '/'): string {
  const navItems = [
    { href: '/service', label: 'Service' },
    { href: '/reports',  label: 'Reports' },
    { href: '/company', label: 'Company' },
    { href: '/contact', label: 'Contact' },
    { href: '#news',    label: 'News' },
  ]

  const navHTML = navItems.map(item => {
    const active = currentPath === item.href ? ' nav-active' : ''
    return `<a href="${item.href}" class="nav-link${active}">${item.label}</a>`
  }).join('')

  const mobileNavHTML = navItems.map((item, i) => {
    return `<a href="${item.href}" class="mobile-nav-link">
      <span class="mn-num">0${i+1}</span>
      <span class="mn-text">${item.label}</span>
    </a>`
  }).join('')

  const isTop = currentPath === '/'
  const headerClass = isTop ? 'is-top' : 'is-scrolled'

  return `
  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
    <div class="mobile-menu-bg"></div>
    <div class="mobile-menu-content">
      <nav class="mobile-nav">${mobileNavHTML}</nav>
      <div class="mobile-menu-footer">
        <a href="/contact" class="mobile-contact-btn">Contact Us</a>
        <div class="mobile-social">
          <a href="#" aria-label="X"><i class="fab fa-x-twitter"></i></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header id="site-header" class="${headerClass}">
    <a href="/" class="header-logo" aria-label="博展 ホーム">
      <div class="logo-mark-wrap">
        <svg class="logo-mark" viewBox="0 0 40 40" fill="none">
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
      ${navHTML}
    </nav>
    <div class="header-right">
      <a href="/contact" class="btn-contact">Contact</a>
      <button class="hamburger" id="hamburger" aria-label="メニュー" aria-expanded="false">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
  </header>`
}

// ============================================
// フッター HTML
// ============================================
export function footer(): string {
  return `
  <footer id="site-footer">
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
            <a href="#" aria-label="X"><i class="fab fa-x-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <nav class="footer-nav-simple">
          <a href="/service" class="footer-nav-link">Service</a>
          <a href="/reports" class="footer-nav-link">Reports</a>
          <a href="/company" class="footer-nav-link">Company</a>
          <a href="/contact" class="footer-nav-link">Contact</a>
          <a href="#news" class="footer-nav-link">News</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <div class="footer-legal-links">
          <a href="#">プライバシーポリシー</a>
          <a href="#">サイトポリシー</a>
          <a href="#">個人情報保護方針</a>
        </div>
        <p class="footer-copyright">© 2024 HAKUTEN Corporation. All Rights Reserved.</p>
      </div>
    </div>
  </footer>`
}

// ============================================
// ページ共通 <head>
// ============================================
export function pageHead(title: string, desc: string = ''): string {
  const description = desc || '体験価値の創造を通じて、企業・団体のコミュニケーションをデザインしています。'
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | 株式会社博展 HAKUTEN</title>
  <meta name="description" content="${description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@300;400;600&family=Inter:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="/static/style.css">
  <link rel="stylesheet" href="/static/pages.css">
</head>
<body>`
}

// ============================================
// ページ共通フッタースクリプト
// ============================================
export function pageScripts(extra: string = ''): string {
  return `
  <script src="/static/app.js"></script>
  <script src="/static/pages.js"></script>
  ${extra}
</body>
</html>`
}
