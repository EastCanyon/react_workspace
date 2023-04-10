import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";

const LogOut = () => {
  //const navigator = useNavigator();
  useEffect(() => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("username");
    localStorage.removeItem("isLogin");
    localStorage.clear();
    //navigator("/");
    window.location.replace("/");
  });
};

export default LogOut;
