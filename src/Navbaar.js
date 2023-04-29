
//  import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    // import Button from 'react-bootstrap/Button';
    // import Form from 'react-bootstrap/Form';
    import "./styles.css";
    import img from './img.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { SearchBar } from "./SearchBar.js";
import { SearchResultsList } from "./SearchResultsList";


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
                  <Nav.Link href="#">{props.about}</Nav.Link>
                </Nav.Item>
                <Nav.Item className='mx-2'>
                  <Nav.Link href="#">{props.service}</Nav.Link>
                </Nav.Item>
                <Nav.Item className='mx-2'>
                  <Nav.Link href="#">{props.project}</Nav.Link>
                </Nav.Item>
                {/* <div class="input-group py-2 mx-1">
  <div class="form-outline ">
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1"></label>
  </div>
  <button type="button" class="btn btn-primary" size='sm'>
   <FontAwesomeIcon icon={faSearch} size="md"/>
  </button>
</div> */}

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
        

        