import React from "react";
import "./MenuItem.css";

const MenuItems = ({ title }) => {
  return (
    <div className="menu__item">
      <h4>{title}</h4>
    </div>
  );
};

export default MenuItems;
