import fastify from 'fastify'
import { knexConnection } from './database'

const app = fastify()

app.get('/hello', async () => {
  const tables = await knexConnection('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
