const resolver = {
    Users: () => {return fetch(`${baseURL}`).then(response => response.json())},
    specificUser: ({name}) => {return fetch(`${baseURL}?search=${name}`).then(response=>response.json())},
    findByPage: ({page}) => {return fetch(`${baseURL}?page=${page}`).then(res=>res.json())} }

module.exports = resolvers; 
