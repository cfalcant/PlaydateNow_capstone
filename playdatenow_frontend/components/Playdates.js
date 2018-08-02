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
                    

                <View style={{backgroundColor: '#e0e2e5', padding: 10, borderRadius: 5}}>

                        <TextInput
                            style={{height: 80, fontSize: 25}}
                            placeholder='Enter your zip code here'
                            placeholderTextColor='#7a7a76'
                            onChangeText = {()=>this.setState({
                                // zipcode
                            })}
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

                    <View style={{flex: 3,position: 'relative', bottom: 0, right: 0, left: 0, top: 10}}>
                        <Picker
                            
                            selectedValue = {this.state.language}
                            // itemStyle={{borderWidth: 1}}
                            style = {{
                                borderRadius: 5,
                                backgroundColor: '#e0e2e5'}}
                            onValueChange = {(itemValue, itemIndex) => this.setState({
                                language: itemValue
                            })}>
                                <Picker.Item
                                    label = "Newborn"
                                    value = "newborn" 
                                />
                                <Picker.Item
                                    label = "Infant"
                                    value = "infant" 
                                />
                                <Picker.Item
                                    label = "Toddler"
                                    value = "toddler" 
                                />
                                <Picker.Item
                                    label = "Prechooler"
                                    value = "preschooler" 
                                />
                        </Picker>
                    </View>

                    <View style={{flex: .9}}>
                        <TouchableHighlight
                            style = {styles.btn}
                            onPress = {() => {Actions.SearchResults();}}
                            underlayColor = 'white'
                            // value={this.state.zipcode}    
                        >
                            <Text style = {{fontSize: 25}}>
                                Search 
                            </Text>  
                        </TouchableHighlight>
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
            backgroundColor: '#c997fc',
            padding: 10
    },
    bottomContainer: {
            flex: 1, 
            justifyContent: 'space-around',
            backgroundColor: '#7b51a5',
            padding: 10
    },
    btn: {
        padding: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 5,
    }
})

