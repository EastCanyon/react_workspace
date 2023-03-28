import React from "react";

/*
  리액트 17이전 버전에서는 JSX 구문이 있는 파일은 반드시 import React from 'recat'문을 사용해야 한다.
  그러나 17이후 버전부터는 import React from 'recat'의 생략이 가능하다.
*/

// function MyJsx002(){

// }

const MyJsx001 = () => {
  return (
    <div>
      <div>Hello</div>
      <div>React</div>
    </div>
  );
};

export default MyJsx001;
