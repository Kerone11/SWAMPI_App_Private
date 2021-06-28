"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const baseURL = "https://swapi.dev/api/people";
exports.resolvers = {
    Query: {
        Users: () => node_fetch_1.default(baseURL).then((e) => e.json()),
        findByPage: (_, { page }, __, info) => node_fetch_1.default(`${page}`).then((res) => res.json()),
        specificUser: (_, { name }, __, info) => node_fetch_1.default(`${baseURL}?search=${name}`).then(res => res.json())
    },
    User: {
        homeworld: (user, __, info) => node_fetch_1.default(user.homeworld).then(u => u.json())
    }
};
//# sourceMappingURL=resolvers.js.map