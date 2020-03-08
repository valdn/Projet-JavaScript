import React from "react";
import Select from 'react-select'
import Fetch  from "./Fetch.jsx"
import ListLink  from "./ListLink.jsx"

class Species extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      species: [],
      specie: "",
      options: [],
    };
  }

  async componentDidMount(){
    let species = await Fetch.getSpecies()
    this.setState({species: species})
    let options = []
    this.state.species.forEach(element => {
      options.push({ value: element, label: element })
    });
    this.setState({options: options})
  }

  handleOnChange(specie){
    this.setState({ specie: specie.value})
  }

  render() {
    if (this.state.species) {
      return (
        <div>
          <div id="data">
            <h3>Species List</h3>
            <Select options={this.state.options} onChange={this.handleOnChange.bind(this)}/>
          </div>
          <ListLink specie={this.state.specie}/>
        </div>
      );
    }
    else {
      return <div>Loading...</div>
    }
  }
}

export default Species