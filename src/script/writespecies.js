import { updated } from "./updated.js"

    export function writespecies(liste) {
      let contenu = document.createElement('div')
      contenu.id="data"
      contenu.innerHTML += "<h3> Liste especes </h3>"
      let selector = document.createElement('select')
      selector.name="espece"
      selector.id="select_espece"
      selector.onchange = function(){updated()}
      contenu.appendChild(selector)
      document.body.appendChild(contenu)
      let opt = document.createElement('option')
      opt.text = "Choose ..."
      opt.value = "fefe"
      document.getElementById('select_espece').options.add(opt)
      for(let i=0; i < liste.length; i = i+1) {
        let opt = document.createElement('option')
        opt.text = liste[i]
        opt.value = liste[i]
        document.getElementById('select_espece').options.add(opt)
      }
      let names = document.createElement('div')
      names.id='div_names'
      names.innerHTML += '<h3 id="lpers"> Liste personnages </h3>'
      let tabn = document.createElement('table')
      tabn.id = 'tabn'
      names.appendChild(tabn)
      names.hidden=true;
      document.body.appendChild(names)
    }
