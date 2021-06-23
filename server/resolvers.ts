import {graphqlHTTP} from 'express-graphql';
import fetch from 'node-fetch'; 


const baseURL = 'https://swapi.dev/api/people';

export const resolver = () => { return {
    findByPage: ({page}) => {return fetch(`${baseURL}?page=${page}`).then(res=>res.json())},
   specificUser: ({name}) => {return fetch(`${baseURL}?search=${name}`).then(response=>response.json())},
   Users: () => {return fetch(`${baseURL}`).then(response => response.json())}

}
   
    
    
    }