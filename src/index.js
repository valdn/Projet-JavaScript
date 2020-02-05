import _ from 'lodash';

    function component() {
      const element = document.createElement('div');
    
      // Lodash, currently included via a script, is required for this line to work
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      loadData()
      return element;
    }
    
    document.body.appendChild(component())

    function loadData(){
      const url = 'https://hubeau.eaufrance.fr/api/v0/etat_piscicole/poissons?nom_cours_eau=null&size=20'
      let oReq = new window.XMLHttpRequest()

      oReq.onload = function(event){
        let data = JSON.parse(this.responseText)
        data.data.forEach(element => {
          console.log(element.nom_poisson);
        });
      }

      oReq.onerror = function(event){
        console.log('Erreur survenue')
      }

      oReq.open('GET', url)
      oReq.send(null)
    }
