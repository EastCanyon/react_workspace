import { useEffect, useRef } from "react";

const MyuseRef002 = () => {
  const nameRef = useRef("");

  const handelBtn = () => {
    // console.log(nameRef.current);
    // console.log(nameRef.current.value);
    // document.querySelector("#ndata").value = "";
    nameRef.current.value = "";
  };

  useEffect(() => {
    // let ndata = document.querySelector("#ndata");
    // ndata.focus();
    nameRef.current.focus();
  });

  return (
    <div>
      <input type="text" placeholder="이름입력" ref={nameRef} id="ndata" />
      <button onClick={handelBtn}>Click</button>
    </div>
  );
};

export default MyuseRef002;
