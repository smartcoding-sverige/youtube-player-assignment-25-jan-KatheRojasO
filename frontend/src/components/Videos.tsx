import React from "react";
import "../stylesheets/videos.css";
import VideoListItem from "./VideoListItem";

function Videos(props: { videos: any[] }) {

  return (
    <ul className="videoList">
      {props.videos.map((video) => {
        return <VideoListItem name={video.name} videoId={video.videoId} />;
      })}
    </ul>
  );
}

export default Videos;
