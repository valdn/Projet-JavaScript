import React from "react";
import Fetch  from "./Fetch.jsx"
import People  from "./People.jsx"

class ListLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      names: [], //Récupères toutes les caractéristiques des personnages
      val: 0, //Pur fluidifier l'affichage
    };
  }

  async componentDidUpdate(prevprops){ //On vérifie à chaque update si la valeur de l'espèce a changé
      if (this.props.specie) {
        if (prevprops.specie!==this.props.specie){
          let links = await Fetch.getLinks(this.props.specie) //On récupère les liens de ch que personnage
          let names = []
          this.setState({names: []})
          let compt = 0
          for (let element of links){
            await sleep(120)
            names.push(<People key={compt} link={element} films={this.props.films}/>) //On récupère tous les élèments de chaque lien correspondant à un personnage (Lien Image, Lien Personnage, Nom Personnage)
            compt++
          }
          this.setState({val: names.length})
          this.setState({names: names})
        }
    } else {
      if (this.state.names.length != 0) {
        this.setState({names: []})
      }
    }
  }

  render() { //Affichage de tous les personnages
      return (
        <div>
          {this.state.names.length > 0 && 
          <h3 id="lpers">Names List</h3>
          }
          <div id="shownames">          
            {this.state.names.length==this.state.val &&
            this.state.names}
          </div>
        </div>
      );
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default ListLink