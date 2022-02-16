import React from 'react';
import '../stylesheets/header.css';



function Header() {
  return (
    <div className="header">
        <div className="header__left">
            
            <img 
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt=""
            />
        </div>
    </div>

  ); 
}

export default Header;

