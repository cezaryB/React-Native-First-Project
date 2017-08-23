//STEPS:

// Import a library to help create a component

import React, { Component } from 'react';
import Header from './src/components/header';

// Create a component

export default class App extends Component {
  render() {
    return (
      <Header title='Albums!' />
    );
  }
}
