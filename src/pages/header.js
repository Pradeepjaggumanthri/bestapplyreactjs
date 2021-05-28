import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container ,Row, Col,Navbar,Nav  } from  'react-bootstrap';

const Headerpage = () => {
    
        return (
            <div>
                <Container fluid className="header-layer1">
        <Container >
            <Row >
                <Col xs={12} md={12} lg={12} xl={6} className="phone-addressgrp">
                    <div className="phone-adress"> <span className="fas fa-phone"></span>
                        <p>470-300-9090</p>
                    </div>
                    <div className="phone-adress"> <span className="fas fa-envelope"></span>
                        <p><a href="\#">info@bestmedicalsupplyllc.com</a></p>
                    </div>
                </Col>
                <Col xs={12} md={12} lg={12} xl={6} className="phone-addressgrp">
                    <div className="social-bms"> <a href="\#"><span className="fab fa-facebook"></span></a> <a href="\#"><span className="fab fa-twitter-square"></span></a> <a href="\#"><span className="fab fa-instagram"></span></a> </div>
                </Col>
            </Row>
        </Container>
    </Container>
    <Container fluid className="header-layerNav">
        <Container>
            <Row>
                <Col xs={12} md={12} lg={12} xl={12} className="BMS-navmenu">
                    {/*<!-- <nav className="navbar navbar-expand-md ">
                                            <a className="navbar-brand" href="index.html"><img src="images/home-page_03.png" alt=""></a>
                                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"> <span className="navbar-toggler-icon"></span> <span className="navbar-toggler-icon"></span> <span className="navbar-toggler-icon"></span> </button>
                                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                                <ul className="navbar-nav ml-auto">
                                                    <li className="nav-item active"> <a className="nav-link" href="javascript:void(0);">Home</a> </li>
                                                    <li className="nav-item"> <a className="nav-link" href="aboutus.html">About Us</a> </li>
                                                    <li className="nav-item"> <a className="nav-link" href="services.html">Services</a> </li>
                                                    <li className="nav-item"> <a className="nav-link" href="products.html">Products</a> </li>
                                                    <li className="nav-item"> <a className="nav-link" href="contact-us.html">Contact Us</a> </li>
                                                </ul>
                                            </div>
                                        </nav> -->*/}

                    <Navbar collapseOnSelect expand="lg">
  <Navbar.Brand href="index.html"><img src={require("../images/homepage03.png").default} alt="" />
</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link><NavLink exact activeClassNames="active_class" to="/">Home </NavLink></Nav.Link>
    <Nav.Link><NavLink exact activeClassNames="active_class" to="/aboutus">About Us</NavLink></Nav.Link>
    <Nav.Link><NavLink exact activeClassNames="active_class" to="/servieces">Services</NavLink></Nav.Link>
    <Nav.Link><NavLink exact activeClassNames="active_class" to="/gallerypage">Gallery</NavLink></Nav.Link>
    <Nav.Link><NavLink exact activeClassNames="active_class" to="/products">Products</NavLink></Nav.Link>
    <Nav.Link><NavLink exact activeClassNames="active_class" to="/contactus">Contact</NavLink></Nav.Link>
        {/* <Nav.Link>Home  </Nav.Link>
        <Nav.Link>About Us</Nav.Link>
        <Nav.Link>Services</Nav.Link>
        <Nav.Link >Products</Nav.Link>
        <Nav.Link>Contact Us</Nav.Link>       */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>    
  </Navbar.Collapse>
</Navbar>
     </Col>
            </Row>
        </Container>
    </Container>

            </div>
        );
    
}

export default Headerpage;