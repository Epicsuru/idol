import React from 'react'
import Header from "../../components/header/Header";
import Topbar from '../../components/topbar/Topbar';
import Cards  from '../../components/cards/Cards';


export default function Home(){
     return (
      <>
      <Topbar />
      <Header />
      <Cards />      
      </>
    );
  }

