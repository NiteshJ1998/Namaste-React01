import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useStatusOnline";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("login");

  const onlineStatus = useOnlineStatus();
  //   console.log("Header fn called");

  // if no dependency array => useEffect get called on every render
  // if dependency array is empty = [] => useEffect get called on intial render(just once)
  // if dependency array is [loginbtn] => called everytime when loginbtn is updated
  //   useEffect(() => {
  //     console.log("useEffect called");
  //   }, []);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>Online Status :{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
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
