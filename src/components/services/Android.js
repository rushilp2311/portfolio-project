import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import android from "../../assets/images/android.svg";
import java from "../../assets/images/java.svg";
import kotlin from "../../assets/images/kotlin.svg";
import flutter from "../../assets/images/flutter.png";



export default class Android extends Component {
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
          <img style={this.props.styles.image} src={android} alt="android"/>

          <h1>Android Development</h1>
          <h6>More Info</h6>
        </div>

        <div style={this.props.styles.card} onClick={this.handleClick}>
          <p>
            Android is one of the most widely use platform on mobile phones. We
            help you build apps for the platform to improve and grow your
            business. We provide innovative build solutions with the best
            user-friendly interface with minimal complexity.Our team will
            convert ideas into great apps that your users can use.
          </p>
          <img style={this.props.styles.image} src={java} alt="java"/>
          <img style={this.props.styles.image} src={kotlin} alt="kotlin"/>
          <img style={this.props.styles.image} src={flutter} alt="flutter"/>
          
        </div>
      </ReactCardFlip>
    );
  }
}
