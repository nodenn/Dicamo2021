import React, {useEffect, createRef, useState} from 'react';

import Header from '../header';
import Slide from './slide';
import Service from './service';
import News from './news';
import Location from './location';
import Footer from '../footer';
import './css/main.css';
import './css/default.css';
import './css/m_default.css';
import './css/m_index.css';
import './css/location.css';

function Main() {
  const [selectedMenu, setSelectedMenu] = useState("news");
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
            <Slide />:
            null
          }
          {selectedMenu === "location" ?
            <Location />:
            null
          }
          {selectedMenu === "index" ?
            <Service /> :
            null
          }      
          {selectedMenu === "index" ?
            <News />:
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
