const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const fetch = require('node-fetch'); 
const typeDefs = require('./schema'); 
const resolvers = require('./resolvers'); 
const baseURL = 'https://swapi.dev/api/people';
const app = express(); 
app.use('/test', graphqlHTTP({schema: typeDefs, rootValue: resolvers, graphiql: true}))
app.listen(4000)