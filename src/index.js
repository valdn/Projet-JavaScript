import _ from 'lodash';

    var request = new XMLHttpRequest()
    var request2 = new XMLHttpRequest()
    var x; 

    request.open('GET', 'https://ghibliapi.herokuapp.com/species', true)
    request.onload = function() {
      // Begin accessing JSON data here
      let data = JSON.parse(this.response)
      var tableau_espece = []
      if (request.status >= 200 && request.status < 400) {
        data.forEach(espece => {
          tableau_espece.push(espece.name)
        })
        writespecies(tableau_espece)
      } else {
        console.log('error')
      }
    }
    request.send()


    function writespecies(liste) {
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
      for(var i=0; i < liste.length; i = i+1) {
        let opt = document.createElement('option')
        opt.text = liste[i]
        opt.value = liste[i]
        document.getElementById('select_espece').options.add(opt)
      }
      let names = document.createElement('div')
      names.id='div_names'
      names.innerHTML += "<h3> Liste noms </h3>"
      let tabn = document.createElement('table')
      tabn.id = 'tabn'
      names.appendChild(tabn)
      names.hidden=true;
      document.body.appendChild(names)
    }

    function updated(){
      x = document.getElementById('select_espece').value
      request2.open('GET', 'https://ghibliapi.herokuapp.com/species?name=' + x, true)
      request2.onload = function() {
        // Begin accessing JSON data here
        let data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
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

    function getName(links){
      var tab_name = []
      links.forEach(link => {
        var request3 = new XMLHttpRequest()
        request3.open('GET', link, true)
        request3.onload = function() {
        // Begin accessing JSON data here
        let data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
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

    function writenames(liste) {
      let c = 0;
      document.getElementById('div_names').hidden=false;
      let contenu = document.getElementById('tabn')
      contenu.innerHTML=""
      for(var i=0; i < liste.length; i = i+1) {
        if (i%3==0){
          var row = contenu.insertRow(c)
          c++
        }
        var cell = row.insertCell(i%3)
        cell.innerHTML = '<p>' + liste[i] + '</p>'
      }
      
    }