import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Navbar,Nav,Form,Button } from 'react-bootstrap'
const Header = () => {
    
  return (
    <>
        <Navbar expand="lg" class="bg-gradient" variant={"gradient"}>
            <Container fluid>
                <Navbar.Brand as={Link} class="navbar-brand" to={"/"}>
                    <img class="img_logo" src="./logo.jpg" alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={NavLink} to={"/"} className='link'>Home</Nav.Link>
                                <Nav.Link as={NavLink} to={"/about"} className='link'>About</Nav.Link>
                                <Nav.Link as={NavLink} to={"/gallery"} className='link'>Gallery</Nav.Link>
                                <Nav.Link as={NavLink} to={"/chat"} className='link'>Q&A</Nav.Link>
                                <Nav.Link as={NavLink} to={"/contact"} className='link'>Contect Us</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control type="text" placeholder="Search" className="me-2" aria-label="Search" />
                                <Button variant="outline-success"><i class="bi bi-search"></i></Button>
                            </Form>
                        </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header