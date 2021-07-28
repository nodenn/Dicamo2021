import React, {useEffect, useState} from 'react';
import './css/intro.css';
import About from './about';
import Partner from './partner';
import IntroBar from './introBar';

function Intro(props) {
  const [selectedMenu, setSelectedMenu] = useState("intro");
  useEffect(()=> {
    console.log(selectedMenu)
    }, [selectedMenu]);

  return(
    <div className="wrapper-parallax-inner">
      <div className="page_title_area">
        <div className="page_title">
          <h2>파트너</h2>
        </div>
      </div>
      <div className="page_cont_area">
        <IntroBar setMenu={setSelectedMenu} />
        {selectedMenu === "intro" ?
          <About />:
          null
        }
        {selectedMenu === "partner" ?
          <Partner />:
          null
        }
      </div>
    </div>
  )
}

export default Intro;