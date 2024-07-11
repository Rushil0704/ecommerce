import React from "react";
import web from "../src/imges/photo_1.jpeg"
import Comman from "./Comman";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Comman name="Grow your business with" imgsrc={web} visit="/service" btname="Get Started"/>
    </>
  );
};
export default Home;