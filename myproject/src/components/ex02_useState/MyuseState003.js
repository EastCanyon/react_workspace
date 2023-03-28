import { useState } from "react";

const MyuseState003 = () => {
  const [names, setNames] = useState(["고수", "여진구", "송중기"]);
  const [input, setInput] = useState("");

  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const handleClick = () => {
    // console.log(document.getElementById("fname").value);
    // setNames([document.getElementById("fname").value, ...names]);
    // document.getElementById("fname").value = "";

    setNames([input, ...names]);
    setInput("");
  };
  return (
    <div>
      <input type="text" id="fname" onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>ADD</button>
      {/* {names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })} */}

      {/* 출력태그 하나일 때(태그 여러 줄 일 때는 불가) return {;} 생략 가능, 저장 시 vscode에서는 소괄호로 감싸짐.  */}
      {names.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
};

export default MyuseState003;
