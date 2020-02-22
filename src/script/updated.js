import _ from 'lodash';
import { getName } from "./getName.js"

    export function updated(){
      let request2 = new XMLHttpRequest()
      let x = document.getElementById('select_espece').value
      request2.open('GET', 'https://ghibliapi.herokuapp.com/species?name=' + x, true)
      request2.onload = function() {
        // Begin accessing JSON data here
        let data = JSON.parse(this.response)
        if (request2.status >= 200 && request2.status < 400) {
          var tab_link = []
          data.forEach(people => {
            people.people.forEach(link =>{
              tab_link.push(link)
            })
          })
          getName(tab_link)
        } else {
          console.log('error')
        }
      }
      request2.send()
    }