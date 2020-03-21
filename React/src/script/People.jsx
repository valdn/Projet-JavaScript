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

  async componentDidMount(){
    let name = await Fetch.getName(this.props.link)
    if(name=="Niya")
      name = "Prince Lune"
    let data = await Fetch.getImg(name, this.props.films)
    this.setState({name: name, data: data})
  }

  render() {
      return (
        <div id="namesimg">
          <img src={this.state.data[0]} width="225"/>
          <p><a href={this.state.data[1]}>{this.state.name}</a></p>
        </div>
      );
    }
}

export default People