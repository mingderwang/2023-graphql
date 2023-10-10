const Fastify = require("fastify")
const mercurius = require("mercurius")

const schema = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: async (_, { name }) => `hello ${name || "world"}`,
  },
}

const app = Fastify()
app.register(mercurius, {
  schema,
  resolvers,
})

app.listen(3000)
