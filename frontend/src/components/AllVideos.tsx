import React from 'react';
import '../stylesheets/allVideos.css';
import VideoListItem from './VideoListItem';


function AllVideos(props: { videos: any[]; }) {

  return (
    <ul className='videoList'>
      {props.videos.map((video) => {
        return (
          <VideoListItem name={video.id.name} videoId={video.id.videoId} />
        )
      })
      }
      
    </ul>
    
  )
}

export default AllVideos;
