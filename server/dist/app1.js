"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_graphql_1 = require("express-graphql");
var schema_1 = require("./schema");
var resolvers_1 = require("./resolvers");
var app = express_1.default();
var externalSchema = schema_1.SCHEMA_Diff;
app.use('/test', express_graphql_1.graphqlHTTP({ schema: externalSchema, rootValue: resolvers_1.resolver(), graphiql: true }));
app.listen(4000);
//# sourceMappingURL=app1.js.map