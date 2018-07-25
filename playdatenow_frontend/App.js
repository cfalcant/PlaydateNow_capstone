import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Home></Home>
        </View>
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
