import { handle } from '@hono/node-server/vercel'
import app from '../src/index-node'

export default handle(app)
