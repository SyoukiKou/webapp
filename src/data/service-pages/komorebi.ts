import type { ServiceDetailPage } from './types.js'

export const komorebiPage: ServiceDetailPage = {
  slug: 'komorebi',
  pageTemplate: 'medical',
  cardTitle: 'KOMOREBI',
  cardDescription: 'ICUの空間を、光・音・香り・気流の4要素でととのえ、せん妄予防と患者の尊厳保持を支援する環境介入デバイスです。',
  cardImage: '/static/komorebi.jpeg',
  cardTags: ['医療・福祉', '環境介入', 'ICU'],
  pageTitle: 'KOMOREBI',
  description: 'KOMOREBIは、ICUの光・音・香り・気流を統合制御し、せん妄予防と回復に向いた病室環境づくりを支援する環境介入デバイスです。',
  heroImage: 'https://images.unsplash.com/photo-1585435557343-3b092031d8d8?w=1920&q=85&auto=format&fit=crop',
  heroLead: 'せん妄は、発症してから抑えるのでは遅い。KOMOREBIは、空間そのものを使って未然に整えるための医療インフラです。',
  introTitle: 'ICUの時間感覚を、空間から回復モードへ切り替える。',
  introBody: 'KOMOREBIは、光・音・香り・気流を個別ではなく一つの環境として制御します。患者の覚醒と休息のリズムを支えながら、看護現場に余計な操作負荷を増やさないことを前提に設計されています。試験導入から臨床実証、継続運用までを見据えた環境介入の土台です。',
  challengeTitle: 'せん妄は患者本人の問題ではなく、ICUの環境設計が抱える構造課題です。',
  challengeBody: '昼夜の区別が曖昧な照明、断続的な騒音、緊張を高めやすい空気感は、患者の回復を妨げやすく、スタッフの対応も複雑にします。KOMOREBIは、こうした刺激を個別に弱めるのではなく、時間帯と状態に応じてまとめて再設計することで、せん妄予防とケア負荷の両立を狙います。',
  cases: [
    {
      image: '/static/komorebi.jpeg',
      title: '光環境',
      desc: '日中は覚醒を支える明るさを、夜間は休息を邪魔しない静かな照度をつくり、時間の流れを身体に伝えます。',
      tags: ['照度制御', '昼夜リズム']
    },
    {
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=85&auto=format&fit=crop',
      title: '音環境',
      desc: '機械音や突発音の印象を弱め、会話・アラート・静寂のバランスをととのえて、過緊張を起こしにくい音場にします。',
      tags: ['音環境設計', '自動制御']
    },
    {
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=85&auto=format&fit=crop',
      title: '香り・気流',
      desc: '香りの出し方と空気の流れをまとめて扱い、身体感覚の安定と不快感の低減を両立します。',
      tags: ['香り設計', '気流制御']
    }
  ],
  records: [
    { title: '試験導入の前提を整理', desc: '電源、設置スペース、運用フローを先に確認し、既存病棟に無理なく入るかたちから始めます。' },
    { title: '臨床での検証観点を設計', desc: '導入前後の変化を、せん妄リスク、睡眠の質、スタッフ負荷の3軸で追えるように設計します。' },
    { title: '共同研究・継続運用へつなぐ', desc: '試験導入の結果をもとに、院内運用の更新や研究計画に接続できるように整理します。' }
  ]
}
