import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux'
import Home from './components/Home';
import TabBar from './components/TabBar';
import Playdates from './components/Playdates';
import Settings from './components/Settings'
import Login from './components/Login';
import NewPlaydateForm from './components/NewPlaydateForm';
import SearchResults from './components/SearchResults';
import EditPlaydateForm from './components/EditPlaydateForm';

export default class App extends Component {
  render() {
    return ( 
      <View style = {styles.container}>
        <Router hideNavBar='true'>
          <Scene key="root">
          < Scene key = "Login" component = {Login} title = "Login" />
          <Scene key="Home" component={Home} title="Welcome!" initial/>
          <Scene key = "Playdates" component = {Playdates} title = "Search" />
          <Scene key = "Settings" component = {Settings} title = "Settings" />
          <Scene key = "NewPlaydateForm" component={NewPlaydateForm} title= "Add a new playdate" />
          < Scene key = "SearchResults"component = {SearchResults}title = "Search Results" / >
          < Scene key = "EditPlaydateForm" component = {EditPlaydateForm} title = "Edit playdate" / >
                    
          </Scene>
        </Router>
        <TabBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
});
