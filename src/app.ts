import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(cookie)

// this rules is applied for all application routes
app.addHook('preHandler', async (request) => {
  console.log(`[${request.method}], [${request.url}]`)
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
