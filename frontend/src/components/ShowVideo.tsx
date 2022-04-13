import React from "react";
import "../stylesheets/showVideo.css";

const ShowVideo = (props: { video:any; }) => {

    if(props.video == null){
        return <div className="showVideo"></div>
    }
    
    const videoId = props.video.videoId;

    return <iframe 
        width="500" height="300" 
        src={`https://www.youtube.com/embed/${videoId}`} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>     
}

export default ShowVideo;