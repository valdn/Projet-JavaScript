import { getName } from "./getName.js"

/*En focntion du l'option du selecteur choisi on récupère tous les liens des personnages de l'espèce choisie*/

    export function updated(){
      let request2 = new XMLHttpRequest()
      let x = document.getElementById('select_espece').value
      request2.open('GET', 'https://ghibliapi.herokuapp.com/species?name=' + x, true)
      request2.onload = function() {
        // Begin accessing JSON data here
        let data = JSON.parse(this.response)
        if (request2.status >= 200 && request2.status < 400) {
          let tab_link = []
          data.forEach(people => {
            people.people.forEach(link =>{
              tab_link.push(link)
            })
          })
          getName(tab_link) //On envoie le tableau de lien pour récupérer les noms des personnages
        } else {
          console.log('error')
        }
      }
      request2.send()
    }