import React from 'react'
import './Style.css'
import codek from './codek.jpg'
export default function Strips() {
  return (
    <>
    <span className="right">
  <img src={codek} className='img-fluid float-start   z' alt="" />
  <div className="jumbotron bg-dark text-light ">
  <h1 className="font-weight-bold text-center p-4 text-danger ">
  Design <br /> is Static. </h1>
  <br />
  <p className="lead text-center ">"A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients."</p>
  <br />
  <p className="text-center p-4 m-4"  >
  <ul>
        <li><a href='/'>Schedule a Call</a></li></ul>
   </p>
  </div>
   </span>
   </>
  )
}
