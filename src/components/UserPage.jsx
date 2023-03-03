import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import Photo from "./Photo";

const ulStyle = { listStyle: "none" };

export default function UserPage() {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const userID = useParams();

  useEffect(() => {
    async function getData() {
      await fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${userID.id}`)
        .then(response => response.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setAlbums(result);
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
        <div className="users-wrapper">
          <div className="user-albums">
            <h1>this is page of User <span>{userID.id}</span></h1>
            <ul>
              {albums.map(album => {
              return (
                <li key={album.id} style={ulStyle} >
                  {album.title}
                  <Link key={album.id} to={`/users/${userID.id}/${album.id}`}><button>Photo</button></Link>
                </li>
                )
              })}
            </ul>
            <Link to={`/`}><button>go to Main Page</button></Link>
          </div>
          <div className="user-photo">
            <Switch>
              <Route exact path={"/users/:id/:albumId"}>
                <Photo />
              </Route>
            </Switch>
          </div>
        </div>
      </>
    );
  }

}
