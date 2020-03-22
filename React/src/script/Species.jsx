import React from "react";
import Select from 'react-select'
import Fetch  from "./Fetch.jsx"
import ListLink  from "./ListLink.jsx"

class Species extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      species: [], //Toutes les espèces de l'API
      specie: [], //les especes sélectionnées dans le select
      options: [], //les options du select
      films: [], //va récupérer tous les films faits par Studio Ghibli
    };
  }

  async componentDidMount(){ //Quand la classe est mount on effectue cela
    let species = await Fetch.getSpecies() //Appelle de la fonction pour récupérer les espèces
    let films = await Fetch.getFilms() // Appelle de la fonction pour récupérer les films
    this.setState({species: species})
    let options = [] //Option du select
    this.state.species.forEach(element => {
      options.push({ value: element, label: element })
    });
    this.setState({options: options, films: films})
  }

  handleOnChange(specie){ //Pour récupérer l'espèce choisie
    this.setState({specie: specie})
  }

  render() { //On affiche le Select avec toutes les espèces
    if (this.state.species) { //Vérification des espèces
      return (
        <div>
          <div id="data">
            <h3>Species List</h3>
            <div id="selector">
              <Select defaultValue={[]} isMulti options={this.state.options} onChange={this.handleOnChange.bind(this)}/>
            </div>
          </div>
          <ListLink specie={this.state.specie} films={this.state.films}/>
        </div>
      );
    }
    else {
      return <div>Loading...</div>
    }
  }
}

export default Species