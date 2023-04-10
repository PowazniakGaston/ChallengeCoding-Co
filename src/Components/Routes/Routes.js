import React from 'react'
import {
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
import MainNavbar from '../Navbar/MainNavbar';
import Home from '../Pages/Home/Home';
import Footer from '../Footer/Footer';

const templates = ['dark', 'orange', 'grey', 'yellow'];
const randomBackground = templates[Math.floor(Math.random() * templates.length)];

export default function routes() {
  return (
    <BrowserRouter>
        <MainNavbar randomBackground={randomBackground}/>
        <Routes>
            <Route path="*" element={<Home randomBackground={randomBackground}/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
