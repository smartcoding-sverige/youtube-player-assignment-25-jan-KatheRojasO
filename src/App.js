import './App.css';
import Header from '../src/components/Header';
import Search from '../src/components/Search';
import AllVideos from './components/AllVideos';
import Buttons from '../src/components/Buttons';
import React, { useEffect, useState } from 'react';
import ExampleComponent from './components/ShowVideo';


function App() {

  //get videos
  const [videoIds, setVideoIds] = useState([]);


  const getVideos = async () => {
    const response = await fetch('http://localhost:3001/videos');
    const data = await response.json();
    setVideoIds(data);
  } 

  const onSearchTermChange = (searchInput) => { 
    setVideoIds(videoIds.filter((videoObject) => {
      return Object.values(videoObject.id.name).join('').toLowerCase().includes(searchInput.toLowerCase())
    }))
  }

  // NOTES: A component can have more than one useEffect hook
  useEffect(() => {
    getVideos();
  }, []);

 
  return (
    <div className="App">

      <Header />
      <Search onSearchTermChange={onSearchTermChange} />


      <div className='app__page'>
        <ExampleComponent />
        <AllVideos videos={videoIds} />
        
      </div>

      <div className='button'>
        <Buttons />
      </div>

    </div>
  );
}

export default App;
