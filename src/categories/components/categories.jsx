import React from "react"; 
import Category from "./category.jsx";
import "./categories.css";
import Search from "../../widgets/containers/search.jsx";

function Categories(props)
{
  return (
    <div className="Categories">
      <Search/>
      {
        props.categories.map((item) => {
          return (
            <Category key={item.id} {...item} handleOpenModal={props.handleOpenModal}/>
          )
        })
      }
    </div>
  );
}

export default Categories;