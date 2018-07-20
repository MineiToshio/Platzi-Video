import React from "react";
import SidebarPlaylist from "../../playlist/components/sidebar-playlist.jsx";
import Friend from "../components/friend.jsx";

const Friends = (props) => (
  <SidebarPlaylist title="Playlist de amigos">
    {
      props.friends.map((item) => {
        return <Friend key={item.id} {...item} />
      })
    }
  </SidebarPlaylist>
)

export default Friends;