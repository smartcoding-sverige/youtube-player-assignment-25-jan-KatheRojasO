import React, { useEffect } from "react";
import { useState } from 'react';
import FavoriteFunction from "./FavoriteFunction";

function VideoListItem(props: { name: string; videoId: string; }){
    const video = props.name;
    const videoId = props.videoId;

    const [favorite, setFavorite]= useState(false);

    const readFavorite = () => {
        
        
        var localStorageState = (localStorage.getItem(videoId) === "true");
        
        if (localStorageState == null){
            localStorageState = false;
        }
        setFavorite(localStorageState === true)
    }
    
    const changeToFavorite = () => {
        setFavorite ((previousIcon) => {
            return !previousIcon;
        })

        localStorage.setItem(videoId, (!favorite).toString());
    }

    useEffect(() => {
        readFavorite();
    },[]);

    return (

            <li>
                {video}
                <FavoriteFunction favorite={favorite} changeToFavorite={changeToFavorite}/>
                
            </li>
    )

}

export default VideoListItem;
