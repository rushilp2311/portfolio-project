import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import graphic from "../../assets/images/graphic-design.svg";
import ai from "../../assets/images/ai.svg";
import ps from "../../assets/images/ps.svg";
import lr from "../../assets/images/lr.svg";


export default class Graphic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipSpeedBackToFront={0.1}
        flipSpeedFrontToBack={0.1}
        flipDirection='vertical'>
        <div style={this.props.styles.card} onClick={this.handleClick}>
          <img style={this.props.styles.image} src={graphic} alt="graphics"/>

          <h1>Graphic and Logo Design</h1>
          <h6>More Info</h6>
        </div>

        <div style={this.props.styles.card} onClick={this.handleClick}>
          <p>
            Every great business has a great a logo.If you want your business to
            be remembered by all customers you need a catchy logo. Our team will
            help you design a great logo that suits your business idea.
            Here are the tools we use :
          </p>
          <img style={this.props.styles.image} src={ai} alt="ai"/>
          <img style={this.props.styles.image} src={ps} alt="ps"/>
          <img style={this.props.styles.image} src={lr} alt="lr"/>
        </div>
      </ReactCardFlip>
    );
  }
}
