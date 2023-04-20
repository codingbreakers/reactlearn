import React from 'react'
//  import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import Button from 'react-bootstrap/Button';
export default function Navbaar() {
  return (
  <nav>
          <Navbar expand="lg" className="bg-danger px-1 py-4">
            <Navbar.Brand href="#">
              <img
                src="https://o.remove.bg/downloads/95d45bd9-5e80-4a70-8c54-c07ba29586e4/trff-removebg-preview.png"
                alt="logo"
                height="80"
              />
              CREATIVE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ms-auto text-info ">
                <Nav.Item className='mx-3'>
                  <Nav.Link href="#">About</Nav.Link>
                </Nav.Item>
                <Nav.Item className='mx-3'>
                  <Nav.Link href="#">Service</Nav.Link>
                </Nav.Item>
                <Nav.Item className='mx-2'>
                  <Nav.Link href="#">Project</Nav.Link>
                </Nav.Item>
                <Button variant="dark" size="lg" className=' mx-4'>
          Schedule a Class
        </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </nav>
        )
        }
        