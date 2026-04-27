import { Hono } from 'hono'
import { footer, pageHead, pageScripts } from '../../src/components/layout.js'

const app = new Hono()

app.get('/komorebi', (c) => {
  return c.redirect('/service/komorebi', 301)
})

export default app