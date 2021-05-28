import React, { useState} from 'react';
import {Container ,Row, Col,Breadcrumb} from  'react-bootstrap';
import Axios from 'axios';

const Contactus = () =>
{
    
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [subject,setSubject]= useState(0);
    const [message,setMessage]= useState("");
   
   const  [formlist,setFormlist] = useState([]);
   

   //  browser in console.log  using displayInfo
//  const displayInfo = () =>
//  {
//    console.log(name + email + subject + message)
//  }


const addForminfo = () => {
  
    Axios.post("http://localhost:3002/create",{
      name:name,
      email:email,
      subject:subject,
      message:message,
    }).then(() => {
      // console.log("Succees");
      setFormlist([...formlist,{
        name:name,
        email:email,
        subject:subject,
        message:message,
  
      }
  
      ]);
    });
    

    
    
  }
  
//   const getForminfo = () => {
    
//     Axios.get("http://localhost:3001/formlist").then((response) => {
//       // console.log(response);
//         setFormlist(response.data)
//     });
//   }
  

    return(
            <div>
                <Container fluid className="header-banner">

                </Container>
          <Container fluid className="header-innerbanner">
         <Container>
            <Row>
                <Col xl={12} className="header-innerbanner1a">
                    <h1>Contact Us</h1>
                    {/* <div className="breadcum-bms">
                        <ul>
                            <li><a href="\index.html">Home</a></li>
                            <li><a href="\#">Contact Us</a></li>
                        </ul>
                    </div> */}
                     <Breadcrumb>
                          <Breadcrumb.Item href="\index.html">Home</Breadcrumb.Item>                          
                          <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
        </Container>
    </Container>
    

   
        <Container fluid className="bodyinner-section1">
         <Container>
            <Row>
                <Col xl={12} className=" bodyinner-section1a">
                    <span><img src={require("../images/contactbanner.jpg").default} alt="" /></span>
                </Col>
                <Col xl={12} className=" bodyinner-section54a">
                    <div className="list-contact">
                        <ul>
                            <li>
                                <div className="contact-contentlist"> 
                                <span><i className="fas fa-phone"></i></span>
                                    <h5>Talk to us</h5>
                                    <p>Telehone:470-300-9090<br/> Fax:770-825-9164 </p>
                                </div>
                           </li>
                           
                                <li><div className="contact-contentlist"> 
                                <span><i className="fas fa-envelope"></i></span>
                                    <h5>Contact us</h5>
                                    <p><a href="https://www.bestmedicalsupplyllc.com">www.bestmedicalsupplyllc.com</a><a href="\#">info@bestmedicalsupplyllc.com</a></p>
                                </div>
                                </li>
                           
                           
                                <li><div className="contact-contentlist">
                                     <span><i className="fas fa-home"></i></span>
                                    <h5>location</h5>
                                    <p>2140 McGee Rd,STE C-145,<br/>Snellville GA 30078</p>
                                </div>
                                </li>
                           
                           
                                <li><div className="contact-contentlist"> 
                                <span><i className="fas fa-clock"></i></span>
                                    <h5>Opening Hours</h5>
                                    <p>Mon-Sat 9am to 8pm<br/> Sun-10am to 3pm</p>
                                </div>
                                </li>
                           
                        </ul>
                    </div>
                    <div className="form-contactbms">
                        <form action="">
                            <label for="">
                                <input type="text" name="" id="" className="form-control" placeholder="Name" onChange={(event) => {setName(event.target.value)}} required/>
                            </label>
                            <label for="">
                                <input type="text" name="" id="" className="form-control" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}  required/>
                            </label>
                            <label for="">
                                <input type="text" name="" id="" className="form-control" placeholder="Subject" onChange={(event) => {setSubject(event.target.value)}}  required/>
                            </label>
                            <label for="">
                                <textarea name="" id="" className="form-control" placeholder="Message" onChange={(event) => {setMessage(event.target.value)}} required></textarea>
                            </label>
                            <div className="submitbms">
                                <input type="submit" value="Send" className="btn" onClick={addForminfo} />
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
      </Container>

            </div>
        
        )
    }


export default Contactus;



