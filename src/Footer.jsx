import React from "react";

const Footer=()=>{
    const year=new Date().getFullYear();
  return(
     <>
     <footer className=" tex-center ">
      <p className="fp"> {year} RushilVagadiya.All Rights Reserved</p>

     </footer>
     </>
  )
}
export default Footer;