import React from "react";
import { useState } from "react";
import "../stylesheets/search.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { JwtPayload } from "jwt-decode";

const Search = (props: {  setDisplayVideos: (arg0: any) => void;  setVideoIndex: (arg0: number) => void;  videoIds: any[];}) => {

  const [input, setInput] = useState("");

  const getApiVideos = async () => {
    const apiResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=5&q=${input}}&key=${process.env.REACT_APP_API_KEY}`);
    const apiData = await apiResponse.json();

    const videosApi = [];

    for (let i = 0; i < apiData.items.length; i++) {
      const videoId = apiData.items[i].id.videoId;
      const name = apiData.items[i].snippet.title;

      videosApi.push({ name, videoId });
    }
    return videosApi;
  };

  const waitForVideos = async () => {
    const search = await getApiVideos();
    videoSaver(search);
    props.setDisplayVideos(search);
  }


  const onInputChange = (event: { target: { value: React.SetStateAction<string> };  }) => {
    setInput(event.target.value);
    let search = props.videoIds.filter((videoObject) => {
      return Object.values(videoObject.name).join("").toLowerCase().includes(input.toLowerCase());
    });

    props.setDisplayVideos(search);

    if (search.length === 0) {

     waitForVideos()
      
    }

    props.setVideoIndex(0);
  };

  const videoSaver = async (videos:any[]) => {
    try {
      const response = await fetch('http://localhost:8080/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(videos)
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onClickAllVideos = () => {
    props.setDisplayVideos(props.videoIds);
    props.setVideoIndex(0);
  };


  const favoriteVideoIdList = async () => {
    const response = await fetch('http://localhost:8080/favorites/1');
    const data = await response.json();
    return data;

  }

  const videoObjectList = async () => {

      if(sessionStorage.getItem('token') != null){
        
        const favoriteVideoList = await favoriteVideoIdList();
        const favoriteVideoIds = favoriteVideoList.map((object: { video_id: string; }) => object.video_id)
        props.setDisplayVideos(props.videoIds.filter(video => favoriteVideoIds.includes(video.videoId)));
        props.setVideoIndex(0);
      } else {
        props.setDisplayVideos([])
        props.setVideoIndex(0)
      }
  };
  

  return (
    <nav>
      <div className="navigationBar">
        <div className="search__bar">
          <SearchSharpIcon className="search__inputButton" />
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={onInputChange}
          />
        </div>

        <div>
          <ul className="options">
            <li>
              {" "}
              <button onClick={videoObjectList}>My favorites</button>
            </li>
            <li>
              {" "}
              <button onClick={onClickAllVideos}>All videos</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Search;