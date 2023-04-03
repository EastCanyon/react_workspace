import { useLocation } from "react-router-dom";
import queryString from "query-string"; //npm install query-string --save

/*
  [페이지 주소를 설정할 때 유동적인 값 설정]
  (1) URL 파라미터 :
  http://localhost:3000/about/김독자/서울

  (2) 쿼리 스트링 : 
  http://localhost:3000/about?name=김독자&loc=서울
  {hash, key, pathname, search, state}

  -hash : 주소의 #문자열 뒤의 값
  -pathname : 현재 주소 경로
  -search : ?를 포함한 쿼리스트링
  -state : 페이지로 이동시 임의로 넣을 수 있는 상태 값
  -key : location 객체의 고유 값, 초기값은 default, 페이지가 변경될 때 마다 고유의 값이 생성됨.
*/

const About = () => {
  // console.log(useLocation());

  const location = useLocation();

  const { pathname, search } = useLocation();
  const { name, loc } = queryString.parse(search);

  return (
    <div>
      <h3>About</h3>
      <h5>pathname:{location.pathname}</h5>
      <h5>search:{location.search}</h5>
      <hr />
      <h5>pathname:{pathname}</h5>
      <h5>search:{search}</h5>
      <p>이름:{name}</p>
      <p>지역:{loc}</p>
    </div>
  );
};

export default About;
