import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseLayout from "./components/layout/BaseLayout";

import Home from "./components/home";
import BoardList from "./components/board/board_list";
import BoardView from "./components/board/board_view";
import BoardWrite from "./components/board/board_write";
import BoardUpdate from "./components/board/board_update";
import JoinAdd from "./components/members/join_add";
import LoginPage from "./components/members/login";
import LogOut from "./components/members/logout";
import PrivateRoute from "./access/PrivateRoute";
import EditInfo from "./components/members/editinfo";

function App() {
  return (
    <div className="container">
      <h1>My shop</h1>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route
            path="editinfo"
            element={<PrivateRoute isAuth={true} RouteComponent={EditInfo} />}
          />

          <Route
            path="logout"
            element={<PrivateRoute isAuth={true} RouteComponent={LogOut} />}
          />
          <Route
            path="login"
            element={<PrivateRoute isAuth={false} RouteComponent={LoginPage} />}
          />
          <Route
            path="joinadd"
            element={<PrivateRoute isAuth={false} RouteComponent={JoinAdd} />}
          />

          <Route
            path="board/list/:currentPage"
            element={<PrivateRoute isAuth={false} RouteComponent={BoardList} />}
          />
          <Route
            path="board/view/:num"
            element={<PrivateRoute isAuth={true} RouteComponent={BoardView} />}
          />
          <Route
            path="board/write"
            element={<PrivateRoute isAuth={true} RouteComponent={BoardWrite} />}
          />
          <Route
            path="board/write/:num"
            element={<PrivateRoute isAuth={true} RouteComponent={BoardWrite} />}
          />
          <Route
            path="board/update/:num"
            element={
              <PrivateRoute isAuth={true} RouteComponent={BoardUpdate} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
