import React, {useEffect, createRef, useState} from 'react';

import Slide from './slide';
import Service from './service';
import News from './news';
import './css/main.css';
import './css/default.css';
import './css/m_default.css';
import './css/m_index.css';

function Home() {
  return (
    <div className="wrapper-parallax-inner">
      <Slide />
      <Service /> 
      <News />
    </div>
  );
};

export default Home;