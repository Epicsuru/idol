import React from "react";
import "./header.css";
import { Button } from "../button/Button";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <h1 className="headerTitleLg">EXPLORE 3D COLLECTIONS 
        RANDOMLY</h1>
        <h6 className="headerTitleSm">High Accuracy 3D and realistic texture to discover
         the details you missed.</h6>         
         <Button
          className='btn'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          EXPLORE
        </Button>
         
      </div>
      <img
        className="headerImg"
        src="https://wallpaperaccess.com/full/7088534.jpg"
        alt=""
      />
      </div>
  
  );
}
