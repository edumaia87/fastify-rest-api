import { FastifyInstance } from 'fastify'
import { knexConnection } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transaction = await knexConnection('transactions')
      .where('amount', 1000)
      .select('*')

    return transaction
  })
}
