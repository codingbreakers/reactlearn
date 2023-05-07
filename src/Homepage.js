import React from 'react'
import './Style.css'
import code from './code.jpeg'
import Aos from 'aos';
 import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



export default function Homepage(props) {
    useEffect(()=>{
      Aos.init({duration:2000});

    },[]);


  return (
    <><div className="container-fluid" data-aos="fade-left">
    <div className="row g-0">
      <div className="col-xl">
      <div className="jumbotron mx-4 ">
      <br />
  <h1 className="display- font-weight-bold">Branding & <br></br>website design agency</h1>
  <p className="lead py-2">We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital.</p>
  <p className="lead">
    <Link to="/home" >Learn more</Link>
  </p>
</div>
      </div>
      <div className="col-xl">
        <img src={code}
   className="img-fluid  float-end " alt="..."/></div>
      </div>
    </div>
   
   </>
  )
}
