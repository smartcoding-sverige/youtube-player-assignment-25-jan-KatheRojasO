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
        <Route path="/" element={<Youtube />}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>   

  );
}

export default App;
