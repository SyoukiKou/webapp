import type { ServiceDetailPage } from './types.js'

export const reportingPage: ServiceDetailPage = {
  slug: 'reporting',
  cardTitle: '効果検証・レポーティング',
  cardDescription: '実施目的に応じた評価観点を整理し、導入効果を可視化するレポート作成と改善提案を行います。',
  cardImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
  cardTags: ['効果検証', 'レポート', '改善提案'],
  pageTitle: '効果検証・レポーティング',
  description: '芸術体験施策の効果を可視化し、継続判断と改善実行につなげる分析支援。',
  heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85&auto=format&fit=crop',
  heroLead: '体験価値を、意思決定できるデータへ変える。',
  introTitle: '施策の成果を、再現可能な指標で確認する。',
  introBody: '効果検証・レポーティングでは、施策の目的に応じた評価指標を設計し、定性・定量の両面から結果を分析します。単なる実施報告ではなく、次の改善アクションにつながる実践的な示唆を提供します。',
  challengeTitle: '続けるべき施策かを、根拠を持って判断する。',
  challengeBody: '体験施策は成果が見えづらく、継続判断が難しいことがあります。評価フレームを先に設計することで、実施後の振り返りを構造化し、関係者の合意形成をスムーズにします。',
  cases: [
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop',
      title: '施策KPI設計',
      desc: '目的に沿った評価観点を整理し、実施前に測定設計を行います。',
      tags: ['KPI設計', '評価設計', '事前設計']
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
      title: '実施後の分析レポート',
      desc: 'アンケート・行動観察・運用ログを統合し、改善点を明確化します。',
      tags: ['定量分析', '定性分析', 'レポート']
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop',
      title: '改善提案ワークショップ',
      desc: '結果共有だけでなく、次回施策に向けた実行計画まで伴走します。',
      tags: ['改善提案', '合意形成', '伴走支援']
    }
  ],
  records: [
    { title: '企業向け導入検証', desc: '実施前後比較による効果測定レポートを作成' },
    { title: '継続運用支援', desc: '四半期ごとの振り返りと改善計画の策定を実施' }
  ]
}
