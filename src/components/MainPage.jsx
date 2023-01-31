import React from "react";
import { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Link,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";


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

  // const handleShowAlbums = (event) => {
  //   const id = event.target.id;
  //   console.log("event", event.target);
  //   <h3>Click</h3>
  // }

  if (error) {
    return <div>Error...: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <h1>Main page</h1>
        {/* <Router>
          <div className="users-wrapper">
            <div className="list-users">
              <h1>List of Users:</h1>
              <Link to={'/users'}> go to users</Link>
              <Link to={'/'}> go to mainpage</Link>
              <ul>
                {users.map(user => {
                console.log("user.id", user.id)
                return (
                  <li key={user.id} style={ulStyle} >{user.name} <Link key={user.id} to={`/users/${user.id}`}><button>Albums</button></Link></li>
                )
                })}
              </ul>
            </div>

            <div className="user-albums">
              <Switch>
              <Route exact path={"/users/:id"}>
                <h2>this is  user page</h2>
                <User />
              </Route>
              <Route exact path={"/users/3"}>
                <h2>this is 3th user page</h2>
                <Userrrr />
              </Route>
              <Route exact path={"/users"}>

                <h2>this is a users page</h2>
              </Route>
              <Route exact path={"/"}>
                <h2>this is a main page</h2>
              </Route>

              </Switch>
            </div>

            <div className="user-photo">
              <Route path="/users/:slug">
                <Photo />
              </Route>
              <Route path="/blog/:slug">
                <Photo />
              </Route>
            </div>
          </div>
        </Router> */}
      </>
    );
  }

}

function User() {
  const mutch = useRouteMatch(`/user/:id`);
  console.log("mutch", mutch);
  return (<Link to="/user/1427864817">User1</Link>)

}
// function AboutMe() {
//   const match = useRouteMatch ("/about/:id");
//   console.log('id aboutMe:', match);
//   return (
//     <Link to={"/about/asdfg"}>AboutME</Link>
//   )
// }
function Photo() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

function BlogPost() {
  let match = useRouteMatch("/users/:id");
  console.log("match", match);
  // Do whatever you want with the match...
  return <div><p>blog  </p></div>;
}
