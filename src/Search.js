import React from 'react';
import './Search.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Search() {
  return (
  
    <nav>
        <div className='navigationBar'>
        <div className='search__bar'>
            <SearchSharpIcon className="search__inputButton" />
            <input placeholder='Search' type="text"/>
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


