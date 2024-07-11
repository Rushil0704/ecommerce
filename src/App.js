
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";

import {Routes, Route} from "react-router-dom";



const App=()=>{
  return(
    <>
   
    <Navbar/>
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/about" Component={About}/>
      <Route exact path="/service" Component={Service}/>
      <Route exact path="/contact" Component={Contact}/>
      {/* <Navigate to={"/"}/> */}
   </Routes>
   <Footer/>
    </>
   
  )
}
 


export default App;
