"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const baseURL = 'https://swapi.dev/api/people';
const resolver = () => {
    return {
        findByPage: ({ page }) => { return node_fetch_1.default(`${baseURL}?page=${page}`).then(res => res.json()); },
        specificUser: ({ name }) => { return node_fetch_1.default(`${baseURL}?search=${name}`).then(response => response.json()); },
        Users: () => { return node_fetch_1.default(`${baseURL}`).then(response => response.json()); }
    };
};
exports.resolver = resolver;
//# sourceMappingURL=resolvers.js.map