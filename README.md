# 현직자와 함께하는 프로그래밍 

> 1회차 : https://www.catch.co.kr/CatchCafe/ProgramView/346
> 2회차 FrontEnd 개발 실습 : https://www.catch.co.kr/CatchCafe/ProgramView/352

## 🍎2회차 실습 내용

> [사전과제 내용](https://www.notion.so/2-9f611527f10a4ff493cd568cf89fc204)
> [실습 내용](https://www.notion.so/2-befab0f864b54410a5fc919602960701)

### 1. create-react-app으로 프로젝트 만들기

- Node.js 설치
- Yarn 설치
- Visual Studio Code 설치
- Create-react-app 설치
- react app 실행해보기 `yarn start`

### 2. git repository에 프로젝트 올리기 (실습내용에 포함X, 개인적으로 진행)

- github에서 repository 생성
- 생성한 프로젝트 경로에서 명령어 입력
```console
> git init
> git add .
> git commit -m "initial commit"
> git remote add origin {remote repository 주소}
> git push origin master
```

initial commit 이후에는 `git add, git commit, git push` 3개의 명령어로 작업물 업데이트 


### 3. page 생성

- Home, MoveDetail, MovieList 3개의 페이지를 생성
- 서버에서 데이터를 불러와 MovieList 페이지에서 뿌려주기 
- `map과 <img> 태그`를 활용해 불러온 데이터를 이미지로 예쁘게 뿌려주기

**react-router-dom**      
> [참고 블로그](https://velopert.com/3417)
 react-router 는 써드파티 라이브러리로 클라이언트 사이드에서 이뤄지는 라우팅을 간단하게 해준다.


**superagent**
> [superagent github](https://github.com/visionmedia/superagent)
API 호출을 위한 라이브러리