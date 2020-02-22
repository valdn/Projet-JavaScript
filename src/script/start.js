import { getSpecies } from "./getSpecies.js"
import { getFilms } from "./getFilms.js"

export var tab_filmid = []

export function start(){
  getFilms(mycallback)
  getSpecies()
}

function mycallback(data){
  tab_filmid=data
}
    
 

    
