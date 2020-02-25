import "regenerator-runtime/runtime"
import "core-js/stable"
import { getImg } from "./getImg.js"

    export async function writenames(liste) {
      let row
      let c = 0;
      document.getElementById('div_names').hidden=false;
      let contenu = document.getElementById('tabn')
      contenu.innerHTML=""
      for(let i=0; i < liste.length; i = i+1) {
        if (i%3==0){
          row = contenu.insertRow(c)
          c++
        }
        let cell = row.insertCell(i%3)
        try{
          await getImg(liste[i], cell)
        } catch(error) {
          console.log("Error" , error)
        }
      }
    }
