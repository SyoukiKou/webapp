import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts } from '../../src/components/layout.js'

const app = new Hono()

const members = [
  { role: '代表', name: '黄 松毅', img: '/static/koushoki.jpeg' },
  { role: '執行責任者', name: '上杉 未宇', img: '/static/miu.webp' },
  { role: 'ディレクター', name: '大塚 康平', img: '/static/otuka.jpg' }
]

const history = [
  { year: '2025', text: '創業' },
  { year: '2025', text: 'エンジェル投資を受ける' },
  { year: '2026', text: 'Solutions / Science / Cases の公開' }
]

app.get('/about', (c) => {
  const membersHTML = members.map((member, index) => `
    <div class="officer-item fade-up" style="transition-delay:${(index % 3) * 0.08}s">
      <div class="officer-avatar">
        <img src="${member.img}" alt="${member.name}">
      </div>
      <p class="officer-role">${member.role}</p>
      <p class="officer-name">${member.name}</p>
    </div>
  `).join('')

  const historyHTML = history.map((item, index) => `
    <div class="history-item fade-up" style="transition-delay:${index * 0.06}s">
      <div class="history-year">${item.year}</div>
      <div class="history-line"></div>
      <div class="history-text">${item.text}</div>
    </div>
  `).join('')

  return c.html(`${pageHead({
    title: 'About',
    description: 'The Hearthのビジョン、メンバー、会社概要をご覧いただけます。',
    ogUrl: 'https://thehearth.jp/about',
    canonical: 'https://thehearth.jp/about'
  })}
${header('/about', true)}
<main class="about-page">
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=85&auto=format&fit=crop" alt="About" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">About Us</span>
      <h1 class="page-hero-title fade-up delay-1">The Hearth について</h1>
      <p class="page-hero-lead fade-up delay-2">芸術で社会課題を解決するために、研究と実装を往復しながら活動しています。</p>
    </div>
  </section>

  <section class="company-purpose">
    <div class="section-inner">
      <div class="company-purpose-grid">
        <div class="company-purpose-text fade-up">
          <span class="section-eyebrow">Our Vision</span>
          <h2 class="company-purpose-title">人と社会のつながりに<br>芸術を通わせ、<br>未来へつなげる原動力をつくる。</h2>
          <p class="company-purpose-desc">The Hearth は、芸術体験を「飾り」ではなく、組織・医療・地域を支える実装として扱います。脳科学、音楽、空間設計、対話設計を横断して、社会に届く形へ変えていきます。</p>
        </div>
        <div class="company-stats fade-up delay-2">
          <div class="company-stat"><div class="company-stat-num" data-target="1">0</div><div class="company-stat-unit">年</div><div class="company-stat-label">創業年数</div></div>
          <div class="company-stat"><div class="company-stat-num" data-target="130">0</div><div class="company-stat-unit">回</div><div class="company-stat-label">出演回数</div></div>
          <div class="company-stat"><div class="company-stat-num" data-target="25">0</div><div class="company-stat-unit">回</div><div class="company-stat-label">ワークショップ開催</div></div>
          <div class="company-stat"><div class="company-stat-num" data-target="300">0</div><div class="company-stat-unit">回</div><div class="company-stat-label">施設訪問</div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="company-overview">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Overview</h2>
          <p class="section-title-jp fade-up delay-2">会社概要</p>
        </div>
      </div>
      <div class="company-table-wrap fade-up">
        <table class="company-table">
          <tbody>
            <tr><th>正式名称</th><td>The Hearth</td></tr>
            <tr><th>所在地</th><td>本社<br>〒163-0604<br>東京都新宿区西新宿1丁目25ー1<br><br>研究所<br>〒194-0001<br>東京都町田市つくし野2丁目33<br></td></tr>
            <tr><th>設立</th><td>2025年9月7日</td></tr>
            <tr><th>代表</th><td>黄松毅</td></tr>
            <tr><th>メンバー</th><td>8名 (業務委託・インターンも含む)</td></tr>
            <tr><th>事業内容</th><td>ソリューション・アート・サイエンスを軸にした社会課題解決</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="company-officers">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Members</h2>
          <p class="section-title-jp fade-up delay-2">メンバー</p>
        </div>
      </div>
      <div class="officers-grid">${membersHTML}</div>
    </div>
  </section>

  <section class="company-history">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">History</h2>
          <p class="section-title-jp fade-up delay-2">沿革</p>
        </div>
      </div>
      <div class="history-timeline">${historyHTML}</div>
    </div>
  </section>

  <section class="solution-cta-block">
    <div class="section-inner">
      <div class="solution-cta-inner fade-up">
        <div>
          <span class="contact-eyebrow">Contact Us</span>
          <h2 class="contact-title">まずは目的に合うページからご覧ください。</h2>
          <p class="contact-sub">Solutions、Cases、Science の各ページから、必要な情報に直接アクセスできます。</p>
        </div>
        <div class="contact-actions">
          <a href="/solutions" class="btn-primary">Solutions</a>
          <a href="/contact" class="btn-secondary">お問い合わせ</a>
        </div>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({
  includeApp: false,
  includePages: true,
  extra: `
<script>
  document.querySelectorAll('.company-stat-num[data-target]').forEach(el => {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const target = parseInt(el.dataset.target);
        let t0 = performance.now();
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
`
})}`)
})

export default app
