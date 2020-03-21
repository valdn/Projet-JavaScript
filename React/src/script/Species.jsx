import React from "react";
import Select from 'react-select'
import Fetch  from "./Fetch.jsx"
import ListLink  from "./ListLink.jsx"

class Species extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      species: [],
      specie: [],
      options: [],
      films: [],
    };
  }

  async componentDidMount(){
    let species = await Fetch.getSpecies()
    let films = await Fetch.getFilms()
    this.setState({species: species})
    let options = []
    this.state.species.forEach(element => {
      options.push({ value: element, label: element })
    });
    this.setState({options: options, films: films})
  }

  handleOnChange(specie){
    console.log(specie)
    this.setState({specie: specie})
    
  }

  render() {
    if (this.state.species) {
      return (
        <div>
          <div id="data">
            <h3>Species List</h3>
            <div id="select">
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