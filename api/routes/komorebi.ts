import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts, createProductSchema } from '../../src/components/layout.js'

const app = new Hono()

app.get('/komorebi', (c) => {
  return c.html(`${pageHead({
    title: 'Komorebi',
    description: 'Komorebiは、ICUの空間を視覚・聴覚・嗅覚・気流の4つの要素で再設計し、せん妄予防と患者の尊厳回復を支援するSpace-as-a-Serviceです。',
    ogImage: 'https://thehearth.jp/static/logo.png',
    ogUrl: 'https://thehearth.jp/komorebi',
    canonical: 'https://thehearth.jp/komorebi',
    structuredData: createProductSchema({
      name: 'Komorebi',
      description: 'ICUの空間を、せん妄予防と患者の尊厳回復のために再設計するSpace-as-a-Service。',
      image: 'https://thehearth.jp/static/logo.png',
      url: 'https://thehearth.jp/komorebi'
    })
  })}
${header('/komorebi')}
<main>
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1585435557343-3b092031d8d8?w=1920&q=85&auto=format&fit=crop" alt="Komorebi ICU" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Space-as-a-Service for ICU</span>
      <h1 class="page-hero-title fade-up delay-1">ICUに、癒やしと尊厳を。</h1>
      <p class="page-hero-lead fade-up delay-2">せん妄は、起きてから抑えるほど高くつく。Komorebiは、空間から未然に防ぐための医療インフラです。</p>
    </div>
  </section>

  <section class="service-intro">
    <div class="section-inner">
      <div class="service-intro-grid">
        <div class="service-intro-text fade-up">
          <span class="section-eyebrow">Hero</span>
          <h2 class="service-intro-title">重症患者の体内時計を整え、ICUを回復にふさわしい環境へ。</h2>
        </div>
        <div class="service-intro-desc fade-up delay-2">
          <p>Komorebiは、視覚・聴覚・嗅覚・気流の4つの刺激を統合制御し、鎮静下でも働く皮質下の感覚・自律神経パスウェイに直接アプローチします。患者の概日リズムを再構築し、せん妄を未然に防ぐためのSpace-as-a-Serviceデバイスです。</p>
          <p>病院のCFOにとっては、経済的損失を抑える投資。ICUの現場にとっては、看護負担を増やさない介入。Komorebiは、その両方を同時に満たすために設計されています。</p>
        </div>
      </div>
    </div>
  </section>

  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-content fade-up">
          <span class="section-eyebrow">The Problem</span>
          <h2 class="service-digital-title">せん妄は、患者の問題ではなく、病院経営と現場を同時に疲弊させる構造課題です。</h2>
          <p class="service-digital-desc">ICU患者の約90%が発症するとされるせん妄は、暴れる、徘徊する、眠れないといった症状を通じて、看護師の付きっきり対応を常態化させます。強い鎮静剤やカレンダーに頼るだけでは、根本的な予防にはなりません。</p>
          <p class="service-digital-desc">1症例あたりの純粋な現金流出は約$7,200。残業代、追加薬剤費、入院長期化による機会損失が、静かに病院の収益を削り続けています。</p>
        </div>
        <div class="service-digital-img fade-up delay-2">
          <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=85&auto=format&fit=crop" alt="ICU environment" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <section class="service-domains">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">The Solution</span>
          <h2 class="section-title-en fade-up delay-1">Komorebiがつくる空間介入</h2>
        </div>
      </div>
      <div class="service-domain-grid">
        <article class="service-domain-item fade-up">
          <div class="service-domain-body">
            <h3 class="service-domain-title">視覚</h3>
            <p class="service-domain-desc">朝の光、日中の明るさ、夜間の静けさを空間に与え、患者が時間の流れを身体で感じられる状態をつくります。</p>
          </div>
        </article>
        <article class="service-domain-item fade-up delay-1">
          <div class="service-domain-body">
            <h3 class="service-domain-title">聴覚</h3>
            <p class="service-domain-desc">過剰な緊張を誘発しない音環境を自動生成し、ICUのノイズを意味のある刺激へと再設計します。</p>
          </div>
        </article>
        <article class="service-domain-item fade-up delay-2">
          <div class="service-domain-body">
            <h3 class="service-domain-title">嗅覚・気流</h3>
            <p class="service-domain-desc">密閉型アロマカートリッジと気流制御により、看護師の手を煩わせずに、安心感と身体感覚の安定を支えます。</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="service-strengths">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Technology & Science</h2>
          <p class="section-title-jp fade-up delay-2">技術と科学</p>
        </div>
      </div>
      <div class="strength-grid">
        <div class="strength-item fade-up">
          <div class="strength-num">01</div>
          <h3 class="strength-title">バイタルと環境を統合した自動制御</h3>
          <p class="strength-desc">HRVなどから算出する独自のSleepiness Scoreと環境データを掛け合わせ、アルゴリズムが最適な刺激を全自動で生成します。</p>
        </div>
        <div class="strength-item fade-up delay-1">
          <div class="strength-num">02</div>
          <h3 class="strength-title">鎮静下でも意味を持つ介入</h3>
          <p class="strength-desc">Komorebiが狙うのは、皮質下の感覚・自律神経パスウェイです。意識に依存せず、身体の深い層に働きかけます。</p>
        </div>
        <div class="strength-item fade-up delay-2">
          <div class="strength-num">03</div>
          <h3 class="strength-title">概日リズムと自律神経の再調整</h3>
          <p class="strength-desc">昼夜の境界と身体のリズムを整え、せん妄リスクの高い状態に先回りして介入します。</p>
        </div>
        <div class="strength-item fade-up delay-3">
          <div class="strength-num">04</div>
          <h3 class="strength-title">現場負担ゼロの設計</h3>
          <p class="strength-desc">後付け可能なEasy Install、そしてゼロ・メンテナンス設計。導入は静かに、運用は自動で、看護師の業務は増やしません。</p>
        </div>
      </div>
    </div>
  </section>

  <section class="service-menu-section">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Business Impact</h2>
          <p class="section-title-jp fade-up delay-2">経営的インパクト</p>
        </div>
      </div>
      <div class="service-menu-list">
        <article class="service-menu-item fade-up">
          <div class="service-menu-icon"><i class="fas fa-dollar-sign"></i></div>
          <div class="service-menu-body">
            <h3 class="service-menu-name">1ベッドあたり年間 $5,000</h3>
            <p class="service-menu-desc">ハードウェアリース、クラウド利用料、消耗品をすべて含んだB2B Hybrid SaaSモデル。初期導入の不確実性を抑え、継続的な価値提供に最適化しています。</p>
          </div>
        </article>
        <article class="service-menu-item fade-up delay-1">
          <div class="service-menu-icon"><i class="fas fa-chart-pie"></i></div>
          <div class="service-menu-body">
            <h3 class="service-menu-name">年間2.5件の予防で投資回収</h3>
            <p class="service-menu-desc">極めて保守的に見積もっても、せん妄を年間2.5人防ぐだけで導入費用はペイします。単年で44%のROIを見込める、明確な経済合理性があります。</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="service-digital">
    <div class="section-inner">
      <div class="service-digital-grid">
        <div class="service-digital-content fade-up">
          <span class="section-eyebrow">Vision & Team</span>
          <h2 class="service-digital-title">一般病棟から介護施設まで、すべての空間に尊厳を取り戻す。</h2>
          <p class="service-digital-desc">The Hearthは、東京科学大学発の多分野横断型アートコレクティブ＆スタートアップとして、医療空間の価値を再定義してきました。Komorebiは、その最初の具体的な実装です。</p>
          <p class="service-digital-desc">ICUで証明された空間介入を、一般病棟、慢性期医療、介護施設へと広げていくことで、誰もが尊厳を保ちながら過ごせる環境を社会に増やしていきます。</p>
        </div>
        <div class="service-digital-img fade-up delay-2">
          <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=85&auto=format&fit=crop" alt="Healthcare vision" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <section id="contact-banner">
    <div class="contact-banner-inner">
      <div class="contact-banner-text fade-up">
        <span class="contact-eyebrow">CTA</span>
        <h2 class="contact-title">あなたのICUで、Komorebiの効果を確かめてください。</h2>
        <p class="contact-sub">まずはデモで、空間が変わる意味を体感してください。導入相談、早期導入、アーリーアダプターとしてのご参加も歓迎します。</p>
      </div>
      <div class="contact-actions fade-up delay-2">
        <a href="/contact" class="btn-primary">デモを申し込む</a>
        <a href="/contact" class="btn-secondary">導入相談をする</a>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

export default app