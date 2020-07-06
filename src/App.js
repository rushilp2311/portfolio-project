import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Rushil Patel",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Services", path: "/services" },
      ],
      home: {
        title: "We Are ShareSoftech",
        subTitle: "Welcome to Our Digital Home",
        text: "Checkout out our work below",
      },
      about: {
        title: "About Us",
      },
      contact: {
        title: "Let's Talk",
      },
      services: {
        title: "Services",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>ShareSoftech</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
                <Link className='nav-link' to='/services'>
                  Services
                </Link>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path='/'
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path='/about'
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path='/services'
            render={() => <ServicesPage title={this.state.services.title} />}
          />
          <Route
            path='/contact'
            render={() => <ContactPage title={this.state.contact.title} />}
          />
        </Container>
      </Router>
    );
  }
}

export default App;
