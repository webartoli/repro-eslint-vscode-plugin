import _ from 'lodash'
import axios from 'axios'

export class Users {
  static async all() {
    const resp = await axios.get('/users.json')
    return resp.data
  }
}

export const sum = _.add

import Fastify, { RouteShorthandOptions } from 'fastify'

const server = Fastify()

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
}
server.get('/api/ping', opts, async () => {
  return { pong: 'it worked!' }
})

const start = async () => {
  try {
    await server.listen(process.env.PORT || 3000)

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port
    console.log(`Server listening on port ${port}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

void start()
