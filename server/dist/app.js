"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const app = express_1.default();
const externalSchema = schema_1.SCHEMA_Diff;
app.use('/test', express_graphql_1.graphqlHTTP({ schema: externalSchema, rootValue: resolvers_1.resolver(), graphiql: true }));
app.listen(4000);
//# sourceMappingURL=app.js.map