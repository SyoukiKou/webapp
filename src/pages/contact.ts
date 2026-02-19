import { Hono } from 'hono'
import { pageHead, header, footer, pageScripts } from '../components/layout'

const app = new Hono()

app.get('/', (c) => {
  return c.html(`
${pageHead('Contact', 'プロジェクトのご相談、お問い合わせはこちらから。展示会・イベント・ショールームなど、あらゆる体験設計に対応します。')}

${header('/contact')}

<main>
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="page-hero-inner">
      <span class="page-hero-eyebrow fade-up">Get In Touch</span>
      <h1 class="page-hero-title fade-up delay-1">Contact</h1>
      <p class="page-hero-sub fade-up delay-2">お問い合わせ</p>
    </div>
  </section>

  <!-- Contact Content -->
  <section class="contact-section">
    <div class="section-inner">
      <div class="contact-grid">

        <!-- Form -->
        <div class="contact-form-wrap fade-up">
          <h2 class="contact-form-title">プロジェクトのご相談・お問い合わせ</h2>
          <p class="contact-form-lead">以下のフォームにご記入の上、送信してください。担当者より2〜3営業日以内にご連絡いたします。</p>

          <!-- Google Form Embed -->
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScOh-Zm04sLeCGzF93Gm7JLYUgmVkB02ttbC4uQQ0HGlXN4eA/viewform?embedded=true" width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0" style="border: none;">読み込み中…</iframe>
        </div>

        <!-- Info -->
        <div class="contact-info fade-up delay-2">
          <div class="contact-info-block">
            <h3 class="contact-info-heading">本社</h3>
            <p class="contact-info-text">
              〒104-0031<br>
              東京都中央区京橋三丁目1番1号<br>
              東京スクエアガーデン20F
            </p>
          </div>
          <div class="contact-info-block">
            <h3 class="contact-info-heading">西日本事業所</h3>
            <p class="contact-info-text">
              〒541-0043<br>
              大阪府大阪市中央区高麗橋3-2-7<br>
              ORIX 高麗橋ビル5F
            </p>
          </div>
          <div class="contact-info-block">
            <h3 class="contact-info-heading">中部営業所</h3>
            <p class="contact-info-text">
              〒460-0008<br>
              愛知県名古屋市中区栄三丁目18番1号<br>
              ナディアパーク ビジネスセンタービル21F
            </p>
          </div>
          <div class="contact-info-block" id="recruit">
            <h3 class="contact-info-heading">採用に関するお問い合わせ</h3>
            <p class="contact-info-text">新卒採用・キャリア採用に関するご質問は、採用ページよりご確認ください。</p>
            <a href="#" class="contact-info-link">採用情報を見る →</a>
          </div>
          <div class="contact-info-block">
            <h3 class="contact-info-heading">SNS</h3>
            <div class="contact-social">
              <a href="#" class="contact-social-link" aria-label="X (Twitter)"><i class="fab fa-x-twitter"></i></a>
              <a href="#" class="contact-social-link" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="contact-social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="contact-social-link" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</main>

${footer()}
${pageScripts(`
<script>
  // Google Form is embedded via iframe, no additional script needed
</script>
`)}
  `)
})

export default app
