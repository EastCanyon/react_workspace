import { useEffect, useState } from "react";

const MyuseEffect002 = () => {
  let data = 0;
  const [num, setNum] = useState(0);

  const handleData = () => {
    console.log((data = data + 1));
  };

  const handleName = (e) => {
    console.log(e.target.value + 1);
    setNum(num + 1);
  };

  useEffect(() => {
    console.log("daata:" + data);
  });

  return (
    <div>
      <input type="text" placeholder="data" onChange={handleData} />
      <input type="text" placeholder="num" onChange={handleName} />
    </div>
  );
};

export default MyuseEffect002;
