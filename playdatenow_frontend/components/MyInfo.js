import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class MyInfo extends Component {
    render () {
        return (
            <View style = {{
                flex: 1,
                backgroundColor: 'white',
                borderWidth: .5
            }}>
                    <Text> My Info </Text>         
            </View>
               
        )
    }
}