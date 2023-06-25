import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineShoppingBasket } from "react-icons/md";

const Header = () => {
  return (
    <div className="main">
      <div className="toptop">
        <div className="left-icons">
          <a href="/">
            <FiMenu className="menu-icon" />
          </a>
        </div>
        <p className="logo-header">Calico Cut Pants</p>
        <div className="right-icons">
          <a href="/">
            <IoLocationSharp className="location-icon" />
          </a>

          <a href="/">
            <MdOutlineShoppingBasket className="basket-icon" />
          </a>
        </div>
      </div>
      <div className="topbottom">
        <p className="sale">
          FLASH SALE! Up to 60% off pants & belts for Summer!
        </p>
      </div>
    </div>
  );
};

export default Header;
