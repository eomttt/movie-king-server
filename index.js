const { GraphQLServer } = require('graphql-yoga');
const { resolvers } = require('./graphql/resolvers');

console.log('Process node version', process.version);

const PORT = process.env.PORT;

const server = new GraphQLServer({
    typeDefs: "graphql/scheme.graphql",
    resolvers 
});

const options = {
    port: PORT || 4000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
}

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)
