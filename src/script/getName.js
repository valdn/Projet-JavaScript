import { writenames } from "./writenames.js"

    export function getName(links){
      let tab_name = []
      links.forEach(link => {
        let request3 = new XMLHttpRequest()
        request3.open('GET', link, true)
        request3.onload = function() {
        // Begin accessing JSON data here
        let data = JSON.parse(this.response)
        if (request3.status >= 200 && request3.status < 400) {
          tab_name.push(data.name)
        } else {
          console.log('error')
        }
        if (tab_name.length==links.length){
          writenames(tab_name)
        }
      }
      request3.send()
      });
    }

