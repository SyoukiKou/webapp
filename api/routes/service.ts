import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts } from '../../src/components/layout.js'

const app = new Hono()

app.get('/service', (c) => {
  const serviceItems = [
    { icon: 'fa-star', name: 'イベントプロモーション', desc: 'ブランド体験型イベントの企画・演出・運営。ターゲットに刺さる体験で記憶に残るブランド接点を創出。', link: '/reports' },
    { icon: 'fa-store', name: 'プライベートショー', desc: '自社開催の展示・発表会の企画運営。招待客に特別な体験価値を提供し、商談機会の最大化を支援。', link: '/reports' },
    { icon: 'fa-tv', name: 'デジタルコンテンツ', desc: 'AR/VR・インタラクティブ展示・映像制作。デジタルの力でリアルな空間を拡張し、体験価値を高めます。', link: '/reports' },
    { icon: 'fa-map-marker-alt', name: '環境デザイン', desc: 'ブランドの恒久的な体験拠点の企画設計・施工。日常的な来訪で深いブランド理解を促します。', link: '/reports' },
    { icon: 'fa-window-maximize', name: 'ニューロマーケティング', desc: '脳科学に基づくマーケティング戦略を提供。消費者の行動を深く理解し、効果的な体験を創出します。', link: '/reports' },
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
          <div class="service-domain-img"><img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" alt="BtoCマーケティング" loading="lazy"></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">BtoC芸術体験</h3>
            <p class="service-domain-desc">消費者に直接アプローチする芸術体験型施策を企画から運営まで一気通貫で提供。ブランドと生活者の間に感動的な体験をつくります。</p>
            <div class="service-domain-tags"><span>イベントプロモーション</span><span>店舗・ウィンドウディスプレイ</span><span>アートイベント</span></div>
            <a href="#" class="service-domain-link">実績を見る →</a>
          </div>
        </div>
        <div class="service-domain-item fade-up delay-1">
          <div class="service-domain-img"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80" alt="BtoBマーケティング" loading="lazy"></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">BtoB芸術体験</h3>
            <p class="service-domain-desc">企業内、企業間の深い関係構築に向けた体験設計を行います。</p>
            <div class="service-domain-tags"><span>プライベートショー</span></div>
            <a href="#" class="service-domain-link">実績を見る →</a>
          </div>
        </div>
        <div class="service-domain-item fade-up delay-2">
          <div class="service-domain-img"><img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80" alt="行政・自治体" loading="lazy"></div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">行政・自治体・街づくり関連</h3>
            <p class="service-domain-desc">地域活性化・観光PR・万博など、行政・自治体と連携した芸術体験空間の企画・制作・運営に対応。地域と人をつなぐ体験をデザインします。</p>
            <div class="service-domain-tags"><span>地方創生</span><span>地域PR</span><span>観光促進</span></div>
            <a href="#" class="service-domain-link">実績を見る →</a>
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
        <div class="strength-item fade-up"><div class="strength-num">01</div><h3 class="strength-title">ワンストップの体験設計</h3><p class="strength-desc">企画・デザイン・制作・施工・運営まで、すべて一社で完結。スピードと品質を両立した一気通貫のサービスを提供します。</p></div>
        <div class="strength-item fade-up delay-1"><div class="strength-num">02</div><h3 class="strength-title">リアル × デジタルの融合</h3><p class="strength-desc">空間デザインとデジタルコンテンツを統合した体験設計が強み。インタラクティブ展示・AR/VR・映像演出を組み合わせます。</p></div>
        <div class="strength-item fade-up delay-2"><div class="strength-num">03</div><h3 class="strength-title">豊富な専門知識</h3><p class="strength-desc">各業界の特性を理解した提案が可能です。</p></div>
        <div class="strength-item fade-up delay-3"><div class="strength-num">04</div><h3 class="strength-title">ESG活動の支援</h3><p class="strength-desc">社会課題を視野に入れた体験設計で企業のESG活動を支援します。</p></div>
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
        <div class="service-digital-img fade-up"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85" alt="デジタルソリューション" loading="lazy"></div>
        <div class="service-digital-content fade-up delay-2">
          <span class="section-eyebrow">Digital Solutions</span>
          <h2 class="service-digital-title">デジタル領域の強み</h2>
          <p class="service-digital-desc">時代に求められるデジタルソリューションをいち早く取り入れ、リアル領域との融合を進めています。信頼性の高く、成果につながるサービスをご提供します。</p>
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
        <a href="/reports" class="btn-secondary">レポートを見る</a>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

export default app
