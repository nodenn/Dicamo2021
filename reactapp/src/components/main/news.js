function News() {
  const newsData = [{
    title: "기사제목1",
    subTitle: "부제목1",
    date: "2020-01-01"
  }, {
    title: "기사제목2",
    subTitle: "부제목2",
    date: "2020-01-01"
  }, {
    title: "기사제목3",
    subTitle: "부제목3",
    date: "2020-01-01"
  }, {
    title: "기사제목4",
    subTitle: "부제목4",
    date: "2020-01-01"
  }]

  const listElement = newsData.map(data => {  // map : 새로운 array를 만들어줌
    return (
      <li>
        <a href="">
          <div className="news_desc">
            <h4>{data.title}</h4>
            <p>{data.subTitle}</p>
            <span className="date">{data.date}</span>
          </div>
        </a>
      </li>
    )
  })

  return (
    <div className="news">
      <div className="news_inner">
        <div className="news_title">
          <h2>뉴스</h2>
        </div>
        <div className="news_contents">
          <ul className="news_list">
            { listElement }
          </ul>
        </div>
        <div className="news_more">
          <a href="news.html">more<i className="fa fa-angle-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  )
}

export default News;