import React from 'react'
import './Style.css'
import code from './code.jpeg'

export default function Jumbo() {
  return (
    <>
    <div classNameName="right">
   <img src={code}
   className="img-fluid  float-end " alt="..."/></div>
   <div className="left ">
    <div className="jumbotron mx-4 ">
    <br />
  <h1 className="display- font-weight-bold">Branding & <br></br>website design agency</h1>
  <br />
  <p className="lead">We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital weWebsite is a hyper-media information storage system linking resources around the world. In website, browsers allow highlighted words or an icon which is called hyper links to display text, video, graphics and sound on a local computer screen.</p>
  <br />
  <p className="lead">
    <a className="btn btn-danger btn-lg" href="/" role="button">Learn more</a>
    <br />
    <br /><br /><br /><br /><br /><br />
    <hr />
  </p>
</div>
   </div>
   </>
  )
}
