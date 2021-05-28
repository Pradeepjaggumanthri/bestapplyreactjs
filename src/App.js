import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Headerpage from  './pages/header';
import Contentage from './pages/contentpagelink';
import Footerpage from './pages/footer';
import Loop from './pages/loop';
import './App.css';
import './style.css';
import './res.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Headerpage/>
      <Contentage/>
     <Footerpage/>
<Loop/>


     </BrowserRouter>
     
    </div>
  );
}

export default App;


