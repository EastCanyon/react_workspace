import { NavLink, Outlet } from "react-router-dom";
function BaseLayout() {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "green" : "",
    fontSize: isActive ? "1.2rem" : "",
  });

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink style={activeStyle} className="nav-link" to="/">
                HOME
              </NavLink>
            </li>

            {localStorage.getItem("memberName") !== null ? (
              <>
                <li>
                  <NavLink
                    style={activeStyle}
                    className="nav-link"
                    to="/editinfo"
                  >
                    EDITINFO
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    style={activeStyle}
                    className="nav-link"
                    to="/logout"
                  >
                    {localStorage.getItem("memberName") + "LOGOUT"}
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink style={activeStyle} className="nav-link" to="/login">
                    LOGIN
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    style={activeStyle}
                    className="nav-link"
                    to="/joinadd"
                  >
                    JOIN
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink
                style={activeStyle}
                className="nav-link"
                to="/board/list/1"
              >
                BOARD
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

export default BaseLayout;
