import './css/partner.css';

function Partner() {
  return (
    <div className="wrapper-parallax-inner">
      <div class="page_title_area">
        <div class="page_title">
          <h2>파트너</h2>
        </div>
      </div>
      <div class="page_cont_area">
        <div class="page_cate">
          <ul>
            <li><a href="about" onClick={()=>props.setMenu('about')}>회사소개</a></li>
            <li><a href="partner" onClick={()=>props.setMenu('partner')}>파트너</a></li>
          </ul>
        </div>
        <div id="article">
          <p>SC2021와 함께합니다.</p>
          <div class="partners">
            <img src="img/logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;