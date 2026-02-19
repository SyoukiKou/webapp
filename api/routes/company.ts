import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts } from '../../src/components/layout.js'

const app = new Hono()

app.get('/company', (c) => {
  const officers = [
    { role: '代表', name: '黄 松毅', img: '/static/koushoki.jpeg' },
    { role: '執行責任者', name: '上杉 未宇', img: '/static/miu.webp' },
    { role: 'ディレクター', name: '大塚 康平', img: '/static/otuka.jpg' },
  ]
  const historyItems = [
    { year: '2025', text: '創業' },
  ]
  const officersHTML = officers.map((o, i) => `
    <div class="officer-item fade-up" style="transition-delay:${(i % 3) * 0.08}s">
      <div class="officer-avatar">
        ${o.img ? `<img src="${o.img}" alt="${o.name}">` : '<div class="officer-avatar-placeholder"><i class="fas fa-user"></i></div>'}
      </div>
      <p class="officer-role">${o.role}</p>
      <p class="officer-name">${o.name}</p>
    </div>`).join('')
  const historyHTML = historyItems.map((item, i) => `
    <div class="history-item fade-up" style="transition-delay:${i * 0.06}s">
      <div class="history-year">${item.year}</div>
      <div class="history-line"></div>
      <div class="history-text">${item.text}</div>
    </div>`).join('')

  return c.html(`${pageHead({
    title: 'Company',
    description: 'The Hearthの会社概要・メンバー・実績をご覧いただけます。',
    ogImage: 'https://thehearth.jp/static/logo.png',
    ogUrl: 'https://thehearth.jp/company',
    canonical: 'https://thehearth.jp/company'
  })}
${header('/company', true)}
<main>
  <section class="page-hero page-hero--dark">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=85" alt="Company" loading="eager">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up delay-1">Company</h1>
      <p class="page-hero-sub fade-up delay-2">会社概要</p>
    </div>
  </section>
  <section class="company-purpose">
    <div class="section-inner">
      <div class="company-purpose-grid">
        <div class="company-purpose-text fade-up">
          <span class="section-eyebrow">Our Purpose</span>
          <h2 class="company-purpose-title">人と社会のつながりに<br>芸術を通わせ、<br>未来へつなげる原動力をつくる。</h2>
          <p class="company-purpose-desc">The Hearthはリアルな"体験"を通じた企業コミュニケーションの創造を事業領域としています。私たちは人と社会のつながりを深める体験を生み出し続けています。</p>
        </div>
        <div class="company-stats fade-up delay-2">
          <div class="company-stat"><div class="company-stat-num" data-target="1">0</div><div class="company-stat-unit">年</div><div class="company-stat-label">創業年数</div></div>
          <div class="company-stat"><div class="company-stat-num" data-target="7">0</div><div class="company-stat-unit">回</div><div class="company-stat-label">イベント開催</div></div>
          <div class="company-stat"><div class="company-stat-num" data-target="98">0</div><div class="company-stat-unit">名</div><div class="company-stat-label">芸術家</div></div>
          <div class="company-stat"><div class="company-stat-num" data-target="200">0</div><div class="company-stat-unit">名</div><div class="company-stat-label">施設訪問</div></div>
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
            <tr><th>所在地</th><td>〒163-0604<br>東京都新宿区西新宿1丁目25ー1<br></td></tr>
            <tr><th>設立</th><td>2025年9月7日</td></tr>
            <tr><th>資本金</th><td>300万円</td></tr>
            <tr><th>代表</th><td>黄松毅</td></tr>
            <tr><th>メンバー</th><td>3名</td></tr>
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
      <div class="officers-grid">${officersHTML}</div>
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
