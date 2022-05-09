import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { schema } from './schema'
import config from './config'

export const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

server
  .listen({ host: config.HOST, port: config.PORT })
  .then(
    ({ url }) => console.log(`Server listing at ${url}`),
    () => console.error('Server could not be started')
  )
