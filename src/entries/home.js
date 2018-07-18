import React from "react";
import { render } from "react-dom";
import Home from "../pages/containers/home.jsx";
import data from "../api.json";

const homeContainer = document.getElementById("home-container");

//ReactDOM.render(que voy a renderizar, donde lo haré);
render(<Home data={data} />, homeContainer);