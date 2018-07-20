import React from "react";
import "./sidebar-playlist.css";

const SidebarPlaylist = (props) => (
  <div className="SidebarPlaylist">
    <h2>{props.title}</h2>
    {props.children}
  </div>
)

export default SidebarPlaylist;