import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';

const ulStyle = { listStyle: "none" };

export default function Photo(userID) {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  let photoID = useParams();
  console.log('photoID', photoID.albumId);
  const location = useLocation();
  // console.log('location', location)

    useEffect(() => {
    async function getData() {
      await fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${photoID.albumId}`)
        .then(response => response.json())
        .then(
          (result) => {
            // console.log('list photo', result)
            setIsLoaded(true);
            setPhotos(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
    getData()
    }, []);

  return (
    <>
      <div>List of photos </div>
      <div className="user-photo-list">
        {photos.map(photo => {
          console.log("photo.id", photo.id)
          return (
            <img className="photo" src={photo.thumbnailUrl} alt="" ></img>
          )
        })}
      </div >
    </>
    );

}
