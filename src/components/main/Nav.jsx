import React from "react";
import { assets } from "../../assets/assets";

const Nav = () => {
  return (
    <div className="nav">
      <p>Gemini</p>
      <img src={assets.user_icon} alt="img" />
    </div>
  );
};

export default Nav;
