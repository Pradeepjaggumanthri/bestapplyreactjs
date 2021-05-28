import React from 'react';
import {Container ,Row, Col,Carousel } from  'react-bootstrap';
// import Axios from 'axios';


const Homepage = () =>
{
    return(
       
       <div>
           <Container fluid className="header-banner">
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/banner1.jpg").default}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
       src={require("../images/banner2.jpg").default}
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
       src={require("../images/banner3.jpg").default}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
       src={require("../images/banner4.jpg").default}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
</Container>
          <Container fluid className="bodysection1">
        <Container>
            <Row>
                <Col xs={12} md={12} xl={6}  className="bodysection1a">
                    <h4>Welcome</h4>
                    <h3>Health is the root of all happiness</h3>
                    <span className="brd-bms"></span>
                    <p>At Best Medical supply, the happiness and ultimate satisfaction of your client is our priority. We supply Medical equipments that guarantees peace of mind while offering additional services in the areas of repairs and supports. See our testimonial session to know what others are saying about our services. </p>
                   {/* <div className="playvideo-bms"> <b><i className="fas fa-play-circle"></i></b> <a href="#"> Play this video</a> </div>  */}
                </Col>
                <Col xs={12} md={12} xl={6} className="bodysection1a">
                     <img src={require("../images/homepage109.png").default} alt=""/> 
                     </Col>
            </Row>
        </Container>
    </Container>
    <Container fluid className="bodysection2"> 
    <img src={require("../images/homepage11.png").default} alt="" className="banner-side"/>
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={6} className="bodysection2a">
                    <div className="bg-bmsviewer">
                        <h3>Our Products</h3>
                    </div>
                </Col>
                <Col  xs={12} sm={12} md={12} lg={12} xl={6}  className="bodysection2a">
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" bodysection2content1"> 
                        <img src={require("../images/homepage14.png").default} alt="" />
                            <div className="bodysection2content1-content">
                                <h4><a href="products.html">Power Wheelchair</a></h4>
                                <hr className="hr-linrbms"/>
                                <p>When the time comes to invest in a mobility aid, you’ll be met with a plethora of different options.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" bodysection2content1"> 
                        <img src={require("../images/homepage16.png").default} alt="" />
                       
                            <div className="bodysection2content1-content">
                                <h4><a href="products.html">Manual wheelchair</a></h4>
                                <hr className="hr-linrbms"/>
                                <p>When the time comes to invest in a mobility aid, you’ll be met with a plethora of different options.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="bodysection2content1"> 
                        <img src={require("../images/homepage18.png").default} alt="" />
                        
                            <div className="bodysection2content1-content">
                                <h4><a href="products.html">Scooter Wheelchair</a></h4>
                                <hr className="hr-linrbms"/>
                                <p>When the time comes to invest in a mobility aid, you’ll be met with a plethora of different options.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Container>
    <Container fluid className="bodysection3">
        <Container>
            <Row>
                <Col xs={12} xl={12} className=" bodysection3a">
                    <h1>Why Choose Us</h1>
                    <span className="brd-headingbms"></span> 
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={4}  className="bodysection3b">
                 <img src={require("../images/homepage25.png").default} alt="" />
                  </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={8} className="bodysection3b">
                    <div className="content-section1ss"> 
                        <span><i className="fas fa-hospital"></i></span>
                        <div className="section-textbms">
                            <h3>Great Infrastructure</h3>
                            <p>Customers have easy access to our network of offices and warehouse. In collaboration with major manufacturers of medical equipments, we are able to direct delivery of equipments within a short notice to residence of the united states. </p>
                        </div>
                    </div>
                    <div className="content-section1ss"> 
                        <span><i className="fas fa-user-md"></i></span>
                        <div className="section-textbms">
                            <h3>Qualified Products</h3>
                            <p>We supply affordable and reliable brands in the industry. Products are backed up with manufacturers warranty that give customers the required peace of mind. </p>
                        </div>
                    </div>
                    <div className="content-section1ss">
                     <span><i className="fas fa-ambulance"></i></span>
                        <div className="section-textbms">
                            <h3>Emergency Support</h3>
                            <p>Best Medical Supply team are here to support all customers in the areas of equipment use trainings and supports. Our customer support line is opened to customers 24/7. </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container>
    <Container fluid className="bodysection4">
        <Container>
            <Row>
                <Col xs={12} xl={12} className="bodysection4a">
                    <h1>Customer Testimonials</h1>
                    <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac</p>
                </Col>
                <Col xs={12} xl={12} className="bodysection4b">
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}  className="bodysection4b1">
                            <div className="box-testimonials"> <span><i className="fas fa-quote-left"></i></span>
                                <p>Best Medical Supply worked hard to serve my mom when she needed to replace her power wheelchair. They were fast, reliable and affordable. Thank you guys. I will definitely recommend you to others.</p>
                                <b>-Kayla Jackson</b>
                            </div>
                            
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}  className="bodysection4b1">
                            <div className="box-testimonials"> <span><i className="fas fa-quote-left"></i></span>
                                <p>Your support is one of the best. Not surprised that you are called Best Medical Supply, I love the customer service agent on the phone who spoke with me when I needed support with me equipment. Thanks guys.</p>
                                <b>-Adebayo Harolds</b>
                            </div>
                         
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}  className="bodysection4b1">
                            <div className="box-testimonials"> 
                                <span><i className="fas fa-quote-left"></i></span>
                                <p>The last time I wanted my equipment repair, a friend recommended Best Medical and when I called you guys, you came on time and got me sorted. My equipment is working well. Thanks for the good job.</p>
                                <b>-Sherry Harkness</b>
                            </div>
                          
                        </Col>
                   </Row>
                </Col>
            </Row>
        </Container>
    </Container>

       </div>
    );
}

export default Homepage;