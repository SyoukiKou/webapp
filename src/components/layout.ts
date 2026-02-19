// ============================================
// 共通データ
// ============================================
import { heroSlides as heroSlidesRaw } from '../../data/hero.js'
import { reportsData as reportsDataRaw } from '../../data/reports.js'
import { newsData as newsDataRaw } from '../../data/news.js'

export const heroSlides = heroSlidesRaw
export const reportsData = reportsDataRaw
export const newsData = newsDataRaw

// ============================================
// ヘッダー HTML
// ============================================
export function header(currentPath: string = '/', useTransparentHeader: boolean = false): string {
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

  const isTop = currentPath === '/' || useTransparentHeader
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
            <a href="https://x.com/syiaviolin" aria-label="X">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18.244 2H21.5l-7.106 8.12L22.5 22h-6.172l-4.83-6.48L5.94 22H2.5l7.59-8.67L1.5 2h6.328l4.37 5.86L18.244 2Zm-1.07 18.2h1.8L6.86 3.74H4.93l12.244 16.46Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/syiaviolin/" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/syiaviolin/" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="mailto:info@thehearth.jp" aria-label="Send mail"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
    </div>
  </div>

  <!-- Header -->
  <header id="site-header" class="${headerClass}">
    <a href="/" class="header-logo" aria-label="The Hearth ホーム">
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
        <p class="footer-copyright">© 2025 The Hearth. All Rights Reserved.</p>
      </div>
    </div>
  </footer>`
}

// ============================================
// ページ共通 <head>
// ============================================
export function pageHead(title: string, desc: string = '', bodyClass: string = ''): string {
  const description = desc || '芸術体験の創造を通じて、これからの社会をデザインしています。'
  const bodyClassAttr = bodyClass ? ` class="${bodyClass}"` : ''
  
  // Google Analytics ID を環境変数から取得
  const gaId = process.env.VITE_GA_ID || ''
  
  // Google Analytics スクリプト（本番環境でのみ有効）
  const gaScript = gaId ? `
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  </script>` : ''
  
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | The Hearth</title>
  <meta name="description" content="${description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@300;400;600&family=Inter:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="/static/style.css">
  <link rel="stylesheet" href="/static/pages.css">${gaScript}
</head>
<body${bodyClassAttr}>`
}

// ============================================
// ページ共通フッタースクリプト
// ============================================
export function pageScripts(
  extraOrOptions: string | { extra?: string; includeApp?: boolean; includePages?: boolean } = ''
): string {
  const options = typeof extraOrOptions === 'string' ? { extra: extraOrOptions } : extraOrOptions
  const extra = options.extra || ''
  const includeApp = options.includeApp !== false
  const includePages = options.includePages !== false

  return `
  <div id="cookieNotice" class="cookie-notice" style="display: none;" role="dialog" aria-live="polite" aria-label="Cookie notice">
    <p>当サイトではCookieを使用しています。詳細はプライバシーポリシーをご確認ください。</p>
    <a href="#" aria-label="プライバシーポリシー">プライバシーポリシー</a>
    <button id="cookieAccept" class="cookie-btn" type="button">OK</button>
  </div>
  ${extra}
  ${includeApp ? '<script src="/static/app.js"></script>' : ''}
  ${includePages ? '<script src="/static/pages.js"></script>' : ''}
</body>
</html>`
}
