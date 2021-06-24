import logo from './logo.svg';
import './App.css';
import {ApolloClient, 
  InMemoryCache, 
  gql, 
  useQuery, 
  ApolloProvider } from '@apollo/client'; 
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


const graphClient = new ApolloClient({
  uri: "http://localhost:4000/test",
  cache: new InMemoryCache()
});
  const allPeople_ = gql
    `
    query{
	Users
  {
    count
    next 
    results {
      name
      height
      mass
      gender
      homeworld
    }
  }
}
    `
  


function Weight() {
  const {loading, error, data} = useQuery(allPeople_)
if (loading) return  <p> loading </p>
if (error) return  <p> error </p>
 return <table> 
{

  data.Users.results.map((d)=>(
    <tr key = {d.name}>
      <td> {d.name} </td>
      <td> {d.mass} </td> 
       <td> {d.height} </td>
      <td> {d.gender} </td>
      <td> {d.homeworld} </td> 

    </tr>
    
  ))

}
 </table>

}



function Weight_() {
  const {loading, error, data} = useQuery(allPeople_)
if (loading) return  <p> loading </p>
if (error) return  <p> error </p>
 return
 <HashRouter>
  <table> 
  
  </table>  


  




 </HashRouter> 

}
function App() {
  return (
   <ApolloProvider client = {graphClient}>
    <div>
      <h1> 
        <Weight/> 
      </h1>
    </div>

   </ApolloProvider> 
  );
}

export default App;
