export type ServiceDetailPage = {
  slug: string
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
