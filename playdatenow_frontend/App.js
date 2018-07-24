import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home></Home>
        <Text>Open up App.js to start working on your app!!</Text>
        <Text>Changes you make will automatically reload.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
