const resolvers = {
    Query: {
        people: ({name}, _, {datasources}) => {
            return datasources.swAPI.getPeople(name); 
        }, 
        allPeople: (_, __, {datasources}) =>{
            return datasources.swAPI.getAllPeople(); 
        }
    }

};

module.exports = resolvers; 
