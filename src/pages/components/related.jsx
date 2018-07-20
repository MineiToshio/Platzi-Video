import React from "react";
import logo from "../../../images/logo.png";
import "./related.css";
import Friends from "../../friends/components/friends.jsx";

function Related(props) {
  return (
    <div className="Related">
      <figure class="logo-image">
        <img src={logo} width={250} alt="Platzi Video - la Plataforma de videos cheveres"/>
      </figure>
      
      <Friends friends={props.friends} />
    </div>
  )
}

export default Related;