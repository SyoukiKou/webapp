import type { ServiceDetailPage } from './types.js'

export const welfarePage: ServiceDetailPage = {
  slug: 'welfare',
  cardTitle: '高齢者施設への出張演奏',
  cardDescription: '入居者様の情緒安定と会話のきっかけづくりを目的に、施設運営に合わせた訪問演奏を実施します。',
  cardImage: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=80&auto=format&fit=crop',
  cardTags: ['高齢者施設', '回想療法', '情緒安定'],
  pageTitle: '高齢者施設×芸術',
  description: '福祉現場に芸術体験を導入し、入居者様とスタッフ双方の心の健康を支援。',
  heroImage: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1920&q=85&auto=format&fit=crop',
  heroLead: '入居者様とスタッフのウェルビーイングを同時に支える。',
  introTitle: '福祉現場に寄り添う、体験型ウェルビーイングプログラム。',
  introBody: '高齢者施設×芸術では、生演奏と参加型ワークショップを通じて、入居者様の情緒安定や回想の活性化を促進します。同時に、ケアを支えるスタッフの心理的負荷の軽減にもアプローチします。',
  challengeTitle: 'QOL向上と現場ケアの持続性を両立する。',
  challengeBody: '福祉現場では、入居者様の孤独感や認知機能低下への対応に加え、スタッフのバーンアウト予防が重要です。芸術体験を日常ケアに組み込むことで、施設全体の雰囲気とケア品質の向上を目指します。',
  cases: [
    {
      image: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?w=1200&q=80&auto=format&fit=crop',
      title: '入居者様のQOL向上',
      desc: '音楽体験を通じて、感情表出や発語の増加、回想の活性化を支援します。',
      tags: ['回想療法', '情緒安定', '日常活性']
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80&auto=format&fit=crop',
      title: 'ケアスタッフのメンタルケア',
      desc: '業務の合間に心身を整える機会を提供し、レジリエンス強化を後押しします。',
      tags: ['離職防止', 'バーンアウト対策', '職場改善']
    },
    {
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop',
      title: '施設内コミュニケーション活性化',
      desc: '入居者様・スタッフ・ご家族をつなぐ共通体験として、会話のきっかけを創出します。',
      tags: ['共感形成', '家族連携', '施設価値向上']
    }
  ],
  records: [
    { title: '高齢者福祉施設', desc: 'ボランティア演奏および参加型ワークショップを実施' },
    { title: '医療機関', desc: '心身ケアを目的とした音楽体験プログラムを実施' }
  ]
}