import { writespecies } from "./writespecies.js"

/*Fonction pour récupérer les espèces de l'API Studio Ghibli*/

export function getSpecies(){
  let request = new XMLHttpRequest()
  request.open('GET', 'https://ghibliapi.herokuapp.com/species', true)
  request.onload = function() {
    let data = JSON.parse(this.response)
    let tab_espece = []
    if (request.status >= 200 && request.status < 400) {
      data.forEach(espece => {
        tab_espece.push(espece.name)
      })
    writespecies(tab_espece) //Fonction d'écriture des espèces
    } else {
      console.log('error')
    }
  }
  request.send()
}

