import React from "react";
import logo from "../../../images/logo.png";
import "./related.css";
import Friends from "../../friends/components/friends.jsx";
import MyPlaylist from "../../my-playlist/components/my-playlist.jsx";

function Related(props) {
  return (
    <div className="Related">
      <figure className="logo-image">
        <img src={logo} width={250} alt="Platzi Video - la Plataforma de videos cheveres"/>
      </figure>
      
      <MyPlaylist medias={props.medias} title="My Playlist" handleOpenModal={props.handleOpenModal} />
      <Friends friends={props.friends} title="Friend's Playlist" />
    </div>
  )
}

export default Related;