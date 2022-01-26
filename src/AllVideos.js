import React from 'react';
import './AllVideos.css';
import VideoListItem from './VideoListItem';


function AllVideos(props) {

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem name={video.id.name} videoId={video.id.videoId} />
    )
  })

  return (
    <ul className='videoList'>
      {videoItems}
    </ul>
    
  )
}

export default AllVideos;
