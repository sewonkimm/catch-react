import React from "react";

export default class extends React.Component {
  state = {
    movieDetail: []
  };

  componentDidMount = async () => {
    //TODO: 1. 서버에서 데이터 불러오기

    //TODO: 2. 브라우저에 임시로 저장하기 (state)
    // this.setState({
    //  ...
    // })

    
  };

  render() {
    const { movieDetail } = this.state;
    return (
      <div>
        <h3>영화 상세 페이지</h3>
        <div>상세한 영화에 대한 정보가 노출될 페이지입니다</div>
        {/* TODO: 3. 영화 1개에 대한 데이터 출력하는 코드 짜기 */}
      </div>
    );
  }
}