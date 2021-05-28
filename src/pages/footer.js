import React , { useState} from 'react';
import {Container ,Row, Col} from  'react-bootstrap';
import Axios from 'axios';


const Footerpage = () => {

    const [emailreport,setEmailreport]= useState("");
    const  [formlistreport,setFormlistreport] = useState([]);

    const addForminforeport = () => {
  
        Axios.post("http://localhost:3002/report",{
         
          emailreport:emailreport,
         
        }).then(() => {
          // console.log("Succees");
          setFormlistreport([...formlistreport,{
         
            emailreport:emailreport,
            
      
          }
      
          ]);
        });
        
    
        
        
      }
        return (
            <div>

<Container fluid className="footer-sectiongrp">
        <Container fluid className="footer-section1">
            <Container>
                <Row>
                    <Col  xs={12} sm={12} md={12} lg={4} xl={4}  className="footer-section1a">
                        <a href="\index.html"><img src={require("../images/homepage29.png").default} alt="" /></a>
                    </Col>
                    <Col  xs={12} sm={12} md={12} lg={4} xl={4}  className="footer-section1a">
                        <form>
                        <div className="input-group footer-section1a-group">
                            <input type="text" className="form-control" placeholder="Email Address" onChange={(event) => {setEmailreport(event.target.value)}}  required/>
                            <div className="input-group-append footer-section1aappend">
                                {/* <button className="btn btn-success"  onClick={addForminforeport}>Subscribe</button> */}
                                <input type="submit" value="Subscribe" className="btn" onClick={addForminforeport} />
                            </div>
                        </div>
                        </form>
                    </Col>
                    <Col  xs={12} sm={12} md={12} lg={4} xl={4}  className="footer-section1a">
                        <div className="social-linkbms"> <a href="\#"><i className="fab fa-twitter"></i></a> <a href="\#"><i className="fab fa-facebook"></i></a> <a href="\#"><i className="fab fa-youtube"></i></a> <a href="\#"><i className="fab fa-instagram"></i></a> </div>
                    </Col>
                </Row>
                </Container>
            </Container>
        
        <Container fluid className="footer-section2">
            <Container>
                <Row>
                    <Col  xs={12} sm={12} md={6} lg={4} xl={4}  className=" footer-section2a">
                        <h4>Contact Us</h4>
                        <p>2140 McGee Rd,STE C-145,<br/>Snellville GA 30078</p>
                        <h6><span><i className="fas fa-phone"></i></span>470-300-9090</h6>
                        <h6><span><i className="fas fa-envelope"></i></span>
                        <a href="\#">info@bestmedicalsupplyllc.com</a></h6>
                    </Col>
                    <Col  xs={12} sm={12} md={6} lg={3} xl={3}  className="footer-section2a">
                        <h4>Recent Posts</h4>
                        <div className="link-footerbms"> <a href="\#">Best caring doctors</a> <a href="\#">The blood sample</a> <a href="\#">The ENT specialist</a> <a href="\#">Types of scissors</a> </div>
                    </Col>
                    <Col  xs={12} sm={12} md={6} lg={3} xl={3}  className="footer-section2a">
                        <h4>Our Products </h4>
                        <div className="link-footerbms"> <a href="products.html">Power Wheelchair</a> <a href="products.html">Manual Wheelchair</a> <a href="products.html">Scooter Wheelchair</a> </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={2} xl={2} className="footer-section2a">
                        <h4>Useful Links</h4>
                        <div className="link-footerbms"> <a href="aboutus.html">About </a> <a href="services.html">Services</a> <a href="products.html">Products</a> <a href="contact-us.html">Contact</a> </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Container fluid className="footer-section3">
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={12} xl={12} className="footer-section3a">
                        <p>Copyright &copy;<a href="\#">Best Medical Supply</a><a href="\#">Powered by Brand2visual</a></p>
                    </Col>                
            </Row>
        </Container>
    </Container>
    </Container>


            </div>
        )
}

export default Footerpage;