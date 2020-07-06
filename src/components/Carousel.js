import React from "react";

import Card from "../components/Card";

import protfolio1 from "../assets/images/restaurant2.png";
import protfolio2 from "../assets/images/restaurant3.png";
import protfolio3 from "../assets/images/restaurant4.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "ThaiLime",
          imgSrc: protfolio1,
        
          selected: false,
        },
        {
          id: 1,
          title: "ThaiLime",
          
          imgSrc: protfolio2,
          
          selected: false,
        },
        {
          id: 2,
          title: "ThaiLime",
          
          imgSrc: protfolio3,
         
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
