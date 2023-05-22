import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(memoriesRoutes)

app.register(cors, {
  origin: true, // ['url']
})

app
  .listen({
    port: 3333,
    host: '192.168.0.13',
  })
  .then(() => {
    const serverUrl = `http://${process.env.HOST}:${process.env.PORT}`

    console.log(
      `Server running on PORT=${process.env.PORT} no HOST=${process.env.HOST} `,
    )
    console.log(`Acesse ${serverUrl}`)
    console.log = function () {
      window.open(serverUrl)
    }
  })
