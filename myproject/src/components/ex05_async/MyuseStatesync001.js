import { useState } from "react";
/*
  React는 state가 변경이 될떄마다 렌더링이 발생한다.
  React 렌더링이 발생되면 배치로해서 처리한다.
  배치 16ms 단위로 처리한다.
  useState()는 비동기화로 처리한다.
*/
const MyuseStatesync001 = () => {
  const [number, setNumber] = useState(0);

  const handleUpNumber = () => {
    setNumber(number + 3);
    console.log(number);

    setNumber(number + 2);
    console.log(number);

    setNumber(number + 1);
    console.log(number);
  };

  const handleDownNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUpNumber}>UP</button>
      <button onClick={handleDownNumber}>DOWN</button>
    </div>
  );
};

export default MyuseStatesync001;
