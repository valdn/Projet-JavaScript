import "regenerator-runtime/runtime"
import yuki from '../images/yuki.jpg'
import hii from '../images/hii-sama.jpg'
import chibitotoro from '../images/chibitotoro.png'
import chutotoro from '../images/chutotoro.png'

class Fetch  {

  static async getSpecies(){ //Récupère les espèces
    let tab_species = []
    let link = 'https://ghibliapi.herokuapp.com/species'
    let res = await this.getData(link)
    res.forEach(element => {
      tab_species.push(element.name)
    });
    return tab_species
  }

  static async getLinks(specie){ //Récupère les liens en fonction des espèces choisies
    let tab_links = []
    let compt = 0
    let values = ""
    
    specie.forEach(element => {
      if (compt==0){
        values += 'name=' + element.value
      } else {
        values += '&name=' + element.value
      }
    compt++;
    })
    let link = 'https://ghibliapi.herokuapp.com/species?' + values 
    let res = await this.getData(link)
    res.forEach(people => {
      people.people.forEach(lk =>{
        if (tab_links.indexOf(lk) == -1){
          tab_links.push(lk)
        }
        
      })
    })
    return tab_links
  }

  static async getName(rlink){ //Récupère les noms des personnages des espèces choisies avec leur lien
    let link = rlink
    let res = await this.getData(link)
    return res.name
  }

  static async getImg(name, films){ //Récupère les images des personnages et, si il en a un, le lien de redirection vers la page du personnage
    let data = []
    if (name == 'Yuki' || name == 'Hii-sama' || name == 'Chu Totoro' || name =='Chibi Totoro'){
      switch(name){
        case 'Yuki':
          data.push(yuki)
          break;
        case 'Hii-sama':
          data.push(hii)
          break;
        case 'Chibi Totoro':
          data.push(chibitotoro)
          break;
        case 'Chu Totoro':
          data.push(chutotoro)
          break;
        default:
          break
      }
    }
    else{
      /* Pour les personnages qui n'ont pas le bon nom dans l'API Jikan*/
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
      let link = "https://api.jikan.moe/v3/search/character?q=" + name
      let res = await this.getData(link)
      let lock = false
      res.results.forEach(char =>{
        if (typeof char.anime[0] !== 'undefined'){
          if (films.indexOf(char.anime[0].mal_id)!= -1){
            if (!lock){
              data.push(char.image_url)
              data.push(char.url)
              lock = true
            }
          }
        }
      })
    }
    return data
  }

  static async getFilms(){ //Récupère les films de Studio Ghibli
    let link = "https://api.jikan.moe/v3/search/anime?producer=21"
    let res = await this.getData(link)
    let tab_id = []
    res.results.forEach(id => {
      tab_id.push(id.mal_id)
    })
    return tab_id
  }

  static async getData(link) { //Permet d'effectuer la requète vers les API
    let response = await fetch(link);
    let data = await response.json();
    return data;
  }
}

export default Fetch