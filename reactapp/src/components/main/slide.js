import React, { useEffect, createRef, useState } from "react";

function Slide() {
  const [target, setTarget] = useState(0);
  const slides = createRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setTarget( target => target > 0 ? 0 : 1);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const prev = target > 0 ? 0 : 1;
    slides.current.childNodes[prev].style.display = "none";
    slides.current.childNodes[target].style.display = "block";
  }, [target])

 


  return (
    <div className="slide">
      <div className="slide_inner" ref={slides}>
        <div className="tab fade">
          <div className="tab_desc">
            <h1>SC2021</h1>
            <p>DISPLAY / SENSOR / DIGITAL SIGNAGE</p>
          </div>
          <div className="tab_img"></div>
        </div>
        <div className="tab fade">
          <div className="tab_desc">
            <h1>SC2021</h1>
            <p>디지털 사이니지를 통해 새롭고 다양한 홍보효과를 경험해보세요.</p>
          </div>
          <div className="tab_img"></div>
        </div>
      </div>
  
    </div>
  )
};

export default Slide;