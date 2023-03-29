import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Left3 = () => {
  const { number } = useContext(ThemeContext);

  return (
    <div>
      <h1>Left3 : </h1>
      <h1>Number : {number}</h1>
    </div>
  );
};

export default Left3;
