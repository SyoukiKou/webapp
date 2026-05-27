export type CaseIndustry = 'medical' | 'it' | 'manufacturing' | 'other'
export type CasePurpose = 'mental-care' | 'team-building' | 'space-design' | 'new-business'

export type CaseStudy = {
  id: number
  slug: string
  clientName?: string
  clientLogo?: string | null
  anonymous?: boolean
  industry: CaseIndustry
  size?: string
  title: string
  solution: string
  summary: string
  publishedAt: string
  heroImg?: string
  intro?: string
  before?: string[]
  action?: string[]
  evidence?: {
    quantitative?: string[]
    qualitative?: string[]
    charts?: Array<{ label: string; url?: string }>
  }
  interviews?: Array<{ name?: string; role?: string; quote: string; img?: string | null }>
  outcomes?: string[]
  download?: { pdf?: string | null }
}

export const casesData: CaseStudy[] = [
  {
    id: 1,
    slug: 'komorebi-icu-pilot',
    clientName: '関東総合病院',
    clientLogo: null,
    anonymous: true,
    industry: 'medical',
    size: '病床数 520床',
    title: 'ICUでのせん妄リスク低減をめざすKOMOREBIのパイロット導入',
    solution: 'KOMOREBI（環境・生体連動空間）',
    summary: '概日リズムを整える照明・音・嗅覚制御を導入し、せん妄発症率と鎮静薬使用量の低減を目指した実証実験。',
    publishedAt: '2026-03-10',
    heroImg: '/static/komorebi.jpeg',
    intro: 'ICU看護の負担と患者の予後改善を目的に、KOMOREBIを1病室で8週間導入したパイロット事例です。',
    before: [
      '夜間に覚醒・興奮する患者が多く、鎮静薬に頼る運用が常態化していた。',
      '照明・音環境が病室ごとにまちまちで概日リズムが乱れていた。'
    ],
    action: [
      'KOMOREBIを1ベッドルームに設置し、概日リズムに合わせた光・音・嗅覚プロファイルを自動運用。',
      '看護師向けの運用ワークフローと簡易ダッシュボードを提供し、介入時の運用負荷を最小化。'
    ],
    evidence: {
      quantitative: [
        '8週間の導入で、せん妄発症率が導入前の12%→7%に低下（相対減少 41%）',
        '鎮静薬の平均使用時間が週当たり15%短縮'
      ],
      qualitative: [
        '看護師からは「観察しやすくなった」「夜間対応が楽になった」との声',
        '家族からは「穏やかな時間が増えた」とのフィードバックあり'
      ],
      charts: [
        { label: 'せん妄発症率の推移' },
        { label: '鎮静薬使用時間（平均）' }
      ]
    },
    interviews: [
      { name: '看護師長', role: 'ICU 看護師長', quote: '導入後は夜間の急変対応が減り、スタッフの負担が軽減しました。', img: '/static/miu.webp' }
    ],
    outcomes: [
      'せん妄発症率の改善',
      '看護師の夜間負担の軽減',
      '病院内での実証継続意欲の向上'
    ],
    download: { pdf: null }
  },
  {
    id: 2,
    slug: 'rae-it-company-pilot',
    clientName: '従業員500名規模のIT企業',
    clientLogo: null,
    anonymous: true,
    industry: 'it',
    size: '従業員 約500名',
    title: 'リモート混在チームでの心理的安全性向上をめざしたRAE導入',
    solution: 'Regulative Art Experience (RAE)',
    summary: '分断化したハイブリッドチーム向けにRAEを導入し、対話と体験を通じた関係性の再構築を行った事例。',
    publishedAt: '2025-11-02',
    heroImg: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop',
    intro: 'ハイブリッド勤務の増加でチーム内の一体感が低下、離職兆候が出ていた部署における半年間のプログラムです。',
    before: [
      '一部メンバーの疎外感、会議での発言量の偏りが顕著。',
      '従来型の研修では一過性の満足にとどまっていた。'
    ],
    action: [
      '月1回、計6回のRAEセッション（各回20名規模）を実施。即興演奏→小グループ対話→振り返りをセット。',
      '参加者の変化をトラッキングするため、簡易アンケートと行動指標（会議での発言回数）を測定。'
    ],
    evidence: {
      quantitative: [
        '6回実施後、参加者の自己申告ストレスが平均で18%低下',
        '対話参加率（会議での発言）が対象チームで平均25%増加'
      ],
      qualitative: [
        'マネージャー: 「雑談が自然に増え、課題解決の速度が上がった」',
        '参加者: 「自分の意見を言いやすくなった」との声多数'
      ],
      charts: [{ label: '自己申告ストレス推移' }]
    },
    interviews: [
      { name: '人事担当', role: '人事部 担当', quote: '継続的なセッションが効果的で、単発では得られない変化が出ました。', img: null }
    ],
    outcomes: [
      'ストレス低下と発言機会の増加',
      '離職リスクの低減（定性的報告）',
      'HRと連携した継続プランの設計'
    ],
    download: { pdf: null }
  },
  {
    id: 3,
    slug: 'creative-bar-community-event',
    clientName: '地域コミュニティセンター',
    clientLogo: null,
    anonymous: false,
    industry: 'other',
    size: '参加者 50名',
    title: 'Creative Bar を使った地域参加型イベントでの関係性創出',
    solution: 'Creative Bar',
    summary: '地域の交流を目的にCreative Barを開催。短時間ワークショップで地域交流と学びの動線を作った事例。',
    publishedAt: '2025-06-18',
    heroImg: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80&auto=format&fit=crop',
    intro: '地域住民の参加を促し、継続的なコミュニティ形成につなげるためにCreative Barを企画・運営。',
    before: [
      '高齢化と地域の孤立が進んでおり、交流の場が求められていた。'
    ],
    action: [
      '短時間（90分）×3回のシリーズでCreative Barを実施。音楽×短歌×対話のプログラムを提供。',
      '参加者の満足度を回収し、次回開催の調整に活用。'
    ],
    evidence: {
      quantitative: [
        '参加者満足度 4.6/5（アンケート）',
        '参加継続率 70%（シリーズ参加）'
      ],
      qualitative: [
        '参加者: 「普段話さない近所の人と話せるようになった」',
        '主催者: 「初回での雰囲気づくりが重要だった」'
      ],
      charts: []
    },
    interviews: [
      { name: '地域コーディネーター', role: '主催者', quote: '短い時間で深い対話が生まれ、次の活動につながりました。', img: '/static/otuka.jpg' }
    ],
    outcomes: [
      '地域の交流と継続参加の形成',
      '次回開催の公募につながる運営モデルの確立'
    ],
    download: { pdf: null }
  }
]
