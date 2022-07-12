import React from "react";
import {NavLink} from "react-router-dom";
const Navbar=()=>{
    return(
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="#">React User</NavLink>
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
          </li>
         </ul>
         <NavLink className="btn btn-danger" exact to="/users/add">Add User</NavLink>
      </div>
    
  </nav>
  
  )

};
export default Navbar;

