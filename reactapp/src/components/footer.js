import { useRef, useEffect, useCallback, useState, createRef } from 'react';

function Footer() {
  const [ScrollY, setScrollY] = useState(0);
  // const footer = createRef();
  const [Footer, setFooter] = useState(false);
  
  const showFooter = () => {
    setScrollY(window.pageYOffset);
    if(ScrollY>200) {
      setFooter(true);
    } else {
      setFooter(false);
    }
  }

  useEffect(()=>{
    const show = () => {
      window.addEventListener('scroll', showFooter)
    }
    show();
    return() => {
      window.removeEventListener('scroll', showFooter)
    }
  })

  return (
    <div className={Footer ? "footer active" : "footer"}>
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
  )
}

export default Footer;