import { getSpecies } from "./getSpecies.js"
import { getFilms } from "./getFilms.js"

export var tab_filmid = [] //Tableau qui va stocker les films de studio ghibli

export function start(){
  getFilms(filmcallback) //Permet de récupérer tous les films de studio ghibli
  getSpecies()
}

function filmcallback(data){
  tab_filmid=data
}
    
 

    
