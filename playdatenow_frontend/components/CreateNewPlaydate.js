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
                <View>
                < Text style = {{fontSize: 25, paddingTop: 10}}>
                    Create a new playdate!
                </Text>
                </View>

                <View style={{padding: 10}}>
                    
                </View>


                <View>    
                <TouchableHighlight 
                    style={styles.button} 
                    // onPress={this.onPress}
                    onPress = {() => {Actions.NewPlaydateForm();}}
                    underlayColor='pink'
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
        // backgroundColor: '#DF89FB',
        flexDirection: 'column',
        backgroundColor: 'purple',
        justifyContent: 'space-evenly'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        borderWidth: 1
    }
})