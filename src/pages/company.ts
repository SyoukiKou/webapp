import { Hono } from 'hono'
import { pageHead, header, footer, pageScripts } from '../components/layout'

const app = new Hono()

app.get('/', (c) => {
  const officers = [
    { role: '代表取締役 会長執行役員 CEO', name: '田口 徳久' },
    { role: '代表取締役 社長執行役員 COO', name: '原田 淳' },
    { role: '取締役 執行役員 CFO', name: '藤井 由康' },
    { role: '取締役（常勤監査等委員）', name: '田中 雅樹' },
    { role: '社外取締役（監査等委員）', name: '山田 毅志' },
    { role: '社外取danmarks取締役（監査等委員）', name: '石塚 陽子' },
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

  return c.html(`
${pageHead('Company', '株式会社博展の会社概要・役員情報・沿革・グループ会社情報をご覧いただけます。')}

${header('/company')}

<main>
  <!-- Page Hero -->
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

  <!-- Purpose -->
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

  <!-- 会社概要 Table -->
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
              <strong>本社</strong><br>
              〒104-0031 東京都中央区京橋三丁目１番１号 東京スクエアガーデン20F<br><br>
              <strong>西日本事業所</strong><br>
              〒541-0043 大阪府大阪市中央区高麗橋3-2-7 ORIX 高麗橋ビル5F<br><br>
              <strong>中部営業所</strong><br>
              〒460-0008 愛知県名古屋市中区栄三丁目１８番１号 ナディアパーク ビジネスセンタービル21F
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

  <!-- 役員 -->
  <section class="company-officers">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">Leadership</span>
          <h2 class="section-title-en fade-up delay-1">Officers</h2>
          <p class="section-title-jp fade-up delay-2">役員</p>
        </div>
      </div>
      <div class="officers-grid">
        ${officers.map((o, i) => `
          <div class="officer-item fade-up" style="transition-delay:${(i % 3) * 0.08}s">
            <div class="officer-avatar">
              <img src="https://images.unsplash.com/photo-${500000000 + i * 11111}?w=200&q=80" alt="${o.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80'">
            </div>
            <p class="officer-role">${o.role}</p>
            <p class="officer-name">${o.name}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 沿革 -->
  <section class="company-history">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <span class="section-eyebrow fade-up">History</span>
          <h2 class="section-title-en fade-up delay-1">History</h2>
          <p class="section-title-jp fade-up delay-2">沿革</p>
        </div>
      </div>
      <div class="history-timeline">
        ${historyItems.map((item, i) => `
          <div class="history-item fade-up" style="transition-delay:${i * 0.06}s">
            <div class="history-year">${item.year}</div>
            <div class="history-line"></div>
            <div class="history-text">${item.text}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- グループ会社 -->
  <section class="company-group" id="sustainability">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
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
${pageScripts(`
<script>
  // Counter animation for company page
  document.querySelectorAll('.company-stat-num[data-target]').forEach(el => {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const target = parseInt(el.dataset.target);
        let start = 0;
        const t0 = performance.now();
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
`)}
  `)
})

export default app
