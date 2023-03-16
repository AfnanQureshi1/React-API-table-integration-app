import { useState, useEffect } from "react";

//The useState hook is used to define a state variable named users 
//which will hold the data fetched from the API. 
//The useEffect hook is used to fetch the data from the API when the component mounts.

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") //data is fetched using the fetch function and converted to JSON using the json method. 


      .then((response) => response.json())
      .then((data) => setUsers(data)); //The resulting data is then set to the users state variable using the setUsers function.
  }, []);

  return (
    <div>
      The fetched data is then displayed in a table format using the map function to loop through the users
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
