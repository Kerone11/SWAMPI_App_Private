const {gql} = require('apollo-server');
const { ApolloClient } = require('apollo-client');



const typeDefs = gql`
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
    }`;

module.exports = typeDefs;