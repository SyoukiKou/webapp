import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts } from '../../src/components/layout.js'

const app = new Hono()

app.get('/contact', (c) => {
  return c.html(`${pageHead({
    title: 'Contact',
    description: 'ご相談、お問い合わせはこちらから。お問い合わせ内容を確認後、担当者より折り返しご連絡させていただきます。',
    ogImage: 'https://thehearth.jp/static/logo.png',
    ogUrl: 'https://thehearth.jp/contact',
    canonical: 'https://thehearth.jp/contact'
  })}
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
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

export default app
