import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Users() {
  const { users, setUsers } = useState([{id: '1', name: 'Max'}]);

  // useEffect( () => {
  //   async function showUsers() {
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //       const json = await response.json();
  //       const data = JSON.parse(json);
  //       setUsers(data);
  //       // .then(res => res.json)
  //       // .then(data => setUsers(data))
  //       // console.log(response);
  //     } catch (e) {
  //       return alert(e.message);
  //     }
  //   }
  //   showUsers();
  // }, []);

  return (
    <>
      <h1>List:</h1>
      {/* {users.map(user => {
        return (<Link key={user.id} to={`/user/${user.id}`}>
          <li>{ user.name }</li>
        </Link>)
      })} */}
    </>
  )
}
