import React from "react";
import "../stylesheets/videos.css";
import VideoListItem from "./VideoListItem";

function Videos(props: { videos: any[] }) {

  /*
  This function videos is receiving a list of videos. A video is an object that has name and videoId.
  The function creates a videoListItem per video and passes the video name and videoId to the videoListItem.
  */

  return (
    <ul className="videoList">
      {props.videos.map((video) => {
        return <VideoListItem name={video.name} videoId={video.videoId} />;
      })}
    </ul>
  );
}

export default Videos;
