import { getSpecies } from "./getSpecies.js"
import { getFilms } from "./getFilms.js"

export var tab_filmid = [] //Tableau qui va stocker les films de studio ghibli

export function start(){
  getFilms(mycallback) //Permet de récupérer tous les films de studio ghibli
  getSpecies()
}

function mycallback(data){
  tab_filmid=data
}
    
 

    
