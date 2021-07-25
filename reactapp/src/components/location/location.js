import React, {useEffect, createRef, useState} from 'react';

import './css/location.css';

function Location() {
  const map = createRef();
  const { maps } = window.naver;

  useEffect(()=> {
      var mapOptions = {
        center: new maps.LatLng(37.4828527, 126.8965675),
        zoom: 16
    };

    var map = new maps.Map('map', mapOptions);

    var markerOptions = {
      position: new maps.LatLng(37.4828527, 126.8965675),
      map: map
    };

    var marker = new maps.Marker(markerOptions);
}, []);

  return (
      <div id="scroll-animate">
        <div id="main full scroll-animate-main">
          <div id="container" class="wrapper-parallax">
            <div class="page_title_area">
              <div class="page_title">
                <h2>오시는 길</h2>
              </div>
            </div>
            <div class="page_cont_area">
              <div id="article">
                <h2>본사</h2>
                <div id="map" style={{width:"100%", height:'400px'}}></div>
                <div class="address">
                  <img src="img/iconfinder_eccomerce_-_location_3440906.png" alt="" />
                  <p><span>SC2021 본사</span><br />얀양시 만안구 박달로 26길 123 303호</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Location;