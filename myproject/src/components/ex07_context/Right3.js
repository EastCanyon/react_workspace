import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Right3 = () => {
  const { number, onHandleIncrease } = useContext(ThemeContext);

  return (
    <div>
      <h1>Right3:</h1>
      <h1>Number : {number}</h1>
      <input type="button" value="+" onClick={() => onHandleIncrease()} />
    </div>
  );
};

export default Right3;
