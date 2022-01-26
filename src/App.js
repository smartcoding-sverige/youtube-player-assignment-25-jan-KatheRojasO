import './App.css';
import Header from './Header';
import Search from './Search';
import AllVideos from './AllVideos';
import Buttons from './Buttons';
import { useEffect, useState } from 'react';
import ExampleComponent from './ExampleComponent';


function App() {

  const [videoIds, setVideoIds] = useState([]);

  const getVideos = async () => {
    const response = await fetch('http://localhost:3001/videos');
    const data = await response.json();
    setVideoIds(data);
  }

  
  // NOTES: A component can have more than one useEffect hook
  useEffect(() => {
    getVideos();
  }, []);

  
  return ( 
    <div className="App">
      
      <Header />
      <Search />
      <div className='app__page'>
        <ExampleComponent/>
        <AllVideos videos={videoIds}/>
      </div>

      <div className='button'>
            <Buttons />
      </div>
      
    </div>
  );
}

export default App;
