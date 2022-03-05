import React, {MouseEventHandler} from 'react';
import '../stylesheets/buttons.css';

type Props ={
  onClick: MouseEventHandler,
  text: string,
}

const Buttons = ({onClick, text}: Props) => (
  <div>
    <button onClick={onClick} className={'btn1'}> Previous </button>
    <button onClick={onClick} className={'btn2'}> Next </button>
  </div>
)
  
export default Buttons

/*<button onClick={onClick}> 
{Previous}
</button>
<button onClick={onClick}>
{Next}
</button>*/