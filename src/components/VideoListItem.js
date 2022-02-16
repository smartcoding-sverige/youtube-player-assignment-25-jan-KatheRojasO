import React, { useEffect } from "react";
import { useState } from 'react';
import FavoriteFunction from "./FavoriteFunction";

function VideoListItem(props){
    const video = props.name;
    const videoId = props.videoId;

    const [favorite, setFavorite]= useState(false);

    const readFavorite = () => {
        
        var localStorageState = localStorage.getItem(videoId);
        
        if (localStorageState == null){
            localStorageState = false;
        }
        setFavorite(localStorageState === "true")
    }
    
    const changeToFavorite = () => {
        setFavorite ((previousIcon) => {
            return !previousIcon;
        })

        localStorage.setItem(videoId, !favorite);
    }

    useEffect(() => {
        readFavorite();
    },[]);

    return (

            <li>
                <a href={`https://www.youtube.com/watch?v=${videoId}`}> {video}</a>
                <FavoriteFunction favorite={favorite} changeToFavorite={changeToFavorite}/>
                
            </li>
    )

}

export default VideoListItem;
