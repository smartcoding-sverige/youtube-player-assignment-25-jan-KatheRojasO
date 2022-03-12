import React from 'react';
import '../stylesheets/buttons.css';


function Buttons () {
  return (
    <div>
      <button className={'btn1'}> Previous </button>
      <button className={'btn2'}> Next </button>
    </div>
  )
    
}
  
export default Buttons;

/*type Props ={
  onClick: MouseEventHandler,
  text: string,
}

function Buttons ({onClick, text}: Props) {
  return (
    <div>
      <button onClick={onClick} className={'btn1'}> Previous </button>
      <button onClick={onClick} className={'btn2'}> Next </button>
    </div>
  )
    
}*/