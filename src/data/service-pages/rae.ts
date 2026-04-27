import type { ServiceDetailPage } from './types.js'

export const raePage: ServiceDetailPage = {
  slug: 'rae',
  cardTitle: 'Regulative Art Experience',
  cardDescription: '音楽体験と対話を組み合わせ、職場のメンタルケアとコミュニケーション改善を無理なく支援するプログラムです。',
  cardImage: '/static/rae_photo.jpg',
  cardTags: ['メンタルヘルス', 'チームビルディング', 'ウェルビーイング'],
  pageTitle: 'Regulative Art Experience',
  description: '音楽体験と対話を通じて、組織のメンタルヘルス施策を支援するプログラム。',
  heroImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=85&auto=format&fit=crop',
  heroLead: '音楽体験を、職場で実行しやすいメンタルヘルス施策として設計する。',
  introTitle: '生演奏と対話を組み合わせ、状態の振り返りを促す。',
  introBody: 'RAEは、生演奏とワークショップ形式の対話を組み合わせたプログラムです。参加者が自身の状態を言語化し、チームで共有できるように設計しています。必要に応じて既存の健康経営施策とも併用できます。',
  challengeTitle: '導入しやすく、継続しやすい施策設計。',
  challengeBody: 'メンタルヘルス施策は単発で終わると効果を実感しづらい課題があります。RAEでは目的・対象・実施頻度を明確化し、現場運用に合わせて無理のない形でプログラムを組み立てます。',
  cases: [
    {
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop',
      title: 'メンタルヘルス・健康経営の推進',
      desc: '深いリラックス体験と感情の言語化を通じて、心身のコンディションを整えます。',
      tags: ['健康経営', 'ストレス対策', '定量評価']
    },
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop',
      title: '心理的安全性とチームビルディング',
      desc: '体験後の対話セッションにより、立場を越えた相互理解と関係性の改善を促進します。',
      tags: ['対話設計', 'チーム開発', '関係性構築']
    },
    {
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80&auto=format&fit=crop',
      title: '創造性と内発的動機の活性化',
      desc: '感性への刺激から新しい視点を引き出し、アイデア創出と挑戦行動を後押しします。',
      tags: ['創造性', 'イノベーション', 'モチベーション']
    }
  ],
  records: [
    { title: '渋谷QWS', desc: '共創拠点における体験型ワークショップの実施' },
    { title: 'UT Lab', desc: '研究コミュニティ向けプログラムの実施' }
  ]
}