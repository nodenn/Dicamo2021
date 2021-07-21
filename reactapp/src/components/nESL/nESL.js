import Header from '../header';
import Footer from '../footer';

function nESL () {
  const neslData = [{
    title: "플랫폼",
    const dataList = [{
      
    }]
  }]

  return (
    <div id="wrap">
      <Header />
      <div id="scroll-animate">
        <div id="main full scroll-animate-main">
          <div id="container" className="wrapper-parallax">
            <div className="page_title_area">
              <div className="page_title">
                <h2>서비스</h2>
              </div>
            </div>
            <div className="page_cont_area">
              <div className="page_cate">
                <ul>
                  <li><a href="nESL.html">차세대 전자가격표시기</a></li>
                  <li><a href="platform.html">플랫폼 소개</a></li>
                </ul>
              </div>
            </div>
            <div id="article">
              <div className="intro_box">
                <div className="intro_inner">
                  <p><b>차세대 전자가격표시기</b>&nbsp;nESL
                    <br />
                    <span>*nESL : next Gen Electronic Shelf Label</span>
                  </p>
                  <p>가격/광고, 각종 데이터 수집(카메라/터치) 가능한 매장용 데이터 플랫폼</p>
                </div>
                <div className="intro_item">
                  <ul className="intro_list">
                    <li className="item1">
                      <div className="item_box">
                        <dl className="box_inner">
                          <dt>
                            <h3>플랫폼</h3>
                          </dt>
                          <dd>
                            <p>전세계 매장 통합 관리<br />데이터 수집/분석/보고</p>
                          </dd>
                        </dl>
                      </div>
                    </li>
                    <li className="item2">
                      <div className="item_box">
                        <dl className="box_inner">
                          <dt>
                            <h3>디스플레이</h3>
                          </dt>
                          <dd>
                            <p>상품 가격<br />광고 및 고객과의 소통<br />매장 운영<br />
                            <span>(카메라/센서 연동)</span>
                          </p>
                          </dd>
                        </dl>
                      </div>
                    </li>
                    <li className="item3">
                      <div className="item_box">
                        <dl className="box_inner">
                          <dt>
                            <h3>+센서</h3>
                          </dt>
                          <dd>
                            <p><span>매장 운영을 위한 마케팅 데이터 제공</span><br />고객 성별/연령별 제안<br />기본 구매이력 기반 제안<br />방문 시간대별 상품 할인</p>
                          </dd>
                        </dl>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default nESL;