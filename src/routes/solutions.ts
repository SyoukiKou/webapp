import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts, createProductSchema } from '../components/layout.js'
import { serviceDetailPages } from '../data/service-pages/index.js'
import type { ServiceDetailPage } from '../data/service-pages/types.js'
import { reportsData } from '../../data/reports.js'

const app = new Hono()

type SolutionKey = 'business' | 'medical' | 'research' | 'culture'

type SolutionPage = {
  key: SolutionKey
  title: string
  label: string
  lead: string
  challengeTitle: string
  challengeBody: string
  offers: string[]
  evidence: string[]
  services: string[]
  ctaPrimary: string
  ctaSecondary: string
}

const solutionPages: SolutionPage[] = [
  {
    key: 'business',
    title: 'For Business',
    label: '企業・組織向け',
    lead: '人材課題と空間課題を、芸術体験・対話・音環境設計で同時に扱います。',
    challengeTitle: '論理だけでは解けない組織の停滞に向き合う',
    challengeBody: 'メンタル不調、コミュニケーション不足、創造性の低下は、制度や研修だけでは根本的に解きづらい課題です。The Hearthは、体験設計を通じて、組織内の関係性と空間の質を少しずつ変えていきます。',
    offers: [
      'Regulative Art Experience による研修・チームビルディング',
      '環境・生体連動音楽生成システムによるオフィス空間プロデュース',
      '導入後の振り返りと継続運用の設計'
    ],
    evidence: [
      '対話の導入で心理的安全性と関係性を整える',
      'ストレス軽減や集中回復に向けた空間改善を支援する',
      'エンゲージメントと創造性の両方を高める導線をつくる'
    ],
    services: ['rae', 'live-bgm', 'reporting'],
    ctaPrimary: '/contact',
    ctaSecondary: '/download'
  },
  {
    key: 'medical',
    title: 'For Medical',
    label: '医療・福祉向け',
    lead: 'KOMOREBI をはじめとする環境介入で、患者とスタッフの双方にとって負荷の少ない空間をつくります。',
    challengeTitle: '無機質な病室を、回復を支える環境へ変える',
    challengeBody: 'ICUのせん妄リスク、病室のストレス、看護負荷の増大は、現場の努力だけで吸収しきれません。The Hearthは、空間を整えるデバイスと芸術的な環境演出を組み合わせ、医療の現場に実装しやすい形で提案します。',
    offers: [
      '医療機関向けメディアアート生成デバイス KOMOREBI',
      '患者の体内リズムと現場運営に配慮した環境改善',
      '実証実験と効果検証の伴走'
    ],
    evidence: [
      '脳波・生体データを含む評価設計に接続できる',
      '患者のストレスとスタッフの負担を同時に軽減する',
      'Science ページで研究背景を確認できる'
    ],
    services: ['komorebi', 'welfare', 'reporting'],
    ctaPrimary: '/contact',
    ctaSecondary: '/science'
  },
  {
    key: 'research',
    title: 'For R&D',
    label: '研究・共創パートナー向け',
    lead: '脳科学×アートの知見を、共同研究・試作・評価の3段階で実装します。',
    challengeTitle: 'アカデミアと現場をつなぐ実装力を提供する',
    challengeBody: '研究は再現性だけでなく、現場に届くかどうかが重要です。The Hearthは、アカデミックな知見とアーティストの実践知を統合し、定量評価やプロトタイピングまで進められる共創体制を整えています。',
    offers: [
      '脳科学×アートの共同研究',
      '芸術体験の定量評価と実験設計',
      '生体連動型デバイス・ソフトウェアの共同開発'
    ],
    evidence: [
      '研究テーマの仮説設計から伴走できる',
      'Science ページで論点とレポートを公開している',
      '大学・企業・現場をつなぐ共通言語を設計する'
    ],
    services: ['reporting', 'komorebi', 'rae'],
    ctaPrimary: '/contact',
    ctaSecondary: '/science'
  },
  {
    key: 'culture',
    title: 'For Culture',
    label: '一般・個人向け',
    lead: 'Creative Bar などの体験プログラムと解説メディアで、芸術の入口をひらきます。',
    challengeTitle: '芸術を、もっと近くにする',
    challengeBody: '芸術に興味はあっても、どう楽しめばいいか分からない人は少なくありません。The Hearthは、参加しやすい体験と読みやすいメディアを通して、芸術の価値を日常へつなぎます。',
    offers: [
      '双方向型芸術体験ワークショップ Creative Bar',
      '芸術鑑賞の敷居を下げる解説記事・動画コンテンツ',
      'イベント参加から継続閲覧につながる導線'
    ],
    evidence: [
      '初めてでも参加しやすい短時間プログラムを設計する',
      '鑑賞と対話を組み合わせて理解を深める',
      '芸術体験を生活の中に持ち帰れる'
    ],
    services: ['creative-bar', 'reporting', 'machi'],
    ctaPrimary: '/contact',
    ctaSecondary: '/news'
  }
]

const solutionMap = new Map<SolutionKey, SolutionPage>(solutionPages.map((page) => [page.key, page]))

type SolutionSection = {
  title: string
  subtitle: string
  slugs: string[]
}

const solutionSections: SolutionSection[] = [
  {
    title: 'Business',
    subtitle: '企業・組織',
    slugs: ['rae', 'live-bgm']
  },
  {
    title: 'Culture & Consumer',
    subtitle: '社会・個人',
    slugs: ['machi', 'creative-bar', 'otomo']
  },
  {
    title: 'Medical & Healthcare',
    subtitle: '医療・福祉機関',
    slugs: ['komorebi', 'welfare']
  },
  {
    title: 'R&D',
    subtitle: '研究開発・アカデミア',
    slugs: ['reporting']
  }
]

function findService(slug: string) {
  return serviceDetailPages.find((page) => page.slug === slug)
}

function renderServiceCards(serviceSlugs: string[]): string {
  return serviceSlugs.map((slug) => {
    const service = findService(slug)
    if (!service) return ''

    return `
      <a href="/solutions/${service.slug}" class="solution-service-card">
        <div class="solution-service-card-image">
          <img src="${service.cardImage}" alt="${service.cardTitle}" loading="lazy">
        </div>
        <div class="solution-service-card-body">
          <span class="solution-service-card-eyebrow">${service.cardTags[0] || 'Service'}</span>
          <h3 class="solution-service-card-title">${service.cardTitle}</h3>
          <p class="solution-service-card-desc">${service.cardDescription}</p>
        </div>
      </a>
    `
  }).join('')
}

function renderSolutionSections(): string {
  return solutionSections.map((section) => {
    const cardsHTML = renderServiceCards(section.slugs)

    return `
      <section class="solution-category-block">
        <div class="section-head">
          <div class="section-head-left">
            <h3 class="section-title-en fade-up delay-1">${section.title}</h3>
            <p class="section-title-jp fade-up delay-2">${section.subtitle}</p>
          </div>
        </div>
        <div class="service-domain-grid">
          ${cardsHTML}
        </div>
      </section>
    `
  }).join('')
}

function renderEvidenceList(items: string[]): string {
  return items.map((item) => `<li>${item}</li>`).join('')
}

function renderServiceDetailPage(page: ServiceDetailPage): string {
  const pagePath = `/solutions/${page.slug}`

  const casesHTML = page.cases.map((item, index) => `
        <article class="service-domain-item fade-up${index > 0 ? ` delay-${Math.min(index, 3)}` : ''}">
          <div class="service-domain-img"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">${item.title}</h3>
            <p class="service-domain-desc">${item.desc}</p>
            <div class="service-domain-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
          </div>
        </article>
  `).join('')

  const recordsHTML = page.records.map((item, index) => `
        <article class="service-menu-item fade-up${index > 0 ? ` delay-${Math.min(index, 3)}` : ''}">
          <div class="service-menu-icon"><i class="fas fa-check"></i></div>
          <div class="service-menu-body">
            <h3 class="service-menu-name">${item.title}</h3>
            <p class="service-menu-desc">${item.desc}</p>
          </div>
        </article>
  `).join('')

  return `${pageHead({
    title: page.pageTitle,
    description: page.description,
    ogImage: page.heroImage,
    ogUrl: `https://thehearth.jp${pagePath}`,
    canonical: `https://thehearth.jp${pagePath}`,
    structuredData: createProductSchema({
      name: page.pageTitle,
      description: page.description,
      image: page.heroImage,
      url: `https://thehearth.jp${pagePath}`
    })
  })}
${header('/solutions', true)}
<main>
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="${page.heroImage}" alt="${page.pageTitle}" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Solution Detail</span>
      <h1 class="page-hero-title fade-up delay-1">${page.pageTitle}</h1>
      <p class="page-hero-lead fade-up delay-2">${page.heroLead}</p>
    </div>
  </section>

  <section class="service-intro">
    <div class="section-inner">
      <div class="service-intro-grid">
        <div class="service-intro-text fade-up">
          <span class="section-eyebrow">Overview</span>
          <h2 class="service-intro-title">${page.introTitle}</h2>
        </div>
        <div class="service-intro-desc fade-up delay-2">
          <p>${page.introBody}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-content fade-up">
          <span class="section-eyebrow">Why This Solution</span>
          <h2 class="service-digital-title">${page.challengeTitle}</h2>
          <p class="service-digital-desc">${page.challengeBody}</p>
        </div>
        <div class="service-digital-img fade-up delay-2">
          <img src="${page.heroImage}" alt="${page.pageTitle}" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <section class="service-domains">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Use Cases</span>
          <h2 class="section-title-en fade-up delay-1">活用イメージ</h2>
        </div>
      </div>
      <div class="service-domain-grid">
        ${casesHTML}
      </div>
    </div>
  </section>

  <section class="service-menu-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Track Record</span>
          <h2 class="section-title-en fade-up delay-1">導入・活動実績</h2>
        </div>
      </div>
      <div class="service-menu-list">
        ${recordsHTML}
      </div>
    </div>
  </section>

  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">ご相談はお気軽にどうぞ</h2>
        <p class="contact-sub">課題や目的に合わせて、最適な実施プランをご提案します。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/contact" class="btn-primary">お問い合わせ</a>
        <a href="/solutions" class="btn-secondary">ソリューション一覧へ</a>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`
}

function renderSolutionPage(page: SolutionPage): string {
  const serviceCardsHTML = renderServiceCards(page.services)
  const relatedReportCardsHTML = reportsData
    .slice(0, 3)
    .map((report) => `
      <a href="/reports/${report.slug}" class="solution-report-card">
        <div class="solution-report-card-meta">${report.publishedAt} / ${report.client}</div>
        <h3 class="solution-report-card-title">${report.title}</h3>
        <p class="solution-report-card-desc">${report.summary}</p>
      </a>
    `)
    .join('')

  return pageHead({
    title: `${page.title} | Solutions`,
    description: page.lead,
    ogUrl: `https://thehearth.jp/solutions/${page.key}`,
    canonical: `https://thehearth.jp/solutions/${page.key}`,
    ogType: 'article',
    structuredData: createProductSchema({
      name: `${page.title} | ${page.label}`,
      description: page.lead,
      url: `https://thehearth.jp/solutions/${page.key}`
    })
  }) + `
${header('/solutions', true)}
<main class="solution-page">
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=85&auto=format&fit=crop" alt="${page.title}" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">${page.label}</span>
      <h1 class="page-hero-title fade-up delay-1">${page.title}</h1>
      <p class="page-hero-lead fade-up delay-2">${page.lead}</p>
    </div>
  </section>

  <section class="solution-overview-block">
    <div class="section-inner">
      <div class="solution-overview-grid">
        <div class="solution-overview-copy fade-up">
          <span class="section-eyebrow">Problem</span>
          <h2 class="solution-overview-title">${page.challengeTitle}</h2>
          <p class="solution-overview-desc">${page.challengeBody}</p>
        </div>
        <div class="solution-overview-panel fade-up delay-1">
          <span class="section-eyebrow">What We Offer</span>
          <ul class="solution-overview-list">
            ${page.offers.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="solution-evidence-block">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Why It Works</span>
          <h2 class="section-title-en fade-up delay-1">Evidence Points</h2>
        </div>
      </div>
      <ul class="solution-evidence-list fade-up delay-2">
        ${renderEvidenceList(page.evidence)}
      </ul>
    </div>
  </section>

  <section class="solution-services-block">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Related Services</span>
          <h2 class="section-title-en fade-up delay-1">実装メニュー</h2>
        </div>
      </div>
      <div class="solution-service-grid">
        ${serviceCardsHTML}
      </div>
    </div>
  </section>

  <section class="solution-reports-block">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Science</span>
          <h2 class="section-title-en fade-up delay-1">根拠を確認する</h2>
        </div>
        <a href="/science" class="view-all-btn fade-up delay-2">Science へ</a>
      </div>
      <div class="solution-report-grid">
        ${relatedReportCardsHTML}
      </div>
    </div>
  </section>

  <section class="solution-cta-block">
    <div class="section-inner">
      <div class="solution-cta-inner fade-up">
        <div>
          <span class="contact-eyebrow">Next Action</span>
          <h2 class="contact-title">まずは用途に合わせてご相談ください。</h2>
          <p class="contact-sub">導入検討、実証実験、資料確認のいずれでも歓迎です。</p>
        </div>
        <div class="contact-actions">
          <a href="${page.ctaPrimary}" class="btn-primary">お問い合わせ</a>
          <a href="${page.ctaSecondary}" class="btn-secondary">資料を見る</a>
        </div>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`
}

app.get('/solutions', (c) => {
  const solutionsHTML = serviceDetailPages.map((item, index) => `
        <div class="service-domain-item fade-up delay-${Math.min((index % 3) + 1, 3)}">
          <div class="service-domain-img"><a href="/solutions/${item.slug}" aria-label="${item.cardTitle}の詳細を見る"><img src="${item.cardImage}" alt="${item.cardTitle}" loading="lazy"></a></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">${item.cardTitle}</h3>
            <p class="service-domain-desc">${item.cardDescription}</p>
            <div class="service-domain-tags">${item.cardTags.map((tag) => `<span>${tag}</span>`).join('')}</div>
            <a href="/solutions/${item.slug}" class="service-domain-link">詳細を見る →</a>
          </div>
        </div>
  `).join('')

  return c.html(`${pageHead({
    title: 'Service',
    description: '体験価値の創造を通じて、企業や社会の課題解決に貢献します。リアル・デジタルを統合したコミュニケーションデザイン。',
    ogImage: 'https://thehearth.jp/static/logo.png',
    ogUrl: 'https://thehearth.jp/solutions',
    canonical: 'https://thehearth.jp/solutions'
  })}
${header('/solutions', true)}
<main>
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85" alt="Service" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up delay-1">Solutions</h1>
      <p class="page-hero-lead fade-up delay-2">人も、社会も動かす<br>"芸術体験"をつくる。</p>
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
          <p>The Hearthは、芸術を通じて、人の"体験"を統合的にデザインし、企業や社会の課題解決に貢献します。豊富な経験と充実した組織機能で、多様なお客様のニーズにお応えします。</p>
        </div>
      </div>
    </div>
  </section>

  <section class="service-domains">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Solutions</h2>
          <p class="section-title-jp fade-up delay-2">主なソリューション</p>
        </div>
      </div>
      ${renderSolutionSections()}
    </div>
  </section>

  <section class="service-strengths">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Our Strengths</h2>
          <p class="section-title-jp fade-up delay-2">The Hearthの強み</p>
        </div>
      </div>
      <div class="strength-grid">
        <div class="strength-item fade-up"><div class="strength-num">01</div><h3 class="strength-title">目的起点のプログラム設計</h3><p class="strength-desc">実施ありきではなく、対象者・課題・期待する変化を整理したうえで、最適な実施形式を設計します。</p></div>
        <div class="strength-item fade-up delay-1"><div class="strength-num">02</div><h3 class="strength-title">芸術体験と対話の統合</h3><p class="strength-desc">生演奏などの芸術体験に対話プロセスを組み合わせ、感情の動きや気づきを現場で活かせる学びに変換します。</p></div>
        <div class="strength-item fade-up delay-2"><div class="strength-num">03</div><h3 class="strength-title">多様な現場への実装力</h3><p class="strength-desc">オフィス・都市空間・高齢者施設など、環境や運営条件に合わせて安全かつ無理のない導入を行います。</p></div>
        <div class="strength-item fade-up delay-3"><div class="strength-num">04</div><h3 class="strength-title">継続に向けた検証と改善</h3><p class="strength-desc">実施後の振り返りと評価を通じて、単発で終わらない継続運用モデルへ改善を重ねます。</p></div>
      </div>
    </div>
  </section>

  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-img fade-up"><img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85&auto=format&fit=crop" alt="プログラム実施に向けた対話と準備" loading="lazy"></div>
        <div class="service-digital-content fade-up delay-2">
          <span class="section-eyebrow">Our Approach</span>
          <h2 class="service-digital-title">実装に向けた進め方</h2>
          <p class="service-digital-desc">私たちは、芸術体験を単発イベントで終わらせず、現場で継続できる取り組みにすることを重視しています。目的整理から実施、振り返りまでを一貫して伴走します。</p>
          <ul class="service-digital-list">
            <li><i class="fas fa-check"></i> 課題・対象者に合わせた実施目的の整理</li>
            <li><i class="fas fa-check"></i> 現場運営に合わせたプログラム設計</li>
            <li><i class="fas fa-check"></i> 生演奏と対話を組み合わせた実施</li>
            <li><i class="fas fa-check"></i> 実施後の振り返りと次回改善提案</li>
            <li><i class="fas fa-check"></i> 継続運用に向けた社内連携支援</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">まずはお気軽にお問い合わせください</h2>
        <p class="contact-sub">サービスに関するご相談やご質問を承ります。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/contact" class="btn-primary">お問い合わせ</a>
        <a href="/solutions" class="btn-secondary">ソリューション一覧へ</a>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

app.get('/solutions/:slug', (c) => {
  const slug = c.req.param('slug')
  const solutionPage = solutionMap.get(slug as SolutionKey)

  if (solutionPage) {
    return c.html(renderSolutionPage(solutionPage))
  }

  const servicePage = findService(slug)

  if (servicePage) {
    return c.html(renderServiceDetailPage(servicePage))
  }

  return c.html(`${pageHead({
    title: 'Solutions Not Found',
    description: 'お探しのページが見つかりませんでした。',
    noindex: true,
    nofollow: true
  })}
${header('/solutions')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up">Solutions Not Found</h1>
      <p class="page-hero-sub fade-up delay-1">お探しのページが見つかりませんでした。</p>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`, 404)
})

export default app
