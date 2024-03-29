import { gql} from "apollo-server";
export const typeDefs = gql `
    # User data returns an abject containing all the information for a user and thier homeworlds which is also an object.
    type User {
        # User name: String
        name: String
        # User Gender
        gender: String
        height: String
        mass: String
        # Homeworld object contauns information about users' planet { name, population, species and many more}
        homeworld: homeworld
    }

    type homeworld {
        name: String
        population: String
        species: String
    }
    type ReturnData{
        # Wraps User data as returnd from Swapi REST API.
        results:[User]
        count: Int
        next: String
        previous: String
    }
    type Query {
        Users: ReturnData
        findByPage(page: String): ReturnData
        specificUser(name: String): ReturnData
    }`
