import type { ServiceDetailPage } from './types.js'

export const creativeBarPage: ServiceDetailPage = {
  slug: 'creative-bar',
  cardTitle: 'Creative Bar',
  cardDescription: '音楽、会話、軽い交流を組み合わせた場づくりで、組織や地域に創造的なつながりを生み出すプログラムです。',
  cardImage: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80&auto=format&fit=crop',
  cardTags: ['交流設計', '創造性', '体験企画'],
  pageTitle: 'Creative Bar',
  description: '音楽と対話をきっかけに、アイデアが自然に生まれる場をデザインするプログラム。',
  heroImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=85&auto=format&fit=crop',
  heroLead: 'お酒のある場に限らず、気軽に会話と発想が生まれる創造的な空間をつくる。',
  introTitle: '音楽と会話を、参加しやすい場の体験に変える。',
  introBody: 'Creative Bar は、BGMや小さな演出、テーマトークを組み合わせて、参加者同士が自然に話しやすくなる場を設計するプログラムです。社内イベント、コミュニティ交流、地域連携など、用途に応じて柔軟に構成できます。',
  challengeTitle: '形式ばらないのに、ちゃんと価値が残る場をつくる。',
  challengeBody: '交流イベントは雰囲気づくりだけで終わりやすい課題があります。Creative Bar では、目的に合わせた導線と体験設計を行い、印象に残るだけでなく、次の関係性や発想につながる場へ整えます。',
  cases: [
    {
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80&auto=format&fit=crop',
      title: '社内交流イベント',
      desc: '部署を越えて会話が生まれるように、音楽と軽いテーマトークを組み合わせます。',
      tags: ['社内イベント', '交流促進', '場づくり']
    },
    {
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80&auto=format&fit=crop',
      title: '地域・コミュニティの拠点企画',
      desc: '地域の人が立ち寄りやすい、ゆるやかな滞在体験を設計します。',
      tags: ['コミュニティ', '地域連携', '滞在体験']
    },
    {
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80&auto=format&fit=crop',
      title: 'アイデアを引き出すワークショップ',
      desc: '対話のきっかけを丁寧に設計し、発想の柔らかさを引き出します。',
      tags: ['ワークショップ', '発想支援', '対話設計']
    }
  ],
  records: [
    { title: 'イベント企画支援', desc: '交流と体験を組み合わせた場の設計を実施' },
    { title: 'コミュニティ施策連携', desc: '参加者の関係づくりを目的とした企画を伴走' }
  ]
}
