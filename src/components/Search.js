import React from 'react';
import {useState} from 'react';
import '../stylesheets/search.css';
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
          <SearchSharpIcon className='search__inputButton'/>
          <input 
            type='text' 
            placeholder='Search'
            value ={input} onChange={onInputChange}
          />
        </div>

        <div>
            <ul className='options'>
                <li> <button href='#'>My favorites</button></li>
                <li> <button href='#'>All videos</button></li>
            </ul>
        </div>  
    
    </div>
    </nav>
    
    );
}

export default Search;


