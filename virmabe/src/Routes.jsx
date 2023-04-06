import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Offline from "./components/Offline";
import Online from "./components/Online";
import Album from "./components/Album"




export default props => (

    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path= '/About' element={<About/>} />
        <Route path='/Contact' element={< Contact />} />
        <Route path='/Online' element={< Online />} />
        <Route path='/Offline' element={< Offline />} />         
        <Route path='/Album' element={< Album />} />         

    </Routes>
);  