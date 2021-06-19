const {gql} = require('apollo-server');
const { ApolloClient } = require('apollo-client');



const typeDefs = gql`
type Query{ 
    People: String
}

type People{
    name: String
    height: String
    mass: String 
    gender: String 
    homeworld: String
}
`;

module.exports = typeDefs;