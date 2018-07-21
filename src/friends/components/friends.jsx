import React from "react";
import SidebarPlaylist from "../../playlist/components/sidebar-playlist.jsx";
import Friend from "../components/friend.jsx";

const Friends = (props) => (
  <SidebarPlaylist title={props.title}>
    {
      props.friends.map((item) => (
        <Friend key={item.id} {...item} />
      ))
    }
  </SidebarPlaylist>
)

export default Friends;