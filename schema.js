const {gql} = require('apollo-server');
const { ApolloClient } = require('apollo-client');



const typeDefs = gql`
type Query{ 
    people(name: String): [People!]!, 
    allPeople: [People!]!
}

type People{
    name: String!
    height: String!
    mass: String! 
    gender: String! 
    homeworld: String!
}
`;

module.exports = typeDefs;