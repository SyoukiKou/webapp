import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts } from '../../src/components/layout.js'

const app = new Hono()

app.get('/contact', (c) => {
  return c.html(`${pageHead('Contact', 'ご相談、お問い合わせはこちらから。お問い合わせ内容を確認後、担当者より折り返しご連絡させていただきます。')}
${header('/contact')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up delay-1">Contact</h1>
      <p class="page-hero-sub fade-up delay-2">お問い合わせ</p>
    </div>
  </section>
  <section class="contact-section">
    <div class="section-inner">
      <div class="contact-grid">
        <div class="contact-form-wrap fade-up">
          <!-- Google Form Embed -->
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScOh-Zm04sLeCGzF93Gm7JLYUgmVkB02ttbC4uQQ0HGlXN4eA/viewform?embedded=true" width="100%" height="1600" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" style="border: none;">読み込み中…</iframe>
        </div>
        <div class="contact-info fade-up delay-2">
          <div class="contact-info-block">
            <h3 class="contact-info-heading">所在地</h3>
            <p class="contact-info-text">〒163-0604<br>東京都新宿区西新宿1丁目25ー1</p>
          </div>
          <div class="contact-info-block" id="recruit">
            <h3 class="contact-info-heading">採用に関するお問い合わせ</h3>
            <p class="contact-info-text">芸術家採用・オフィス採用に関するご連絡はこちら</p>
            <a href="#" class="contact-info-link">お問い合わせ →</a>
          </div>
          <div class="contact-info-block">
            <h3 class="contact-info-heading">SNS</h3>
            <div class="contact-social">
              <a href="https://x.com/syiaviolin" class="contact-social-link" aria-label="X">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2H21.5l-7.106 8.12L22.5 22h-6.172l-4.83-6.48L5.94 22H2.5l7.59-8.67L1.5 2h6.328l4.37 5.86L18.244 2Zm-1.07 18.2h1.8L6.86 3.74H4.93l12.244 16.46Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/syiaviolin/" class="contact-social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/syiaviolin/" class="contact-social-link" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="mailto:info@thehearth.jp" class="contact-social-link" aria-label="Send mail"><i class="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

export default app
