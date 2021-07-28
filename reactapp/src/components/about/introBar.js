function IntroBar(props) {
  return (
    <div className="page_cate">
      <ul>
        <li><a href="#" onClick={()=>props.setMenu('about')}>회사소개</a></li>
        <li><a href="#" onClick={()=>props.setMenu('partner')}>파트너</a></li>
      </ul>
    </div>
  )
}

export default IntroBar;