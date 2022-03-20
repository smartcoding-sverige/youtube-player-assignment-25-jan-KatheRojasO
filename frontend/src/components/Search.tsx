import React from 'react';
import {useState} from 'react';
import '../stylesheets/search.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Search = (props: { setDisplayVideos: (arg0: any) => void, setVideoIndex: (arg0: number) => void, videoIds: any[] }) =>{
    const [input, setInput] = useState('');

    const onInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInput(event.target.value);
        props.setDisplayVideos(props.videoIds.filter((videoObject) => {
          return Object.values(videoObject.id.name).join('').toLowerCase().includes(input.toLowerCase())
        }))
        props.setVideoIndex(0);
    }

    const onClickAllVideos = () => {
      props.setDisplayVideos(props.videoIds)
      props.setVideoIndex(0);
    }

    const favoriteVideoIdList = () => {
      const keys = Object.keys(localStorage);
      return keys.filter((key) =>{
        return localStorage.getItem(key) === "true"
      })
    }

    const videoObjectList = () => { 
      const favoriteVideoList = favoriteVideoIdList();
      props.setDisplayVideos(
        props.videoIds.filter(video => favoriteVideoList.includes(video.id.videoId))
      );
      props.setVideoIndex(0);
    }

  return (
  
    <nav>
        
    <div className='navigationBar'>
        <div className='search__bar'>
          <SearchSharpIcon className='search__inputButton'/>
          <input 
            type='text' 
            placeholder='Search'
            value ={input} onChange={onInputChange}
          />
        </div>

        <div>
            <ul className='options'>
                <li> <button onClick={videoObjectList}>My favorites</button></li>
                <li> <button onClick={onClickAllVideos}>All videos</button></li>
            </ul>
        </div>  
    
    </div>
    </nav>
    
    );
}

export default Search;


