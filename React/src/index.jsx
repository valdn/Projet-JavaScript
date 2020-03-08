import Species from "./script/Species.jsx";
import ReactDOM from "react-dom";
import React from "react";

window.addEventListener('load', event=>{

  var node = document.createElement("div");
  document.body.appendChild(node);

  ReactDOM.render(<Species/>, node)
})
