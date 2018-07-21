import React from "react";
import "./my-media.css";

const MyMedia = (props) => (
  <li className="MyMedia">
    <a href="#">
      <span>
        {props.title}
      </span>
    </a>
  </li>
)

export default MyMedia;