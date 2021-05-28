import React ,{useState} from 'react';
import  {} from 'react-dom';




const gallery = [

        // '<img src={require("../images/products03.png").default} alt=""/>',
        // '<img src={require("../images/products05.png").default} alt=""/>',
        // '<img src={require("../images/products08.png").default} alt=""/>',
        // '<img src={require("../images/products13.png").default} alt=""/>',
        // '<img src={require("../images/products14.png").default} alt=""/>',
        // '<img src={require("../images/products15.png").default} alt=""/>'

      {
          name : "Vikram",
          id :"1234",
          mail: "test@gmail.com",
        
      },
      {
          name : "Vikram2",
          id :"12344",
          mail: "test123@gmail.com"
      },
      {
        name : "Vikramderrrtd",
        id :"1234566789",
        mail: "test3456677@gmail.com"
    },
    ];



export default function Loop()
{ 
    return(

        <div>
            {gallery.map((gallery) => (
                <div className="wssld--moveLeft">
              {/* <img src={require('../images/products03.png').default} alt=""/> */}
           <h1> {gallery.name} </h1>
           <h6> {gallery.id} </h6>
           <p> {gallery.mail} </p> 
           
           </div>
           ))}

        </div>

    );
}

