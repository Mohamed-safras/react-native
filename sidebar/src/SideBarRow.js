import { Avatar } from "@material-ui/core";
import React from "react";
import "./sideBarRow.css";
function SideBarRow({ title, Icon,src }) {
  return (
    <div className="sidebar-row">
      {src && <Avatar src = {src}/>}
      {Icon && <Icon className="icon icon--active" />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRow;
