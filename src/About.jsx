import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/imges/photo_2.jpeg"
import Comman from "./Comman";

const About=()=>{
    return(
        <>
     <Comman name="Welcome to About page " imgsrc={web} visit="/concact" btname="Concact now"/>
    </>
  );
};
     
export default About;
