import type { ServiceDetailPage } from './types.js'

export const otomoPage: ServiceDetailPage = {
  slug: 'otomo',
  cardTitle: 'otomo',
  cardDescription: '音楽を続けながら働きたい人のために、パラレルキャリアと進路選択を一緒に整理するキャリア相談サービスです。',
  cardImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80&auto=format&fit=crop',
  cardTags: ['キャリア相談', '音楽と仕事', 'パラレルキャリア'],
  pageTitle: 'otomo',
  description: '音楽を続けながら働きたい人のためのキャリア相談サービス。パラレルキャリアの実践者と一緒に、進路や働き方を整理します。',
  heroImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=85&auto=format&fit=crop',
  heroLead: '好きなことを諦めずに、仕事と両立する道を一緒に考える。',
  introTitle: '音楽を続けながら、現実的に働くための選択肢を整理する。',
  introBody: 'otomo は、音楽を学んできた人がキャリアに迷ったときに、進路や働き方を整理するための相談サービスです。就職の悩み、時間の使い方、強みの言語化、生活との両立まで、実践者の視点で具体的に考えます。',
  challengeTitle: '「音楽を続ける」か「仕事をする」か、の二択にしない。',
  challengeBody: '音楽の先生には就職のことを聞きづらく、一般的な就活支援では気持ちが伝わりにくい。otomo は、そのあいだにある迷いをほどきながら、あなたらしい第三の道を一緒に探します。',
  cases: [
    {
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200&q=80&auto=format&fit=crop',
      title: '進路整理とキャリア設計',
      desc: 'やりたいこと、優先したいこと、働き方の条件を整理し、現実的な選択肢へ落とし込みます。',
      tags: ['進路相談', '人生設計', '意思決定']
    },
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop',
      title: '強みの言語化',
      desc: '音楽活動で培った継続力や集中力、対話力を、企業に伝わる言葉へ翻訳します。',
      tags: ['自己理解', '就活支援', '言語化']
    },
    {
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80&auto=format&fit=crop',
      title: '両立プランの設計',
      desc: '楽器、練習環境、生活リズムに合わせて、無理なく続けられる具体策を一緒に組み立てます。',
      tags: ['パラレルキャリア', '実践支援', '両立設計']
    }
  ],
  records: [
    { title: '60分のキャリア相談', desc: 'カフェ対面またはオンラインで、両立の進め方を整理' },
    { title: '実践者視点の伴走', desc: '音楽活動と仕事を両立する視点から、具体的な選択肢を提案' }
  ]
}
