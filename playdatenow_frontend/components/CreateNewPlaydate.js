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
        <Container style={styles.container}>
            <Content padder>
                <Text>
                    Create New Playdate component
                </Text>
                <View style={{backgroundColor: 'pink'}}>
                    <Text style={{fontSize: 25}}>Ready to create a playdate! Click below to get started!</Text>
                <TouchableHighlight 
                    style={styles.button} 
                    // onPress={this.onPress}
                    onPress = {() => {Actions.NewPlaydateForm();}}
                    underlayColor='blue'
                >
                    <Text>Click here</Text>   
                </TouchableHighlight>
                    
                    
                    
                    </View>
                </Content>
            </Container>
        )
    }
}

styles = StyleSheet.create({
    container: {
        // backgroundColor: '#DF89FB'
        backgroundColor: 'orange'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10
    }
})