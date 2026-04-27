import type { ServiceDetailPage } from './types.js'

export const komorebiPage: ServiceDetailPage = {
  slug: 'komorebi',
  cardTitle: '医療現場×芸術',
  cardDescription: '入院患者のせん妄を予防する芸術体験を医療現場に導入し、治療とケアの質を向上させます。',
  cardImage: '/static/komorebi.jpeg',
  cardTags: ['医療現場', '音楽療法', '福祉'],
  pageTitle: '医療現場×芸術',
  description: '医療現場に感覚刺激と芸術体験を組み込み、患者体験とケア品質を改善する取り組み。',
  heroImage: '/static/komorebi.jpeg',
  heroLead: '治療とケアに、回復を支える芸術体験を実装する。',
  introTitle: '患者体験に寄り添う、非薬物的アプローチ。',
  introBody: '医療現場×芸術では、感覚刺激デバイスや音楽体験を活用し、入院患者の不安・混乱の軽減を目指します。病棟オペレーションを妨げない導入設計で、現場に負担をかけずに実装できます。',
  challengeTitle: '医療の質は、患者体験の質でも決まる。',
  challengeBody: '治療成果だけでなく、患者の安心感や生活リズムの回復が重視される中、非薬物的なケアアプローチの需要が高まっています。芸術体験を組み込むことで、患者・家族・医療者の関係性改善にもつながります。',
  cases: [
    {
      image: '/static/komorebi.jpeg',
      title: '入院患者のせん妄予防',
      desc: '五感に働きかける刺激設計で、夜間の混乱や不安の軽減を目指します。',
      tags: ['せん妄予防', '睡眠リズム', '非薬物療法']
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop',
      title: '病棟コミュニケーションの改善',
      desc: '患者・家族・医療スタッフ間の会話を促進し、ケア連携を滑らかにします。',
      tags: ['患者体験', '家族支援', '多職種連携']
    },
    {
      image: 'https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?w=1200&q=80&auto=format&fit=crop',
      title: 'ケアスタッフの負荷軽減',
      desc: '環境づくりの工夫により、日常的な対応コストの低減を支援します。',
      tags: ['業務負荷軽減', 'ケア品質', '現場実装']
    }
  ],
  records: [
    { title: '医療機関との共同実証', desc: '病棟環境での感覚刺激プログラムを検証' },
    { title: 'ケアチーム連携', desc: '看護・リハビリ・医師と連携した運用を構築' }
  ]
}
