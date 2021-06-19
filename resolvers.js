const resolvers = {
    Query: {
        People: ({name}, _, {datasources}) => {
            return datasources.swAPI.getPeople(name); 
        }
    }

};

module.exports = resolvers; 
