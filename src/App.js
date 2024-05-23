import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Rhome } from './component/Rhome'
import { Login } from './component/Login'
import { About } from './component/About'
import { Contact } from './component/Contact'
import { Rec } from './component/Rec'
import { Signup } from './component/Signup'
import { Done } from './component/Done'

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Rhome />}></Route>
        <Route path='Rhome' element={<Rhome />}></Route>
        <Route path='Login' element={<Login />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='Contact' element={<Contact />}></Route>
        <Route path='Rec' element={<Rec />}></Route>
        <Route path='Signup' element={<Signup />}></Route>
        <Route path='Done' element={<Done />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
