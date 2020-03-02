import React from "react";
import superagent from "superagent";

export default class extends React.Component {
  state = {
    movieDetail: []
  };

  componentDidMount = async () => {
    //TODO: 1. 서버에서 데이터 불러오기

    // URL에서 id 가져오기
    const { match } = this.props;
    let movieId = match.params.id;

    // 데이터를 불러올 API 주소
    let url = "http://54.180.149.147:8080/api/team/2/movie/" + movieId;

    //데이터를 서버에서 불러와서 movie라는 변수에 저장한다
    let movieDetail = await superagent
      .get(url)
      .then(response => response.body)
      .catch(error => error);

    //TODO: 2. 브라우저에 임시로 저장하기 (state)
    this.setState({
      movieDetail
    });
  };

  render() {
    const { movieDetail } = this.state;

    return (
      <div className="movie_detail_screen">
        {/* TODO: 3. 영화 1개에 대한 데이터 출력하는 코드 짜기 */
        movieDetail ? (
          <MovieItem
            title={movieDetail.title}
            posterUrl={movieDetail.posterUrl}
            advanceRate={movieDetail.advanceRate}
            advanceRateRank={movieDetail.advanceRateRank}
          />
        ) : null}
      </div>
    );
  }
}

const MovieItem = ({ title, posterUrl, advanceRate, advanceRateRank }) => {
  return (
    <div className="movie_item">
      <div className="item_left">
        <h3 className="movie_title">{title}</h3>

        <div className="movie_advance_rate">
          <div className="p_left">예매율</div>
          <div className="p_right">{advanceRate}</div>
        </div>
        <div className="movie_advance_rate_rank">
          <div className="p_left">예매율 순위</div>
          <div className="p_right">{advanceRateRank}</div>
        </div>
      </div>

      <img className="movie_poster" src={posterUrl} />
    </div>
  );
};
