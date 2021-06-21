const fetch = require('node-fetch'); 
const baseURL = 'https://swapi.dev/api/people';

const resolvers = {
    Users: () => {return fetch(`${baseURL}`).then(response => response.json())},
    specificUser: ({name}) => {return fetch(`${baseURL}?search=${name}`).then(response=>response.json())},
    findByPage: ({page}) => {return fetch(`${baseURL}?page=${page}`).then(res=>res.json())} }

module.exports = resolvers; 
