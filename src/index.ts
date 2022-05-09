import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import config from './config'

export const server = new ApolloServer({ schema })

server
  .listen({ host: config.HOST, port: config.PORT })
  .then(
    ({ url }) => console.log(`Server listing at ${url}`),
    () => console.error('Server could not be started')
  )
