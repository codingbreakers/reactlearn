import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faGithubSquare, faInstagramSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './Style.css'
import {Link} from 'react-scroll'
export default function Footer() {
  return (
    <>
   <section className="">
  <footer className="bg-danger text-white text-center text-md-start">
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">CREATIVE</h5>
          <p>
           Our agency basically create both types of webiste static and responsive <br /> website and We do both frontend and
           <br /> backend work We have sample projects for our clients . <br />
           Our team solve query of clients and with one on one doubt support.      </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Social Platforms</h5>
          <ul className="list-unstyled mb-0">
            <li>
            <a href="https://www.linkedin.com/in." className="text-white"><FontAwesomeIcon icon={faLinkedin} size='lg' className='px-2'/>Linked in</a>
            </li>
            <li>
              <a href="https://instagram.com/" className="text-white"><FontAwesomeIcon icon={faInstagramSquare} size='lg' className='px-2'/>Instagram</a>
            </li>
            <li>
              <a href="link https://www.facebook.com/" className="text-white"><FontAwesomeIcon icon={faFacebookSquare} size='lg' className='px-2'/>Facebook</a>
            </li>
            <li>
              <a href="https://github.com" className="text-white"><FontAwesomeIcon icon={faGithubSquare} size='lg' className='px-2'/>Github</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0">CONTACT US</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white"><FontAwesomeIcon icon={faEnvelope} size='sm' className='px-2'/>Creative@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center py-3">
      © 2023 Copyright :
      <Link to='/Navbaar' className="text-white text-size "> Creative.com</Link>
    </div>
  </footer>
</section>
    </>
  );
}
