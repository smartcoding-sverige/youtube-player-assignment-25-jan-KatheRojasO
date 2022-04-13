import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login';
import Youtube from './pages/Youtube';




function App() {
  
      
    

  
 
  return ( 

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Youtube />}/>
      </Routes>
    </BrowserRouter>   

  );
}

export default App;
