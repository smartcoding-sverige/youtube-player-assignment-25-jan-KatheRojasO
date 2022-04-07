import React, { useEffect } from "react";
import { useState } from 'react';
import FavoriteFunction from "./FavoriteFunction";
import jwt_decode from 'jwt-decode';

interface JwtPayload {
    username: string
}

function VideoListItem(props: { name: string; videoId: string; }){
    const video = props.name;
    const videoId = props.videoId;

    const [favorite, setFavorite]= useState(false);

    const readFavorite = async () => {
        try {
            const decodedToken = jwt_decode<JwtPayload>(sessionStorage.getItem('token')  || "");
            const user = decodedToken.username

            const response = await fetch('http://localhost:8080/favorites', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({user, videoId}),
            });
            if (response.status === 200) {
                setFavorite(true);
            } else {
                setFavorite(false);
            }
        } catch (err) {
            console.log(err);
        };
    };

    const storeFavorite = async ( user:String , videoId:String ) => {
        try {
          const response = await fetch('http://localhost:8080/favorites/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user, videoId}),
          });

        } catch (err) {
          console.log(err);
        }
      };

      const removeFavorite = async ( user:String , videoId:String ) => {
        try {
          const response = await fetch('http://localhost:8080/favorites', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user, videoId}),
          });

        } catch (err) {
          console.log(err);
        }
      };
    
    const changeToFavorite = () => {
        setFavorite ((previousIcon) => {
            return !previousIcon;
        })

        const decodedToken = jwt_decode<JwtPayload>(sessionStorage.getItem('token')  || "");
        const user = decodedToken.username
        if (!favorite){
            storeFavorite(user, videoId);
        } else {
            removeFavorite(user, videoId);
        }
    }


    useEffect(() => {
        readFavorite();
    });

    return (

            <li>
                {video}
                <FavoriteFunction favorite={favorite} changeToFavorite={changeToFavorite}/>
                
            </li>
    )

}

export default VideoListItem;
