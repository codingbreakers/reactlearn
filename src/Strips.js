import React from 'react'
import './Style.css'
import codek from './codek.jpg'
export default function Strips() {
  return (
    <>
<div className="container-fluid">
    <div className="row g-0 " >
      <div className="col-xl">
      <img src={codek} className='img-fluid' alt="" />
      </div>
      <div className="col-xl">
      <div className="jumbotron jumbotron-fluid text-light bg-dark h-100">
  <h1 className="font-weight-bold text-danger text-center">
  Design <br /> is Static. </h1>
  <p className="lead text-center ">"A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients."</p>
  <p className="text-center"  >
  <ul>
        <li><a href='/'>Schedule a Call</a></li></ul>
   </p>
  </div>
      </div>
    </div>
    </div>
    </>
  )
}