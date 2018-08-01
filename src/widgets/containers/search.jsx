import React, {Component} from "react";
import Search from "../components/seach.jsx";
import { connect } from "react-redux";
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class SearchContainer extends Component {
  state = {
    value: "Toshio"
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value);
    this.props.actions.searchAsyncEntities(this.input.value)
  }

  setInputRef = element => {
    this.input = element;
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(" ", "-")
    })
  }

  render() {
    return (
      <Search 
        setRef={this.setInputRef} 
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange} 
        value={this.state.value}/>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer);