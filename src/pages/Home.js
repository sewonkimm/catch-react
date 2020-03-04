import React from "react";

const Home = () => {
  return (
    <div className="home">
     <h3>` 현직자와 함께하는 프로그래밍 `</h3>
     <a href="/movie/list"> 영화 리스트</a>
     <a href="/movie/detail/1">영화 상세 페이지 </a>

      <div className="github">
        <img src="/images/github-icon.png"/>
        <a href="https://github.com/sewonkimm/catch-react">github page is here</a>
      </div>
    </div>
  );
};

export default Home;