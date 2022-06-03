import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  
  return (
    <div className="top">
      <div className="topLeft">
        <Link className="link" to="/">
        <i class="fa fa-bars" >MENU</i></Link>
      </div>
      <div className="topCenter">       
            <Link className="link" to="/">
            <b> Company Logo Here</b> 
            </Link>          
      </div>
  </div>
  );
}
