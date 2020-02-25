import "regenerator-runtime/runtime"
import "core-js/stable"
import { getImg } from "./getImg.js"

    export async function writenames(liste) {
      let row
      let c = 0;
      document.getElementById('div_names').hidden=false;
      let contenu = document.getElementById('tabn')
      contenu.innerHTML="" // On efface le tableau
      for(let i=0; i < liste.length; i = i+1) { // ajout des personnages dans le tableau
        if (i%3==0){ // 3 personnages maximum par ligne
          row = contenu.insertRow(c)
          c++
        }
        let cell = row.insertCell(i%3)
        try{
          await getImg(liste[i], cell) // Await permet d'attendre un resolve/reject venant de "promise", cela permet d'éviter l'execution des requetes trop rapidement ce qui entrainerai un blocage venant de l'API
        } catch(error) {
          console.log("Error" , error)
        }
      }
    }
