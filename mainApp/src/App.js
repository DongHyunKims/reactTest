import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterComponent from './components/Register';
import DetailComponent from './components/Detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterComponent />
        <DetailComponent />
      </div>
    );
  }
}

export default App;
