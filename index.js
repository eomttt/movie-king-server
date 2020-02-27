const { GraphQLServer } = require('graphql-yoga');
const { resolvers } = require('./graphql/resolvers');

const server = new GraphQLServer({
    typeDefs: "graphql/scheme.graphql",
    resolvers 
})

server.start(() => console.log("Graphql Server Running"))