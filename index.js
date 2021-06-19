const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const SwaPI = require('./datasources');
const resolvers = require('./resolvers');

const server = new ApolloServer({typeDefs,resolvers,datasources: () => { 
  return {
    swAPI: new SwAPI()
  }; 
  } 
}); 

  server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `)}); 
  