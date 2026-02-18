import { Hono } from 'hono'
import { handle } from '@hono/node-server/vercel'

const app = new Hono().basePath('/api')

// Works data
const worksData = [
  { id: 1, title: 'ORGATEC TOKYO 2025', client: 'コクヨ株式会社', category: 'exhibition', tags: ['#BtoB', '#展示会/学会出展', '#受賞作品'], featured: true, year: '2025' },
  { id: 2, title: 'In the world tree', client: '株式会社カナデビア', category: 'store', tags: ['#BtoC', '#店舗/ウィンドウディスプレイ'], featured: false, year: '2025' },
  { id: 3, title: 'JAPAN MOBILITY SHOW 2025', client: '日本自動車工業会', category: 'exhibition', tags: ['#BtoC', '#展示会/学会出展'], featured: false, year: '2025' },
  { id: 4, title: 'Star Wars Celebration JAPAN 2025', client: '株式会社オーディオテクニカ', category: 'exhibition', tags: ['#BtoC', '#展示会/学会出展', '#デジタルコンテンツ'], featured: false, year: '2025' },
  { id: 5, title: "Dewar's 12年 DISCOVER YOUR HIGHBALL", client: 'バカルディ ジャパン株式会社', category: 'event', tags: ['#BtoC', '#イベントプロモーション'], featured: false, year: '2024' },
  { id: 6, title: 'Hakuten Permanent Showroom', client: 'パナソニック株式会社', category: 'showroom', tags: ['#BtoB', '#ショールーム'], featured: false, year: '2024' }
]

const newsData = [
  { date: '2026.02.14', category: 'News', title: '博展グループ、2025年12月期連結決算発表（売上高188億円）' },
  { date: '2026.01.22', category: 'Award', title: 'ORGATEC TOKYO 2025にてグランプリをはじめとする史上初のダブル受賞を達成' },
  { date: '2025.12.10', category: 'Event', title: '博展の1年間のクリエイティブの集大成「Hakuten Open Studio 2025」を開催' },
  { date: '2025.04.13', category: 'Project', title: '大阪・関西万博（EXPO2025）「未来の都市」パビリオン、4月13日より出展開始' },
  { date: '2025.03.19', category: 'Press', title: '博展・デジタルエクスペリエンス、AIを活用した展示会効果測定サービスを新たに開始' }
]

app.get('/works', (c) => {
  const category = c.req.query('category')
  const data = category && category !== 'all'
    ? worksData.filter(w => w.category === category)
    : worksData
  return c.json(data)
})

app.get('/news', (c) => c.json(newsData))

export default handle(app)
