import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


export default class AboutPopUp extends Component {
    render () {
        return (
            <View style = {styles.container}>
                <Text>
                    This will serve as an informational "pop-up" window that can be closed. There will 
                    be an "x" on the upper right corner that will collapse this window when pressed. 
                    If possible, place a link at the bottom directing the user to an "About" section or whatever.
                </Text>  
                < Button
                    title = "More Info"
                    color = 'red' >
                </Button>
            </View>
               
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        borderWidth: .5,
        borderRadius: 5,
        paddingTop: 25,
        paddingLeft: 5

    }
})