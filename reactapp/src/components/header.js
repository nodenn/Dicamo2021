function Header(props) {
    return (
    <div id="header">
      <div className="header_inner">
        <h2 className="logo">
          <a href="#" onClick={()=>props.setMenu('index')} className="logo_dicamo">
            <img src="img/dicamoLogo.png" alt="" />
          </a>
        </h2>
        <div className="menu">
          <ul className="category">
            <li>
              <a href="#" onClick={()=>props.setMenu('about')}>ABOUT</a>
            </li>
            <li>
              <a href="#" onClick={()=>props.setMenu('nESL')}>SERVICE</a>
            </li>
            <li>
              <a href="#" onClick={()=>props.setMenu('notice')}>INFO</a>
            </li>
            <li>
              <a href="#" onClick={()=>props.setMenu('location')}>CONTACT</a>
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
    </div>)
}

export default Header;