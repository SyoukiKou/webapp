import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts, createProductSchema } from '../components/layout.js'
import { serviceDetailPages } from '../data/service-pages/index.js'
import type { ServiceDetailPage } from '../data/service-pages/types.js'

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
  ctaPrimaryLabel: string
  ctaSecondary: string
  ctaSecondaryLabel: string
}

const solutionPages: SolutionPage[] = [
  {
    key: 'business',
    title: 'For Business',
    label: '企業・組織向け',
    lead: '感性とレジリエンスを鍛える、アートベースの研修・空間設計を提案します。',
    challengeTitle: '論理ベースの研修だけでは、予測不能な環境を生き抜く力は育ちにくい',
    challengeBody: '企業が直面するのは、正解のある課題だけではありません。メンタル不調、関係性の硬直、発想の停滞のような曖昧な課題に対しては、感性を介した認知の切り替えが必要です。The Hearthは、体験と対話を通じて、組織の思考の質を変える研修を設計します。',
    offers: [
      'Regulative Art Experience による感性トレーニングと対話設計',
      '環境・生体連動音楽生成システムによる集中・回復空間の設計',
      '事前アセスメントと事後検証を含む導入設計'
    ],
    evidence: [
      '感性への介入で、言語化しにくい課題の共有を促す',
      '参加前後の変化をアンケートや行動観察で確認できる',
      '研修単発ではなく、継続運用できる設計に落とし込める'
    ],
    services: ['rae', 'live-bgm', 'reporting'],
    ctaPrimary: '/download',
    ctaPrimaryLabel: '資料を請求する',
    ctaSecondary: '/contact'
    ,
    ctaSecondaryLabel: '導入相談をする'
  },
  {
    key: 'medical',
    title: 'For Medical',
    label: '医療・福祉向け',
    lead: 'KOMOREBI を中心に、臨床実証と試験導入を見据えた環境介入を提案します。',
    challengeTitle: '患者の回復とスタッフ負荷の両方に効く、病室環境を設計する',
    challengeBody: 'ICUのせん妄リスク、昼夜逆転、過度な騒音やストレスは、現場の努力だけでは解きにくい構造課題です。The Hearthは、空間デバイスと検証設計を組み合わせ、臨床の現場で扱いやすい形に落とし込みます。',
    offers: [
      'KOMOREBI による光・音・気流を用いた環境制御',
      '臨床現場に合わせた安全性確認と設置要件の整理',
      '実証実験と共同研究の伴走'
    ],
    evidence: [
      '社会的処方や自律神経への影響などの研究文脈に接続できる',
      '臨床現場でのフィードバックを踏まえて改善できる',
      '導入前後の変化を検証する設計を組み込みやすい'
    ],
    services: ['komorebi', 'welfare', 'reporting'],
    ctaPrimary: '/contact',
    ctaPrimaryLabel: '臨床デモを相談する',
    ctaSecondary: '/download'
    ,
    ctaSecondaryLabel: '資料を確認する'
  },
  {
    key: 'research',
    title: 'For R&D',
    label: '研究・共創パートナー向け',
    lead: '仮説設計から検証、プロトタイピングまで進める共創・共同研究の入口です。',
    challengeTitle: '研究を、現場に届くかたちまでつなぐ',
    challengeBody: '研究は論文化だけでなく、現場で再現できることが重要です。The Hearthは、アカデミックな知見と実践知を行き来しながら、共同研究・試作・評価の設計を一緒に進めます。',
    offers: [
      '脳科学×アートの共同研究と評価設計',
      '芸術体験の定量・定性評価フレームづくり',
      '生体連動型デバイスやソフトウェアの試作支援'
    ],
    evidence: [
      '仮説から実証までの流れを一貫して設計できる',
      'Science ページで論点やレポートを公開している',
      '大学・企業・現場の共通言語を整えられる'
    ],
    services: ['reporting', 'komorebi', 'rae'],
    ctaPrimary: '/science',
    ctaPrimaryLabel: 'Science を見る',
    ctaSecondary: '/contact'
    ,
    ctaSecondaryLabel: '共同研究を相談する'
  },
  {
    key: 'culture',
    title: 'For Culture',
    label: '一般・個人向け',
    lead: '参加しやすい体験と読みやすいメディアで、芸術の入口をひらきます。',
    challengeTitle: '芸術を、もっと近くにする',
    challengeBody: '芸術に興味はあっても、参加の仕方や楽しみ方が分からない人は少なくありません。The Hearthは、体験プログラムと解説メディアを通して、芸術を日常の選択肢にします。',
    offers: [
      'Creative Bar による双方向型の芸術体験',
      '鑑賞を助ける解説記事・動画コンテンツ',
      'イベント参加から継続閲覧につながる導線設計'
    ],
    evidence: [
      '初めてでも参加しやすい短時間プログラムを設計する',
      '鑑賞と対話を組み合わせて理解を深める',
      '体験を日常の会話や気づきにつなげられる'
    ],
    services: ['creative-bar', 'reporting', 'machi'],
    ctaPrimary: '/news',
    ctaPrimaryLabel: 'News を見る',
    ctaSecondary: '/contact'
    ,
    ctaSecondaryLabel: '参加相談をする'
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
  return serviceSlugs.map((slug, index) => {
    const service = findService(slug)
    if (!service) return ''

    const delay = Math.min((index % 3) + 1, 3)

    return `
      <div class="service-domain-item fade-up delay-${delay}">
        <div class="service-domain-img"><a href="/solutions/${service.slug}" aria-label="${service.cardTitle}の詳細を見る"><img src="${service.cardImage}" alt="${service.cardTitle}" loading="lazy"></a></div>
        <div class="service-domain-body">
          <h3 class="service-domain-title">${service.cardTitle}</h3>
          <p class="service-domain-desc">${service.cardDescription}</p>
          <div class="service-domain-tags">${service.cardTags.map((tag) => `<span>${tag}</span>`).join('')}</div>
          <a href="/solutions/${service.slug}" class="service-domain-link">詳細を見る →</a>
        </div>
      </div>
    `
  }).join('')
}

function renderSolutionSections(): string {
  return solutionSections.map((section) => {
    const cardsHTML = renderServiceCards(section.slugs)

    return `
      <div class="solution-category-block">
        <div class="section-head">
          <div class="section-head-left">
            <h2 class="section-title-en fade-up delay-1">${section.title}</h2>
            <p class="section-title-jp fade-up delay-2">${section.subtitle}</p>
          </div>
        </div>
        <div class="service-domain-grid">
          ${cardsHTML}
        </div>
      </div>
    `
  }).join('')
}

function renderEvidenceList(items: string[]): string {
  return items.map((item) => `<li>${item}</li>`).join('')
}

function renderDetailCaseCards(items: ServiceDetailPage['cases']): string {
  return items.map((item, index) => `
        <article class="service-domain-item fade-up${index > 0 ? ` delay-${Math.min(index, 3)}` : ''}">
          <div class="service-domain-img"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">${item.title}</h3>
            <p class="service-domain-desc">${item.desc}</p>
            <div class="service-domain-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
          </div>
        </article>
  `).join('')
}

function renderDetailRecordItems(items: ServiceDetailPage['records']): string {
  return items.map((item, index) => `
        <article class="service-menu-item fade-up${index > 0 ? ` delay-${Math.min(index, 3)}` : ''}">
          <div class="service-menu-icon"><i class="fas fa-check"></i></div>
          <div class="service-menu-body">
            <h3 class="service-menu-name">${item.title}</h3>
            <p class="service-menu-desc">${item.desc}</p>
          </div>
        </article>
  `).join('')
}

function renderDetailShell(page: ServiceDetailPage, contentHTML: string): string {
  const pagePath = `/solutions/${page.slug}`

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
${contentHTML}
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`
}

function renderDefaultServiceDetailPage(page: ServiceDetailPage): string {
  const heroHTML = `
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
  </section>`

  const introHTML = `
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
  </section>`

  const challengeHTML = `
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
  </section>`

  const casesHTML = `
  <section class="service-domains">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Use Cases</span>
          <h2 class="section-title-en fade-up delay-1">活用イメージ</h2>
        </div>
      </div>
      <div class="service-domain-grid">
        ${renderDetailCaseCards(page.cases)}
      </div>
    </div>
  </section>`

  const recordsHTML = `
  <section class="service-menu-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Track Record</span>
          <h2 class="section-title-en fade-up delay-1">導入・活動実績</h2>
        </div>
      </div>
      <div class="service-menu-list">
        ${renderDetailRecordItems(page.records)}
      </div>
    </div>
  </section>`

  const contactHTML = `
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
  </section>`

  return renderDetailShell(page, `${heroHTML}${introHTML}${challengeHTML}${casesHTML}${recordsHTML}${contactHTML}`)
}

function renderTrainingServiceDetailPage(page: ServiceDetailPage): string {
  const contentHTML = `
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="${page.heroImage}" alt="${page.pageTitle}" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Training LP</span>
      <h1 class="page-hero-title fade-up delay-1">${page.pageTitle}</h1>
      <p class="page-hero-lead fade-up delay-2">${page.heroLead}</p>
      <div class="contact-actions fade-up delay-3">
        <a href="/download" class="btn-primary">資料を請求する</a>
        <a href="/contact" class="btn-secondary">導入相談をする</a>
      </div>
    </div>
  </section>

  <section class="service-intro">
    <div class="section-inner">
      <div class="service-intro-grid">
        <div class="service-intro-text fade-up">
          <span class="section-eyebrow">Pain</span>
          <h2 class="service-intro-title">${page.challengeTitle}</h2>
        </div>
        <div class="service-intro-desc fade-up delay-2">
          <p>${page.challengeBody}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-content fade-up">
          <span class="section-eyebrow">Paradigm Shift</span>
          <h2 class="service-digital-title">${page.introTitle}</h2>
          <p class="service-digital-desc">${page.introBody}</p>
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
          <span class="section-eyebrow fade-up">Program Detail</span>
          <h2 class="section-title-en fade-up delay-1">実施ステップ</h2>
        </div>
      </div>
      <div class="service-domain-grid">
        ${renderDetailCaseCards(page.cases)}
      </div>
    </div>
  </section>

  <section class="service-menu-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Evidence & Mechanism</span>
          <h2 class="section-title-en fade-up delay-1">根拠と変化の見取り図</h2>
        </div>
      </div>
      <div class="service-menu-list">
        ${renderDetailRecordItems(page.records)}
      </div>
    </div>
  </section>

  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-content fade-up">
          <span class="section-eyebrow">Flow</span>
          <h2 class="service-digital-title">導入の流れ</h2>
          <p class="service-digital-desc">事前アセスメントから実施、事後検証までを一つの研修設計としてつなぎ、予算化しやすい形にまとめます。</p>
        </div>
        <div class="service-digital-desc fade-up delay-2">
          <ul class="service-digital-list">
            <li><i class="fas fa-check"></i> 事前アセスメントで組織課題と対象者を整理</li>
            <li><i class="fas fa-check"></i> 半日×2回など、実施しやすいワークショップ形式で設計</li>
            <li><i class="fas fa-check"></i> アンケートや簡易測定で変化を可視化</li>
            <li><i class="fas fa-check"></i> 次回提案につながる振り返り資料を作成</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">まずは自社の課題をご相談ください</h2>
        <p class="contact-sub">感性を鍛える研修として、導入目的に合わせてご提案します。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/download" class="btn-primary">資料を請求する</a>
        <a href="/contact" class="btn-secondary">導入相談をする</a>
      </div>
    </div>
  </section>`

  return renderDetailShell(page, contentHTML)
}

function renderMedicalServiceDetailPage(page: ServiceDetailPage): string {
  const contentHTML = `
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="${page.heroImage}" alt="${page.pageTitle}" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Clinical LP</span>
      <h1 class="page-hero-title fade-up delay-1">${page.pageTitle}</h1>
      <p class="page-hero-lead fade-up delay-2">${page.heroLead}</p>
      <div class="contact-actions fade-up delay-3">
        <a href="/contact" class="btn-primary">臨床デモを申し込む</a>
        <a href="/download" class="btn-secondary">資料をダウンロード</a>
      </div>
    </div>
  </section>

  <section class="service-intro">
    <div class="section-inner">
      <div class="service-intro-grid">
        <div class="service-intro-text fade-up">
          <span class="section-eyebrow">Clinical Problem</span>
          <h2 class="service-intro-title">${page.challengeTitle}</h2>
        </div>
        <div class="service-intro-desc fade-up delay-2">
          <p>${page.challengeBody}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-content fade-up">
          <span class="section-eyebrow">Product Overview</span>
          <h2 class="service-digital-title">${page.introTitle}</h2>
          <p class="service-digital-desc">${page.introBody}</p>
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
          <span class="section-eyebrow fade-up">System Modules</span>
          <h2 class="section-title-en fade-up delay-1">機能イメージ</h2>
        </div>
      </div>
      <div class="service-domain-grid">
        ${renderDetailCaseCards(page.cases)}
      </div>
    </div>
  </section>

  <section class="service-menu-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Scientific / Clinical Evidence</span>
          <h2 class="section-title-en fade-up delay-1">根拠と検証</h2>
        </div>
      </div>
      <div class="service-menu-list">
        ${renderDetailRecordItems(page.records)}
      </div>
    </div>
  </section>

  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-content fade-up">
          <span class="section-eyebrow">Specs & Installation</span>
          <h2 class="service-digital-title">導入要件と設置のしやすさ</h2>
          <p class="service-digital-desc">既存病室への負荷を抑えながら試験導入しやすい構成を前提に、電源・スペース・ネットワーク条件を整理してご提案します。</p>
        </div>
        <div class="service-digital-desc fade-up delay-2">
          <ul class="service-digital-list">
            <li><i class="fas fa-check"></i> 既存設備を活かせる低侵襲な設置設計</li>
            <li><i class="fas fa-check"></i> 電源・通信・設置スペースを事前に確認</li>
            <li><i class="fas fa-check"></i> 実証実験から共同研究まで段階的に導入</li>
            <li><i class="fas fa-check"></i> 医療現場の運用に合わせた安全性確認を実施</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">臨床現場でのデモンストレーション・共同研究についてご相談ください</h2>
        <p class="contact-sub">医療安全と検証計画を前提に、導入可否を一緒に整理します。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/contact" class="btn-primary">臨床デモを相談する</a>
        <a href="/download" class="btn-secondary">資料を確認する</a>
      </div>
    </div>
  </section>`

  return renderDetailShell(page, contentHTML)
}

function renderSoftwareServiceDetailPage(page: ServiceDetailPage): string {
  const contentHTML = `
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="${page.heroImage}" alt="${page.pageTitle}" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Software LP</span>
      <h1 class="page-hero-title fade-up delay-1">${page.pageTitle}</h1>
      <p class="page-hero-lead fade-up delay-2">${page.heroLead}</p>
      <div class="contact-actions fade-up delay-3">
        <a href="/contact" class="btn-primary">デモを見る</a>
        <a href="/contact" class="btn-secondary">導入相談をする</a>
      </div>
    </div>
  </section>

  <section class="service-intro">
    <div class="section-inner">
      <div class="service-intro-grid">
        <div class="service-intro-text fade-up">
          <span class="section-eyebrow">Concept & Tech</span>
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
          <span class="section-eyebrow">How It Works</span>
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
          <h2 class="section-title-en fade-up delay-1">活用シーン</h2>
        </div>
      </div>
      <div class="service-domain-grid">
        ${renderDetailCaseCards(page.cases)}
      </div>
    </div>
  </section>

  <section class="service-menu-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Benefit</span>
          <h2 class="section-title-en fade-up delay-1">導入メリット</h2>
        </div>
      </div>
      <div class="service-menu-list">
        ${renderDetailRecordItems(page.records)}
      </div>
    </div>
  </section>

  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-content fade-up">
          <span class="section-eyebrow">Developer / Partner Info</span>
          <h2 class="service-digital-title">連携と実装の考え方</h2>
          <p class="service-digital-desc">ウェアラブルや環境センサーからデータを取り込み、空間側のAPIや再生ロジックに接続しやすいように設計します。</p>
        </div>
        <div class="service-digital-desc fade-up delay-2">
          <ul class="service-digital-list">
            <li><i class="fas fa-check"></i> スマートウォッチやセンサー入力を前提にした構成</li>
            <li><i class="fas fa-check"></i> 既存システムとのAPI連携を想定した設計</li>
            <li><i class="fas fa-check"></i> 空間演出・運用・分析をまとめて相談可能</li>
            <li><i class="fas fa-check"></i> 導入後の改善を見据えた運用フローを提案</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">システム連携・空間プロデュースのご相談</h2>
        <p class="contact-sub">技術要件と体験設計の両方を見ながら、導入イメージを具体化します。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/contact" class="btn-primary">デモを見る</a>
        <a href="/contact" class="btn-secondary">導入相談をする</a>
      </div>
    </div>
  </section>`

  return renderDetailShell(page, contentHTML)
}

function renderServiceDetailPage(page: ServiceDetailPage): string {
  switch (page.pageTemplate) {
    case 'training':
      return renderTrainingServiceDetailPage(page)
    case 'medical':
      return renderMedicalServiceDetailPage(page)
    case 'software':
      return renderSoftwareServiceDetailPage(page)
    default:
      return renderDefaultServiceDetailPage(page)
  }
}

function renderSolutionPage(page: SolutionPage): string {
  const serviceCardsHTML = renderServiceCards(page.services)
  // Reports section disabled - reports are temporarily made private
  const relatedReportCardsHTML = ''
  /*
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
  */

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

  <!-- Reports section disabled - temporarily made private -->
  <!--
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
  -->

  <section class="solution-cta-block">
    <div class="section-inner">
      <div class="solution-cta-inner fade-up">
        <div>
          <span class="contact-eyebrow">Next Action</span>
          <h2 class="contact-title">まずは用途に合わせてご相談ください。</h2>
          <p class="contact-sub">導入検討、実証実験、資料確認のいずれでも歓迎です。</p>
        </div>
        <div class="contact-actions">
          <a href="${page.ctaPrimary}" class="btn-primary">${page.ctaPrimaryLabel}</a>
          <a href="${page.ctaSecondary}" class="btn-secondary">${page.ctaSecondaryLabel}</a>
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
