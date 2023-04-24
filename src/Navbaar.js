
//  import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import Button from 'react-bootstrap/Button';
    // import Form from 'react-bootstrap/Form';
    import "./styles.css";
// import React, { useState } from "react";
export default function Navbaar(props) {
//   const itemList = [
//     "IT",
//     "TECH",
//     "WEB DEVELOP",
//     "FULL STACK",
//     "JS REACT",
//     "JS QUERY",
//     "ANGULAR",
//     "NODE JS"
//   ];

  // const [filteredList, setFilteredList] = new useState(itemList);

  // const filterBySearch = (event) => {
  //   // Access input value
  //   const query = event.target.value;
  //   // Create copy of item list
  //   var updatedList = [...itemList];
  //   // Include all elements which includes the search query
  //   updatedList = updatedList.filter((item) => {
  //     return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   });
  //   // Trigger render with updated values
  //   setFilteredList(updatedList);
  // };

  return (
  <nav>
  
          <Navbar expand="lg" className=" float-right bg-danger px-1 py-4">
            <Navbar.Brand href="#">
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
                <Button variant="dark" size="lg" className=' mx-4'>{props.button}
         
        </Button>
              </Nav>
            </Navbar.Collapse>

            {/* <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
             */}
            {/* <div className="App">
      <div className="search-header">
        <div className="search-text"></div> */}
        {/* <input id="search-box"  onChange={filterBySearch} /><Button variant="outline-dark">Search</Button>
      </div>
      <div id="item-list">
        <ol>
          {filteredList.map((item, index) => (
            <li key={index}>{item}</li>
          ))} 
        
        </ol>
       
      </div>
    </div> */}
              
            
        
        
          
          </Navbar>
          </nav>
        )
        }
        

        