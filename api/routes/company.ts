import { Hono } from 'hono'

const app = new Hono()

app.get('/company', (c) => c.redirect('/about', 301))

export default app
