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


// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={{flex:11}}>
//           {/* <Login></Login> */}
//           <Home></Home>
//         </View>
//         <View  style={{flex: 1}}>  
//           {/* <Settings></Settings> */}
//           {/* <Playdates></Playdates> */}
//           <TabBar></TabBar>
//         </View>
//       </View>
//     );
//   }
// }

export default class App extends Component {
  render() {
    return ( 
      <View style = {styles.container}>
        <Router hideNavBar='true'>
          <Scene key="root">
          <Scene key="Home" component={Home} title="Welcome!" initial/>
          <Scene key = "Playdates" component = {Playdates} title = "Search"/>
          <Scene key = "Settings" component = {Settings} title = "Settings" />
          <Scene key = "NewPlaydateForm" component={NewPlaydateForm} title= "Add a new playdate"/>
          
          
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
    justifyContent: 'center',
    // backgroundColor: '#DF89FB'
  },
});
