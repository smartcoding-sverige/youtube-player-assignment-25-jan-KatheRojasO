import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Videos from './components/Videos';
import Buttons from './components/Buttons';
import React, { useEffect, useState } from 'react';
import ExampleComponent from './components/ShowVideo';


function App() {

  //get videos
  const [videoIds, setVideoIds] = useState<any[]>([]);
  
  const getVideos = async () => {
    const response = await fetch('http://localhost:3001/videos');
    const data = await response.json();
    setVideoIds(data);
  }

  const [displayVideos, setDisplayVideos] = useState<any[]>([]);


  // NOTES: A component can have more than one useEffect hook
  useEffect(() => {
    getVideos();
  }, []);

 
  return (
    <div className="App">

      <Header />
      <Search setDisplayVideos={setDisplayVideos} videoIds={videoIds} />


      <div className='app__page'>
        <ExampleComponent />
        <Videos videos={displayVideos} />
        
      </div>

      <div className='button'>
        <Buttons />
      </div>

    </div>
  );
}

export default App;
