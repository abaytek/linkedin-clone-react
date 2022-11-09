import { Avatar } from "@material-ui/core";
import React from "./sidebar.css";

function Sidebar() {
  const sidebarRecentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="./assets/bg.jpg" alt="" />
        <Avatar />
        <h2>Abaysew Tekle</h2>
        <h4>abaysew.tekle@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statCount">2345</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statCount">4566</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {sidebarRecentItem("programming")}
        {sidebarRecentItem("reactjs")}
        {sidebarRecentItem("design")}
        {sidebarRecentItem("developer")}
        {sidebarRecentItem("softwareengineering")}
      </div>
    </div>
  );
}

export default Sidebar;
