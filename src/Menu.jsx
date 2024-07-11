import React from "react";
import {NavLink} from "react-router-dom"

const Menu=()=>{
    return(
    
        <>
        <div className="menu_style">
        <NavLink exact activeClassName="active_class"  to="/about">About Us </NavLink >
        <NavLink exact activeClassName="active_class"  to="/Search">Search </NavLink >
        <NavLink exact activeClassName="active_class"  to="/User/Rushil">User </NavLink> 
        <NavLink exact activeClassName="active_class"  to="/Concact"> Concact Us</NavLink >
        <NavLink exact activeClassName="active_class"  to="/Service"> Services</NavLink >   
        <NavLink exact activeClassName="active_class"  to="/"> Home</NavLink >   
  

        
        </div>
        </>


    )
}
export default Menu;