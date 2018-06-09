import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, my name is {props.name}</h1>;
}
function Helper(props) {
  return <p>I am the {props.type} that will be helping you today.</p>;
}
function Language(props) {
  return <p>Congrats, you are now learning {props.language}!</p>; 
}

class App extends Component {
  render() {
    return (
      <div>
        <Welcome name="Alexa" />
        <Helper type="bot" />
        <Language language="React" />
      </div>
    );  
  }
}

export default App;
