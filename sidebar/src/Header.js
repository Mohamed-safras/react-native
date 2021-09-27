import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar, IconButton } from "@material-ui/core";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          className="logo"
          alt="logo"
          src="https://pngimg.com/uploads/youtube/youtube_PNG13.png"
        />
      </div>
      <div className="header_middel">
        <form className="form_input">
          <input placeholder="Search" type="text" className="textinput" />
          <button className="serch_button">
            <SearchIcon />
          </button>
        </form>

      </div>
      <div className="header_right">
        <div className="header_options">
          <VideoCallIcon />
        </div>
        <div className="header_options">
          <AppsIcon />
        </div>
        <div className="header_options">
          <NotificationsIcon />
        </div>
        <div className="header_options">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-_mIfmXfxZydIr5sSyiVu6p_LMiG6L8ZDw&usqp=CAU" />
        </div>
      </div>
    </div>
  );
};

export default Header;
