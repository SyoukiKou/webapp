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

          <form class="contact-form" id="contactForm" novalidate>

            <div class="form-row form-row--2">
              <div class="form-group">
                <label class="form-label" for="company">会社名・団体名 <span class="form-required">必須</span></label>
                <input class="form-input" type="text" id="company" name="company" placeholder="株式会社〇〇" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="name">お名前 <span class="form-required">必須</span></label>
                <input class="form-input" type="text" id="name" name="name" placeholder="山田 太郎" required>
              </div>
            </div>

            <div class="form-row form-row--2">
              <div class="form-group">
                <label class="form-label" for="email">メールアドレス <span class="form-required">必須</span></label>
                <input class="form-input" type="email" id="email" name="email" placeholder="example@company.co.jp" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="tel">電話番号</label>
                <input class="form-input" type="tel" id="tel" name="tel" placeholder="03-0000-0000">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">お問い合わせの種類 <span class="form-required">必須</span></label>
              <div class="form-radio-group">
                ${[
                  'プロジェクト・制作の相談',
                  '展示会 / 学会出展',
                  'イベントプロモーション',
                  'ショールーム / 商環境',
                  'デジタルコンテンツ',
                  'その他',
                ].map(label => `
                  <label class="form-radio">
                    <input type="radio" name="type" value="${label}">
                    <span class="form-radio-mark"></span>
                    <span>${label}</span>
                  </label>
                `).join('')}
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="budget">ご予算（目安）</label>
              <select class="form-select" id="budget" name="budget">
                <option value="" disabled selected>選択してください</option>
                <option>〜100万円</option>
                <option>100〜300万円</option>
                <option>300〜500万円</option>
                <option>500万〜1,000万円</option>
                <option>1,000万円以上</option>
                <option>未定</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="message">お問い合わせ内容 <span class="form-required">必須</span></label>
              <textarea class="form-textarea" id="message" name="message" rows="6" placeholder="プロジェクトの概要・開催時期・会場など、お気軽にご記入ください。" required></textarea>
            </div>

            <div class="form-group">
              <label class="form-checkbox">
                <input type="checkbox" name="privacy" required>
                <span class="form-checkbox-mark"></span>
                <span><a href="#" target="_blank">プライバシーポリシー</a>に同意する</span>
              </label>
            </div>

            <div class="form-submit-wrap">
              <button type="submit" class="form-submit-btn">
                <span class="form-submit-text">送信する</span>
                <span class="form-submit-icon">→</span>
              </button>
            </div>

          </form>

          <!-- Success Message (hidden by default) -->
          <div class="form-success" id="formSuccess" style="display:none">
            <div class="form-success-icon"><i class="fas fa-check-circle"></i></div>
            <h3>お問い合わせを受け付けました</h3>
            <p>ご連絡いただきありがとうございます。<br>担当者より2〜3営業日以内にご連絡いたします。</p>
            <a href="/" class="btn-primary" style="margin-top:24px;display:inline-block">トップへ戻る</a>
          </div>
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
  // Contact form
  document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = this;
    const btn = form.querySelector('.form-submit-btn');
    btn.disabled = true;
    btn.querySelector('.form-submit-text').textContent = '送信中...';

    try {
      // Collect form data
      const formData = new FormData(form);
      const data = {
        company: formData.get('company'),
        name: formData.get('name'),
        email: formData.get('email'),
        tel: formData.get('tel'),
        type: formData.get('type'),
        budget: formData.get('budget'),
        message: formData.get('message'),
        privacy: formData.get('privacy') ? true : false,
      };

      // Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const errorData = await response.json();
        alert('エラー: ' + (errorData.error || 'メール送信に失敗しました'));
        btn.disabled = false;
        btn.querySelector('.form-submit-text').textContent = '送信する';
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('エラーが発生しました。もう一度お試しください。');
      btn.disabled = false;
      btn.querySelector('.form-submit-text').textContent = '送信する';
    }
  });
</script>
`)}
  `)
})

export default app
