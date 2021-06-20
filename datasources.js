const { RESTDataSource} = require('apollo-datasource-rest'); 
const BASE_URL = 'https://swapi.dev/api/';

class swAPI extends RESTDataSource {
  constructor() {
    super();
    //this is the base url for our API call, if you had more than one async query 
    //below this base would be the point where the queries diverge
    this.baseURL = 'https://swapi.dev/api/';
  }
 
  getPeople(name) {
    // Send a GET request to the specified endpoint
    return this.fetch(`people/${name}`);
  }

  getPeopleGraphQL(relativeURL){
    return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json()); 
  }

  fetchPeopleGraphQL() {
  return fetchResponseByURL('/people/').then(json => json.people);
}
  getAllPeople(){
    return this.fetch('https://swapi.dev/api/people/'); 
  }

}



module.exports = swAPI; 