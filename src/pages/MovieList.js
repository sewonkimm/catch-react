import React from "react";
import superagent from "superagent";
import moment from "moment";

export default class extends React.Component {
  state = {
    movieList: []
  };

  // MovieList.js 파일
  componentDidMount = async () => {
    // 데이터를 불러올 API 주소
    let url = "http://54.180.149.147:8080/api/team/2/movie";

    //데이터를 서버에서 불러와서 movieList라는 변수에 저장한다
    let movieList = await superagent
      .get(url)
      .then(response => response.body)
      .catch(error => error);

    //불러온 데이터를 브라우저에 임시로 저장한다
    this.setState({
      movieList
    });

    //TODO : console을 찍어서 확인해봅시다
    console.log(movieList);
  };

  render() {
    const { movieList } = this.state;
    return (
      <div className="movie_list_screen">
        <h3>영화 리스트</h3>
        <div className="movie_list">
          {movieList
            ? movieList.map(movie => (
                <MovieItem
                  title={movie.title}
                  posterUrl={movie.posterUrl}
                  cast={movie.cast}
                  director={movie.director}
                  genres={movie.genres}
                  runtime={movie.runtime}
                  released={movie.released}
                  advanceRate={movie.advanceRate}
                  advanceRateRank={movie.advanceRateRank}
                  id={movie._id}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

const MovieItem = ({ title, posterUrl, cast, director, genres, runtime, released, advanceRate, advanceRateRank, id }) => {
  let url = "/movie/detail/" + id;
  let release = moment(released).format("YYYY년 MM월 DD일");

  let genre = genres.map((item, index) => ( (index ? ', ': '') + item ));
  let casts = cast.map((item, index) => ( (index ? ', ': '') + item ));
  return (
    <div className="movie_item">
      <div className="item_left">
        <a href={url}>
          <h3 className="movie_title">{title}</h3>
        </a>

        <div className="movie_released">{release}개봉</div>

        <div className="movie_genres">
          <div className="p_left">장르</div>
          <div className="p_right">{genre}</div>
        </div>
        <div className="movie_runtime">
          <div className="p_left">러닝타임</div>
          <div className="p_right">{runtime}분</div>
        </div>
        <div className="movie_cast">
          <div className="p_left">배우</div>
          <div className="p_right">{casts}</div>
        </div>
        <div className="movie_director">
          <div className="p_left">감독</div>
          <div className="p_right">{director}</div>
        </div>
        <div className="movie_advance_rate">
          <div className="p_left">예매율</div>
          <div className="p_right">{advanceRate}</div>
        </div>
        <div className="movie_advance_rate_rank">
          <div className="p_left">예매율 순위</div>
          <div className="p_right">{advanceRateRank}</div>
        </div>
      </div>

      <a href={url}>
        <img className="movie_poster" src={posterUrl} />
      </a>
    </div>
  );
};
