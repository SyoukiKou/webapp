import type { ServiceDetailPage } from './types.js'

export const komorebiPage: ServiceDetailPage = {
  slug: 'komorebi',
  cardTitle: 'KOMOREBI',
  cardDescription: 'ICUの空間を視覚・聴覚・嗅覚・気流の4つの要素で再設計し、せん妄予防と患者の尊厳回復を支援するSpace-as-a-Serviceです。',
  cardImage: '/static/komorebi.jpeg',
  cardTags: ['医療技術', 'Space-as-a-Service', 'ICU'],
  pageTitle: 'KOMOREBI',
  description: 'KOMOREBIは、ICUの空間を視覚・聴覚・嗅覚・気流の4つの要素で再設計し、せん妄予防と患者の尊厳回復を支援するSpace-as-a-Serviceです。',
  heroImage: 'https://images.unsplash.com/photo-1585435557343-3b092031d8d8?w=1920&q=85&auto=format&fit=crop',
  heroLead: 'せん妄は、起きてから抑えるほど高くつく。KOMOREBIは、空間から未然に防ぐための医療インフラです。',
  introTitle: '重症患者の体内時計を整え、ICUを回復にふさわしい環境へ。',
  introBody: 'KOMOREBIは、視覚・聴覚・嗅覚・気流の4つの刺激を統合制御し、鎮静下でも働く皮質下の感覚・自律神経パスウェイに直接アプローチします。患者の概日リズムを再構築し、せん妄を未然に防ぐためのSpace-as-a-Serviceデバイスです。病院のCFOにとっては、経済的損失を抑える投資。ICUの現場にとっては、看護負担を増やさない介入。KOMOREBIは、その両方を同時に満たすために設計されています。',
  challengeTitle: 'せん妄は、患者の問題ではなく、病院経営と現場を同時に疲弊させる構造課題です。',
  challengeBody: 'ICU患者の約90%が発症するとされるせん妄は、暴れる、徘徊する、眠れないといった症状を通じて、看護師の付きっきり対応を常態化させます。強い鎮静剤やカレンダーに頼るだけでは、根本的な予防にはなりません。1症例あたりの純粋な現金流出は約$7,200。残業代、追加薬剤費、入院長期化による機会損失が、静かに病院の収益を削り続けています。',
  cases: [
    {
      image: '/static/komorebi.jpeg',
      title: '視覚',
      desc: '朝の光、日中の明るさ、夜間の静けさを空間に与え、患者が時間の流れを身体で感じられる状態をつくります。',
      tags: ['照度制御', '概日リズム']
    },
    {
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=85&auto=format&fit=crop',
      title: '聴覚',
      desc: '過剰な緊張を誘発しない音環境を自動生成し、ICUのノイズを意味のある刺激へと再設計します。',
      tags: ['音環境設計', '自動制御']
    },
    {
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=85&auto=format&fit=crop',
      title: '嗅覚・気流',
      desc: '密閉型アロマカートリッジと気流制御により、看護師の手を煩わせずに、安心感と身体感覚の安定を支えます。',
      tags: ['アロマテラピー', 'ゼロメンテナンス']
    }
  ],
  records: [
    { title: '1ベッドあたり年間 $5,000', desc: 'ハードウェアリース、クラウド利用料、消耗品をすべて含んだB2B Hybrid SaaSモデル。初期導入の不確実性を抑え、継続的な価値提供に最適化しています。' },
    { title: '年間2.5件の予防で投資回収', desc: '極めて保守的に見積もっても、せん妄を年間2.5人防ぐだけで導入費用はペイします。単年で44%のROIを見込める、明確な経済合理性があります。' }
  ]
}