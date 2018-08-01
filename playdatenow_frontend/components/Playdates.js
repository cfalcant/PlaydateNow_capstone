import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput, Picker } from 'react-native';
import { Actions } from '../node_modules/react-native-router-flux';

export default class Playdates extends Component {

state = {
    zipcode: ''
}
    
    render () {
        return (
            <View style = {styles.screenContainer}>

                <View style={styles.topContainer}>
                    <Text style={{fontSize: 25}}>
                        Search by zip code:
                    </Text>
                    



                    <View style={{backgroundColor: 'pink', padding: 10, borderRadius: 5}}>

                        <TextInput
                            style={{height: 80, fontSize: 25}}
                            placeholder='Enter your zip code here'
                            // placeholder = {this.state.zipcode}
                        />
                            
                        <TouchableHighlight 
                            style = {styles.btn}
                            onPress={()=>{Actions.SearchResults();}}
                            underlayColor='white'
                            // value={this.state.zipcode}    
                        >
                            <Text style={{fontSize: 25}}>
                                Search 
                            </Text> 
                        </TouchableHighlight>
                        
                    </View>
                    
                    



                </View>

                <View style={styles.bottomContainer}>
                    <Text style={{color: 'white', fontSize: 25}}>
                        Search by category:
                    </Text>  
                    <View style = {{
                        backgroundColor: 'green',
                        borderWidth: 1,

                    }}>
    
                    < Text >Comp2</Text>
                    <Picker
                        selectedValue = {this.state.language}
                        style = {{backgroundColor: 'pink'}}
                        onValueChange = {(itemValue, itemIndex) => this.setState({
                                language: itemValue
                        })}>
                        <Picker.Item
                            label = "Java"
                            value = "java" 
                        />
                        <Picker.Item
                            label = "JavaScript"
                            value = "js" 
                            />
                        </Picker>
                    </View>

                </View>




            </View>
        )
    }
}

styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    topContainer:{
            flex: 1,
            justifyContent: 'space-around',
            backgroundColor: 'white',
            padding: 10
    },
    bottomContainer: {
            flex: 1, 
            justifyContent: 'space-evenly',
            backgroundColor: 'blue',
            padding: 10
    },
    btn: {
        padding: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 5,
    }
})

