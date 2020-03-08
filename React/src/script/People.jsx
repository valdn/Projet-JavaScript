import React from "react";
import Fetch  from "./Fetch.jsx"

class People extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      img: "",
    };
  }

  async componentDidMount(){
    let name = await Fetch.getName(this.props.link)
    let img = await Fetch.getImg(name)
    this.setState({name: name, img: img})
  }

  render() {
      return (
        <div id="namesimg">
          <img src={this.state.img} width="225"/>
          <p>{this.state.name}</p>
        </div>
      );
    }
}

export default People