import _ from 'lodash';
import { writespecies } from "./writespecies.js"

export function getSpecies(){
  var request = new XMLHttpRequest()

  request.open('GET', 'https://ghibliapi.herokuapp.com/species', true)
  request.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)
    var tab_espece = []
    if (request.status >= 200 && request.status < 400) {
      data.forEach(espece => {
        tab_espece.push(espece.name)
      })
    writespecies(tab_espece)
    } else {
      console.log('error')
    }
  }
  request.send()
}

