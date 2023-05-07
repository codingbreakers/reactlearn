import React, {useState } from 'react'
import './Style.css'
import codek from './codek.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function Strips() {

useEffect(()=>{
  Aos.init({duration:2000});

},[]);


const [alert, Setalert] = useState("Schedule a call")

const handle = (e)=>{
  Setalert(<button class="btn btn-dnager" type="button">
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
     Loading...
</button>)
}

  return (
    
    <>
<div className="container-fluid my-2 " data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
    <div className="row g-0 ">
      <div className="col-xl pt-1">
      <img src={codek} className='img-fluid' alt="" />
      </div>
      <div className="col-xl pt-1">
      <div className="jumbotron jumbotron-fluid text-light bg-dark h-100">
  <h1 className="font-weight-bold text-danger text-center">
  About <br /></h1> <h1 className='text-center '>Us</h1>
  <p className="lead text-center px-1">"A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients."<br /><br />
  <button className='btn btn-danger ' onClick={() => { handle(); prompt("Enter Yours Number");}}>{alert}</button></p>
      </div>
     </div>
    </div></div>
    </>
  )
}