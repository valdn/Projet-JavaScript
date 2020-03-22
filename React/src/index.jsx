import Species from "./script/Species.jsx";
import ReactDOM from "react-dom";
import React from "react";
import back1 from "./images/backanim1.gif";
import back2 from "./images/backanim2.gif";
import back3 from "./images/backanim3.gif";
import back4 from "./images/backanim4.gif";
import back5 from "./images/backanim5.gif";
import back6 from "./images/backanim6.gif";



function randomIntFromInterval(min, max) { // fonction permettant de generer un nombre aléatoire dans un interval donné
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const rand = randomIntFromInterval(1,6);

window.addEventListener('load', event=>{

  var style = document.createElement("style");
  switch (rand) { // Application d'un fond animé en fonction du nombre aleatoire généré
    case 1:
      style.innerHTML += 'body {background-image: url("' + back1 + ' ") !important;}';
      break;
    case 2:
      style.innerHTML += 'body {background-image: url("' + back2 + ' ") !important;}';
      break;
    case 3:
      style.innerHTML += 'body {background-image: url("' + back3 + ' ") !important;}';
      break;
    case 4:
      style.innerHTML += 'body {background-image: url("' + back4 + ' ") !important;}';
      break;
    case 5:
      style.innerHTML += 'body {background-image: url("' + back5 + ' ") !important;}';
      break;
    case 6:
      style.innerHTML += 'body {background-image: url("' + back6 + ' ") !important;}';
      break;
    default:
      break;
  }
  

  var node = document.createElement("div"); //Création du div pour l'affichage de React
  document.body.appendChild(node);
  document.head.appendChild(style);
 
  ReactDOM.render(<Species/>, node) //Affichage de la page
 
})
