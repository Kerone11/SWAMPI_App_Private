import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import { buildSchema } from 'graphql'; 
import fetch from 'node-fetch'; 
import {SCHEMA_Diff} from './schema'; 
import {resolver} from './resolvers'; 

const app = express(); 
const externalSchema = SCHEMA_Diff; 
app.use('/test', graphqlHTTP({schema: externalSchema, rootValue: resolver(), graphiql: true}))
app.listen(3000)
