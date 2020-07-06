import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import WebDevelopment from "../components/services/WebDevelopment";
import Android from "../components/services/Android";
import Game from "../components/services/Game";
import Ios from "../components/services/Ios";
import Digital from "../components/services/Digital";
import Graphic from "../components/services/Graphic";

class ServicesPage extends React.Component {
  render() {
    const styles = {
      card: {
        border: "2px solid #eeeeee",
        borderRadius: "3px",
        padding: "15px",
        width: "400px",
        height: "300px",
      },
      image: {
        height: "50px",
        width: "50px",
      }
    };
    return (
      <div>
        <Hero title={this.props.title} />

      
        <Content>
          <ul className='servicelist'>
            <li>
              <WebDevelopment styles={styles} />
            </li>
            <li>
              <Android styles={styles} />
            </li>
            <li>
              <Game styles={styles} />
            </li>
            <li>
              <Ios styles={styles} />
            </li>
            <li>
              <Digital styles={styles} />
            </li>
            <li>
              <Graphic styles={styles} />
            </li>
          </ul>
        </Content>
      </div>
    );
  }
}

export default ServicesPage;
