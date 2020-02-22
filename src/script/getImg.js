import _ from 'lodash';
import "regenerator-runtime/runtime"
import "core-js/stable"
import { tab_filmid } from "./start.js"

    export function getImg(name, cell){
      if (name == 'Yuki' || name == 'Hii-sama' || name == 'Chu Totoro' || name =='Chibi Totoro'){
        let img
        switch(name){
          case 'Yuki':
            img="https://cdn.myanimelist.net/images/characters/7/7101.jpg"
            break;
          case 'Hii-sama':
            img="https://vignette.wikia.nocookie.net/studio-ghibli/images/8/83/Hii-sama.jpg/revision/latest?cb=20181011141901"
            break;
          case 'Chibi Totoro':
            img="https://cdn.shopify.com/s/files/1/0185/4636/products/Chibi_Totoro_d4dc07f4-712d-4230-a398-2a8951ad2823_600x.png?v=1571607628"
            break;
          case 'Chu Totoro':
            img="https://s2.qwant.com/thumbr/0x0/4/b/dba698b3ad12ad4d43bc0c01b3e6c7011cb5889fe1f13c1a19087e5f812315/chu_totoro_main_ref.jpg?u=http%3A%2F%2Fconfused-kitty.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fchu_totoro_main_ref.jpg&q=0&b=1&p=0&a=1"
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
          var request4 = new XMLHttpRequest()
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