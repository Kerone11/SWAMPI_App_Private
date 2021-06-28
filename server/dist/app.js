"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const apollo_server_1 = require("apollo-server");
const server = new apollo_server_1.ApolloServer({
    cors: { credentials: true, origin: '*' },
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers
});
server.listen().then(({ url }) => console.log('Swapi Server Running on ', url));
//# sourceMappingURL=app.js.map