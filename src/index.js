import _ from 'lodash';

    function component() {
      const element = document.createElement('div');
      
      // Lodash, currently included via a script, is required for this line to work
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      return element;
    }
    
    document.body.appendChild(component())

    var request = new XMLHttpRequest()

    request.open('GET', 'https://ghibliapi.herokuapp.com/species', true)
    request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      var tableau_espece = []
      if (request.status >= 200 && request.status < 400) {
        data.forEach(espece => {
          tableau_espece.push(espece.name)
        })
        writedata(tableau_espece)
      } else {
        console.log('error')
      }
    }

    function writedata(liste) {
      const contenu = document.createElement('div')
      contenu.innerHTML += "<h3> Liste especes </h3>"
      contenu.innerHTML += "<ul>"
      for(var i=0; i < liste.length; i = i+1) {
        contenu.innerHTML += '<li><a href=\"#\">' + liste[i] + ' </a> </li>'
      }
      contenu.innerHTML += "</ul>"
      document.body.appendChild(contenu)
    }
    
    request.send()