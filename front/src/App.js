import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      items: []
    }
  }
  

  componentDidMount() {
    axios.get('/bo/api').then((res) => this.setState({ items: res.data}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
            {this.state.items.map((elt) => <li>{elt}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
