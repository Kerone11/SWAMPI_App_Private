"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCHEMA_Diff = void 0;
const graphql_1 = require("graphql");
exports.SCHEMA_Diff = graphql_1.buildSchema(`
     type Query{
         Users: ReturnData
         specificUser(name: String): ReturnData
         findByPage(page: Int): ReturnData
         }
    type ReturnData {
        count: Int
        next: String
        previous: String
        results: [Users]
    }
    type Users{
        name: String 
        height: String
        mass: String 
        gender: String 
        homeworld: String 
    }`);
//# sourceMappingURL=schema.js.map