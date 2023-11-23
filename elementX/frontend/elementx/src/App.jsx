import React, { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Create from './Components/Create';
import Profile from './Components/Profile';
import Element from './Components/Element';
import GetCode from './Components/GetCode';
import './App.css';

const App = () => {
  const [login,setLogin] = useState(false); 
  const [element,setElement] = useState("");
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token)
    {
      setLogin(true);
    }
  },[]);
  return (
    <div>
      <BrowserRouter >
        <Navbar login={login} element={element} setElement={setElement}/> 
          <Routes >
            <Route path='/' element={<Hero />} />
            <Route path='/create' element={<Create element={element} />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login login={login} setLogin={setLogin}/>} />
            <Route path='/register' element={<Register login={login} setLogin={setLogin}/>} />
            <Route path='/elements' element={<Element />} />
            <Route path='/code' element={<GetCode />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App