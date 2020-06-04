import React, { Component } from 'react';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Main />
        <Footer />
      </div>
      );
  }
}