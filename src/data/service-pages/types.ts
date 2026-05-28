export type ServiceDetailPage = {
  slug: string
  pageTemplate?: 'default' | 'training' | 'medical' | 'software'
  cardTitle: string
  cardDescription: string
  cardImage: string
  cardTags: string[]
  pageTitle: string
  description: string
  heroImage: string
  heroLead: string
  introTitle: string
  introBody: string
  challengeTitle: string
  challengeBody: string
  cases: Array<{ image: string; title: string; desc: string; tags: string[] }>
  records: Array<{ title: string; desc: string }>
}