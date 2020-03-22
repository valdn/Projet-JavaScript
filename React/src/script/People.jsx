import React from "react";
import Fetch  from "./Fetch.jsx"

class People extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      data: [],
    };
  }

  async componentDidMount(){ //Quand le tableau de lien change on effectue des nouvelle requète pour les noms et images des personnages
    let name = await Fetch.getName(this.props.link) //Fonctions pour récupèrer les noms
    if(name=="Niya") //Correction pour l'API
      name = "Prince Lune"
    let data = await Fetch.getImg(name, this.props.films) //Fonction pour récupèrer l'image et le lien du personnages
    this.setState({name: name, data: data})
  }

  render() { //Affichage d'un personnage
      return (
        <div id="namesimg">
          <img src={this.state.data[0]} width="225"/>
          <p><a href={this.state.data[1]}>{this.state.name}</a></p>
        </div>
      );
    }
}

export default People