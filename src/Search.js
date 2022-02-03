import React from 'react';
import {useState} from 'react';
import './Search.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Search = (props) =>{
    const [input, setInput] = useState('');

    const onInputChange = (event) => {
        setInput(event.target.value);
        props.onSearchTermChange(event.target.value);
    }


  return (
  
    <nav>
        
    <div className='navigationBar'>
        <div className='search__bar'>
          <SearchSharpIcon className='search__inputButton' />
          <input 
          type='text' 
          placeholder='Search'
          value ={input} onChange={onInputChange}
          />
        </div>

        <div>
            <ul className='options'>
                <li> <a href='#'>My favorites</a></li>
                <li> <a href='#'>All videos</a></li>
            </ul>
        </div>  
    
    </div>
    </nav>
    
    );
}

export default Search;


