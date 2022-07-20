import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { signOut } from "../auth/firebase";

const Navbar = () => {

  const navigate = useNavigate();

  // const currentUser = {displayName: "Harry Potter"};
  const currentUser = false;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"} style={{ color: "white" }}>
            React Movie App
          </Link>
          <div className="buttons">
            {currentUser ? (
              <h3>{currentUser.displayName}</h3>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}

            {currentUser ? (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                // onClick={() => signOut()}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
