const { RESTDataSource} = require('apollo-datasource-rest'); 

class swAPI extends RESTDataSource {
  constructor() {
    super();
    //this is the base url for our API call, if you had more than one async query 
    //below this base would be the point where the queries diverge
    this.baseURL = 'https://swapi.dev/api/';
  }
  getPeople(name) {
    // Send a GET request to the specified endpoint
    return this.get(`people/${name}`);
  }

}



module.exports = swAPI; 