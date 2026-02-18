import { Hono } from 'hono'
import { pageHead, header, footer, pageScripts } from '../components/layout'

const app = new Hono()

app.get('/', (c) => {
  return c.html(`
${pageHead('Service', '体験価値の創造を通じて、企業や社会の課題解決に貢献します。リアル・デジタルを統合したコミュニケーションデザイン。')}

${header('/service')}

<main>
  <!-- Page Hero -->
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

  <!-- Intro -->
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

  <!-- 主な事業領域 -->
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
          <div class="service-domain-img">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" alt="BtoCマーケティング" loading="lazy">
          </div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">BtoCマーケティング</h3>
            <p class="service-domain-desc">消費者に直接アプローチするイベント・プロモーション・体験型施策を企画から運営まで一気通貫で提供。ブランドと生活者の間に感動的な体験をつくります。</p>
            <div class="service-domain-tags">
              <span>イベントプロモーション</span>
              <span>店舗・ウィンドウディスプレイ</span>
              <span>アートイベント</span>
            </div>
            <a href="/works?cat=event" class="service-domain-link">実績を見る →</a>
          </div>
        </div>

        <div class="service-domain-item fade-up delay-1">
          <div class="service-domain-img">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80" alt="BtoBマーケティング" loading="lazy">
          </div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">BtoBマーケティング</h3>
            <p class="service-domain-desc">展示会・学会・プライベートショー・ショールームなど、企業間の深い関係構築に向けた体験設計を行います。リード獲得から顧客育成まで支援します。</p>
            <div class="service-domain-tags">
              <span>展示会 / 学会出展</span>
              <span>プライベートショー</span>
              <span>ショールーム</span>
            </div>
            <a href="/works?cat=exhibition" class="service-domain-link">実績を見る →</a>
          </div>
        </div>

        <div class="service-domain-item fade-up delay-2">
          <div class="service-domain-img">
            <img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80" alt="行政・自治体・街づくり" loading="lazy">
          </div>
          <div class="service-domain-body">
            <h3 class="service-domain-title">行政・自治体・街づくり関連</h3>
            <p class="service-domain-desc">地域活性化・観光PR・万博など、行政・自治体と連携した大規模な体験空間の企画・制作・運営に対応。地域と人をつなぐ体験をデザインします。</p>
            <div class="service-domain-tags">
              <span>パビリオン</span>
              <span>地域PR</span>
              <span>観光促進</span>
            </div>
            <a href="/works?cat=event" class="service-domain-link">実績を見る →</a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 提供価値 / 強み -->
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

  <!-- サービスメニュー -->
  <section class="service-menu-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">SERVICE MENU</span>
          <h2 class="section-title-en fade-up delay-1">What We Do</h2>
          <p class="section-title-jp fade-up delay-2">サービスメニュー</p>
        </div>
      </div>
      <div class="service-menu-list">
        ${[
          { icon: 'fa-building', name: '展示会 / 学会出展', desc: '国内外の展示会・学会における企画から施工・運営まで。ブースデザインで来場者に強い印象を与えます。', link: '/works?cat=exhibition' },
          { icon: 'fa-star', name: 'イベントプロモーション', desc: 'ブランド体験型イベントの企画・演出・運営。ターゲットに刺さる体験で記憶に残るブランド接点を創出。', link: '/works?cat=event' },
          { icon: 'fa-store', name: 'プライベートショー', desc: '自社開催の展示・発表会の企画運営。招待客に特別な体験価値を提供し、商談機会の最大化を支援。', link: '/works' },
          { icon: 'fa-tv', name: 'デジタルコンテンツ', desc: 'AR/VR・インタラクティブ展示・映像制作。デジタルの力でリアルな空間を拡張し、体験価値を高めます。', link: '/works' },
          { icon: 'fa-map-marker-alt', name: 'ショールーム / 商環境', desc: 'ブランドの恒久的な体験拠点の企画設計・施工。日常的な来訪で深いブランド理解を促します。', link: '/works?cat=showroom' },
          { icon: 'fa-window-maximize', name: '店舗 / ウィンドウディスプレイ', desc: '路面店・百貨店・商業施設のディスプレイ制作。季節感やブランドの世界観を空間で表現します。', link: '/works?cat=store' },
        ].map(item => `
          <a href="${item.link}" class="service-menu-item fade-up">
            <div class="service-menu-icon"><i class="fas ${item.icon}"></i></div>
            <div class="service-menu-body">
              <h3 class="service-menu-name">${item.name}</h3>
              <p class="service-menu-desc">${item.desc}</p>
            </div>
            <div class="service-menu-arrow">→</div>
          </a>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- デジタル領域 -->
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

  <!-- CTA -->
  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">Contact Us</span>
        <h2 class="contact-title">プロジェクトのご相談は<br>お気軽にどうぞ</h2>
        <p class="contact-sub">展示会・イベント・ショールームなど、あらゆる体験設計のご要望に対応いたします。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/contact" class="btn-primary">お問い合わせ</a>
        <a href="/works" class="btn-secondary">実績を見る</a>
      </div>
    </div>
  </section>
</main>

${footer()}
${pageScripts()}
  `)
})

export default app
