function Service() {
  const serviceData = [{
    title: "차세대 전자가격표시기",
    more: "more"
  }, {
    title: "플랫폼 소개",
    more: "more"
  }]

  const listElement = serviceData.map(data=> {
    return(
      <li>
        <div className="item">
          <div className="itemBg">
            <div className="bg"></div>
          </div>
          <div className="desc">
            <a href="nESL.html">
              <h2>{data.title}</h2>
              <div className="more">
                <span>{data.more}<i className="fa fa-angle-right" aria-hidden="true"></i></span>
              </div>
            </a>
          </div>
        </div>
      </li>
    )
  })


  return (
    <div className="section content">
      <div className="section_inner">
        <div className="service">
          <div className="service_title">
            <h3>서비스</h3>
          </div>
          <ul>
            { listElement }
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
      </div>
    </div>       
  )
}

export default Service;