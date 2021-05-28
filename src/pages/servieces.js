import React from 'react';
import {Container ,Row, Col,Breadcrumb } from  'react-bootstrap';
// import Axios from 'axios';


const Servicepage  = () =>
 
{
    return(
       
       <div>
            <Container fluid className="header-banner">
                    
                </Container>
          <Container fluid className="header-innerbanner">
    <Container >
        <Row>
            <Col xs={12} md={12} xl={12} className="header-innerbanner1a">
                <h1>Services</h1>
               
                 <Breadcrumb>
                          <Breadcrumb.Item href="index.html">Home</Breadcrumb.Item>                          
                          <Breadcrumb.Item active>Services</Breadcrumb.Item>
                    </Breadcrumb>
            </Col>
        </Row>
    </Container>
</Container>
<Container fluid className="bodyinner-section1">
    <Container>
        <Row>
            <Col  xs={12} md={12} xl={12}  className="bodyinner-section1a"> 
            <span><img src={require("../images/services03.png").default} alt=""/></span>
            <h4>Our Philosophy</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum sapien orci, ac aliquam ante convallis nec. Curabitur sed nibh aliquam, mattis arcu vel, venenatis quam. Aenean euismod vitae ex ac facilisis. Suspendisse
                scelerisque, magna ac imperdiet auctor, neque eros condimentum nisl, placerat rutrum lectus urna sed tortor. Nulla facilisi. Pellentesque varius, sapien vel fringilla faucibus, libero nulla mattis lacus, egestas blandit erat sem
            quis tortor. Vestibulum volutpat, metus eget consequat eleifend, quam diam mollis justo, sed egestas justo lectus non urna. Mauris suscipit tincidunt sem, et lobortis felis sodales at.</p>
            <p>Aliquam porttitor viverra elit, condimentum auctor risus congue et. Sed urna lectus, vestibulum eget lacus in, maximus imperdiet dui. Nulla molestie ante ac arcu aliquam, nec volutpat ante eleifend. Etiam vel nibh vel augue fringilla
                pellentesque id non mi. Pellentesque dictum vehicula ullamcorper. Duis sem nibh, vulputate sed aliquet et, dapibus vitae elit. Morbi malesuada dictum elit at bibendum. Suspendisse lobortis nulla velit, eget sodales urna congue
            ac. </p>
            <p>Cras a leo nulla. Nulla eu magna placerat, consectetur ex cursus, pretium tellus. Vivamus nec nunc pharetra, elementum sem a, iaculis orci. Praesent et arcu molestie, consequat erat convallis, aliquet massa. Nulla ac accumsan ipsum.
            Nulla imperdiet interdum sem, a rhoncus est scelerisque vel. Morbi eleifend dictum augue eu rhoncus.</p>
            <p>Our 3 categories of services at Best Medical Supply are listed below:</p>
            <ol type='1'>
                <li>Equipment Supply</li>
                <li>Equipment repairs </li>
                <li>Equipment Service Support.</li>
            </ol>
            <p>In addition to providing excellent service, We offer a line of products for your convenient as follows: </p>
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
            <p>All of our products are designed and chosen for their quality, ease of use, and benefit provided. We invite you to browse our online product catalogs. At 
                <a href="\#">Best Medical Supply. </a> our first priority is you, the customer!</p>
        </Col>
    </Row>
</Container>
</Container>
       </div>
    );
}

export default Servicepage;