import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts } from '../../src/components/layout.js'

const app = new Hono()

app.get('/site-policy', (c) => {
  return c.html(`${pageHead({
    title: 'Site Policy',
    description: 'The Hearthのサイトポリシーです。プライバシーポリシー、個人情報保護方針、サイト利用条件をまとめてご案内します。',
    ogImage: 'https://thehearth.jp/static/logo.png',
    ogUrl: 'https://thehearth.jp/site-policy',
    canonical: 'https://thehearth.jp/site-policy'
  })}
${header('/site-policy')}
<main>
  <section class="page-hero">
    <div class="page-hero-inner">
      <h1 class="page-hero-title fade-up delay-1">Site Policy</h1>
      <p class="page-hero-sub fade-up delay-2">サイトポリシー</p>
    </div>
  </section>

  <section class="company-overview">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Policy</h2>
          <p class="section-title-jp fade-up delay-2">基本方針</p>
        </div>
      </div>
      <div class="company-table-wrap fade-up">
        <table class="company-table">
          <tbody>
            <tr><th>適用範囲</th><td>本サイトは、The Hearthが運営する公式Webサイト全体に適用されます。</td></tr>
            <tr><th>利用目的</th><td>活動内容、サービス内容、実績、各種お問い合わせ情報をわかりやすく提供することを目的とします。</td></tr>
            <tr><th>禁止事項</th><td>サイトの改ざん、第三者へのなりすまし、不正アクセス、運営の妨げとなる行為を禁止します。</td></tr>
            <tr><th>免責事項</th><td>掲載内容は予告なく変更される場合があります。掲載情報の利用により生じた損害について、当方は一切の責任を負いません。</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="company-officers">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Privacy Policy</h2>
          <p class="section-title-jp fade-up delay-2">プライバシーポリシー・個人情報保護方針</p>
        </div>
      </div>
      <div class="policy-copy fade-up">
        <div class="company-purpose-desc">
          <p>The Hearthは、お問い合わせやご依頼の過程で取得する個人情報を、適切かつ慎重に取り扱います。取得する情報は、氏名、連絡先、所属先、その他お問い合わせ内容に含まれる情報を想定します。</p>
          <p>取得した個人情報は、お問い合わせへの回答、業務上の連絡、サービス改善、必要なご案内のために利用します。本人の同意なく、利用目的の範囲を超えて使用することはありません。</p>
          <p>個人情報の管理にあたっては、漏えい、紛失、改ざん、不正アクセス等を防止するため、合理的な安全対策を講じます。また、法令に基づく場合を除き、本人の同意なく第三者へ提供しません。</p>
          <p>本方針の内容は、法令や運用状況に応じて見直しを行い、必要に応じて更新します。お問い合わせや開示等のご相談は、<a href="/contact">お問い合わせページ</a>よりご連絡ください。</p>
        </div>
      </div>
    </div>
  </section>

  <section class="company-history">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Contact</h2>
          <p class="section-title-jp fade-up delay-2">お問い合わせ窓口</p>
        </div>
      </div>
      <div class="history-timeline fade-up">
        <div class="history-item">
          <div class="history-year">1</div>
          <div class="history-line"></div>
          <div class="history-text">個人情報の取り扱いに関するご質問、修正依頼、利用停止のご相談はお問い合わせフォームから受け付けます。</div>
        </div>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

export default app