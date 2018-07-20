import React from "react";
import "./friend.css";

const Friend = (props) => (
  <div className="Friend">
    <a href="#">
      <img src={props.avatar} />
      <span>{props.friend}</span>
    </a>
  </div>
)

export default Friend;