
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles.css";
import img from './img.png'
import { useState,useRef} from "react";
import { SearchBar } from "./SearchBar.js";
import { SearchResultsList } from "./SearchResultsList";
import {Link} from 'react-scroll'
import './Contact'
import Contact from './Contact';
import Services from './Services';
import Jumbo from './Homepage';
import Strips from './About';


export default function Navbaar() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  const handleClick = (elmref) => {
    window.scrollTo({ top:elmref.current.offsetTop ,behavior: 'smooth'});
  };

  const [results, setResults] = useState([]);

  return (
<>
          <Navbar expand="lg" className="bg-danger px-1 py-4">
            <Navbar.Brand href="#"><img src={img} alt=""  height='80vh'/>
     Creative
            </Navbar.Brand>
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ms-auto text-info">
              <Nav.Item className='mx-2'>
                  <Link to="/" className='nav-link'   onClick={(e) => handleClick(ref1)}>Home</Link>
                </Nav.Item>
                <Nav.Item className='mx-2'>
                  <Link to="./About" className='nav-link'  onClick={(e) => handleClick(ref2)} >About</Link>
                </Nav.Item>
                <Nav.Item className='mx-2'>
                  <Link to="./Services" className='nav-link'  onClick={(e) => handleClick(ref3)}>Service</Link>
                </Nav.Item>
                <Nav.Item className='mx-2'>
                  <Link to="./Contact" className='nav-link'   onClick={(e) => handleClick(ref4)}>Contact</Link>
                </Nav.Item>

<div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      
              </Nav>
            </Navbar.Collapse>
          </Navbar>  
          
          <div ref={ref1}><Jumbo></Jumbo></div>
          <div ref={ref2}><Strips></Strips></div>
          <div ref={ref3}><Services></Services></div>
          <div ref={ref4}><Contact></Contact></div>
          </>
        
        )
  }
      

        