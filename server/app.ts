import {typeDefs} from './schema';
import { resolvers} from './resolvers';

import {ApolloServer} from "apollo-server";

const server = new ApolloServer({
    cors: {credentials: true, origin: '*'},
    typeDefs,
    resolvers
})

server.listen().then(({url})  => console.log('Swapi Server Running on ', url))
