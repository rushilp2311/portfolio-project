import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import ios from "../../assets/images/apple.svg";
import swift from "../../assets/images/swift.svg";
import xcode from "../../assets/images/xcode.svg";

export default class Ios extends Component {
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
          <img style={this.props.styles.image} src={ios} alt="ios"/>

          <h1>IOS Development</h1>
          <h6>More Info</h6>
        </div>

        <div style={this.props.styles.card} onClick={this.handleClick}>
          <p>
            IOS is another popluar platform for mobile. To grow your business
            quickly you have to reach out to vast majority of customers. And we
            help you with that. Our team help you build user-friendly and great
            apps for the platform which increases user-interaction.
            Here are the technologies we use :
          </p>
          <img style={this.props.styles.image} src={swift} alt="swift"/>
          <img style={this.props.styles.image} src={xcode} alt="xcode"/>
        </div>
      </ReactCardFlip>
    );
  }
}
