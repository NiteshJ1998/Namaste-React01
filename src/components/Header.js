import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("login");
  //   console.log("Header fn called");

  // if no dependency array => useEffect get called on every render
  // if dependency array is empty = [] => useEffect get called on intial render(just once)
  // if dependency array is [loginbtn] => called everytime when loginbtn is updated
  //   useEffect(() => {
  //     console.log("useEffect called");
  //   }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Offers </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginbtn === "login"
                ? setLoginBtn("logout")
                : setLoginBtn("login");
            }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
