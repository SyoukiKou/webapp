import { Hono } from 'hono'
import { header, footer, pageHead, pageScripts } from '../../src/components/layout.js'

const app = new Hono()

app.get('/site-policy', (c) => {
  return c.html(`${pageHead({
    title: 'Site Policy',
    description: 'The Hearthのサイトポリシーです。サイトの利用条件、著作権、個人情報の取り扱い、免責事項などを掲載しています。',
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
          <h2 class="section-title-en fade-up delay-1">Overview</h2>
          <p class="section-title-jp fade-up delay-2">総則</p>
        </div>
      </div>
      <div class="company-table-wrap fade-up">
        <table class="company-table">
          <tbody>
            <tr><th>適用範囲</th><td>本サイトポリシーは、The Hearthが運営するすべての公式Webページおよび関連コンテンツに適用されます。</td></tr>
            <tr><th>利用目的</th><td>本サイトは、The Hearthの活動内容、提供サービス、実績、採用・お問い合わせ情報等を、適切かつ分かりやすく案内することを目的としています。</td></tr>
            <tr><th>運営方針</th><td>掲載情報は、正確性の確保に努めて運用しますが、内容の完全性、最新性、適合性を保証するものではありません。</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="company-officers">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Use Rules</h2>
          <p class="section-title-jp fade-up delay-2">ご利用にあたって</p>
        </div>
      </div>
      <div class="policy-copy fade-up">
        <div class="company-purpose-desc">
          <p>本サイトの閲覧にあたっては、法令および公序良俗、本サイトポリシーを遵守のうえご利用ください。</p>
          <p>次の行為を禁止します。第三者または当社関係者へのなりすまし、虚偽の情報送信、サーバーやネットワークへの不正アクセス、サイト運営を妨げる行為、著作権その他の権利を侵害する行為、営利目的での無断転載や無断利用。</p>
          <p>本サイトから他サイトへ移動した場合、移動先サイトの利用条件やプライバシー方針は、移動先の定めに従ってください。</p>
        </div>
      </div>
    </div>
  </section>

  <section class="company-history">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Copyright</h2>
          <p class="section-title-jp fade-up delay-2">著作権・知的財産権</p>
        </div>
      </div>
      <div class="history-timeline fade-up">
        <div class="history-item">
          <div class="history-year">1</div>
          <div class="history-line"></div>
          <div class="history-text">本サイトに掲載される文章、画像、ロゴ、動画、デザイン、構成等の著作権およびその他の知的財産権は、The Hearthまたは正当な権利者に帰属します。事前の書面または当社所定の方法による許諾なく、転載、複製、改変、頒布、公開送信、二次利用を行うことはできません。</div>
        </div>
        <div class="history-item">
          <div class="history-year">2</div>
          <div class="history-line"></div>
          <div class="history-text">引用を行う場合は、引用の必要性が認められる範囲で、出典を明示し、本文と引用部分を明確に区別してください。</div>
        </div>
        <div class="history-item">
          <div class="history-year">3</div>
          <div class="history-line"></div>
          <div class="history-text">当社は、権利者からの正当な申出があった場合、速やかに確認のうえ必要な対応を行います。</div>
        </div>
      </div>
    </div>
  </section>

  <section class="company-overview">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Personal Information</h2>
          <p class="section-title-jp fade-up delay-2">個人情報の取り扱い</p>
        </div>
      </div>
      <div class="company-table-wrap fade-up">
        <table class="company-table">
          <tbody>
            <tr><th>取得情報</th><td>お問い合わせフォーム送信時の氏名、メールアドレス、所属先、電話番号、件名、本文、その他任意で提供された情報を取得する場合があります。</td></tr>
            <tr><th>利用目的</th><td>お問い合わせへの回答、業務連絡、取引・契約の履行、サービス案内、品質改善、法令に基づく対応のために利用します。</td></tr>
            <tr><th>管理</th><td>個人情報は、漏えい、滅失、毀損、不正アクセスを防止するため、適切な安全管理措置を講じて管理します。</td></tr>
            <tr><th>第三者提供</th><td>法令に基づく場合、または本人の同意がある場合を除き、第三者へ提供しません。</td></tr>
            <tr><th>委託</th><td>業務遂行上必要な範囲で外部事業者に業務を委託する場合があります。この場合、委託先に対して適切な監督を行います。</td></tr>
            <tr><th>開示等の請求</th><td>個人情報の開示、訂正、利用停止、削除等をご希望の場合は、本人確認のうえ、法令に従って合理的な範囲で対応します。</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="company-history">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-head-left">
          <h2 class="section-title-en fade-up delay-1">Disclaimer</h2>
          <p class="section-title-jp fade-up delay-2">免責事項・改定</p>
        </div>
      </div>
      <div class="history-timeline fade-up">
        <div class="history-item">
          <div class="history-year">1</div>
          <div class="history-line"></div>
          <div class="history-text">当社は、サイト掲載情報の利用により生じたいかなる損害についても、法令で認められる範囲で責任を負いません。掲載内容は予告なく変更または削除されることがあります。</div>
        </div>
        <div class="history-item">
          <div class="history-year">2</div>
          <div class="history-line"></div>
          <div class="history-text">本サイトポリシーは、法令改正、運用変更、社会状況の変化等に応じて、必要な範囲で予告なく改定することがあります。改定後の内容は本ページに掲載した時点から効力を生じます。</div>
        </div>
        <div class="history-item">
          <div class="history-year">3</div>
          <div class="history-line"></div>
          <div class="history-text">本サイトポリシーに関するお問い合わせは、<a href="/contact">お問い合わせページ</a>よりご連絡ください。</div>
        </div>
      </div>
    </div>
  </section>
</main>
${footer()}
${pageScripts({ includeApp: false, includePages: true })}`)
})

export default app