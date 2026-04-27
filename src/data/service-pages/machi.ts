import type { ServiceDetailPage } from './types.js'

export const machiPage: ServiceDetailPage = {
  slug: 'machi',
  cardTitle: 'まちづくり×芸術',
  cardDescription: '都市空間に音楽体験を実装し、働く人と来街者の日常に心地よい余白を生み出す、街づくり連携プロジェクトです。',
  cardImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80&auto=format&fit=crop',
  cardTags: ['まちづくり', '都市ウェルビーイング', '地域連携'],
  pageTitle: 'まちづくり×芸術',
  description: '都市空間に芸術体験を実装し、街のウェルビーイングを高める取り組み。',
  heroImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=85&auto=format&fit=crop',
  heroLead: '都市に音の風景をデザインし、まちの価値を拡張する。',
  introTitle: 'サウンドスケープで、街の機能美に「ゆらぎ」をつくる。',
  introBody: 'まちづくり×芸術では、都市の歴史・空間・人の流れを読み解き、サウンドスケープを設計します。日常導線に自然に溶け込む体験をつくることで、街の印象と滞在価値を高めます。',
  challengeTitle: '効率性だけでは測れない、都市の情緒価値を可視化する。',
  challengeBody: '都市には利便性の向上と同時に、緊張や情報過多による感覚疲労が蓄積しやすい課題があります。芸術体験の導入は、街のホスピタリティと回遊性を高める有効なアプローチです。',
  cases: [
    {
      image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200&q=80&auto=format&fit=crop',
      title: '働く人のメンタルコンディショニング',
      desc: 'ビジネス街での演奏設計により、日中の緊張緩和と気分転換を支援します。',
      tags: ['オフィス街', '回復体験', '昼休み施策']
    },
    {
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80&auto=format&fit=crop',
      title: 'コミュニティ醸成',
      desc: '音楽を媒介に偶発的な対話を生み、街に緩やかなつながりを育てます。',
      tags: ['共創', '交流促進', '都市コミュニティ']
    },
    {
      image: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=1200&q=80&auto=format&fit=crop',
      title: 'エリアアイデンティティ構築',
      desc: 'その街固有の音体験をデザインし、情緒資産としてのブランド価値を高めます。',
      tags: ['街のブランド', '回遊促進', '観光価値']
    }
  ],
  records: [
    { title: 'Marunouchi Street Music 連携', desc: '大手町・丸の内・有楽町エリアでの継続的な活動' },
    { title: '都市開発団体との協働', desc: '街区イベント・社会実装プログラムの設計/運営' }
  ]
}