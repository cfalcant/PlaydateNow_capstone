import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput, Picker } from 'react-native';
import { Actions } from '../node_modules/react-native-router-flux';

export default class Playdates extends Component {

state = {
    zipcode: ''
}


render () {
    return (
        < View style = {{
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'stretch',
                // padding: 10
            }}>
            < View style = {{
                    // flex: 1,
                    justifyContent: 'space-around',
                    backgroundColor: '#c997fc',
                    padding: 10
                }} >
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

            
            < View style = {{
                    // flex: 5,
                    justifyContent: 'space-around',
                    backgroundColor: '#7b51a5',
                    padding: 10
                }}>
                <Text style={{color: 'white', fontSize: 25}}>
                    Search by category:
                </Text>  

                    <View style={{
                        // flex: 3,
                        flex: 2,
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        left: 0,
                        top: 50}}>
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
                                    value = "Newborn" 
                                />
                                <Picker.Item
                                    label = "Infant"
                                    value = "Infant" 
                                />
                                <Picker.Item
                                    label = "Toddler"
                                    value = "Toddler" 
                                />
                                <Picker.Item
                                    label = "Prechooler"
                                    value = "Preschooler" 
                                />
                                <Picker.Item
                                label = "All"
                                value = "All" 
                                />
                        </Picker>
                    </View>

                    <View style={{flex: .9, paddingTop: 20}}>
                        <TouchableHighlight
                            style = {{
                                    padding: 10,
                                    paddingTop: 10,
                                    backgroundColor: '#898988',
                                    // backgroundColor: 'red',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    position: 'relative',
                                    height: 50
                            }}
                            // style = {{backgroundColor: 'red'}}
                            onPress = {() => {Actions.SearchResults();}}
                            underlayColor = 'white'
                            // value={this.state.zipcode}    
                        >
                            <Text style = {{fontSize: 25, color: 'black'}}>
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
    // screenContainer: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'stretch',
    //     padding: 10
    // },
    // topContainer:{
    //         flex: 1,
    //         justifyContent: 'space-around',
    //         backgroundColor: '#c997fc',
    //         padding: 10
    // },
    // bottomContainer: {
    //         flex: 1, 
    //         justifyContent: 'space-around',
    //         backgroundColor: '#7b51a5',
    //         padding: 10
    // },
    btn: {
        padding: 10,
        // backgroundColor: '#898988',
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 5,
    }
})

