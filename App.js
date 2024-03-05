import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import icon from "./android-chrome-512x512.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo-img" src={icon} alt="logo" />
      </div>
      <div className="sidebar">
        <input className="search-bar" type="search" />
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <div className="avatar">L</div>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar />);
