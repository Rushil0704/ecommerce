import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../src/imges/logo1.png"

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
               <img src={logo1}  alt="logo1" width="12%" height="12%"/>  
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="  navbar-nav  mr-auto mb-2 mb-lg-0  ">
                    <li className="nav-item">
                      <NavLink  activeClassName="menu-active" 
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                      Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink   activeClassName="menu-active"  className="nav-link" to="/service">
                       Service
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink   activeClassName="menu-active"  className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink    activeClassName="menu-active" className="nav-link" to="/concact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                 
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;