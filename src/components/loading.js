import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { StyledLoading } from './loading.styled';
import { StyledNotLoading } from './loading.styled';
import ReactLoading from "react-loading";

import "./loading.css";


export default class Loading extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        render: false //Set render state to false
    }
  }

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({render: true}) //After X milliseconds, set render to true
    }.bind(this), 50)
  }

  render() {
    let renderContainer = false; //Que es lo que va a cargar en el loding
    if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
        renderContainer = <div className="loading-works">{this.props.children}</div> //Add dom elements
    }
    return (
      renderContainer //Render the dom elements, or, when this.state == false, nothing.
    )
  }

}
