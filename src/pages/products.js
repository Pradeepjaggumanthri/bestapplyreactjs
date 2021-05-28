import React from 'react';
import {Container ,Row, Col,Breadcrumb } from  'react-bootstrap';
// import Axios from 'axios';


const Productspage  = () =>
 
{
    return(
       
       <div>
            <Container fluid className="header-banner">
                    
                    </Container>
          <Container fluid  className="header-innerbanner">
        <Container>
            <Row>
                <Col xs={12} md={12} xl={12} className="header-innerbanner1a">
                    <h1>Products</h1>
                    
                     <Breadcrumb>
                          <Breadcrumb.Item href="index.html">Home</Breadcrumb.Item>                          
                          <Breadcrumb.Item active>Products</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
        </Container>
    </Container>
    <Container fluid  className="bodyinner-section1">
        <Container>
            <Row>
                <Col xs={12} md={12} xl={12} className="bodyinner-section1a">
                    <span>
                        <img src={require("../images/productbanner.jpg").default} alt="" />

                    </span>
                    </Col>
            </Row>
                    <Row>
                        <Col  xs={12} md={6} xl={4} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 products-content">
                            <span>
                              <div className="overlay-ordernow"  data-toggle="modal" data-target="#myModal"><button className="btn">Order Now</button></div>
                              <img src={require("../images/products03.png").default} alt="" />

                          </span>
                            <a href="products.html">Power Wheelchair</a>
                        </Col>
                        <Col  xs={12} md={6} xl={4} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 products-content">
                            <span>
                              <div className="overlay-ordernow"  data-toggle="modal" data-target="#myModal"><button className="btn">Order Now</button></div>
                              <img src={require("../images/products05.png").default} alt="" />
                          </span>
                            <a href="products.html">Manual wheelchair</a>
                        </Col>
                        <Col  xs={12} md={6} xl={4} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 products-content">
                            <span>
                              <div className="overlay-ordernow"  data-toggle="modal" data-target="#myModal"><button className="btn">Order Now</button></div>
                              <img src={require("../images/products08.png").default} alt="" />

                          </span>
                            <a href="products.html">Scooter Wheelchair</a>
                        </Col>
                        <Col  xs={12} md={6} xl={4} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 products-content">
                            <span>
                              <div className="overlay-ordernow"  data-toggle="modal" data-target="#myModal"><button className="btn">Order Now</button></div>
                              <img src={require("../images/products13.png").default} alt="" />

                          </span>
                            <a href="products.html">beds and bed accessories</a>
                        </Col>
                        <Col  xs={12} md={6} xl={4} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 products-content">
                            <span>
                              <div className="overlay-ordernow"  data-toggle="modal" data-target="#myModal"><button className="btn">Order Now</button></div>
                              <img src={require("../images/products14.png").default} alt="" />

                          </span>
                            <a href="products.html">Walking Aids</a>
                        </Col>
                        <Col  xs={12} md={6} xl={4} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 products-content">
                            <span>
                              <div className="overlay-ordernow"  data-toggle="modal" data-target="#myModal"><button className="btn">Order Now</button></div>
                              <img src={require("../images/products15.png").default} alt="" />

                          </span>
                            <a href="products.html">Cushions</a>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} xl={12} className="bodyinner-section1a">
                        <p>We have a full range of equipment and supplies from reputable manufacturers like Invacare, Medline, Pride, Merits, Sunrise, Golden Technologies, and more to give you the confidence to venture to work, play, school, or go wherever your
                        imagination takes you.</p>
                    <p>All of our products are designed and chosen for their quality, ease of use, and benefit provided. We invite you to browse our online product catalogs. At 
                        <a href="\#"> BEST MEDICAL SUPPLY</a>, LLC. our first priority is you, the customer!</p>
                    <p><a href="\#">Click here to refer this site to a friend.</a></p>
                        </Col>
                    </Row>
                   
             
        </Container>
    </Container>
       </div>
    );
}

export default Productspage;