import "./MyJsx003.css";

const MyJsx003 = () => {
  const numX = 3;
  const numY = 5;

  return (
    <>
      <div>{`${numX} + ${numY} = ${numX + numY}`}</div>
      <div className="line">Line Test</div>
    </>
  );
};

export default MyJsx003;
