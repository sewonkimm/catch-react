import React from "react";
import superagent from "superagent";

export default class extends React.Component {
  state = {
    movieList: []
  };

  render() {
    const { movieList } = this.state;
    return (
      <div>
        <h3>영화 리스트 리스트</h3>
        <div>영화 리스트가 보여질 화면입니다</div>

        <MovieItem
          title="기생충"
          posterUrl=""
          advanceRate={30.2}
          advanceRateRank={4}
        />
      </div>
    );
  }
}

const MovieItem = ({ title, posterUrl, advanceRate, advanceRateRank }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>포스터 url: {posterUrl}</div>
      <div>예매율: {advanceRate}</div>
      <div>예매율 순위 : {advanceRateRank}</div>
    </div>
  );
};