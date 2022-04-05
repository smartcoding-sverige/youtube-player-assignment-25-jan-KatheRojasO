import React from 'react';
import '../stylesheets/buttons.css';


function Buttons (props: {setVideoIndex: (arg0: number) => void, videoIndex:number, videoListSize:number}) {

  const buttonNext = () => {
     const nextVideo = props.videoIndex + 1;
     if (nextVideo === props.videoListSize){
      alert("You've reached the limit of the list");
    }else {
      props.setVideoIndex(nextVideo);
    }
     
  }

  const buttonPrevious = () => {
    const previousVideo = props.videoIndex - 1;
    if (previousVideo === -1){
      alert("You've reached the limit of the list");
    }else {
      props.setVideoIndex(previousVideo);
    }
     
  }

  return (
    <div>
      <button className='btn1' onClick={buttonPrevious}> Previous </button>
      <button className='btn2' onClick={buttonNext}> Next </button>
    </div>
  )
    
}
  
export default Buttons;