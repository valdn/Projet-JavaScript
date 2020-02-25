import { updated } from "./updated.js"

    export function writespecies(liste) {

      // Creation de l'entête de la page pour la selection de l'espèce
      let contenu = document.createElement('div')
      contenu.id="data" // id pour appliquer du CSS
      contenu.innerHTML += "<h3> Liste espèces </h3>"

      // Creation du sélecteur
      let selector = document.createElement('select')
      selector.name="espece"
      selector.id="select_espece"

      selector.onchange = function(){updated()}

      contenu.appendChild(selector)
      document.body.appendChild(contenu)

      // ajout des options dans le sélecteur en fonction du retour de la requête sur les especes
      let opt = document.createElement('option')
      opt.text = "Choose ..."
      document.getElementById('select_espece').options.add(opt)
      for(let i=0; i < liste.length; i = i+1) { // pour chaque element de la liste on ajoute l'élement dans le selecteur
        let opt = document.createElement('option')
        opt.text = liste[i]
        document.getElementById('select_espece').options.add(opt)
      }

      // Ajout du div qui va contenir la liste des personnages 
      let names = document.createElement('div')
      names.id='div_names'
      names.innerHTML += '<h3 id="lpers"> Liste personnages </h3>'

      // Creation du tableau qui va contenir les personnages 
      let tabn = document.createElement('table')
      tabn.id = 'tabn'
      names.appendChild(tabn)
      names.hidden=true;
      document.body.appendChild(names)
    }
