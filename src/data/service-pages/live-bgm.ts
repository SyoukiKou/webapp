import type { ServiceDetailPage } from './types.js'

export const liveBgmPage: ServiceDetailPage = {
  slug: 'live-bgm',
  cardTitle: '環境・生体連動音楽生成システム',
  cardDescription: '環境データと生体情報から音楽を生成し、睡眠・集中・リラックスなど目的に応じて状態を整えるシステムです。',
  cardImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80&auto=format&fit=crop',
  cardTags: ['音楽生成', '生体データ', 'コンディショニング'],
  pageTitle: '環境・生体連動音楽生成システム',
  description: '環境データと生体情報をもとに音楽を生成し、睡眠支援・集中力向上・リラックスなど、目的に応じた状態へ体験者を導くサービス。',
  heroImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=85&auto=format&fit=crop',
  heroLead: '環境と身体の状態を読み取り、その時に最適な音楽へ自動的に組み替える。',
  introTitle: '睡眠、集中、回復に合わせて音楽体験を最適化する。',
  introBody: 'このシステムは、温度・照度・騒音などの環境データと、心拍・呼吸・活動量といった生体情報をもとに音楽を構築します。状況に応じてテンポ、音色、密度、ダイナミクスを調整し、体験者を理想の状態へ自然に誘導します。',
  challengeTitle: '状態に合った音楽は、受け手の回復と集中をより確かに支える。',
  challengeBody: '睡眠支援、集中力アップ、リラックスなど、目的に応じて音の設計を変えられることが重要です。固定的なBGMではなく、環境や身体反応を手がかりに音楽を生成することで、より精度の高いコンディショニングが可能になります。',
  cases: [
    {
      image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200&q=80&auto=format&fit=crop',
      title: '睡眠支援モード',
      desc: '入眠前の心拍や環境の変化をもとに、音楽の密度と速度を落として睡眠へ導きます。',
      tags: ['睡眠支援', '入眠導線', '回復']
    },
    {
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop',
      title: '集中力ブーストモード',
      desc: '騒音や活動量を見ながら、注意散漫を抑えて作業に入りやすい音場を生成します。',
      tags: ['集中力向上', '作業支援', '注意制御']
    },
    {
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80&auto=format&fit=crop',
      title: 'リラックス・リカバリーモード',
      desc: '呼吸や環境負荷を手がかりに、緊張をほどく音楽へ段階的に切り替えます。',
      tags: ['リラックス', 'ストレス緩和', 'コンディショニング']
    }
  ],
  records: [
    { title: '睡眠支援導入', desc: '就寝前の環境変化に合わせた音楽生成を設計' },
    { title: '集中・回復プログラム', desc: '執務環境や休憩空間でのモード切替を運用' }
  ]
}