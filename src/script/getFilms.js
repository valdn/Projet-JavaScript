    export function getFilms(callback){
      let request5 = new XMLHttpRequest()
        request5.open('GET', "https://api.jikan.moe/v3/search/anime?producer=21", true)
        request5.onload = function() {
        // Begin accessing JSON data here
        let data = JSON.parse(this.response)
        let tab_id = new Array(data.results.length)
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