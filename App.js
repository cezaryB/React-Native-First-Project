//STEPS:

// Import a library to help create a component

import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component

export default class App extends Component {
  render() {
    return (
      <View>
        <Header title='Albums!' />
        <AlbumList />
      </View>
    );
  }
}
