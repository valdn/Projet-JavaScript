import { tab_filmid } from "./start.js"
import yuki from '../images/yuki.jpg'
import hii from '../images/hii-sama.jpg'
import chibitotoro from '../images/chibitotoro.png'
import chutotoro from '../images/chutotoro.png'

    export function getImg(name, cell){
      if (name == 'Yuki' || name == 'Hii-sama' || name == 'Chu Totoro' || name =='Chibi Totoro'){
        let img
        switch(name){
          case 'Yuki':
            img = yuki
            break;
          case 'Hii-sama':
            img = hii
            break;
          case 'Chibi Totoro':
            img = chibitotoro
            break;
          case 'Chu Totoro':
            img = chutotoro
            break;
          default:
            break
        }
        cell.innerHTML = '<img src=' + img + ' width="225">'
        cell.innerHTML += '<p>' + name + '</p>'
      }
      else{
        if (name == 'Catbus'){
          name = 'Nekobasu'
        }
        if (name == 'Renaldo Moon aka Moon aka Muta'){
          name = 'Renaldo Moon'
        }
        if (name == 'Haru'){
          name = 'Haru Yoshioka'
        }
        if (name == 'Granny'){
          name = "Kanta's Grandmother"
        }
        if (name == 'Niya'){
          name = 'Prince Lune'
        }
        return new Promise(function (resolve, reject) {
          let request4 = new XMLHttpRequest()
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
              resolve(request4.response)
            } else {
              console.log('error')
              reject(request4.status)
            }
          cell.innerHTML = '<img src=' + img + '>'
          cell.innerHTML += '<p>' + name + '</p>'
        }
        request4.send()
      });
      }
    }