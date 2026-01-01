import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
