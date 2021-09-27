import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export const SideBarData = [
    {
        title:"Home",
        clName:"side",
        path:"/",
        icon:<HomeIcon/>
    },
    {
        title:"Trending",
        clName:"side",
        path:"/",
        icon:<WhatshotIcon/>
    },
    {
        title:"Subscriptions",
        clName:"side",
        path:"/",
        icon:<SubscriptionsIcon/>
    },
    {
        title:"Library",
        clName:"side",
        path:"/",
        icon:<VideoLibraryIcon/>
    },
    {
        title:"History",
        clName:"side",
        path:"/",
        icon:<HistoryIcon/>
    },
    {
        title:"Your videos",
        clName:"side",
        path:"/",
        icon:<VideoLabelIcon/>
    },
    {
        title:"Watch later",
        clName:"side",
        path:"/",
        icon:<WatchLaterIcon/>
    },
    {
        title:"Show more",
        clName:"side",
        path:"/",
        icon:<ExpandMoreIcon/>
    },

];