import React from "react";
import './VideoListItem.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


function VideoListItem(props){
    const video = props.name;
    const videoId = props.videoId;

    return (

            <li>
                <a href={`https://www.youtube.com/watch?v=${videoId}`}> {video}</a>
                <FavoriteBorderIcon className="favoriteIcon" onClick={FavoriteIcon}/>
            </li>
    )

}

export default VideoListItem;