import React, { Component } from 'react';
import { View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { Container, Content, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class CreateNewPlaydate extends Component {

onPress = () => {
    alert('Create new playdate button pressed')
}    

render () {
    return (
        < Container style = {
            {
                backgroundColor: '#7b51a5'
            }
        } >
            <Content padder>
                <View>
                < Text style = {{fontSize: 25, paddingTop: 10, color: 'white'}}>
                    Create a new playdate!
                </Text>
                </View>

                <View style={{padding: 10}}>
                    
                </View>


                <View>    
                <TouchableHighlight 
                    style={{alignItems: 'center',
                            borderWidth: 1,
                            padding: 15,
                            borderRadius: 5,
                            backgroundColor: '#e0e2e5'

                    }} 
                    // onPress={this.onPress}
                    onPress = {() => {Actions.NewPlaydateForm();}}
                    underlayColor = 'pink'
                >
                    <Text style={{fontSize: 25}}>Click here</Text>   
                </TouchableHighlight>
                                        
                </View>
            </Content>
        </Container>
    )
}
}

styles = StyleSheet.create({

})