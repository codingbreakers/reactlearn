
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import "./styles.css";
    import img from './img.png'
import { useState } from "react";
import { SearchBar } from "./SearchBar.js";
import { SearchResultsList } from "./SearchResultsList";
import { Link } from "react-router-dom";




export default function Navbaar(props) {
  const [results, setResults] = useState([]);
  return (
  <nav>
  
          <Navbar expand="lg" className="bg-danger px-1 py-4">
            <Navbar.Brand href="#"><img src={img} alt=""  height='80vh'/>
      {props.brand}
            </Navbar.Brand>
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ms-auto text-info">
              <Nav.Item className='mx-2'>
                  <Link to="/" className='nav-link'>{props.home}</Link>
                </Nav.Item>
                <Nav.Item className='mx-2'>
                  <Link to="/About" className='nav-link'>{props.about}</Link>
                </Nav.Item>
                <Nav.Item className='mx-2'>
                  <Link to="/Service" className='nav-link'>{props.service}</Link>
                </Nav.Item>
                <Nav.Item className='mx-2'>
                  <Link to="/Contact" className='nav-link'>{props.Contact}</Link>
                </Nav.Item>

<div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </nav>
        )
        }
        

        