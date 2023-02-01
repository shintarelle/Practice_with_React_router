import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ulStyle = { listStyle: "none" };

export default function MainPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function getData() {
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setUsers(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
    getData()
  }, []);

  if (error) {
    return <div>Error...: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="list-users">
          <h1>Main page</h1>
          <ul>
            {users.map(user => {
            return (
              <li key={user.id} style={ulStyle} >{user.name} <Link key={user.id} to={`/users/${user.id}`}><button>Albums</button></Link></li>
              )
            })}
          </ul>
        </div>
      </>
    );
  }
}
