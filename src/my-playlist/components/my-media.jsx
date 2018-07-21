import React, { PureComponent } from "react";
import "./my-media.css";

class MyMedia extends PureComponent { 

  handleClick = (event) => {
    //console.log(this.props);
    this.props.handleOpenModal(this.props);
  }

  render () {
    return (
      <li className="MyMedia">
        <a href="#" onClick={this.handleClick}>
          <span>
            {this.props.title}
          </span>
        </a>
      </li>
    )
  }
}

export default MyMedia;