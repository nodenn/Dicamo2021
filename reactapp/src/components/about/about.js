import './css/about.css';
// import Partner from './partner';/

function About() {
  return (
      <div className="page_cont_area">
        <div id="article">
          <p>
            리테일 매장의 디지털화를 지향하는
            <br />
            하드웨어/소프트웨어 솔루션 개발 전문 기업
            <br />
            <span>SC2021</span>
          </p>
          <div className="about">
            <div className="info">
              <div className="info_desc">
                <div className="infoBox">
                  <div className="imgBox">
                    <img src="img/pic01.jpg" alt="" />
                    <img src="img/pic02.jpg" alt="" />
                  </div>
                  <p>
                    SC2021는 2019년에 설립되어 디지털 사이니지 하드웨어 및 소프트웨어를 개발하여 수출하고 있습니다.
                    <br />
                    현재 일본 법인을 설립하였으며 일본으로 제품 판매 또한 진행하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="organization">
              <h2>조직도</h2>
              <img src="img/조직도.png" alt="" />
            </div>
            <div className="global">
              <h2>글로벌 네트워크</h2>
              <img src="img/Exclusive Global Distributors.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;