import './App.css';
import './default.css';
import './m_default.css';
import './m_index.css';

function App() {
  return (
  <div id="wrap">
    <div id="header">
      <div className="header_inner">
        <h2 className="logo">
          <a href="index.html" className="logo_dicamo">
            <img src="img/dicamoLogo.png" alt="" />
          </a>
        </h2>
        <div className="menu">
          <ul className="category">
            <li>
              <a href="about.html">ABOUT</a>
            </li>
            <li>
              <a href="nESL.html">SERVICE</a>
            </li>
            <li>
              <a href="notice.html">INFO</a>
            </li>
            <li>
              <a href="location.html">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="slide_menu">
          <input type="checkbox" id="trigger" />
          <label for="trigger">
              <span></span>
              <span></span>
              <span></span>
          </label>
          <div className="sidebar">
              <ul>
                <li>
                  <div className="cate_title">
                    <span>ABOUT</span>
                  </div>
                  <div className="cate_desc">
                    <a href="about.html">회사소개</a>
                    <a href="partner.html">파트너</a>
                  </div>
                </li>
                <li>
                  <div className="cate_title">
                    <span>BUSINESS</span>
                  </div>
                  <div className="cate_desc">
                    <a href="nESL.html">차세대 전자가격표시기</a>
                    <a href="platform.html">플랫폼 소개</a>
                  </div>
                </li>
                <li>
                  <div className="cate_title">
                    <span>INFO</span>
                  </div>
                  <div className="cate_desc">
                    <a href="notice.html">공지사항</a>
                    <a href="news.html">뉴스</a>
                    <a href="gallery.html">고객사례</a>
                  </div>
                </li>
                <li>
                  <div className="cate_title">
                    <a href="location.html">오시는 길<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="scroll-animate">
      <div id="main full scroll-animate-main">
        <div id="section" className="wrapper-parallax">
          <div className="slide">
            <div className="slide_inner">
              <div className="tab fade">
                <div className="tab_desc">
                  <h1>SC2021</h1>
                  <p>DISPLAY / SENSOR / DIGITAL SIGNAGE</p>
                </div>
                <div className="tab_img"></div>
              </div>
              <div className="tab fade">
                <div className="tab_desc">
                  <h1>DICAMO</h1>
                  <p>디지털 사이니지를 통해 새롭고 다양한 홍보효과를 경험해보세요.</p>
                </div>
                <div className="tab_img"></div>
              </div>
            </div>
  
            <div className="btn" style={{visibility: 'hidden'}}>
              <span className="dot" onclick="currentSlide(0)"></span>
              <span className="dot" onclick="currentSlide(1)"></span>
            </div>
          </div>
  
          <div className="section content">
            <div className="section_inner">
              <div className="service">
                <div className="service_title">
                  <h3>서비스</h3>
                </div>
                <ul>
                  <li>
                    <div className="item">
                      <div className="itemBg">
                        <div className="bg"></div>
                      </div>
                      <div className="desc">
                        <a href="nESL.html">
                          <h2>차세대 전자가격표시기</h2>
                          <div className="more">
                            <span>more<i className="fa fa-angle-right" aria-hidden="true"></i></span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="itemBg">
                        <div className="bg"></div>
                      </div>
                      <div className="desc">
                        <a href="platform.html">
                          <h2>플랫폼</h2>
                          <div className="more more2">
                            <span>more<i className="fa fa-angle-right" aria-hidden="true"></i></span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="make">
                <div className="make_box">
                  <div className="make_title">
                    <h2>SC2021가 만들어갑니다.</h2>
                    <p>
                      일본과 약 10여년의 협업 경험을 보유하고 있는 SC2021는
                      <br />
                      일본의 편의점 또는 슈퍼마켓용 디지털 사이니지 하드웨어 소프트웨어를 개발하여 수출하고 있습니다.
                    </p>
                  </div>
                  <div className="make_list">
                    <ul>
                      <li>
                        <div className="make_img">
                          <img src="img/iconfinder_06.Tags_290148 (1).png" alt="" />
                        </div>
                        <p><span>사용자의 <b>발걸음 유도</b></span><br />디지털 사이니지를 통하여 편리한 구매 및 홍보를 돕습니다.</p>
                      </li>
                      <li>
                        <div className="make_img">
                          <img src="img/iconfinder_33.Thumbs-Up_290117 (1).png" alt="" />
                        </div>
                        <p><span>사용자의 <b>흥미유발</b></span><br />센서를 통해 사용자의 연령대별 물건을 추천합니다.</p>
                      </li>
                      <li>
                        <div className="make_img">
                          <img src="img/iconfinder_47.Explore_290103 (1).png" alt="" />
                        </div>
                        <p><span>개발부터 관리까지</span><br />SC2021가 돕습니다.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="news">
                <div className="news_inner">
                  <div className="news_title">
                    <h2>뉴스</h2>
                  </div>
                  <div className="news_contents">
                    <ul className="news_list">
                      <li>
                        <a href="">
                          <div className="news_desc">
                            <h4>기사제목</h4>
                            <p>부제목</p>
                            <span className="date">2020-01-01</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <div className="news_desc">
                            <h4>기사제목</h4>
                            <p>부제목</p>
                            <span className="date">2020-01-01</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="">
                            <div className="news_desc">
                            <h4>기사제목</h4>
                            <p>부제목</p>
                            <span className="date">2020-01-01</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <div className="news_desc">
                            <h4>기사제목</h4>
                            <p>부제목</p>
                            <span className="date">2020-01-01</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="news_more">
                    <a href="news.html">more<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div id="footer">
            <div className="footer_wrap">
              <div className="footer_logo">
                <h2>
                  <a href="">SC2021</a>
                </h2>
              </div>
              <div className="information">
                <div>
                  <p>
                    12345 얀양시 만안구 박달로 26길 123 303호(여름타워)
                    <br />
                    대표자 : 황수연 | 사업자등록번호 : 123-45-67890
                    <br />
                    TEL : 02-2021-0721 / 010-1234-5678 | FAX : 012345678901
                    <br/>
                    <br />
                    <span>COPYRIGHT ©SC2021.ALL RIGHTS RESERVED</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
