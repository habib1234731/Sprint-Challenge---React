import React, { Component } from 'react';
import Cards from './Components/Cards/Cards.js'
import {container, Row, Col} from 'reactstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <container>
          <Row>
            <Col sm={12}>
              <h1 className="Header">React Wars</h1>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col sm={6}>
            <Cards data = {this.state.starwarsChars} />
            </Col>
          </Row>
        </container>
      </div>
    );
  }
}

export default App;
