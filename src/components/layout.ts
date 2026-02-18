// ============================================
// 共通データ
// ============================================
export const reportsData = [
  { id: 1, title: 'title1?', client: 'client1', subtitle: 'subtitle1', tags: ['#BtoB', '#出展'], img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85', featured: true, category: 'category1', year: '2025' },
  { id: 2, title: 'title2', client: 'client2', subtitle: 'subtitle2', tags: ['#BtoC', '#ディスプレイ'], img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80', featured: true, category: 'category2', year: '2025' },
]

export const newsData = [
  { date: '2026.02.19', category: 'News', title: '弊社のホームページをリニューアルしました。' },
  { date: '2025.11.01', category: 'Event', title: '未知の価値に挑戦するプログラム【SHIBUYA QWS チャレンジ #25】に採択されました。' },
  { date: '2025.10.18', category: 'Project', title: '公益財団法人Soilが主催する、社会課題解決を支援する助成プログラムSoil100に採択されました。' },
  { date: '2025.10.27', category: 'News', title: '弊社のホームページが完成しました。' },
  { date: '2025.10.05', category: 'Press', title: '異才を持つ学生が社会課題を解決するUT-LABの公認プロジェクトに採択されました。' },
  { date: '2025.02.21', category: 'Award', title: '第7回 WASEDA Demo Dayにてリザプロ賞を受賞しました。' },
]

// ============================================
// ヘッダー HTML
// ============================================
export function header(currentPath: string = '/'): string {
  const navItems = [
    { href: '/service', label: 'Service' },
    { href: '/reports',  label: 'Reports' },
    { href: '/news',    label: 'News' },
    { href: '/company', label: 'Company' },
    { href: '/contact', label: 'Contact' },
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
        <img src="/static/logo.png" alt="The Hearth Logo" class="logo-mark" />
      </div>
      <div class="logo-text">
        <span class="logo-en">The Hearth</span>
        <span class="logo-jp">芸術と脳科学の融合を社会実装する</span>
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
              <img src="/static/logo.png" alt="The Hearth Logo" />
            </div>
            <div class="footer-logo-text">
              <span class="footer-logo-en">The Hearth</span>
              <span class="footer-logo-sub">芸術と脳科学の融合を社会実装する</span>
            </div>
          </div>
          <p class="footer-company-jp">The Hearth</p>
          <p class="footer-address">〒163-0604 東京都新宿区西新宿1丁目25ー1</p>
        </div>
        <nav class="footer-nav-simple">
          <a href="/service" class="footer-nav-link">Service</a>
          <a href="/reports" class="footer-nav-link">Reports</a>
          <a href="/news" class="footer-nav-link">News</a>
          <a href="/company" class="footer-nav-link">Company</a>
          <a href="/contact" class="footer-nav-link">Contact</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <div class="footer-legal-links">
          <a href="#">プライバシーポリシー</a>
          <a href="#">サイトポリシー</a>
          <a href="#">個人情報保護方針</a>
        </div>
        <p class="footer-copyright">© 2024 The Hearth. All Rights Reserved.</p>
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
