import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/" className="logo">Kamran Ali</Link>
          </li>

          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
           <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/service">Service</Link></li>
         
          <li><Link to="/work">Work</Link></li>
         <li><Link to="/footer">Footer</Link></li>
        </ul>
     
      </nav>
    
    </div>
  );
}