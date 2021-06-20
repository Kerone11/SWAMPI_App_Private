require('dotenv').config();
const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('./schema');
const SwaPI = require('./datasources');
const resolvers = require('./resolvers');
const cors = require('cors');
const express = require('express');



const server = new ApolloServer({typeDefs,resolvers,datasources: () => { 
  return {
    swAPI: new SwAPI()
  }; 
  }
  }); 
const app = express(); 
var corsOptions = { 
  origin: process.env.FRONTEND_URL,
  creditials: true
};
app.use(cors(corsOptions)); 

server.applyMiddleware({
  app, 
  path: '/',
  cors:true
});

  app.listen({port: 4000}, () => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `)}); 
  