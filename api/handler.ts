import { handle } from '@hono/node-server/vercel'
import app from '../src/index-node.js'

export default handle(app)
