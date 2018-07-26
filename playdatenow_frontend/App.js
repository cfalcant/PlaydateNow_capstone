import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from './components/Home';
import TabBar from './components/TabBar';
import Playdates from './components/Playdates';
import Settings from './components/Settings'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Home></Home>
          {/* <Settings></Settings> */}
          {/* <Playdates></Playdates> */}
          {/* <TabBar></TabBar> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
