import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts, createProductSchema } from '../../src/components/layout.js'

const app = new Hono()

type ServiceDetailPage = {
  path: '/rae' | '/machi' | '/welfare'
  title: string
  description: string
  heroImage: string
  heroLead: string
  introTitle: string
  introBody: string
  challengeTitle: string
  challengeBody: string
  cases: Array<{ image: string; title: string; desc: string; tags: string[] }>
  records: Array<{ title: string; desc: string }>
}

function renderServiceDetailPage(page: ServiceDetailPage): string {
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
    title: page.title,
    description: page.description,
    ogImage: page.heroImage,
    ogUrl: `https://thehearth.jp${page.path}`,
    canonical: `https://thehearth.jp${page.path}`,
    structuredData: createProductSchema({
      name: page.title,
      description: page.description,
      image: page.heroImage,
      url: `https://thehearth.jp${page.path}`
    })
  })}
${header('/service', true)}
<main>
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="${page.heroImage}" alt="${page.title}" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Service Domain</span>
      <h1 class="page-hero-title fade-up delay-1">${page.title}</h1>
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
          <span class="section-eyebrow">Why This Domain</span>
          <h2 class="service-digital-title">${page.challengeTitle}</h2>
          <p class="service-digital-desc">${page.challengeBody}</p>
        </div>
        <div class="service-digital-img fade-up delay-2">
          <img src="${page.heroImage}" alt="${page.title}" loading="lazy">
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
        <a href="/service" class="btn-secondary">サービス一覧へ</a>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`
}

app.get('/service', (c) => {
  const serviceItems = [
    { icon: 'fa-headphones', name: 'RAEプログラム設計・実施', desc: '生演奏と対話を組み合わせ、職場のメンタルケアとコミュニケーション改善を支援するプログラムを提供します。', link: '/rae' },
    { icon: 'fa-city', name: 'まちづくり連携プロジェクト', desc: '都市空間の特性に合わせてサウンド体験を設計し、回遊性や滞在価値の向上につなげます。', link: '/machi' },
    { icon: 'fa-hospital-user', name: '高齢者施設への出張演奏', desc: '入居者様の情緒安定と会話のきっかけづくりを目的に、施設運営に合わせた訪問演奏を実施します。', link: '/welfare' },
    { icon: 'fa-comments', name: '対話ワークショップ運営', desc: '体験後の振り返りや共有を設計し、現場での気づきが継続的な行動変容につながるよう支援します。', link: '/contact' },
    { icon: 'fa-chart-line', name: '効果検証・レポーティング', desc: '実施目的に応じた評価観点を整理し、導入効果を可視化するレポート作成と改善提案を行います。', link: '/reports' },
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

  return c.html(`${pageHead({
    title: 'Service',
    description: '体験価値の創造を通じて、企業や社会の課題解決に貢献します。リアル・デジタルを統合したコミュニケーションデザイン。',
    ogImage: 'https://thehearth.jp/static/logo.png',
    ogUrl: 'https://thehearth.jp/service',
    canonical: 'https://thehearth.jp/service'
  })}
${header('/service', true)}
<main>
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85" alt="Service" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
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
          <div class="service-domain-img"><a href="/machi" aria-label="まちづくり×芸術の詳細を見る"><img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80&auto=format&fit=crop" alt="都市空間での音楽体験" loading="lazy"></a></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">まちづくり×芸術</h3>
            <p class="service-domain-desc">都市空間に音楽体験を実装し、働く人と来街者の日常に心地よい余白を生み出す、街づくり連携プロジェクトです。</p>
            <div class="service-domain-tags"><span>まちづくり</span><span>都市ウェルビーイング</span><span>地域連携</span></div>
            <a href="/machi" class="service-domain-link">詳細を見る →</a>
          </div>
        </div>
        <div class="service-domain-item fade-up delay-1">
          <div class="service-domain-img"><a href="/rae" aria-label="RAEの詳細を見る"><img src="/static/rae_photo.jpg" alt="Regulative Art Experience" loading="lazy"></a></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">Regulative Art Experience</h3>
            <p class="service-domain-desc">音楽体験と対話を組み合わせ、職場のメンタルケアとコミュニケーション改善を無理なく支援するプログラムです。</p>
            <div class="service-domain-tags"><span>メンタルヘルス</span><span>チームビルディング</span><span>ウェルビーイング</span></div>
            <a href="/rae" class="service-domain-link">詳細を見る →</a>
          </div>
        </div>
        <div class="service-domain-item fade-up delay-2">
          <div class="service-domain-img"><a href="/welfare" aria-label="高齢者施設への出張演奏の詳細を見る"><img src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=80&auto=format&fit=crop" alt="高齢者施設での音楽プログラム" loading="lazy"></a></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">高齢者施設への出張演奏</h3>
            <p class="service-domain-desc">生演奏を施設へ届け、入居者様の生活にやすらぎと会話のきっかけを生み出す訪問型プログラムです。</p>
            <div class="service-domain-tags"><span>高齢者施設</span><span>出張演奏</span><span>福祉</span></div>
            <a href="/welfare" class="service-domain-link">詳細を見る →</a>
          </div>
        </div>
      </div>
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
  <section class="service-menu-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
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
${pageScripts({ includeApp: false, includePages: true })}`)
})

app.get('/rae', (c) => {
  return c.html(renderServiceDetailPage({
    path: '/rae',
    title: 'Regulative Art Experience',
    description: '音楽体験と対話を通じて、組織のメンタルヘルス施策を支援するプログラム。',
    heroImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=85&auto=format&fit=crop',
    heroLead: '音楽体験を、職場で実行しやすいメンタルヘルス施策として設計する。',
    introTitle: '生演奏と対話を組み合わせ、状態の振り返りを促す。',
    introBody: 'RAEは、生演奏とワークショップ形式の対話を組み合わせたプログラムです。参加者が自身の状態を言語化し、チームで共有できるように設計しています。必要に応じて既存の健康経営施策とも併用できます。',
    challengeTitle: '導入しやすく、継続しやすい施策設計。',
    challengeBody: 'メンタルヘルス施策は単発で終わると効果を実感しづらい課題があります。RAEでは目的・対象・実施頻度を明確化し、現場運用に合わせて無理のない形でプログラムを組み立てます。',
    cases: [
      {
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop',
        title: 'メンタルヘルス・健康経営の推進',
        desc: '深いリラックス体験と感情の言語化を通じて、心身のコンディションを整えます。',
        tags: ['健康経営', 'ストレス対策', '定量評価']
      },
      {
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop',
        title: '心理的安全性とチームビルディング',
        desc: '体験後の対話セッションにより、立場を越えた相互理解と関係性の改善を促進します。',
        tags: ['対話設計', 'チーム開発', '関係性構築']
      },
      {
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80&auto=format&fit=crop',
        title: '創造性と内発的動機の活性化',
        desc: '感性への刺激から新しい視点を引き出し、アイデア創出と挑戦行動を後押しします。',
        tags: ['創造性', 'イノベーション', 'モチベーション']
      }
    ],
    records: [
      { title: '渋谷QWS', desc: '共創拠点における体験型ワークショップの実施' },
      { title: 'UT Lab', desc: '研究コミュニティ向けプログラムの実施' }
    ]
  }))
})

app.get('/machi', (c) => {
  return c.html(renderServiceDetailPage({
    path: '/machi',
    title: 'まちづくり×芸術',
    description: '都市空間に芸術体験を実装し、街のウェルビーイングを高める取り組み。',
    heroImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=85&auto=format&fit=crop',
    heroLead: '都市に音の風景をデザインし、まちの価値を拡張する。',
    introTitle: 'サウンドスケープで、街の機能美に「ゆらぎ」をつくる。',
    introBody: 'まちづくり×芸術では、都市の歴史・空間・人の流れを読み解き、サウンドスケープを設計します。日常導線に自然に溶け込む体験をつくることで、街の印象と滞在価値を高めます。',
    challengeTitle: '効率性だけでは測れない、都市の情緒価値を可視化する。',
    challengeBody: '都市には利便性の向上と同時に、緊張や情報過多による感覚疲労が蓄積しやすい課題があります。芸術体験の導入は、街のホスピタリティと回遊性を高める有効なアプローチです。',
    cases: [
      {
        image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200&q=80&auto=format&fit=crop',
        title: '働く人のメンタルコンディショニング',
        desc: 'ビジネス街での演奏設計により、日中の緊張緩和と気分転換を支援します。',
        tags: ['オフィス街', '回復体験', '昼休み施策']
      },
      {
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80&auto=format&fit=crop',
        title: 'コミュニティ醸成',
        desc: '音楽を媒介に偶発的な対話を生み、街に緩やかなつながりを育てます。',
        tags: ['共創', '交流促進', '都市コミュニティ']
      },
      {
        image: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=1200&q=80&auto=format&fit=crop',
        title: 'エリアアイデンティティ構築',
        desc: 'その街固有の音体験をデザインし、情緒資産としてのブランド価値を高めます。',
        tags: ['街のブランド', '回遊促進', '観光価値']
      }
    ],
    records: [
      { title: 'Marunouchi Street Music 連携', desc: '大手町・丸の内・有楽町エリアでの継続的な活動' },
      { title: '都市開発団体との協働', desc: '街区イベント・社会実装プログラムの設計/運営' }
    ]
  }))
})

app.get('/welfare', (c) => {
  return c.html(renderServiceDetailPage({
    path: '/welfare',
    title: '高齢者施設×芸術',
    description: '福祉現場に芸術体験を導入し、入居者様とスタッフ双方の心の健康を支援。',
    heroImage: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1920&q=85&auto=format&fit=crop',
    heroLead: '入居者様とスタッフのウェルビーイングを同時に支える。',
    introTitle: '福祉現場に寄り添う、体験型ウェルビーイングプログラム。',
    introBody: '高齢者施設×芸術では、生演奏と参加型ワークショップを通じて、入居者様の情緒安定や回想の活性化を促進します。同時に、ケアを支えるスタッフの心理的負荷の軽減にもアプローチします。',
    challengeTitle: 'QOL向上と現場ケアの持続性を両立する。',
    challengeBody: '福祉現場では、入居者様の孤独感や認知機能低下への対応に加え、スタッフのバーンアウト予防が重要です。芸術体験を日常ケアに組み込むことで、施設全体の雰囲気とケア品質の向上を目指します。',
    cases: [
      {
        image: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?w=1200&q=80&auto=format&fit=crop',
        title: '入居者様のQOL向上',
        desc: '音楽体験を通じて、感情表出や発語の増加、回想の活性化を支援します。',
        tags: ['回想療法', '情緒安定', '日常活性']
      },
      {
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80&auto=format&fit=crop',
        title: 'ケアスタッフのメンタルケア',
        desc: '業務の合間に心身を整える機会を提供し、レジリエンス強化を後押しします。',
        tags: ['離職防止', 'バーンアウト対策', '職場改善']
      },
      {
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop',
        title: '施設内コミュニケーション活性化',
        desc: '入居者様・スタッフ・ご家族をつなぐ共通体験として、会話のきっかけを創出します。',
        tags: ['共感形成', '家族連携', '施設価値向上']
      }
    ],
    records: [
      { title: '高齢者福祉施設', desc: 'ボランティア演奏および参加型ワークショップを実施' },
      { title: '医療機関', desc: '心身ケアを目的とした音楽体験プログラムを実施' }
    ]
  }))
})

app.get('/rae.html', (c) => c.redirect('/rae', 301))
app.get('/machi.html', (c) => c.redirect('/machi', 301))
app.get('/welfare.html', (c) => c.redirect('/welfare', 301))

app.get('/service/rae', (c) => c.redirect('/rae', 301))
app.get('/service/machi', (c) => c.redirect('/machi', 301))
app.get('/service/welfare', (c) => c.redirect('/welfare', 301))

export default app
