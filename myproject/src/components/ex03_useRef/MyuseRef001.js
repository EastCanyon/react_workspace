/*
 state : state 변경 -> 리렌더링 발생함 -> state 초기화 안됨
 ref : ref 변경 -> 리렌더링 발생안됨 -> ref 초기화 안됨
 variable : variable -> 리렌더링 발생안됨 -> variable 초기화 됨

 리렌더링 발생(컴포넌트 업데이트)
 1. state가 바뀔 때
 2. prop가 바뀔 때
 3. 부모 컴포넌트가 리렌더링될 때
 4. foreUpdate( )로 강제로 렌더링을 발생시킬 때

 useRef( )
 1. 상태정보 관리를 위해
 2. 직접적인 DOM 접근을 위해

 DOM을 꼭 사용해야 하는 경우
 1. 특정 input에 포커스 추가
 2. 스크롤 박스 조작하기
 3. Canvas 요소에 그림 그리기 등
*/

import { useRef, useState } from "react";

const MyuseRef001 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countLet = 0;

  const upCountState = () => {
    setCount(count + 1);
  };

  const upCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };

  const upCountLet = () => {
    countLet = countLet + 1;
    console.log("countLet: ", countLet);
  };

  return (
    <div>
      <p>State : {count} </p>
      <p>Ref : {countRef.current}</p>
      <p>Variable : {countLet}</p>

      <p>
        <button onClick={upCountState}>State</button>
        <button onClick={upCountRef}>Ref</button>
        <button onClick={upCountLet}>Variable</button>
      </p>
    </div>
  );
};

export default MyuseRef001;
