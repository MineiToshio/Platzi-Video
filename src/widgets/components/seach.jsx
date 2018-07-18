import React from "react";
import "./search.css";

const Search = (props) => (
  <form className="Search" onSubmit={props.handleSubmit}>
    <input type="text" 
      ref={props.setRef} 
      className="Search-input" 
      placeholder="Busca tu video" 
      name="search" 
      // defaultValue="Esta es mi búsqueda"
      onChange={props.handleChange}
      value={props.value}
      />
  </form>
)

export default Search;