import _ from 'lodash';

    function component() {
      const element = document.createElement('div');
      
      // Lodash, currently included via a script, is required for this line to work
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      loadData();
      return element;
    }
    
    document.body.appendChild(component())

    

    function loadData(){
      const url = 'https://hubeau.eaufrance.fr/api/v0/etat_piscicole/poissons?nom_cours_eau=null&size=20'
      let oReq = new window.XMLHttpRequest()

      oReq.onload = function(event){
        var poissons = []
        let data = JSON.parse(this.responseText)
        data.data.forEach(element => {
            poissons.push(element.nom_poisson)

        });

        writedata(poissons)
      }

      oReq.onerror = function(event){
        console.log('Erreur survenue')
      }

      oReq.open('GET', url)
      oReq.send(null)
      
    }

    function writedata(liste) {
      const contenu = document.createElement('div');
      contenu.innerHTML += "<h3> Liste poissons </h3>"
      contenu.innerHTML += "<ul>"
      for(var i=0; i < liste.length; i = i+1) {
        contenu.innerHTML += '<li>' + liste[i] + '</li> </br>'
      }
      contenu.innerHTML += "</ul>"
      document.body.appendChild(contenu)
    }
