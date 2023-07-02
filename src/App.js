import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ContextApi} from './ContextApi';
import { Careers } from './components/Careers';
// import redux from './redux'

function App() {

const [bgColor, setBgColor] = useState(true);

const changeTheme = () => {
  setBgColor((state) => {
    return !state
  })
}

  return (
    <>
  
      <BrowserRouter>
      <ContextApi.Provider value={{bgColor, changeTheme}}>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact  />} />
          <Route path='/service' element={<Service />} />
          <Route path='/Careers' element={<Careers/>} />
        </Routes>
      </ContextApi.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
