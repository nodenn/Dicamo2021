import React, {useEffect, createRef, useState} from 'react';

import Header from '../header';
import Footer from '../footer';
import Home from './main';
import About from '../about/about';
import Location from '../location/location';
import nESL from '../nESL/nESL';

import './css/default.css';
import './css/m_default.css';

function Main() {
  const [selectedMenu, setSelectedMenu] = useState("index");
  useEffect(()=> {
    console.log(selectedMenu)
    }, [selectedMenu]);
  return (
  <div id="wrap">
    <Header setMenu={setSelectedMenu} />
    <div id="scroll-animate">
      <div id="main full scroll-animate-main">
        <div id="section" className="wrapper-parallax">
            
          {selectedMenu === "index" ?
            <Home />:
            null
          }
          {selectedMenu === "about" ?
            <About />:
            null
          }
          {selectedMenu === "nESL" ?
            <nESL />:
            null
          }
          {selectedMenu === "location" ?
            <Location />:
            null
          }
            </div>
          </div>
  
          <Footer />
    </div>
  </div>
  );
};

export default Main;
