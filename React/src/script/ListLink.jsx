import React from "react";
import Fetch  from "./Fetch.jsx"
import People  from "./People.jsx"

class ListLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      names: [],
    };
  }

  async componentDidUpdate(prevprops){
      if (prevprops.specie!==this.props.specie){
        let links = await Fetch.getLinks(this.props.specie)
        let names = []
        this.setState({names: []})
        let compt = 0
        for (let element of links){
          await sleep(100)
          names.push(<td key={compt}><People link={element} films={this.props.films}/></td>)
          compt++
        }
        this.setState({names: names})
      }
  }

  render() {
      return (
        <div>
          {this.state.names.length > 0 && 
          <h3 id="lpers">Names List</h3>
          }
          <div id="shownames">          
            {this.state.names}
          </div>
        </div>
      );
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default ListLink