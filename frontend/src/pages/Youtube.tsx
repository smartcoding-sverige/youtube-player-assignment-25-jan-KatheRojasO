import React, { useEffect, useState }  from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Videos from '../components/Videos';
import Buttons from '../components/Buttons';
import ShowVideo from '../components/ShowVideo';


function Youtube() {
  //get videos from our API
  const [videoIds, setVideoIds] = useState<any[]>([]);
  
  const getVideos = async () => {
    const response = await fetch('http://localhost:8080/videos');
    const data = await response.json();
    setVideoIds(data);
  }

  // This shows the videos that I choose in the video component
  const [displayVideos, setDisplayVideos] = useState<any[]>([]);

  // This tell me which video to show, in this case, it always shows the first index (video)  
  const [videoIndex, setVideoIndex]  = useState<number>(0);

  
  //this hook will render our function everytime the DOM updates
  useEffect(() => {
    getVideos();
  }, []);

  /*Component Search: In search we're passing setDisplayVideos, setVideoIndex that will do something in search component
   and later they will set up the values in search. VideoIds has already an array of videos from our API.
   
   Component ShowVideo: we're passing displayVideos and also we're passing videoIndex to displayVideos. With this we
   assure that it will always show the first index (video) 
   
   Component Videos: we're passing displayVideos and it will show the video list*/



  return ( 
    <div className="App">
      
      <Header />
      <Search setDisplayVideos={setDisplayVideos} setVideoIndex={setVideoIndex} videoIds={videoIds} />


      <div className='app__page'>
        
        <ShowVideo video={displayVideos[videoIndex]} />
        <Videos videos={displayVideos} />
        
      </div>

      <div className='button'>
        <Buttons setVideoIndex={setVideoIndex} videoIndex={videoIndex} videoListSize={displayVideos.length}/>
      </div>

    </div>
  );
}


export default Youtube