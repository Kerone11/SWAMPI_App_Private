import fetch from "node-fetch";
import { ReturnData } from "./interfaces";

const baseURL = "https://swapi.dev/api/people";


export const resolvers =  {
    Query: {
        Users: ( ): ReturnData =>  fetch(baseURL).then((e) => e.json()),
        findByPage: (_,{page}, __, info): ReturnData =>  fetch(`${page}`).then((res) => res.json()),
        specificUser: (_,{name}, __, info): ReturnData => fetch(`${baseURL}?search=${name}`).then(res => res.json())
    },
    User: {
        homeworld: (user, __, info) => fetch(user.homeworld).then(u => u.json())
    }
}