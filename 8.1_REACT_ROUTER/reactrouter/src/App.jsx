import './App.css'
import React, { useState } from 'react';


// 2 reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

// 4 navegando entre paginas
import NavBar from './components/NavBar';

function App() {
  

  return (
    <>  
        <NavBar/> 
        <h1>React Router</h1>
        <Outlet/>
        <p>Footer</p>
    </>
  )
}

export default App
