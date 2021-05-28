import React from 'react';
import {Container ,Row, Col,Breadcrumb } from  'react-bootstrap';
// import Axios from 'axios';


const Gallerypage  = () =>
 
{
    return(
       
       <div>
            <Container fluid className="header-banner">
                    
                    </Container>
           <Container fluid className="header-innerbanner">
    <Container >
        <Row>
            <Col xs={12} md={12} xl={12} className="header-innerbanner1a">
                <h1>Gallery</h1>
               
                 <Breadcrumb>
                          <Breadcrumb.Item href="index.html">Home</Breadcrumb.Item>                          
                          <Breadcrumb.Item active>Gallery</Breadcrumb.Item>
                    </Breadcrumb>
            </Col>
        </Row>
    </Container>
</Container>

<Container fluid  className="bodyinner-section1 galleryts">
        <Container>
            
                    <Row>
                        <Col  xs={12} md={6} xl={4} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 products-content">
                            <span>
                              <div className="overlay-ordernow"  data-toggle="modal" data-target="#myModal"><button className="btn">Order Now</button></div>
                              <img src={require("../images/products03.png").default} alt="" />

                          </span>
                            
                        </Col>
                        <Col  xs={12} md={6} xl={4} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 products-content">
                            <span>
                              <div className="overlay-ordernow"  data-toggle="modal" data-target="#myModal"><button className="btn">Order Now</button></div>
                              <img src={require("../images/products05.png").default} alt="" />
                          </span>
                            
                        </Col>
                        <Col  xs={12} md={6} xl={4} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 products-content">
                            <span>
                              <div className="overlay-ordernow"  data-toggle="modal" data-target="#myModal"><button className="btn">Order Now</button></div>
                              <img src={require("../images/products08.png").default} alt="" />

                          </span>
                            
                        </Col>
                        <Col  xs={12} md={6} xl={4} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 products-content">
                            <span>
                              <div className="overlay-ordernow"  data-toggle="modal" data-target="#myModal"><button className="btn">Order Now</button></div>
                              <img src={require("../images/products13.png").default} alt="" />

                          </span>
                            
                        </Col>
                        <Col  xs={12} md={6} xl={4} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 products-content">
                            <span>
                              <div className="overlay-ordernow"  data-toggle="modal" data-target="#myModal"><button className="btn">Order Now</button></div>
                              <img src={require("../images/products14.png").default} alt="" />

                          </span>
                            
                        </Col>
                        <Col  xs={12} md={6} xl={4} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 products-content">
                            <span>
                              <div className="overlay-ordernow"  data-toggle="modal" data-target="#myModal"><button className="btn">Order Now</button></div>
                              <img src={require("../images/products15.png").default} alt="" />

                          </span>
                            
                            
                        </Col>
                    </Row>
                    
             
        </Container>
    </Container>
       </div>
    );
}

export default Gallerypage;