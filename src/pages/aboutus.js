import React from 'react';
import {Container ,Row, Col,Breadcrumb } from  'react-bootstrap';
// import Axios from 'axios';


const Aboutpage  = () =>
 
{
    return(
       
       <div>
            <Container fluid className="header-banner">
                    
             </Container>
         <Container fluid className="container-fluid header-innerbanner">
        <Container>
            <Row>
                <Col xs={12} md={12} xl={12} className="header-innerbanner1a">
                    <h1>ABOUT Us</h1>
                  
                    <Breadcrumb>
                          <Breadcrumb.Item href="index.html">Home</Breadcrumb.Item>
                          
                          <Breadcrumb.Item active>About Us</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
        </Container>
    </Container>
    <Container fluid className="bodyinner-section1">
        <Container>
            <Row>
                <Col xs={12} md={12} xl={12} className="bodyinner-section1a"> <span><img src={require("../images/about03.png").default} alt=""/></span>
                    <p>Welcome to BEST MEDICAL SUPPL, LLC. We offer affordable solutions to all of your home health care needs. We have a full range of equipment and supplies from reputable manufacturers like Invacare, Medline, Pride, Merits, Sunrise, Golden
                        Technologies, and more to give you the confidence to venture to work, play, school, or go wherever your imagination takes you.</p>
                    <p>For more product information or additional discounts, please call us at 470-300-9090 or email info@bestmedicalsupplyllc.com  You can also contact us for information on how to pay with us.</p>
                    <p>In addition to providing excellent service, we offer a full line of medical products for sale, including:</p>
                    <ul>
                        <li>Power wheelchairs and complex rehab</li>
                        <li>Scooters</li>
                        <li>Manual wheelchairs</li>
                        <li>Parts, accessories, and cushions</li>
                        <li>Rentals and repair</li>
                        <li>Hospital beds and support surfaces</li>
                        <li>Manual and electric patient lifts</li>
                        <li>Ambulatory aids, such as rollators and canes</li>
                        <li>Bathroom equipment, diabetic shoes, and compression garments</li>
                        <li>Vehicle lifts and ramps, and much more!</li>
                    </ul>
                    <p>All of our products are designed and chosen for their quality, ease of use, and benefit provided. We invite you to browse our online product catalogs. At <a href="\#"> BEST MEDICAL SUPPLY</a>, LLC. our first priority is you, the customer!</p>
                    <p><a href="\#">Click here to refer this site to a friend.</a></p>
                </Col>
            </Row>
        </Container>
    </Container>
       </div>
    );
}

export default Aboutpage;