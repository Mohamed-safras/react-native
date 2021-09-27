import React from "react";
import SideBarRow from "./SideBarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function SideBar() {
  return (
    <div className="sideBar">
    
      <SideBarRow title="Home" Icon={HomeIcon} />
      <SideBarRow title="Trending" Icon={WhatshotIcon} />
      <SideBarRow title="Subscriptions" Icon={SubscriptionsIcon} />
      <SideBarRow title="Library" Icon={VideoLibraryIcon} />
      <SideBarRow title="History" Icon={HistoryIcon} />
      <SideBarRow title="Your videos" Icon={VideoLabelIcon} />
      <SideBarRow title="Watch later" Icon={WatchLaterIcon} />
      <SideBarRow title="Show more" Icon={ExpandMoreIcon} />
    </div>
  );
}

export default SideBar;
