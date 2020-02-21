import _ from 'lodash';
import "regenerator-runtime/runtime"
import "core-js/stable"

    var request = new XMLHttpRequest()
    var request2 = new XMLHttpRequest()
    var request4 = new XMLHttpRequest()
    var tab_filmid = []
    getFilms(mycallback)
    var x;
    var urlo;

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

    function mycallback(data){
      tab_filmid=data
    }

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

    function getName(links){
      var tab_name = []
      links.forEach(link => {
        var request3 = new XMLHttpRequest()
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

    async function writenames(liste) {
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
        try{
        await getImg(liste[i], cell)
        } catch(error) {
          console.log("Error" , error)
        }
      }
    }

    function sleep(ms){
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    function getImg(name, cell){
        return new Promise(function (resolve, reject) {
        request4.open('GET', "https://api.jikan.moe/v3/search/character?q=" + name, true)
        request4.onload = function() {
        let img
        let lock = false
        let data = JSON.parse(this.response)
        if (request4.status >= 200 && request4.status < 400) {
          data.results.forEach(char =>{
            if (typeof char.anime[0] !== 'undefined')
              if (tab_filmid.indexOf(char.anime[0].mal_id)!= -1){
                if (!lock){
                  img = char.image_url
                  lock=true
                }
              }
          })
          cell.innerHTML = '<img src=' + img + '>'
          resolve(request4.response)
        } else {
          console.log('error')
          reject(request4.status)
        }
        cell.innerHTML += '<p>' + name + '</p>'
      }
      request4.send()
      });
    }

    function getFilms(callback){
      
      var request5 = new XMLHttpRequest()
        request5.open('GET', "https://api.jikan.moe/v3/search/anime?producer=21", true)
        request5.onload = function() {
        // Begin accessing JSON data here
        let data = JSON.parse(this.response)
        var tab_id = new Array(data.results.length)
        if (request5.status >= 200 && request5.status < 400) {
          let i = 0;
          data.results.forEach(id => {
            tab_id[i]=id.mal_id
            i++
          })
        } else {
          console.log('error')
        }
        callback(tab_id)
      }
      request5.send()
    }