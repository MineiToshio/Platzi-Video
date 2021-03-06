import React from "react";
import SidebarPlaylist from "../../playlist/components/sidebar-playlist.jsx";
import MyMedia from "./my-media.jsx";
import "./my-playlist.css";

const MyPlaylist = (props) => (
  <SidebarPlaylist title={props.title}>
    <ol className="MyPlaylist">
      {
        props.medias.map((item) => (
          <MyMedia key={item.get('id')} {...item.toJS()} handleOpenModal={props.handleOpenModal} />
        ))
      }
    </ol>
  </SidebarPlaylist>
)

export default MyPlaylist;